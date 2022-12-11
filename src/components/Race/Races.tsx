// Libraries
import * as React from 'react';
import {useEffect, useState, useCallback} from 'react';
import {Text, View, ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Backend
import {getRaces} from '@src/actions/api';

// Utils
import useInterval from '@src/hooks/useInterval';
import {
  selectLoading,
  selectRaceNext,
  selectRaceSummaries,
} from '@src/selectors/racesSelector';

// Components
import Race from './Race';
import Filter from '@src/components/Filter/Filter';

// Constants
import {FILTER_OPTIONS, IS_IOS} from '@src/constants/contants';
import {
  LIMIT_RACES_DISPLAY_INDEX,
  PULL_INTERVAL,
  UI_REFRESH_INTERVAL,
} from '@src/constants/contants';

// Styles
import styles from '@src/styles/styles';
import {Race as RaceType} from '@src/types/tyles';

/**
 * Component to dislay list of races.
 * Sort and limit the number of items to display, it also filter if user has selected a category
 * Races should dissaper after 1 minute of the start time
 */
const Races = () => {
  // Hooks
  const dispatch = useDispatch();

  // Selectors
  const nextRacesIds = useSelector(selectRaceNext);
  const raceSummaries = useSelector(selectRaceSummaries);
  const isLoading = useSelector(selectLoading);

  // State
  // Local State
  const [filteredRaces, setFilteredRaces] = useState<RaceType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('none');
  const [now, setNow] = useState(Date.now() / 1000);
  const [showFilter, setToogleFilte] = useState(false);

  // Variables
  const hasRaces = nextRacesIds && nextRacesIds.length > 0;
  const isRacesLoading = isLoading && !hasRaces;

  /**
   * Fetch races from api
   */
  const fetchRaces = useCallback((): void => {
    dispatch(getRaces());
  }, [dispatch]);

  /**
   * Hook function to pull new data within an interval
   */
  useInterval(() => {
    fetchRaces();
  }, PULL_INTERVAL);

  /**
   * Hook function to increase the currrent time every second
   */
  useInterval(() => {
    setNow(now + 1);
  }, UI_REFRESH_INTERVAL);

  /**
   * Fetch races on first load
   */
  useEffect(() => {
    if (!nextRacesIds) {
      fetchRaces();
    }
    () => {};
  }, [nextRacesIds, fetchRaces]);

  /**
   * Filter races by race types
   */
  const filterRaces = useCallback(() => {
    if (hasRaces && raceSummaries) {
      const nextFilteredRaces: Array<RaceType> = nextRacesIds
        .reduce((prev: Array<RaceType>, id: any) => {
          const raceSummary = raceSummaries[id];
          const {category_id} = raceSummary;
          if (selectedFilter === 'none' || selectedFilter === category_id) {
            prev.push(raceSummary);
          }
          return prev;
        }, [])
        .slice(0, LIMIT_RACES_DISPLAY_INDEX);
      setFilteredRaces(nextFilteredRaces);
    }
  }, [hasRaces, nextRacesIds, raceSummaries, selectedFilter, setFilteredRaces]);

  /**
   * In case the next races ids or the filter change trigger races filter
   */
  useEffect(() => {
    filterRaces();
  }, [nextRacesIds, selectedFilter, filterRaces]);

  /**
   * Handle filter change event
   */
  const handleFilterChange = (newFilter: string) => {
    setSelectedFilter(newFilter);
    handleshowFilter();
  };

  /**
   * Toogle show filter
   */
  const handleshowFilter = (): void => {
    setToogleFilte(!showFilter);
  };

  /**
   * Helper function to returnn the key id to be use onf the flatlist component
   * @param raceSummary
   * @returns key string
   */
  const keyExtractor = (raceSummary: RaceType): string => raceSummary?.race_id;

  /**
   * Render each Race component
   * @param raceSummary
   * @returns ReactElement or null
   */
  const renderRaces = ({
    item: raceSummary,
  }: {
    item: RaceType;
  }): React.ReactElement | null => {
    const {meeting_name, race_number, advertised_start, race_id} = raceSummary;
    const {seconds: raceTime} = advertised_start;
    const countdown = Math.ceil(raceTime - now);
    const hasStarted = raceTime < now;
    if (raceTime > countdown + 60) {
      return (
        <Race
          key={race_id}
          name={meeting_name}
          number={race_number}
          countdown={countdown}
          hasStarted={hasStarted}
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
