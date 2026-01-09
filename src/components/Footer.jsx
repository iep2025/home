import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Church } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <div className="footer-logo">
                            <Church size={24} color="var(--color-secondary)" />
                            <span>Iglesia del Evangelio Pleno</span>
                        </div>
                        <p>Llevando el mensaje de esperanza y amor a nuestra comunidad y al mundo.</p>
                    </div>

                    <div className="footer-contact">
                        <h3>Contáctanos</h3>
                        <ul>
                            <li><MapPin size={18} /> Cdla. Vernaza Norte, MZ 6 Villa 5, Guayaquil, Ecuador</li>
                            <li><Phone size={18} /> +593 9 9999 9999</li>
                            <li><Mail size={18} /> ecuador.evangeliopleno@gmail.com</li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h3>Síguenos</h3>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/evangeliopleno.ec"><Facebook size={24} /></a>
                            <a href="https://www.instagram.com/evangeliopleno.ec"><Instagram size={24} /></a>
                            <a href="https://www.youtube.com/@ecuadorevangeliopleno912"><Youtube size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Iglesia del Evangelio Pleno. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
