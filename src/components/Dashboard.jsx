import React, { useState, useEffect } from 'react';
import LiveHeader from './LiveHeader';
import WinProbability from './WinProbability';
import PlayerMetrics from './PlayerMetrics';
import PhaseAnalysis from './PhaseAnalysis';
import MatchVisuals from './MatchVisuals';
import { mockLiveData } from '../data/mockData';
import { Activity, BarChart2, Cpu, Crosshair } from 'lucide-react';

const Dashboard = () => {
    const [data, setData] = useState(mockLiveData);

    // Simulate real-time updates every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            // Small random variations to simulate live data
            setData(prev => ({
                ...prev,
                aiPredictions: {
                    ...prev.aiPredictions,
                    winProbability: {
                        team1: Math.min(99, Math.max(1, prev.aiPredictions.winProbability.team1 + (Math.random() > 0.5 ? 1 : -1))),
                        team2: Math.min(99, Math.max(1, prev.aiPredictions.winProbability.team2 + (Math.random() > 0.5 ? -1 : 1)))
                    }
                },
                match: {
                    ...prev.match,
                    currentRunRate: +(prev.match.currentRunRate + (Math.random() * 0.2 - 0.1)).toFixed(2)
                }
            }));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ padding: '10px 0', animation: 'slideUp 0.6s ease-out' }}>
            <header className="flex-between" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--icc-blue) 0%, var(--icc-magenta) 100%)',
                        padding: '12px',
                        borderRadius: '12px',
                        boxShadow: 'var(--shadow-lg)'
                    }}>
                        <Activity color="white" size={28} />
                    </div>
                    <div>
                        <h1 className="text-gradient">ICC Men's T20 World Cup</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Real-Time AI Analytics Engine</p>
                    </div>
                </div>
                <div className="glass-panel" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="live-indicator"></span>
                    <span style={{ fontWeight: 600, color: 'var(--icc-magenta)' }}>LIVE API FEED</span>
                </div>
            </header>

            {/* Main Grid Layout */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                gap: '24px',
                marginBottom: '24px'
            }}>
                {/* Top Row */}
                <div style={{ gridColumn: '1 / -1' }}>
                    <LiveHeader match={data.match} />
                </div>

                {/* Second Row */}
                <WinProbability ai={data.aiPredictions} team1={data.match.team1} team2={data.match.team2} />
                <PhaseAnalysis phases={data.phaseAnalysis} />

                {/* Third Row */}
                <div style={{ gridColumn: '1 / -1' }}>
                    <PlayerMetrics players={data.players} partnerships={data.partnerships} />
                </div>

                {/* Fourth Row */}
                <div style={{ gridColumn: '1 / -1' }}>
                    <MatchVisuals momentum={data.aiPredictions.momentumIndex} team1={data.match.team1.name} team2={data.match.team2.name} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
