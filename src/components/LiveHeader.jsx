import React from 'react';
import { Target, TrendingUp, Zap } from 'lucide-react';

const LiveHeader = ({ match }) => {
    return (
        <div className="glass-panel" style={{ padding: '24px', position: 'relative', overflow: 'hidden' }}>
            {/* Dynamic Background Glow */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '50%',
                height: '200%',
                background: 'radial-gradient(circle, var(--icc-blue) 0%, transparent 70%)',
                opacity: 0.1,
                pointerEvents: 'none',
                transform: 'rotate(15deg)'
            }}></div>

            <div className="flex-between">
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <span style={{
                            background: 'var(--bg-tertiary)',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.875rem',
                            color: 'var(--text-secondary)',
                            letterSpacing: '1px'
                        }}>SUPER 8s - GROUP 1</span>
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>{match.venue}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                        {/* Team 1 */}
                        <div style={{ flex: 1 }}>
                            <h2 style={{ fontSize: '2.5rem', margin: 0 }}>{match.team1.score}</h2>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{match.team1.name}</span>
                                <span style={{ color: 'var(--text-tertiary)' }}>({match.team1.overs} ov)</span>
                            </div>
                        </div>

                        {/* VS Badge */}
                        <div style={{
                            padding: '16px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
                            border: '1px solid var(--border-subtle)',
                            margin: '0 32px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: 'var(--shadow-md)'
                        }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 700 }}>VS</span>
                        </div>

                        {/* Team 2 */}
                        <div style={{ flex: 1, textAlign: 'right' }}>
                            <h2 style={{ fontSize: '2.5rem', margin: 0 }}>{match.team2.score}</h2>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', justifyContent: 'flex-end' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{match.team2.name}</span>
                                <span style={{ color: 'var(--text-tertiary)' }}>({match.team2.overs} ov)</span>
                            </div>
                        </div>
                    </div>

                    {/* Match Equation Banner */}
                    <div style={{
                        marginTop: '24px',
                        padding: '16px 20px',
                        background: 'var(--bg-tertiary)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderLeft: '4px solid var(--icc-magenta)'
                    }}>
                        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500, color: '#fff' }}>
                            {match.team1.name} need <span style={{ color: 'var(--warning)', fontWeight: 700 }}>{match.runsRequired}</span> runs from <span style={{ color: 'var(--warning)', fontWeight: 700 }}>{match.ballsRemaining}</span> balls
                        </h3>

                        <div style={{ display: 'flex', gap: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <TrendingUp size={18} color="var(--text-tertiary)" />
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>CRR</div>
                                    <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{match.currentRunRate}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Target size={18} color="var(--text-tertiary)" />
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>REQ</div>
                                    <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--icc-magenta)' }}>{match.requiredRunRate}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveHeader;
