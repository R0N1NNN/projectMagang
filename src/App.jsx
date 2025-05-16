import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarComponent from './navbarComponent.jsx';
import Footer from './footer.jsx';

// Halaman
import Home from './pages/home.jsx';
import Profile from './pages/profile.jsx';
import Berita from './pages/berita.jsx';
import BeritaDetail from './pagesNumber/beritaDetail.jsx';
import Event from './pages/event.jsx';
import Panduan from './pages/panduan.jsx';
import Kegiatan from './pages/kegiatan.jsx';
import Karir from './pages/karir.jsx';
import KarirDetail from './pagesNumber/karirDetail.jsx';
import RFC from './pages/rfc.jsx';
import Laporan from './pages/laporan.jsx';
import Kontak from './pages/kontak.jsx';
import Statistik from './pages/statistik.jsx';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <NavbarComponent />
      <Routes>
        <Route path="/projectmagang" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<BeritaDetail />} />
        <Route path="/berita/halaman/:halaman" element={<Berita />} />
        <Route path="/event" element={<Event />} />
        <Route path="/panduan" element={<Panduan />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path='/kegiatan/:halaman' element={<Kegiatan />} />
        <Route path='/karir' element={<Karir />} />
        <Route path='/karirDetail' element={<KarirDetail />} />
        <Route path='/rfc' element={<RFC />} />
        <Route path='/laporan' element={<Laporan />} />
        <Route path='/kontak' element={<Kontak />} />
        <Route path='/statistik' element={<Statistik />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
