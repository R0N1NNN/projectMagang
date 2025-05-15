import React, { useState } from 'react'
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import { kegiatanDetail, halamanKegiatan } from "../datapages/index.jsx";
import { useLocation, useParams } from 'react-router-dom';
import '../css/main.css';


function kegiatan() {
  const [search, setSearch] = useState('');
  const filteredKegiatan = kegiatanDetail.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const location = useLocation();
  const currentPath = location.pathname;

  const { halaman: paramHalaman } = useParams();
  const halaman = parseInt(paramHalaman) || 1;


  return (
    <div>
      <header className='homepage'>
        <Container>
          <Row className='header-box pt-lg-5'>
            <Col className='ps-0'>
              <h1 className='profile'>
                Kegiatan
              </h1>
            </Col>
            <Col className="position-relative">
              <img
                src="/public/icon-profile.png"
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className='halaman-kegiatan'>
        <div className="berita-header mb-5">
          <h2 className="berita-title-section fw-bold mb-2">Daftar Kegiatan</h2>
          <p className="berita-desc-section">
            Temukan berbagai kegiatan, seminar, dan event terbaru yang diadakan oleh JakartaProv-CSIRT.
          </p>
        </div>
        <div className='input-berita'>
          <input type="text" placeholder='Search' className="search-input" value={search} onChange={e => setSearch(e.target.value)} />
          <span className="material-symbols-outlined icon">search</span>
        </div>
        <div className="kegiatan-grid-custom">
          {filteredKegiatan.length === 0 && (
            <div className="text-center text-secondary py-5">Tidak ada kegiatan ditemukan.</div>
          )}
          {filteredKegiatan.map((item, idx) => (
            <div className='kegiatan-card-custom' key={idx}>
              <div className="kegiatan-img-wrapper-custom">
                <img
                  src={item.image}
                  alt={item.title}
                  className="kegiatan-img-custom"
                />
              </div>
              <div className="kegiatan-card-body-custom">
                <div className="kegiatan-card-title-custom">{item.title}</div>
                <div className="kegiatan-card-date-custom">{item.tanggal}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center pagination-wrapper">
          <Pagination className="mt-4">
            <Pagination.First
              onClick={() => (window.location.href = '/kegiatan')}
              disabled={(parseInt(halaman) || 1) === 1}
            />
            <Pagination.Prev
              onClick={() => {
                const current = parseInt(halaman) || 1;
                const prev = current - 1;
                if (prev === 1) {
                  window.location.href = '/kegiatan';
                } else if (prev > 1) {
                  window.location.href = `/kegiatan/${prev}`;
                }
              }}
              disabled={(parseInt(halaman) || 1) === 1}
            />

            <Pagination.Item
              href="/kegiatan"
              active={currentPath === '/kegiatan'}
            >
              1
            </Pagination.Item>

            {halamanKegiatan.map((kegiatan) => {
              const path = `/kegiatan/${kegiatan.halaman}`;
              return (
                <Pagination.Item
                  key={kegiatan.halaman}
                  href={path}
                  active={currentPath === path}
                >
                  {kegiatan.halaman}
                </Pagination.Item>
              );
            })}

            <Pagination.Next
              onClick={() => {
                const current = parseInt(halaman) || 1;
                const next = current + 1;
                const max = halamanKegiatan[halamanKegiatan.length - 1].halaman;
                if (next <= max) {
                  window.location.href = next === 1 ? '/kegiatan' : `/kegiatan/${next}`;
                }
              }}
              disabled={(parseInt(halaman) || 1) === halamanKegiatan[halamanKegiatan.length - 1].halaman}
            />

            <Pagination.Last
              onClick={() => {
                const lastPage = halamanKegiatan[halamanKegiatan.length - 1].halaman;
                window.location.href = `/kegiatan/${lastPage}`;
              }}
              disabled={(parseInt(halaman) || 1) === halamanKegiatan[halamanKegiatan.length - 1].halaman}
            />
          </Pagination>
        </div>
      </div>
    </div>
  )
}

export default kegiatan