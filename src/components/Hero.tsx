import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Check } from 'lucide-react';

export default function Hero() {
    const [copied, setCopied] = useState(false);

    const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigator.clipboard.writeText('vijayansanthosh801@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        window.location.href = 'mailto:vijayansanthosh801@gmail.com';
    };

    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                paddingTop: '5rem'
            }}
        >
            {/* Background Graphic */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1 }}>
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '40vw',
                    height: '40vw',
                    background: 'var(--accent-primary)',
                    filter: 'blur(120px)',
                    opacity: 0.15,
                    borderRadius: '50%'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: '30vw',
                    height: '30vw',
                    background: 'var(--accent-secondary)',
                    filter: 'blur(100px)',
                    opacity: 0.1,
                    borderRadius: '50%'
                }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-primary)' }} className="animate-glow"></span>
                            Available for new opportunities
                        </div>
                    </motion.div>

                    <motion.h1
                        className="heading-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ marginBottom: '1rem' }}
                    >
                        Hi, I'm <span className="text-gradient">Santhosh</span> <br />
                        Frontend Engineer.
                    </motion.h1>

                    <motion.p
                        className="text-sub heading-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ marginBottom: '2.5rem', maxWidth: '600px', fontSize: '1.25rem' }}
                    >
                        I build scalable, production-grade web applications.
                        Focused on creating blazing fast, pixel-perfect user experiences with <span style={{ color: 'var(--text-primary)' }}>React & TypeScript</span>.
                    </motion.p>

                    <motion.div
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Work <ArrowRight size={18} />
                        </a>
                        <a href={`${import.meta.env.BASE_URL}Santhosh_Vijayan_Resume.docx`} download="Santhosh_Vijayan_Resume.docx" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Download size={18} /> Resume
                        </a>
                        <a href="mailto:vijayansanthosh801@gmail.com" onClick={handleEmailClick} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {copied ? <><Check size={18} /> Copied!</> : "Let's Talk"}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
