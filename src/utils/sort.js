function compare( a, b ) {
    if ( a.advertised_start.seconds < b.advertised_start.seconds ){
        return -1;
    }
    if ( a.advertised_start.seconds > b.advertised_start.seconds ){
        return 1;
    }
    return 0;
}

export const sortRaces = (data) => {
    if (!data) {
        return data;
    }
    
    const { next_to_go_ids, race_summaries } = data;
        
    const sortedRaces = Object.values(race_summaries)
        .sort(compare)
        .map(race => race.race_id);

    return {
        next: sortedRaces,
        summaries: race_summaries
    }
}