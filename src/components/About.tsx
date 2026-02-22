import { motion } from 'framer-motion';
import { Code2, MonitorPlay, Zap } from 'lucide-react';

export default function About() {
    const features = [
        {
            icon: <Zap size={24} className="text-gradient" />,
            title: 'Performance Optimized',
            description: 'Proven track record of delivering measurable improvements, including a 20% boost in UI responsiveness through React memoization and efficient re-renders.'
        },
        {
            icon: <Code2 size={24} className="text-gradient" />,
            title: 'Modern Architecture',
            description: 'Expertise in building scalable component architectures utilizing React Hooks, TypeScript, Redux, and Context API.'
        },
        {
            icon: <MonitorPlay size={24} className="text-gradient" />,
            title: 'Production-Ready',
            description: 'Experience delivering robust features for enterprise and B2B clients, integrating REST APIs into seamless UI flows.'
        }
    ];

    return (
        <section id="about" className="section container" style={{ position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                    About <span className="text-gradient">Me</span>
                </h2>
                <p className="text-sub" style={{ maxWidth: '800px', marginBottom: '4rem', fontSize: '1.125rem' }}>
                    Hello! I'm Santhosh, a passionate Frontend Engineer with 2+ years of experience building scalable,
                    production-grade web applications. I specialize in modern JavaScript, React.js, and TypeScript, focusing
                    on writing clean, maintainable code that delivers exceptional user experiences.
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="glass-panel"
                        style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'var(--accent-glow)',
                            filter: 'blur(50px)',
                            opacity: 0.2,
                            borderRadius: '50%'
                        }}></div>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: 'rgba(139, 92, 246, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            {feature.icon}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{feature.title}</h3>
                        <p className="text-sub">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
