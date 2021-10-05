import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <Row>
                <Col className="column">
                    <h3>Discover EDUcare</h3>
                    <p>The principal method of human communication, consisting of words used in a structured and conventional way and conveyed by speech, writing, or gesture.</p>
                </Col>
                <Col className="column">
                    <h3>Explore Your Membership</h3>
                    <p>The principal method of human communication, consisting of words used in a structured way. method of human communication, consisting</p>
                </Col>
                <Col className="column">
                    <h3>Make EDUcare Yours</h3>
                    <p>The principal method of human communication, consisting of words used in a structured and conventional way and conveyed by speech, writing, or gesture.</p>
                </Col>
            </Row>
            <Row>
                <Col><h1 style={{ marginTop: '20px' }}>EDUCare</h1></Col>
                <Col style={{ textAlign: 'right', fontSize: '19px' }}>
                    <p style={{ marginBottom: '-4px' }}>+888 00 11 333 222 888 <i className="fas fa-phone-square-alt ms-2"></i></p>
                    <p style={{ marginBottom: '-4px' }}>help@educare.com <i className="fas fa-envelope ms-2"></i></p>
                    <p>facebook/educare/help <i className="fab fa-facebook-square ms-2"></i></p>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;