import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ServiceCart from '../ServiceCart/ServiceCart';
import './Feature.css'

const Feature = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("./services.JSON")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="services">
            <Row xs={1} md={2} className="g-4">
                {
                    services.map(service => <ServiceCart
                        service={service}
                        key={service.key}
                    ></ServiceCart>)
                }
            </Row>
        </div>
    );
};

export default Feature;