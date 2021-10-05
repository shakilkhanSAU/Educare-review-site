import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className="about-us">
            <Row>
                <Col className="page-info">
                    <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>About Us</h1>
                    <p style={{ fontSize: '20px' }}>Undergraduate education is the post-secondary education previous to the postgraduate education. It includes all the academic programs up to the level of a bachelor's degree.</p>
                </Col>
                <Col className="page-image">
                    <img src="https://lh3.googleusercontent.com/-l6ECD32MP8M/YVwPXzLlyII/AAAAAAAACPk/_mGQTeUIVCEf8n9OFaiJGs1lEGvi8iLVgCLcBGAsYHQ/s16000/Teaching-pana.png" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default About;