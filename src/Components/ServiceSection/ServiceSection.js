import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceSection.css'

const ServiceSection = (props) => {
    const { name, image, fee, descriptionMini, description, enrolled } = props.service;
    return (
        <Card>
            <div className="blog-img">
                <img src={image} alt="" />
            </div>
            <Card.Body>
                <div className="blog-title">
                    <h1 style={{ color: 'teal' }}>{name}</h1>
                    <p style={{ fontSize: '21px' }}>Total Enrolled Students: <span style={{ fontWeight: 'bold' }}>{enrolled}</span></p>
                    <p style={{ fontSize: '20px', marginTop: '-9px' }}>Course Fee: <span style={{ fontWeight: 'bold' }}>${fee}</span></p>
                </div>
                <div className="description">
                    <p>{descriptionMini}</p>
                    <p>{description.slice(0, 500)}</p>
                </div>
                <Link to="/service">
                    <button className="btn-regular">Enroll Now</button>
                </Link>

            </Card.Body>
        </Card>
    );
};

export default ServiceSection;