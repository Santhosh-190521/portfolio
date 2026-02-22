import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            role: 'React.js Developer (Frontend)',
            company: 'Vthink Global Technologies',
            location: 'Chennai, India',
            duration: 'Oct 2023 - Nov 2025 (2 yrs 1 mo)',
            highlights: [
                'Improved UI responsiveness by 20% through memoization techniques and optimized component rendering.',
                'Built and shipped production-ready features for enterprise US clients.',
                'Integrated complex RESTful APIs into dynamic front-end interfaces, collaborating through Agile sprints and rigorous code reviews.',
            ]
        },
        // Adding a placeholder for visual balance or can just leave one if that's all. The user has 1 role.
    ];

    return (
        <section id="experience" className="section container" style={{ position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="heading-lg" style={{ marginBottom: '4rem' }}>
                    Professional <span className="text-gradient">Experience</span>
                </h2>
            </motion.div>

            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                {/* Timeline Line */}
                <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: 'linear-gradient(to bottom, var(--accent-primary), transparent)'
                }}></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        style={{ position: 'relative', marginBottom: '3rem' }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {/* Timeline Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '-2rem',
                            top: '0.25rem',
                            width: '1rem',
                            height: '1rem',
                            borderRadius: '50%',
                            background: 'var(--bg-primary)',
                            border: '2px solid var(--accent-primary)',
                            transform: 'translateX(-50%)',
                            boxShadow: '0 0 10px var(--accent-glow)'
                        }}></div>

                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                        <Briefcase size={16} />
                                        <span style={{ fontWeight: 500 }}>{exp.company}</span>
                                        <span style={{ margin: '0 0.5rem' }}>•</span>
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                                <div className="badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Calendar size={14} />
                                    {exp.duration}
                                </div>
                            </div>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {exp.highlights.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                    >
                                        <span style={{ color: 'var(--accent-secondary)', marginTop: '0.25rem' }}>▹</span>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
