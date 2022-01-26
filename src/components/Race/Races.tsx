// Libraries
import * as React from 'react';
import {useEffect, useState, useCallback} from 'react';
import {Text, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Backend
import {getRaces} from '../../actions/api';

// Utils
import useInterval from '../../hooks/useInterval';
import {
  selectRaceNext,
  selectRaceSummaries,
} from '../../selectors/racesSelector';

// Components
import Race from './Race';
import Filter from '../Filter/Filter';

// Constants
import {FILTER_OPTIONS, IS_IOS} from '../../constants/contants';
import {
  LIMIT_RACES_DISPLAY_INDEX,
  PULL_INTERVAL,
  UI_REFRESH_INTERVAL,
} from '../../constants/contants';

// Styles
import styles from '../../styles/styles';
import {Race as RaceType} from '../../types/tyles';

const Races = () => {
  const dispatch = useDispatch();
  const nextRacesIds = useSelector(selectRaceNext);
  const raceSummaries = useSelector(selectRaceSummaries);
  const [filteredRaces, setFilteredRaces] = useState<RaceType[]>([]);
  const [fetching, setFetching] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('none');
  const [now, setNow] = useState(Date.now() / 1000);
  const [showFilter, setToogleFilte] = useState(false);

  // Pull frequency for new races
  useInterval(() => {
    fetchRaces();
  }, PULL_INTERVAL);

  // UI Refresh rate
  useInterval(() => {
    setNow(now + 1);
  }, UI_REFRESH_INTERVAL);

  useEffect(() => {
    if (!nextRacesIds) {
      fetchRaces();
    }
  });

  const filterRaces = useCallback(() => {
    if (nextRacesIds && nextRacesIds.length > 0 && raceSummaries) {
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
  }, [nextRacesIds, raceSummaries, selectedFilter, setFilteredRaces]);

  useEffect(() => {
    filterRaces();
  }, [nextRacesIds, filterRaces]);

  const fetchRaces = (): void => {
    setFetching(true);
    dispatch(getRaces());
    setFetching(false);
  };

  const handleFilterChange = (newFilter: string) => {
    setSelectedFilter(newFilter);
    handleshowFilter();
    filterRaces();
  };

  const handleshowFilter = (): void => {
    setToogleFilte(!showFilter);
  };

  const getFilterLabel = (): string => {
    const optionSelected = FILTER_OPTIONS.find(
      item => item.value === selectedFilter,
    );
    if (optionSelected) {
      return optionSelected.label;
    }
    return '';
  };

  return (
    <View style={styles.container}>
      {IS_IOS && <View style={styles.statsBar} />}
      <View style={styles.header}>
        <Text style={styles.headerText}>Next to Go</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.filterContainer}>
          {IS_IOS ? (
            <TouchableOpacity onPress={handleshowFilter}>
              <Text style={styles.filterText}>{getFilterLabel()}</Text>
            </TouchableOpacity>
          ) : (
            <Filter
              selectedOption={selectedFilter}
              options={FILTER_OPTIONS}
              onSelectOption={handleFilterChange}
            />
          )}
        </View>
        <View style={styles.racesContainer}>
          {fetching && <ActivityIndicator animating={fetching} />}
          {filteredRaces && filteredRaces.length > 0 ? (
            filteredRaces.map((raceSummary: RaceType) => {
              const {meeting_name, race_number, advertised_start, race_id} =
                raceSummary;
              const {seconds: raceTime} = advertised_start;
              const countdown = Math.ceil(raceTime - now);
              if (raceTime > countdown + 60) {
                return (
                  <Race
                    key={race_id}
                    name={meeting_name}
                    number={race_number}
                    countdown={countdown}
                    hasFinished={raceTime < now}
                  />
                );
              }
            })
          ) : (
            <View style={styles.noRacesContainer}>
              <Text style={styles.noRaces}>No races to display</Text>
              <Text>Try cleaning the filters</Text>
            </View>
          )}
        </View>
      </View>
      <View>
        {showFilter && IS_IOS && (
          <Filter
            selectedOption={selectedFilter}
            options={FILTER_OPTIONS}
            onSelectOption={handleFilterChange}
          />
        )}
      </View>
    </View>
  );
};

export default Races;
