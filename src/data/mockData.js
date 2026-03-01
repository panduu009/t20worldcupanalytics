export const mockLiveData = {
    match: {
        team1: { name: 'IND', fullName: 'India', score: '185/4', overs: '18.2' },
        team2: { name: 'AUS', fullName: 'Australia', score: '162/6', overs: '20.0' },
        target: 186,
        currentRunRate: 10.1,
        requiredRunRate: 14.4,
        ballsRemaining: 10,
        runsRequired: 24,
        status: 'Live',
        venue: 'Kensington Oval, Barbados',
        toss: 'AUS won the toss and elected to field'
    },
    aiPredictions: {
        winProbability: {
            team1: 82, // IND
            team2: 18  // AUS
        },
        momentumIndex: [
            { over: 5, IND: 45, AUS: 55 },
            { over: 10, IND: 60, AUS: 40 },
            { over: 15, IND: 55, AUS: 45 },
            { over: 18, IND: 82, AUS: 18 },
        ],
        projectedScore: {
            min: 195,
            max: 210,
            mostLikely: 202
        }
    },
    players: [
        { name: 'V. Kohli', role: 'batter', runs: 72, balls: 45, strikeRate: 160.0, impactScore: 9.2, status: 'batting' },
        { name: 'S. Yadav', role: 'batter', runs: 45, balls: 22, strikeRate: 204.5, impactScore: 8.8, status: 'batting' },
        { name: 'M. Starc', role: 'bowler', overs: 3.2, runs: 38, wickets: 1, economy: 11.4, impactScore: 4.5, status: 'bowling' }
    ],
    phaseAnalysis: {
        powerplay: { IND: '62/1 (6.0)', AUS: '55/2 (6.0)' },
        middleOvers: { IND: '85/2 (9.0)', AUS: '70/3 (9.0)' },
        deathOvers: { IND: '38/1 (3.2)', AUS: '37/1 (5.0)' }
    },
    partnerships: [
        { players: 'Kohli - Yadav', runs: 85, balls: 42, rr: 12.1, active: true },
        { players: 'Sharma - Kohli', runs: 45, balls: 30, rr: 9.0, active: false }
    ]
};
