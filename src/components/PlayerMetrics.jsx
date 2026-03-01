import React from 'react';
import { Target, Users, Activity, BarChart2 } from 'lucide-react';

const PlayerMetrics = ({ players, partnerships }) => {
    return (
        <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>

                {/* Player Performances */}
                <div>
                    <h3 className="flex-center" style={{ justifyContent: 'flex-start', gap: '8px', marginBottom: '20px', fontSize: '1.25rem' }}>
                        <Target color="var(--success)" />
                        Live Player Metrics
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {players.map((p, i) => (
                            <div key={i} style={{
                                background: 'var(--bg-glass)',
                                borderRadius: '12px',
                                padding: '16px',
                                borderLeft: p.status === 'batting' ? '4px solid var(--accent-primary)' : '4px solid var(--warning)'
                            }}>
                                <div className="flex-between" style={{ marginBottom: '8px' }}>
                                    <div className="flex-center" style={{ gap: '8px' }}>
                                        <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{p.name}</span>
                                        <span style={{
                                            fontSize: '0.7rem',
                                            background: 'rgba(255,255,255,0.1)',
                                            padding: '2px 6px',
                                            borderRadius: '4px',
                                            textTransform: 'uppercase'
                                        }}>{p.role}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <Activity size={14} color="var(--accent-secondary)" />
                                        <span style={{ fontWeight: 600, color: 'var(--accent-secondary)' }}>Impact: {p.impactScore}</span>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '12px' }}>
                                    {p.role === 'batter' ? (
                                        <>
                                            <div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Runs</div>
                                                <div style={{ fontWeight: 600 }}>{p.runs} ({p.balls})</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>SR</div>
                                                <div style={{ fontWeight: 600, color: p.strikeRate > 150 ? 'var(--success)' : '#fff' }}>{p.strikeRate}</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Status</div>
                                                <div style={{ fontWeight: 600 }}>Not Out</div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Overs</div>
                                                <div style={{ fontWeight: 600 }}>{p.overs}</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Figures</div>
                                                <div style={{ fontWeight: 600 }}>{p.wickets}/{p.runs}</div>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>ECON</div>
                                                <div style={{ fontWeight: 600, color: p.economy > 10 ? 'var(--danger)' : '#fff' }}>{p.economy}</div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partnership Analytics */}
                <div>
                    <h3 className="flex-center" style={{ justifyContent: 'flex-start', gap: '8px', marginBottom: '20px', fontSize: '1.25rem' }}>
                        <Users color="var(--icc-blue)" />
                        Partnership Analytics
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {partnerships.map((pt, i) => (
                            <div key={i} style={{
                                background: 'var(--bg-glass)',
                                borderRadius: '12px',
                                padding: '16px',
                                position: 'relative'
                            }}>
                                {pt.active && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        fontSize: '0.7rem',
                                        background: 'var(--icc-magenta-glow)',
                                        color: 'var(--icc-magenta)',
                                        padding: '2px 8px',
                                        borderRadius: '12px',
                                        fontWeight: 700
                                    }}>CURRENT</span>
                                )}
                                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '12px', color: pt.active ? '#fff' : 'var(--text-secondary)' }}>
                                    {pt.players}
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Runs</div>
                                        <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--accent-primary)' }}>{pt.runs}<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>/{pt.balls}</span></div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Run Rate</div>
                                        <div style={{ fontWeight: 600, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <BarChart2 size={16} color="var(--text-secondary)" />
                                            {pt.rr}
                                        </div>
                                    </div>
                                </div>

                                {/* Progress bar mock for contribution */}
                                <div style={{ marginTop: '16px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', display: 'flex', overflow: 'hidden' }}>
                                    <div style={{ width: '60%', background: 'var(--accent-primary)' }}></div>
                                    <div style={{ width: '40%', background: 'var(--accent-secondary)' }}></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                                    <span>60%</span>
                                    <span>40%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlayerMetrics;
