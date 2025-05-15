import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/main.css';

export default function karirDetail() {
  return (
    <div>
      <header className='homepage'>
        <Container>
          <Row className='header-box pt-lg-5'>
            <Col className='ps-0'>
              <h1 className='profile'>
                Jelajahi Karir
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
      <div className='karir-detail-wrapper'>
        <h1>Junior Programmer</h1>
        <h1 className='fs-5 mb-5'>Diskominfotik - Tenaga Ahli Tnologi Informasi</h1>
        <p><img src='/public/icon-lokasi.png' /><span className='ms-3'>Jakata Pusat, DKI Jakarta</span></p>
        <p><img src='/public/icon-kalender.png' /><span className='ms-3'>Diposting Sehari yang lalu  •  Jumlah lowongan : 1</span></p>
        <p><img src='/public/icon-batas.png' /><span className='ms-3'>Batas waktu lamaran 1 Januari 2030</span></p>
        <div>
          <h1 className='mt-5'>Persyaratan</h1>
          <ul className='mt-4'>
            <li>Pendidikan Jurusan Teknik Informatika/Teknik Komputer/ Manajemen Informatika/ Sistern Informasi/ Sistem Komputer/ Ilmu Komputer dengan IPK Min. 3.0 (PTS)/2.75 (PTN).</li>
            <li>S1 pengalaman 1 tahun dibidangnya, diutamakan yang pernah bekerja di pemerintahan.</li>
            <li>Memiliki sertifikasi pelatihan Programmer.</li>
          </ul>
          <h1 className='mt-5'>Kualifikasi</h1>
          <ul className='mt-4'>
            <li>Menguasai Sistem Operasi Linux</li>
            <li>Menguasai Bahasa Pemrograman PHP dengan pemahaman yang baik tentang sintaks, fungsi dan manajemen database.</li>
            <li>Menguasai Bahasa Pemrograman jQuery, CSS, JavaScript dan konsep dasar pemrograman berbasis event-driven.</li>
            <li>Menguasai framework PHP (Laravel dan Codeigniter) dan framework JavaScript (React.js, Vue.js atau Node.js)</li>
            <li>Memahami penggunaan RESTful API dan integrasi dengan frontend/backend.</li>
            <li>Memahami konsep Object-Oriented Programming (OOP) dan MVC (Model View Controller).</li>
            <li>Menguasai Basis Data Oracle, Postgre dan MySQL.</li>
            <li>Menguasal Konsep Integrasi Sistem Informasi,</li>
            <li>Memiliki kemampuan menggunakan code versioning GIT</li>
          </ul>
          <Button style={{ backgroundColor: '#7C1F15', border: 'none', marginLeft: '15px' }} className='mt-4'>Daftar Sekarang</Button>
        </div>
      </div>
    </div>
  )
}