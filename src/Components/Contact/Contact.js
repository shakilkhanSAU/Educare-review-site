import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-us">
            <Row>
                <Col className="page-image">
                    <img src="https://lh3.googleusercontent.com/-hCX7H3pl3K4/YVwPWUpPMLI/AAAAAAAACPg/q8CcN8gvNW40_fguh8mE91UezSrjwAZqwCLcBGAsYHQ/s16000/Mobile%2BMarketing-bro.png" alt="" />
                </Col>
                <Col className="page-info">
                    <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>Contact Us</h1>
                    <p style={{ fontSize: '20px' }}>Undergraduate education is the post-secondary education previous to the postgraduate education. It includes all the academic programs up to the level of a bachelor's degree.</p>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;