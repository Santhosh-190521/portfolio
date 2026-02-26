import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Check } from 'lucide-react';

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigator.clipboard.writeText('vijayansanthosh801@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=vijayansanthosh801@gmail.com', '_blank');
    };

    return (
        <section id="contact" className="section container" style={{ position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="glass-panel" style={{
                    padding: '4rem 2rem',
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)',
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.3,
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
                            <Mail size={48} />
                        </div>
                        <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                            Let's Build Something <span className="text-gradient">Great</span>
                        </h2>
                        <p className="text-sub" style={{ marginBottom: '2.5rem', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            I'm currently open to new opportunities. Whether you have a question, a project in mind,
                            or just want to say hi, my inbox is always open.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="mailto:vijayansanthosh801@gmail.com" onClick={handleEmailClick} className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                {copied ? <><Check size={20} /> Email Copied!</> : <><Send size={20} /> Say Hello</>}
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
