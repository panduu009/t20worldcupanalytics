import React from 'react';
import { Cpu, Zap } from 'lucide-react';

const WinProbability = ({ ai, team1, team2 }) => {
    return (
        <div className="glass-panel" style={{ padding: '24px', flex: 1, minWidth: '350px' }}>
            <div className="flex-between" style={{ marginBottom: '24px' }}>
                <h3 className="flex-center" style={{ gap: '8px', margin: 0, fontSize: '1.25rem' }}>
                    <Cpu color="var(--icc-magenta)" />
                    AI Win Probability
                </h3>
                <span style={{
                    fontSize: '0.75rem',
                    background: 'var(--icc-magenta-glow)',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <Zap size={10} fill="currentColor" /> LIVE MODEL
                </span>
            </div>

            <div style={{ position: 'relative', height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-secondary)' }}>
                            {ai.winProbability.team1}%
                        </span>
                        <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{team1.name}</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--warning)' }}>
                            {ai.winProbability.team2}%
                        </span>
                        <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{team2.name}</span>
                    </div>
                </div>

                {/* Prediction Bar */}
                <div style={{
                    width: '100%',
                    height: '16px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    display: 'flex',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
                }}>
                    <div style={{
                        width: `${ai.winProbability.team1}%`,
                        background: 'linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                        transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background: '#fff',
                            boxShadow: '0 0 10px #fff'
                        }}></div>
                    </div>
                    <div style={{
                        width: `${ai.winProbability.team2}%`,
                        background: 'linear-gradient(270deg, #b45309 0%, var(--warning) 100%)',
                        transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}></div>
                </div>
            </div>

            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', margin: 0 }}>
                    <strong style={{ color: '#fff' }}>Insight:</strong> {team1.name}'s win probability increased by 14% after the last over. Projected par score is {ai.projectedScore.mostLikely}.
                </p>
            </div>
        </div>
    );
};

export default WinProbability;
