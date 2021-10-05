import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCart.css'

const ServiceCart = (props) => {
    const { name, image, fee, descriptionMini } = props.service;

    return (
        <Col>
            <Card className="custom-card">
                <div style={{ textAlign: 'center' }}>
                    <img src={image} className="img-fluid custom-img" alt="" />
                </div>
                <div className="card-body">
                    <h2>{name}</h2>
                    <p style={{ fontSize: '21px' }}>Course Fee: <span style={{
                        fontWeight: 'bold'
                    }}>${fee}</span></p>
                    <p>{descriptionMini}</p>
                    <Link to="/service">
                        <button className="btn-regular">Learn More</button>
                    </Link>
                </div>
            </Card>
        </Col>
    );
};

export default ServiceCart;