import { motion } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: '1.5rem 0',
                transition: 'all 0.3s ease',
                background: isScrolled ? 'rgba(10, 10, 14, 0.8)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="text-gradient">SV.</span>
                </a>

                {/* Desktop Nav */}
                <div style={{ display: 'none' }} className="nav-desktop">
                    <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', fontSize: '0.95rem', fontWeight: 500 }} className="nav-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ display: 'none', gap: '1rem' }} className="social-links-desktop">
                        <a href="https://github.com/Santhosh-190521" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} className="social-icon"><Github size={20} /></a>
                        <a href="https://linkedin.com/in/santhosh-vijayan-2a8576246" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} className="social-icon"><Linkedin size={20} /></a>
                    </div>
                    <button
                        className="mobile-menu-btn"
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex' }}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: 'var(--bg-secondary)',
                        padding: '1rem 0',
                        borderBottom: '1px solid var(--border-light)'
                    }}
                    className="mobile-menu"
                >
                    <ul style={{ display: 'flex', flexDirection: 'column', padding: '0 1.5rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    style={{ display: 'block', padding: '1rem 0', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-light)' }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
            <style>{`
        @media (min-width: 768px) {
          .nav-desktop, .social-links-desktop { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        .nav-link:hover { color: var(--accent-primary) !important; }
        .social-icon:hover { color: var(--accent-primary) !important; }
      `}</style>
        </motion.nav>
    );
}
