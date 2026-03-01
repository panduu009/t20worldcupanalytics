import React from 'react';
import { Clock, Shield, Zap } from 'lucide-react';

const PhaseAnalysis = ({ phases }) => {
    return (
        <div className="glass-panel" style={{ padding: '24px', flex: 1, minWidth: '350px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <Clock color="var(--accent-secondary)" />
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Phase-wise Analysis</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Powerplay */}
                <div style={{ background: 'var(--bg-glass)', borderRadius: '12px', padding: '16px' }}>
                    <div className="flex-between" style={{ marginBottom: '12px' }}>
                        <div className="flex-center" style={{ gap: '8px' }}>
                            <Zap size={16} color="var(--warning)" />
                            <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Powerplay (1-6)</span>
                        </div>
                    </div>
                    <div className="flex-between">
                        <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>{phases.powerplay.IND}</span>
                        <div style={{ width: '40px', height: '2px', background: 'var(--border-strong)' }}></div>
                        <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>{phases.powerplay.AUS}</span>
                    </div>
                </div>

                {/* Middle Overs */}
                <div style={{ background: 'var(--bg-glass)', borderRadius: '12px', padding: '16px' }}>
                    <div className="flex-between" style={{ marginBottom: '12px' }}>
                        <div className="flex-center" style={{ gap: '8px' }}>
                            <Shield size={16} color="var(--success)" />
                            <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Middle Overs (7-15)</span>
                        </div>
                    </div>
                    <div className="flex-between">
                        <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>{phases.middleOvers.IND}</span>
                        <div style={{ width: '40px', height: '2px', background: 'var(--border-strong)' }}></div>
                        <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>{phases.middleOvers.AUS}</span>
                    </div>
                </div>

                {/* Death Overs */}
                <div style={{ background: 'var(--bg-glass)', borderRadius: '12px', padding: '16px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--icc-magenta)' }}></div>
                    <div className="flex-between" style={{ marginBottom: '12px' }}>
                        <div className="flex-center" style={{ gap: '8px' }}>
                            <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--icc-magenta)' }}></div>
                            <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Death Overs (16-20)</span>
                        </div>
                        <span style={{ fontSize: '0.75rem', background: 'rgba(232, 17, 75, 0.2)', color: 'var(--icc-magenta)', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>ACTIVE</span>
                    </div>
                    <div className="flex-between">
                        <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>{phases.deathOvers.IND}</span>
                        <div style={{ width: '40px', height: '2px', background: 'var(--border-strong)' }}></div>
                        <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>{phases.deathOvers.AUS}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhaseAnalysis;
