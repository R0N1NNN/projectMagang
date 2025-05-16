import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cardStatistik } from '../datapages/index.jsx';

export default function Statistik() {
  return (
    <div>
      <header className='homepage'>
        <Container>
          <Row className='header-box pt-lg-5'>
            <Col className='ps-0'>
              <h1 className='profile text-start'>
                Statistik
              </h1>
            </Col>
            <Col className="position-relative">
              <img
                src="./icon-statistik.png"
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="halaman-stats text-center mt-5">
        <Container>
          <h1 className="fw-bold">Kami Sudah Menyelesaikan Banyak Kasus Serangan Siber</h1>
          <p className="mb-5">Berikut Statistik Terkait Seberapa Banyak Kasus Serangan Siber yang Telah Diselesaikan</p>
          <Row className="justify-content-center kasus-stats">
            <Col md={3} className="mb-4">
              <h2 className="fw-bold">437 Rb</h2>
              <p>Serangan Siber Yang Dihentikan</p>
            </Col>
            <Col md={3} className="mb-4">
              <h2 className="fw-bold">106 Rb</h2>
              <p>URL Berbahaya Yang Diblokir</p>
            </Col>
            <Col md={3} className="mb-4">
              <h2 className="fw-bold">112 Rb</h2>
              <p>Objek Berbahaya Yang Dinetralkan</p>
            </Col>
          </Row>

          {/* Statistik Data Section */}
          <div className="statistik-data-section my-5">
            <h2 className="fw-bold statistik-data-title">Statistik Data Insiden Siber Yang Sudah Berhasil Kami Tangani</h2>
            <p>Dalam Periode Waktu 2015 - 2025</p>
            <div className="statistik-data-grid">
              {cardStatistik.map((card) => (
                <div className="statistik-data-card" key={card.id}>
                  <div className="statistik-data-icon">
                    <img src={card.icon} alt="" />
                  </div>
                  <div className="statistik-data-value">{card.desc}</div>
                  <h2 className="statistik-data-label">{card.title}</h2>
                </div>
              ))}
            </div>
          </div>
          {/* End Statistik Data Section */}

          <div className="detailed-stats" style={{ padding: '50px 20px 100px 20px' }}>
            <h2 className="fw-bold" style={{ marginTop: '50px' }}>Detail Statistik Pencegahan</h2>
            <p style={{ marginBottom: '70px' }}>Berikut Adalah Statistik Detail Pencegahan Serangan Siber Yang Sudah Dilakukan Oleh Kami</p>
            <Row className="align-items-center mb-4 row-stats">
              <Col>
                <h5 className="text-start">Efektivitas Firewall</h5>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }}>90%</div>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center mb-4 row-stats">
              <Col>
                <h5 className="text-start">Deteksi Malware</h5>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }}>75%</div>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center mb-4 row-stats">
              <Col>
                <h5 className="text-start">Pencegahan Phishing</h5>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '85%' }}>85%</div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}