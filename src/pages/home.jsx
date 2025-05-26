import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import NavigateButton from "../components/NavigateButton";

import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { semuaBerita } from '../datapages';

function Home() {

  const kegiatan = [
    {
      id: 1,
      image: './kegiatan1.png',
      title: 'Acara bimtek siberchat tanggal 23 maret 2021',
      tanggal: '2024-12-20'
    },
    {
      id: 2,
      image: './kegiatan2.png',
      title: 'Pelatihan Malware Analysis',
      tanggal: '2024-12-20'
    },
    {
      id: 3,
      image: './kegiatan3.png',
      title: 'Seminar drill test',
      tanggal: '2024-12-20'
    }
  ];

  const latestBerita = semuaBerita[semuaBerita.length - 1];


  return (
    <div>
      <header className='homepage'>
        <Container>
          <Row className="header-box">
            <Col className='mt-5 animate__animated animate__fadeInDown animate__delay-0.5s'>
              <h1 className="mb-4">
                Jangan Biarkan <span>Ancaman Siber</span>
                <br />Menggangu Aktivitasmu<br />
                Ayo Segera Laporkan!
              </h1>
              <p
                className="mb-4"
              >
                DKI Prov CSIRT merupakan tim tanggap insiden keamanan informasi
                yang dibentuk untuk menangani,
                merespons, dan membantu penyelesaian insiden keamanan siber di lingkungan
                Pemerintah Provinsi DKI Jakarta.
              </p>
              <NavigateButton to="/laporan" className="button-laporkan btn-lg rounded-1 me-2">
                Laporkan
              </NavigateButton>
            </Col>
            <Col>
              <img
                src="./icon-nav.png"
                alt="hero-img"
                className="hero-img ms-5"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Link to={`/berita/${latestBerita?.id}`} className="text-decoration-none">
          <div className='news-group'>
            <div className="news-title">
              <div style={{ marginBottom: '20px', marginTop: '40px' }}>
                <h3>BERITA TERBARU</h3>
              </div>
              <h2 className='me-5'>{latestBerita?.title}</h2>
            </div>
            <div className="news-content me-5">
              <p>
                {latestBerita?.desc}
              </p>
            </div>
            <div className="news-image">
              <img src={latestBerita?.image} alt="AI Security" className="news-img" />
            </div>
          </div>
        </Link>
      </Container>

      {/* Neon Statistic & Motivation Section */}
      <div className="neon-stats-section my-5">
        <Container>
          <div className="neon-stats-grid">
            <div className="neon-stats-card">
              <span className="neon-stats-number">50%</span>
              <span className="neon-stats-desc">
                and more of significant cyber incidents are caused by a lack of skills or human failure.
              </span>
            </div>
            <div className="neon-stats-card neon-stats-card-graph">
              <span className="neon-stats-desc">
                Beat the odds.<br />Optimize your performance.
              </span>
              <svg className="neon-graph-svg" viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 50 Q30 60 60 40 Q80 20 120 40 Q160 60 180 30 Q200 10 240 30 Q280 50 320 40" stroke="#B6FF3B" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>
        </Container>
      </div>
      {/* End Neon Statistic & Motivation Section */}

      <div className="halaman-home-stats text-center">
        <Container>
          <h1 className="fw-bold">Kami Sudah Menyelesaikan Banyak Kasus Serangan Siber</h1>
          <p className="mb-5">Berikut Statistik Terkait Seberapa Banyak Kasus Serangan Siber yang Telah Diselesaikan</p>
          <Row className="justify-content-center">
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
        </Container>
      </div>
      <div className='mt-5'>
        <Container>
          <div className="halaman-rekrut">
            <h1 className='rekrut-title'>
              Rekrutmen!
              <br />
              Tenaga Ahli Teknologi Informasi
            </h1>
            <div className="d-flex align-items-center" style={{ height: "200px" }}>
              <h4 className="rekrut-content m-0">
                Bidang Siber, Sandi dan Aplikasi Dinas Komunikasi, Informatika
                dan Statistik Provinsi DKI Jakarta, membuka kesempatan kepada Warga
                Negara Indonesia untuk mengikuti seleksi Tenaga Ahli Teknologi
                Informatika.
              </h4>
            </div>
            <NavigateButton to='/karir' className="button-news rounded-2 px-4">Lihat Posisi Terbuka<i class="fa-solid fa-arrow-right ms-3"></i></NavigateButton>
          </div>
        </Container>
      </div>
      <div style={{ paddingTop: '150px' }}>
        <Container className='d-flex justify-content-between align-items-center mx-auto mb-4 title-kegiatan'>
          <h1 className='fw-bold text-start me-5'>Kegiatan Terbaru</h1>
          <Link to='/kegiatan' className='text-decoration-none kegiatan-lainnya'>
            Jelajahi Kegiatan Lainnya<i className="fa-solid fa-chevron-right icon-kegiatan-lain ms-2"></i>
          </Link>
        </Container>
        <div className='kegiatan-wrapper'>
          {kegiatan.map((item, index) => (
            <div className='kegiatan-group' key={index}>
              <Card style={{ backgroundColor: 'transparent', border: 'none' }} className="rounded-4">
                <Card.Img variant="top" src={item.image} className="rounded-3" style={{ height: '220px' }} />
                <Card.Body>
                  <h1 className='mt-2' style={{ fontSize: '18px', color: '#bfcbe7' }}>KEGIATAN</h1>
                  <Card.Title className='title-berita mt-3' style={{ color: 'white' }}>
                    {item.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}

export default Home;
