import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { eventMendatang } from '../datapages/index.jsx';
import '../css/main.css';

export default function event() {
  const [search, setSearch] = useState('');
  const filteredEvent = eventMendatang.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.tanggal.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <header className='homepage'>
        <Container>
          <Row className='header-box pt-lg-5'>
            <Col className='ps-0'>
              <h1 className='profile'>
                Event
              </h1>
            </Col>
            <Col className="position-relative">
              <img
                src={`${import.meta.env.BASE_URL}icon-berita.png`}
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className='halaman-event'>
        <div className='input-berita'>
          <input type="text" placeholder='Search' className="search-input" value={search} onChange={e => setSearch(e.target.value)} />
          <span className="material-symbols-outlined icon">search</span>
        </div>
        <div className='mt-5 mb-5'>
          {filteredEvent.length === 0 && (
            <div className="text-center text-secondary py-5">Tidak ada event ditemukan.</div>
          )}
          {filteredEvent.map((event) => (
            <div className="d-flex justify-content-center rounded-3 mt-4 pt-4 event-item">
              <img src={event.image} alt="event" className="event-img rounded-2" />
              <div className="event-text">
                <h4>{event.title}</h4>
                <h6 className="mt-3 news-content">
                  Badan Siber dan Sandi Negara (BSSN) mengingatkan pengguna untuk memperbarui aplikasi terkait insiden keamanan siber terbaru...
                </h6>
                <h5 className="mt-3">{event.tanggal}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}