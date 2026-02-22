import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Smartphone, Server } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: 'Developer Debug Tool',
            description: 'An internal tool designed for developers to extract log files with an enhanced UI viewer and flowchart visualization. Built with a React frontend and Python backend to speed up the debugging process.',
            tags: ['React.js', 'Python', 'REST API', 'Data Visualization'],
            icon: <Monitor size={20} />
        },
        {
            title: 'ChatFactory',
            description: 'A B2B real-time chat application built for an enterprise US client (PathFactory). Features dynamic state management using Context API for seamless messaging, utilizing a Ruby on Rails backend, React frontend, and Axios for APIs.',
            tags: ['React.js', 'Ruby on Rails', 'Context API', 'Axios', 'WebSockets'],
            icon: <Smartphone size={20} />
        },
        {
            title: 'Attendance Management System',
            description: 'Internal corporate tool featuring comprehensive dashboards, dynamic reporting views, and robust Redux state management for HR and team leads.',
            tags: ['React.js', 'Redux', 'Dashboard'],
            icon: <Server size={20} />
        }
    ];

    return (
        <section id="projects" className="section container" style={{ position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="heading-lg" style={{ marginBottom: '4rem' }}>
                    Featured <span className="text-gradient">Projects</span>
                </h2>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2.5rem'
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass-panel"
                        style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'hidden',
                            transformStyle: 'preserve-3d',
                            perspective: '1000px'
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderColor: 'var(--border-focus)' }}
                    >
                        {/* Top Bar with Icons */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <div style={{ color: 'var(--accent-primary)' }}>
                                {project.icon}
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                <a href="#" style={{ transition: 'color 0.2s' }} className="social-icon"><Github size={20} /></a>
                                <a href="#" style={{ transition: 'color 0.2s' }} className="social-icon"><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>{project.title}</h3>

                        <p className="text-sub" style={{ marginBottom: '2rem', flexGrow: 1 }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {project.tags.map((tag, i) => (
                                <span key={i} className="badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Subtle glow effect on hover */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'var(--accent-glow)',
                            filter: 'blur(50px)',
                            opacity: 0,
                            transition: 'opacity 0.3s'
                        }} className="hover-glow"></div>

                        <style>{`
              .glass-panel:hover .hover-glow { opacity: 0.3 !important; }
            `}</style>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
