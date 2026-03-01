import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, BarChart, Crosshair } from 'lucide-react';

const MatchVisuals = ({ momentum, team1, team2 }) => {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ background: 'var(--bg-tertiary)', padding: '12px', border: '1px solid var(--border-strong)', borderRadius: '8px' }}>
                    <p style={{ margin: '0 0 8px', color: 'var(--text-secondary)' }}>Over {label}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ color: payload[0].color, fontWeight: 600 }}>{team1}: {payload[0].value}%</span>
                        <span style={{ color: payload[1].color, fontWeight: 600 }}>{team2}: {payload[1].value}%</span>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>

                {/* Momentum Index Chart */}
                <div style={{ flex: 1.5 }}>
                    <div className="flex-between" style={{ marginBottom: '24px' }}>
                        <h3 className="flex-center" style={{ gap: '8px', margin: 0, fontSize: '1.25rem' }}>
                            <Activity color="var(--accent-secondary)" />
                            Match Momentum Index
                        </h3>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Live Over-by-Over Swing</span>
                    </div>

                    <div style={{ height: '250px', width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={momentum} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                <XAxis
                                    dataKey="over"
                                    stroke="var(--text-tertiary)"
                                    tick={{ fill: 'var(--text-tertiary)' }}
                                    tickLine={false}
                                    axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                                />
                                <YAxis
                                    domain={[0, 100]}
                                    stroke="var(--text-tertiary)"
                                    tick={{ fill: 'var(--text-tertiary)' }}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <Line
                                    type="monotone"
                                    dataKey="IND"
                                    stroke="var(--accent-primary)"
                                    strokeWidth={3}
                                    dot={{ r: 4, fill: 'var(--bg-primary)', strokeWidth: 2 }}
                                    activeDot={{ r: 6, fill: 'var(--accent-primary)' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="AUS"
                                    stroke="var(--warning)"
                                    strokeWidth={3}
                                    dot={{ r: 4, fill: 'var(--bg-primary)', strokeWidth: 2 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Visual Analytics Grid */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h3 className="flex-center" style={{ justifyContent: 'flex-start', gap: '8px', marginBottom: '8px', fontSize: '1.25rem' }}>
                        <Crosshair color="var(--icc-magenta)" />
                        Pitch & Wagon Wheel
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', height: '100%' }}>
                        {/* Wagon Wheel Mock */}
                        <div style={{
                            background: 'var(--bg-glass)',
                            borderRadius: '12px',
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--border-subtle)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                border: '2px dashed var(--border-strong)',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{ width: '12px', height: '40px', background: '#fff', borderRadius: '2px' }}></div>
                                {/* Simulated Shot Lines */}
                                <div style={{ position: 'absolute', width: '2px', height: '60px', background: 'var(--accent-primary)', bottom: '50%', left: '50%', transformOrigin: 'bottom center', transform: 'rotate(45deg)' }}></div>
                                <div style={{ position: 'absolute', width: '2px', height: '80px', background: 'var(--success)', bottom: '50%', left: '50%', transformOrigin: 'bottom center', transform: 'rotate(-30deg)' }}></div>
                                <div style={{ position: 'absolute', width: '2px', height: '50px', background: 'var(--warning)', bottom: '50%', left: '50%', transformOrigin: 'bottom center', transform: 'rotate(120deg)' }}></div>
                            </div>
                            <span style={{ marginTop: '16px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Wagon Wheel Tracker</span>
                        </div>

                        {/* Pitch Heatmap Mock */}
                        <div style={{
                            background: 'var(--bg-glass)',
                            borderRadius: '12px',
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--border-subtle)'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '140px',
                                background: '#d4b895', /* Pitch color */
                                borderRadius: '4px',
                                position: 'relative'
                            }}>
                                {/* Creases */}
                                <div style={{ position: 'absolute', top: '15px', width: '100%', height: '2px', background: '#fff' }}></div>
                                <div style={{ position: 'absolute', bottom: '15px', width: '100%', height: '2px', background: '#fff' }}></div>
                                {/* Heat spots */}
                                <div style={{ position: 'absolute', top: '40%', left: '30%', width: '24px', height: '24px', background: 'rgba(239, 68, 68, 0.7)', borderRadius: '50%', filter: 'blur(4px)' }}></div>
                                <div style={{ position: 'absolute', top: '25%', left: '50%', width: '20px', height: '20px', background: 'rgba(245, 158, 11, 0.7)', borderRadius: '50%', filter: 'blur(4px)' }}></div>
                                <div style={{ position: 'absolute', bottom: '35%', left: '20%', width: '30px', height: '30px', background: 'rgba(37, 99, 235, 0.6)', borderRadius: '50%', filter: 'blur(6px)' }}></div>
                            </div>
                            <span style={{ marginTop: '16px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Pitch Heatmap</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MatchVisuals;
