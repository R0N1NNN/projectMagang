import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { cardKontak, faq } from '../datapages/index.jsx';
import { Link } from 'react-router-dom';

function kontak() {
  return (
    <div className='kontak-wrapper'>
      <header className='homepage'>
        <Container>
          <Row className='header-box pt-lg-5'>
            <Col className='ps-0'>
              <h1 className='profile text-start'>
                Hubungi Kami
              </h1>
            </Col>
            <Col className="position-relative">
              <img
                src="./icon-kontak.png"
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <div className='kontak-wrapper' style={{ padding: '100px' }}>
          <div style={{ display: 'flex', gap: '100px', alignItems: 'center' }}>
            <div style={{ width: '750px', textAlign: 'justify' }}>
              <h1 className='fs-1 fw-bold'>Jakarta Prov-CSIRT</h1>
              <p style={{ fontSize: '22px' }}>
                Bidang Siber, Sandi dan Aplikasi Diskominfotik Provinsi DKI Jakarta.
                Balaikota Blok H Lantai 13 Jl. Medan Merdeka Selatan 8-9, Jakarta Pusat 10110.
              </p>
            </div>
            <iframe
              style={{ width: '100%', height: '400px', border: '0', borderRadius: '12px', marginBottom: '50px' }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Balaikota+Blok+H+Lantai+13+Jl.+Medan+Merdeka+Selatan+8-9%2C+Jakarta+Pusat+10110&z=15&output=embed">
            </iframe>
          </div>
          <div className="d-flex mt-5 gap-5 flex-wrap justify-content-center">
            {cardKontak.map((kontak) => (
              <Link
                href={kontak.url}
                key={kontak.id}
                className="kontak-card-modern text-decoration-none"
                target="_blank"
              >
                <div className="kontak-icon-modern">
                  <img src={kontak.icon} alt={kontak.title} style={{ width: 48, height: 48 }} />
                </div>
                <div className="fw-bold mb-1" style={{ fontSize: 20 }}>{kontak.title}</div>
                <div className="kontak-desc-modern">{kontak.desc}</div>
              </Link>
            ))}
          </div>
          <div style={{ fontSize: '48px', fontWeight: 'bold', padding: '5px' }} className='text-center rounded-4 mt-5'>
            Pertanyaan Yang Sering Ditanyakan
          </div>
          <Row className="row-cols-lg-2 row-cols-1 g-2 mt-5">
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
      </Container>
    </div>
  )
}

export default kontak