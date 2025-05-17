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
        <Route path="/projectmagang/" element={<Home />} />
        <Route path="/projectmagang/profile" element={<Profile />} />
        <Route path="/projectmagang/berita" element={<Berita />} />
        <Route path="/projectmagang/berita/:id" element={<BeritaDetail />} />
        <Route path="/projectmagang/berita/halaman/:halaman" element={<Berita />} />
        <Route path="/projectmagang/event" element={<Event />} />
        <Route path="/projectmagang/panduan" element={<Panduan />} />
        <Route path="/projectmagang/kegiatan" element={<Kegiatan />} />
        <Route path='/projectmagang/kegiatan/:halaman' element={<Kegiatan />} />
        <Route path='/projectmagang/karir' element={<Karir />} />
        <Route path='/projectmagang/karirDetail' element={<KarirDetail />} />
        <Route path='/projectmagang/rfc' element={<RFC />} />
        <Route path='/projectmagang/laporan' element={<Laporan />} />
        <Route path='/projectmagang/kontak' element={<Kontak />} />
        <Route path='/projectmagang/statistik' element={<Statistik />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
