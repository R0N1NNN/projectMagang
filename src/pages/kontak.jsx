import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { cardKontak, faq } from '../datapages/index.jsx';

function kontak() {
  return (
    <div className='kontak-wrapper'>
      <header className='homepage'>
        <Container>
          <Row className='header-box pt-lg-5'>
            <Col className='ps-0'>
              <h1 className='profile'>
                Hubungi Kami
              </h1>
            </Col>
            <Col className="position-relative">
              <img
                src={`${import.meta.env.BASE_URL}icon-kontak.png`}
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>

      <div className='kontak-wrapper'>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h1 className="fs-1 fw-bold">Jakarta Prov-CSIRT</h1>
            <p style={{ fontSize: '22px', textAlign: 'justify' }}>
              Bidang Siber, Sandi dan Aplikasi Diskominfotik Provinsi DKI Jakarta.
              Balaikota Blok H Lantai 13 Jl. Medan Merdeka Selatan 8-9, Jakarta Pusat 10110.
            </p>
          </Col>
          <Col lg={6}>
            <iframe
              className="w-100"
              style={{ height: '400px', border: '0', borderRadius: '12px' }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Balaikota+Blok+H+Lantai+13+Jl.+Medan+Merdeka+Selatan+8-9%2C+Jakarta+Pusat+10110&z=15&output=embed"
            ></iframe>
          </Col>
        </Row>
        <div className="d-flex mt-5 gap-5 flex-wrap justify-content-center px-5">
          {cardKontak.map((kontak) => (
            <a
              href={kontak.url}
              key={kontak.id}
              className="kontak-card-modern text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="kontak-icon-modern">
                <img src={kontak.icon} alt={kontak.title} style={{ width: 48, height: 48 }} />
              </div>
              <div className="fw-bold mb-1" style={{ fontSize: 20 }}>{kontak.title}</div>
              <div className="kontak-desc-modern">{kontak.desc}</div>
            </a>
          ))}
        </div>
        <div style={{ fontSize: '48px', fontWeight: 'bold', padding: '5px' }} className='text-center rounded-4 mt-5'>
          Pertanyaan Yang Sering Ditanyakan
        </div>
        <Row className="row-cols-1 row-cols-md-2 g-2 mt-5">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion className="shadow-sm rounded-4">
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </div>

    </div>
  )
}

export default kontak