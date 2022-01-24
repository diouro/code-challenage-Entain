// Libraries
import { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// Backend
import { getRaces } from '../../actions/api';

// Utils
import useInterval from '../../hooks/useInterval';
import { selectRaces } from '../../selectors/racesSelector';
import { getSortedRaceIds } from '../../utils/sort';

// Components
import Race from './Race';
import Filter from '../Filter/Filter';

// Constants
import { FILTER_OPTIONS } from '../../constants/contants';
import { LIMIT_RACES_DISPLAY_INDEX, PULL_INTERVAL, UI_REFRESH_INTERVAL } from '../../constants/contants';

// Styles
import styles from '../../styles/styles';

const Races = () => {
    const dispatch = useDispatch();
    const races = useSelector(selectRaces);
    const [fetching, setFetching] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [now, setNow] = useState(Date.now() / 1000);
    const [nextPull, setNextPull] = useState(0);

    // Pull frequency for new races
    useInterval(() => {
        fetchRaces();
    }, PULL_INTERVAL);

    // UI Refresh rate
    useInterval(() => {
        setNow(now + 1);
    }, UI_REFRESH_INTERVAL);

    useEffect(() => {
        if (!races) {
            fetchRaces();
        }
    }, [races]);

    const fetchRaces = async () => {
        setFetching(true);
        await dispatch(getRaces());
        setFetching(false);
    }

    const handleFilterChange = (newFilter) => {
        setSelectedFilter(newFilter);
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Next to Go</Text>
            </View>
            <View style={styles.filter}>
                <Filter 
                    selectedOption={selectedFilter} 
                    options={FILTER_OPTIONS}
                    onSelectOption={handleFilterChange}
                />
            </View>
            <View style={styles.content}>
                {fetching && (
                    <ActivityIndicator loading={fetching} />
                )}
                {(races && races.next.length > 0) ? races.next
                    .slice(0, LIMIT_RACES_DISPLAY_INDEX)
                    .map((id, index) => {
                        const raceSummary = races.summaries[id];
                        const { meeting_name, race_number, advertised_start, category_id } = raceSummary;
                        if ((!selectedFilter || selectedFilter === 'none') || selectedFilter === category_id) {
                            const { seconds: raceTime } = advertised_start;
                            const countdown = Math.ceil((raceTime - now));
                            if (raceTime > countdown + 60) {
                                return (
                                    <Race
                                        key={id}
                                        name={meeting_name}
                                        number={race_number}
                                        countdown={countdown}
                                        hasFinished={raceTime < now}
                                    />
                                )
                            }
                        }
                }): (
                    <View style={styles.noRacesContainer}>
                        <Text style={styles.noRaces}>No races to display</Text>
                        <Text>Try cleaning filter</Text>
                    </View>
                )}
            </View>
        </View>
    )
}

export default Races;