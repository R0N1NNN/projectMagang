import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function rfc() {
  return (
    <div>
      <header className='homepage'>
        <Container>
          <Row className='header-box pt-lg-5'>
            <Col className='ps-0'>
              <h1 className='profile'>
                RFC2350
              </h1>
            </Col>
            <Col className="position-relative">
              <img
                src="./icon-rfc.png"
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className='rfc-wrapper' style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='rfc' style={{ border: '1px solid white', height: '100vh', width: '100%' }}>
          <iframe
            src="./rfc2350.pdf"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="PDF Viewer"
          />
        </div>
      </div>
    </div >
  )
}