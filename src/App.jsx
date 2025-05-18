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
        <Route path="/projectMagang/" element={<Home />} />
        <Route path="/projectMagang/profile" element={<Profile />} />
        <Route path="/projectMagang/berita" element={<Berita />} />
        <Route path="/projectMagang/berita/:id" element={<BeritaDetail />} />
        <Route path="/projectMagang/berita/halaman/:halaman" element={<Berita />} />
        <Route path="/projectMagang/event" element={<Event />} />
        <Route path="/projectMagang/panduan" element={<Panduan />} />
        <Route path="/projectMagang/kegiatan" element={<Kegiatan />} />
        <Route path='/projectMagang/kegiatan/:halaman' element={<Kegiatan />} />
        <Route path='/projectMagang/karir' element={<Karir />} />
        <Route path='/projectMagang/karirDetail' element={<KarirDetail />} />
        <Route path='/projectMagang/rfc' element={<RFC />} />
        <Route path='/projectMagang/laporan' element={<Laporan />} />
        <Route path='/projectMagang/kontak' element={<Kontak />} />
        <Route path='/projectMagang/statistik' element={<Statistik />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
