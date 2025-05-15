import React, { useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import { semuaBerita, halamanBerita } from "../datapages/index.jsx";
import { Link, useLocation, useParams } from "react-router-dom";
import "../css/main.css";

function berita() {
  const [search, setSearch] = useState('');
  const filteredBerita = semuaBerita.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.tanggal.toLowerCase().includes(search.toLowerCase())
  );

  const location = useLocation();
  const currentPath = location.pathname;

  const { halaman: paramHalaman } = useParams();
  const halaman = parseInt(paramHalaman) || 1;

  return (
    <div>
      <header className="homepage">
        <Container>
          <Row className="header-box">
            <Col>
              <h1 className="profile text-start">Berita</h1>
            </Col>
            <Col>
              <img
                src="/public/icon-berita.png"
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="halaman-berita">
        <div className="input-berita" style={{ marginBottom: '100px' }}>
          <input type="text" placeholder="Cari Berita" className="search-input" value={search} onChange={e => setSearch(e.target.value)} />
          <span className="material-symbols-outlined icon">search</span>
        </div>
        <div className="berita-grid">
          {filteredBerita.length === 0 && (
            <div className="text-center text-secondary py-5">Tidak ada lowongan ditemukan.</div>
          )}
          {filteredBerita.map((berita) => (
            <div className="berita-card" key={berita.id}>
              <Link
                to={`/berita/${berita.id}`}
                className="text-decoration-none text-dark berita-link"
              >
                <img
                  src={berita.image}
                  alt="berita"
                  className="berita-card-img"
                />
                <div className="berita-card-body">
                  <h4 className="berita-card-title">{berita.title}</h4>
                  <h6 className="berita-card-date">{berita.tanggal}</h6>
                  <p className="berita-card-desc">
                    {berita.deskripsi
                      ? berita.deskripsi.slice(0, 120) + "..."
                      : "Badan Siber dan Sandi Negara (BSSN) mengingatkan pengguna untuk memperbarui aplikasi terkait insiden keamanan siber terbaru..."}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center pagination-wrapper">
          <Pagination className="mt-4">
            <Pagination.First
              onClick={() => (window.location.href = '/berita/halaman/1')}
              disabled={(parseInt(halaman) || 1) === 1}
            />
            <Pagination.Prev
              onClick={() => {
                const current = parseInt(halaman) || 1;
                const prev = current - 1;
                if (prev === 1) {
                  window.location.href = '/berita';
                } else if (prev > 1) {
                  window.location.href = `/berita/halaman/${prev}`;
                }
              }}
              disabled={(parseInt(halaman) || 1) === 1}
            />

            <Pagination.Item
              href="/berita"
              active={currentPath === '/berita'}
            >
              1
            </Pagination.Item>

            {halamanBerita.map((berita) => {
              const path = `/berita/halaman/${berita.halaman}`;
              return (
                <Pagination.Item
                  key={berita.halaman}
                  href={path}
                  active={currentPath === path}
                >
                  {berita.halaman}
                </Pagination.Item>
              );
            })}

            <Pagination.Next
              onClick={() => {
                const current = parseInt(halaman) || 1;
                const next = current + 1;
                const max = halamanBerita[halamanBerita.length - 1].halaman;
                if (next <= max) {
                  window.location.href = next === 1 ? '/berita' : `/berita/halaman/${next}`;
                }
              }}
              disabled={(parseInt(halaman) || 1) === halamanBerita[halamanBerita.length - 1].halaman}
            />

            <Pagination.Last
              onClick={() => {
                const lastPage = halamanBerita[halamanBerita.length - 1].halaman;
                window.location.href = `/berita/halaman/${lastPage}`;
              }}
              disabled={(parseInt(halaman) || 1) === halamanBerita[halamanBerita.length - 1].halaman}
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default berita;
