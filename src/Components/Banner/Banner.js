import React from 'react';
import './Banner.css'
import background from './background.jpeg'
import { Col, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="overlay">
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} className="banner">
                <Row>
                    <Col className="banner-title">
                        <h1>Welcome To <br />EDUCare</h1>
                        <p>Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments.</p>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        </div>
    );
};

export default Banner;