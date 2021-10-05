import React from 'react';
import './Services.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceSection from '../ServiceSection/ServiceSection';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("./servicedetail.JSON")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="blog">
            <Row xs={1} md={1} className="g-4">
                {
                    services.map(service => <ServiceSection
                        service={service}
                        key={service.key}
                    ></ServiceSection>)
                }
            </Row>
        </div>
    );
};

export default Services;