import React from 'react';
import './About.css';
import aboutImg from '../assets/about-img.png';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container about-container">
                <div className="about-image">
                    <img src={aboutImg} alt="Comunidad de la iglesia" />
                    <div className="about-shape"></div>
                </div>
                <div className="about-content">
                    <div className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                        <h2>Sobre Nosotros</h2>
                    </div>
                    <p>
                        En Iglesia del Evangelio Pleno, creemos en el poder transformador del amor de Dios.
                        Somos una comunidad diversa y acogedora, unida por nuestra fe y el deseo de servir a nuestro prójimo.
                    </p>
                    <p>
                        Nuestra misión es llevar esperanza a cada corazón y construir relaciones auténticas
                        que reflejen el carácter de Cristo. Ya sea que estés buscando respuestas,
                        necesites oración o simplemente quieras hacer amigos, aquí tienes un hogar.
                    </p>
                    <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Conoce Más</a>
                </div>
            </div>
        </section>
    );
};

export default About;
