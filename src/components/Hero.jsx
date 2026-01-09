import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Bienvenidos a <br /><span>Iglesia del Evangelio Pleno</span></h1>
                <p>Un lugar de esperanza, amor y comunidad donde todos son bienvenidos.</p>
                <div className="hero-buttons">
                    <a href="#services" className="btn btn-primary">Nuestros Servicios</a>
                    <a href="#contact" className="btn btn-outline">Contáctanos <ArrowRight size={18} style={{ marginLeft: '8px' }} /></a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
