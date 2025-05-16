import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { cardKarir } from "../datapages/index.jsx";
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

function karir() {
  const [search, setSearch] = useState('');
  const filteredKarir = cardKarir.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.lokasi.toLowerCase().includes(search.toLowerCase()) ||
    item.posisi.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <header className='homepage'>
        <Container>
          <Row className='header-box pt-lg-5'>
            <Col className='ps-0'>
              <h1 className='profile'>
                Karir
              </h1>
            </Col>
            <Col className="position-relative">
              <img
                src="./icon-profile.png"
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className='halaman-karir py-5'>
        <Container>
          <div className="karir-header text-center mb-5">
            <h2 className="fw-bold karir-title">Temukan Karir Impianmu</h2>
            <p className="karir-desc text-secondary mb-4">
              Jelajahi berbagai peluang karir menarik dan bergabunglah bersama kami untuk berkembang dan berkontribusi lebih baik.
            </p>
            <div className='input-karir mx-auto mb-4 d-flex align-items-center'>
              <span className="material-symbols-outlined icon-search-karir">search</span>
              <input
                type="text"
                placeholder='Cari posisi, lokasi, atau kata kunci...'
                className="search-input"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
          <Row className="karir-grid gy-4 gx-4 justify-content-center">
            {filteredKarir.length === 0 && (
              <div className="text-center text-secondary py-5">Tidak ada lowongan ditemukan.</div>
            )}
            {filteredKarir.map((item, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} lg={3}>
                <Card className="karir-card rounded-4 shadow-sm h-100 border-0">
                  <div className="karir-img-wrapper">
                    <Card.Img
                      variant="top"
                      src={item.icon}
                      className="karir-img rounded-3"
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <h5 className='title-karir fw-bold mb-2'>{item.title}</h5>
                    <div className='d-flex align-items-center mb-1'>
                      <span className='lokasi-karir'>{item.lokasi}</span>
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                      <span className='posisi-karir'>{item.posisi}</span>
                    </div>
                    <Link to='/karirDetail'>
                      <Button className='button-karir mt-auto align-self-start'>
                        Lihat Detail <span className='ms-2'><BsArrowRight /></span>
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default karir