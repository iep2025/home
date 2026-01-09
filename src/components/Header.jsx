import React, { useState, useEffect } from 'react';
import { Menu, X, Church } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <Church size={32} color="var(--color-secondary)" />
                    <span>Iglesia del Evangelio Pleno</span>
                </div>

                <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a></li>
                        <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a></li>
                        <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a></li>
                        <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a></li>
                    </ul>
                </nav>

                <div className="mobile-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>
        </header>
    );
};

export default Header;
