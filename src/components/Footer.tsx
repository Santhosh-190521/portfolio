import { useState } from 'react';
// Footer Component
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUp, Check } from 'lucide-react';

export default function Footer() {
    const [copied, setCopied] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigator.clipboard.writeText('vijayansanthosh801@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=vijayansanthosh801@gmail.com', '_blank');
    };

    return (
        <footer style={{ position: 'relative', marginTop: '6rem' }}>
            {/* Decorative top border */}
            <div style={{ height: '1px', background: 'var(--gradient-bg)', width: '100%' }}></div>

            <div className="container" style={{ padding: '4rem 1.5rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand & Bio */}
                    <div>
                        <a href="#" style={{ fontSize: '2rem', fontWeight: 700, display: 'inline-block', marginBottom: '1.5rem' }}>
                            <span className="text-gradient">SV.</span>
                        </a>
                        <p className="text-sub" style={{ maxWidth: '300px', marginBottom: '1.5rem' }}>
                            Frontend Engineer focused on building robust, scalable, and visually stunning digital products.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://github.com/SanthoshVijayan" target="_blank" rel="noreferrer" style={{
                                width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
                            }} className="social-footer-icon"><Github size={20} /></a>
                            <a href="https://linkedin.com/in/santhosh-vijayan-2a8576246" target="_blank" rel="noreferrer" style={{
                                width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
                            }} className="social-footer-icon"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 600 }}>Get In Touch</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li>
                                <a href="mailto:vijayansanthosh801@gmail.com" onClick={handleEmailClick} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="contact-link">
                                    {copied ? <Check size={18} className="text-gradient" /> : <Mail size={18} className="text-gradient" />}
                                    {copied ? "Copied!" : "vijayansanthosh801@gmail.com"}
                                </a>
                            </li>
                            <li>
                                <a href="tel:+918072236171" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="contact-link">
                                    <Phone size={18} className="text-gradient" />
                                    +91 8072236171
                                </a>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                                <MapPin size={18} className="text-gradient" />
                                Chennai, Tamil Nadu, India
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 600 }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['About', 'Experience', 'Projects', 'Skills'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="contact-link">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--border-light)',
                    gap: '1rem'
                }}>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                        © {new Date().getFullYear()} Santhosh Vijayan. Built with React & TypeScript.
                    </p>
                    <button
                        onClick={scrollToTop}
                        style={{
                            background: 'none', border: 'none', color: 'var(--text-secondary)',
                            display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'color 0.2s'
                        }}
                        className="contact-link"
                    >
                        Back to top <ArrowUp size={16} />
                    </button>
                </div>
            </div>
            <style>{`
        .social-footer-icon:hover { background: var(--accent-primary) !important; color: white !important; transform: translateY(-3px); }
        .contact-link:hover { color: var(--accent-primary) !important; }
      `}</style>
        </footer>
    );
}
