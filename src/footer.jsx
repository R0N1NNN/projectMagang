import React from 'react'
import { Col, Container, Row, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { BsInstagram, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <Container>
      <div className='footer'>
        <Row className='footer-content mt-3'>
          <Col lg={5} md={12}>
            <Navbar.Brand href="/">
              <img
                src="./logo.png"
                alt="CSIRT Logo"
                className='image-footer'
              />
            </Navbar.Brand>
            <h1 className='footer-desc'>DKI Prov CSIRT - CSIRT Computer Security Incident Response
              Team ditetapkan oleh Sekretaris Daerah Provinsi DKI Jakarta
              dalam Keputusan Penjabat Sekretaris Daerah DKI Jakarta Nomor:
              41 Tahun 2020 Tentang Computer Security Incident
              Response Team.
            </h1>
          </Col>
          <Col className="link-footer d-flex flex-column">
            <h5 className="fw-bold title-footer mb-4">Link</h5>
            <Link to="profile">Profile</Link>
            <Link to="berita">Berita</Link>
            <Link to="event">Event</Link>
            <Link to="kontak">Kontak Kami</Link>
            <div className='mt-3 icon-footer'>
              <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="me-3" style={{ display: 'inline-block' }}>
                <BsInstagram style={{ width: '30px', height: 'auto' }} />
              </a>
              <a href="https://youtube.com" target="_blank" aria-label="YouTube" className="me-3" style={{ display: 'inline-block' }}>
                <BsYoutube style={{ width: '30px', height: 'auto' }} />
              </a>
            </div>
          </Col>
          <Col lg={5} md={12}>
            <h1 className='title-footer mb-4'>JakartaProv-CSIRT</h1>
            <h2 className='footer-desc'>Bidang Siber, Sandi dan Aplikasi Diskominfotik
              Provinsi DKI Jakarta Balaikota Blok H Lantai 13, JL Merdeka Selatan 8-9,
              Jakarta Pusat 10110
              <br />
              Contact
              <br />
              +62 813 8887 0152
              <br />
              csirt@jakarta.go.id
            </h2>
          </Col>
          <h1 className='footer-hak mt-4'> © 2025 Hak Cipta JakartaProv-CSIRT</h1>
        </Row>
      </div>
    </Container>
  )
}

export default Footer;
