import React from 'react';
import { Calendar, BookOpen, Users, Clock, MapPin } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <Calendar size={40} />,
            title: "Culto Dominical",
            time: "Domingos 4:30 PM",
            desc: "Únete a nosotros para un tiempo de adoración y enseñanza de la Palabra."
        },
        {
            icon: <BookOpen size={40} />,
            title: "Culto de Oración",
            time: "Jueves 7:30 PM",
            desc: "Profundiza en las Escrituras y crece en tu fe junto a otros creyentes."
        },
        {
            icon: <Users size={40} />,
            title: "Reunión de Jóvenes",
            time: "Sábado 4:30 PM",
            desc: "Un espacio dinámico para que los jóvenes conecten con Dios y amigos."
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="section-title">
                    <h2>Nuestros Servicios</h2>
                    <p>Tenemos un lugar para ti y tu familia. ¡Te esperamos!</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <div className="service-time">
                                <Clock size={16} />
                                <span>{service.time}</span>
                            </div>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
