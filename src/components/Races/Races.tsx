// Libraries
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Api
import {getRaces} from '@src/actions';

// Utils
import {useInterval} from '@src/hooks';
import {
  selectLoading,
  selectRaceNext,
  selectRaceSummaries,
} from '@src/selectors/racesSelector';

// Components
import Race from '@src/components/Race/Race';
import Filter from '@src/components/Filter/Filter';

// Constants
import {
  LIMIT_RACES_DISPLAY_INDEX,
  POLL_INTERVAL,
  UI_REFRESH_INTERVAL,
  FILTER_OPTIONS,
  IS_IOS,
} from '@src/constants';

// Styles
import {styles} from './styles';

/**
 * Component to display list of races.
 * Sort and limit the number of items to display, it also filter if user has selected a category
 * Races should disappear after 1 minute of the start time
 */
const Races = () => {
  // Hooks
  const dispatch = useDispatch();

  // Selectors
  const nextRacesIds = useSelector(selectRaceNext);
  const raceSummaries = useSelector(selectRaceSummaries);
  const isLoading = useSelector(selectLoading);

  // Local State
  const [filteredRaces, setFilteredRaces] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [now, setNow] = useState(Date.now() / 1000);

  // Variables
  const hasRaces = nextRacesIds && nextRacesIds.length > 0;
  const isRacesLoading = isLoading && !hasRaces;

  /**
   * Fetch races on first load
   */
  useEffect(() => {
    dispatch(getRaces());
  }, [dispatch]);

  /**
   * Hook function to pull new data within an interval
   */
  useInterval(() => {
    dispatch(getRaces());
  }, POLL_INTERVAL);

  /**
   * In case the next races ids or the filter change trigger races filter
   */
  useEffect(() => {
    const nextFilteredRaces = nextRacesIds
      .filter((raceId: string) => {
        const raceSummary = raceSummaries[raceId];
        const {category_id, advertised_start} = raceSummary;
        const {seconds} = advertised_start;
        // Filter races that are over 1 minute
        if (seconds <= now - 60) {
          return false;
        }
        // Filter races if selected filter
        if (selectedFilter !== '') {
          return selectedFilter === category_id;
        }
        return true;
      })
      .slice(0, LIMIT_RACES_DISPLAY_INDEX);
    setFilteredRaces(nextFilteredRaces);
  }, [nextRacesIds, selectedFilter, raceSummaries, now]);

  /**
   * Hook function to increase the current time every second
   */
  useInterval(() => {
    setNow(now + 1);
  }, UI_REFRESH_INTERVAL);

  /**
   * Handle filter change event
   */
  const handleFilterChange = (newFilter: string) => {
    setSelectedFilter(newFilter);
  };

  /**
   * Helper function to return the key id to be use onf the Flatlist component
   * @param raceSummary
   * @returns key string
   */
  const keyExtractor = (raceId: string): string => raceId;

  /**
   * Render each Race component
   * @param raceSummary
   * @returns ReactElement or null
   */
  const renderRaces = ({
    item: raceId,
  }: {
    item: string;
  }): React.ReactElement | null => {
    const raceSummary = raceSummaries[raceId];
    if (raceSummary) {
      const {meeting_name, race_number, advertised_start, race_id} =
        raceSummary;
      const {seconds: raceTime} = advertised_start;
      const countdown = Math.ceil(raceTime - now);
      const countdownLabel =
        countdown > 60
          ? `${Math.ceil(countdown / 60)} min`
          : `${countdown} secs`;
      return (
        <Race
          key={race_id}
          name={meeting_name}
          number={race_number}
          countDown={countdownLabel}
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {IS_IOS && <View style={styles.statsBar} />}
      <View style={styles.header}>
        <Text style={styles.headerText}>Next to Go</Text>
      </View>
      <View style={styles.content}>
        {isRacesLoading ? (
          <ActivityIndicator animating />
        ) : (
          <View>
            <Filter
              selectedOption={selectedFilter}
              options={FILTER_OPTIONS}
              onSelectOption={handleFilterChange}
            />
            <View style={styles.racesContainer}>
              <FlatList
                data={filteredRaces}
                renderItem={renderRaces}
                keyExtractor={keyExtractor}
                ListEmptyComponent={
                  <View style={styles.noRacesContainer}>
                    <Text style={styles.noRaces}>No races to display</Text>
                    <Text>Try cleaning the filters</Text>
                  </View>
                }
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Races;
