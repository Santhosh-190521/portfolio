import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

export default function Skills() {
    const skillCategories = [
        {
            title: 'Frontend & UI',
            skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 & CSS3', 'Tailwind CSS', 'Redux / Context API', 'React Hooks']
        },
        {
            title: 'Tools & Ecosystem',
            skills: ['Vite', 'Webpack', 'NPM', 'Git & GitHub', 'REST APIs', 'Axios']
        },
        {
            title: 'Backend Basics',
            skills: ['Python (Django bindings)', 'Ruby on Rails (API Consumption)']
        },
        {
            title: 'Core Concepts',
            skills: ['Async/Await & Promises', 'Closures', 'Event Loop', 'Component Architecture', 'Memoization']
        }
    ];

    return (
        <section id="skills" className="section container" style={{ position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="heading-lg" style={{ marginBottom: '4rem' }}>
                    Skills & <span className="text-gradient">Achievements</span>
                </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>

                {/* Skills Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{category.title}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid var(--border-light)',
                                            borderRadius: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: 'var(--text-secondary)',
                                            transition: 'all 0.2s',
                                            cursor: 'default'
                                        }}
                                        className="skill-tag"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Achievements & Education Panel */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <motion.div
                        className="glass-panel"
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '4px solid var(--accent-primary)' }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                            <Award size={28} />
                            <h3 style={{ fontSize: '1.5rem', color: 'white' }}>Achievements</h3>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(139, 92, 246, 0.05)', borderRadius: '0.5rem', border: '1px dashed rgba(139, 92, 246, 0.3)' }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Best Team Player Award</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Vthink Global Technologies • May 2025</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="glass-panel"
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '4px solid var(--accent-secondary)' }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>
                            <GraduationCap size={28} />
                            <h3 style={{ fontSize: '1.5rem', color: 'white' }}>Education</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>BCA — Cloud Technology & Information Security</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Vels University • 2019–2022 • First Class</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Python Full Stack Development</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Professional Certification • 2022–2023</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <style>{`
        .skill-tag:hover {
          background: rgba(139, 92, 246, 0.1) !important;
          border-color: rgba(139, 92, 246, 0.3) !important;
          color: white !important;
          transform: translateY(-2px);
        }
      `}</style>
        </section>
    );
}
