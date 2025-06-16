import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { cardProfile } from '../datapages/index';
import '../css/main.css';

export default function profile() {
  return (
    <div>
      <header className='homepage'>
        <Container>
          <Row className='header-box pt-lg-5'>
            <Col className='ps-0'>
              <h1 className='profile'>
                Profile
              </h1>
            </Col>
            <Col className="position-relative">
              <img
                src={`${import.meta.env.BASE_URL}icon-profile.png`}
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className='halaman-profile'>
        <div className='hero-video'>
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <p className='desc-profile mt-5' style={{ textAlign: 'justify', lineHeight: '2' }}>
                  <span className='fw-bold' style={{ color: 'red' }}>Computer Security Incident Response Team (CSIRT)</span> merupakan unit yang bertanggung jawab dalam penanganan
                  insiden keamanan siber, baik secara
                  preventif maupun responsif. Melalui situs ini, CSIRT menyediakan informasi terkini terkait ancaman siber,
                  prosedur mitigasi,
                  layanan konsultasi keamanan, serta mekanisme pelaporan insiden. Tujuannya adalah untuk meningkatkan
                  ketahanan siber dan menjaga integritas, kerahasiaan,
                  serta ketersediaan sistem informasi di lingkungan yang dilayani.
                </p>
              </Col>
              <Col md={6} className="text-center">
                <iframe
                  className='mt-3'
                  width="100%"
                  height="380"
                  src="https://www.youtube.com/embed/MGFo7hpZ0Q0?si=x0EFisL1YXeQkbXk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen>
                </iframe>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="halaman-card-profile">
          <Container>
            <h2 className="text-center fw-bold mb-4">Living our values every day</h2>
            <p className="text-center mb-5">These values guide us on our mission to build a safer world.</p>
            <Row className="gap-3 justify-content-center">
              {cardProfile.map((card) => (
                <Card className="border-0" style={{ backgroundColor: 'transparent', width: '27rem' }}>
                  <Card.Img variant="top" src={card.img} className="rounded-2 mx-auto img-card-profile" />
                  <Card.Body>
                    <Card.Title className="fw-bold mt-3 mx-auto" style={{ color: 'white' }}>{card.title}</Card.Title>
                    <Card.Text className="mx-auto mb-3" style={{ color: 'white' }}>{card.desc}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Row>
          </Container>
        </div >
        <div className='visi-misi-modern'>
          <Container>
            <Row className="justify-content-center g-4">
              <Col xs={12} md={6}>
                <div className="visi-misi-card">
                  <h2 className="visi-misi-title">Visi</h2>
                  <p className="visi-misi-desc">
                    CSIRT adalah mewujudkan pengelolaan keamanan informasi yang baik, sesuai dengan prinsip ketersediaan, keutuhan, dan kerahasiaan.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="visi-misi-card">
                  <h2 className="visi-misi-title">Misi</h2>
                  <p className="visi-misi-desc">
                    Misi CSIRT meliputi penanganan insiden keamanan siber, pencegahan, edukasi, dan peningkatan kesadaran akan keamanan informasi.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div >
    </div >
  )
};