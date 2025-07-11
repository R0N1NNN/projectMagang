import './App.css';
import { Routes, Route } from 'react-router-dom';

import WidgetManager from './utils/WidgetManager.jsx';

import MainLayout from './pages/MainLayout.jsx';
import AuthLayout from './pages/AuthLayout.jsx';

// Halaman
import Home from './pages/home.jsx';
import Profile from './pages/profile.jsx';
import Berita from './pages/berita.jsx';
import BeritaDetail from './pagesNumber/beritaDetail.jsx';
import BeritaSubs from './pages/beritaSubs.jsx';
import BeritaSubsDetail from './pages/beritaSubsDetail.jsx';
import Event from './pages/event.jsx';
import Panduan from './pages/panduan.jsx';
import Kegiatan from './pages/kegiatan.jsx';
import Karir from './pages/karir.jsx';
import KarirDetail from './pagesNumber/karirDetail.jsx';
import RFC from './pages/rfc.jsx';
import Laporan from './pages/laporan.jsx';
import Ticket from './pages/ticket.jsx'
import DetailTicket from './pages/detailTicket.jsx';
import Kontak from './pages/kontak.jsx';
import Statistik from './pages/statistik.jsx';
import Login from './pages/login.jsx';
import Verify from './pages/Verify.jsx';
import Admin from './pages/admin.jsx'
import CyberMap from './pages/Cybermap.jsx';
import OnlineCyberTools from './pages/OnlineCyberTools';

import NotFound from './components/NotFound.jsx';

function App() {
  return (
    <>
      <WidgetManager />
      <Routes>
        {/* Layout utama dengan navbar + footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:id" element={<BeritaDetail />} />
          <Route path="/berita/halaman/:halaman" element={<Berita />} />
          <Route path="/beritaSubs" element={<BeritaSubs />} />
          <Route path="/beritaSubsDetail" element={<BeritaSubsDetail />} />
          <Route path="/event" element={<Event />} />
          <Route path="/panduan" element={<Panduan />} />
          <Route path="/kegiatan" element={<Kegiatan />} />
          <Route path='/kegiatan/:halaman' element={<Kegiatan />} />
          <Route path='/karir' element={<Karir />} />
          <Route path='/karirDetail/halamanKarir/:title' element={<KarirDetail />} />
          <Route path='/rfc' element={<RFC />} />
          <Route path='/laporan' element={<Laporan />} />
          <Route path='/ticket' element={<Ticket />} />
          <Route path='/detailTicket' element={<DetailTicket />} />
          <Route path='/kontak' element={<Kontak />} />
          <Route path='/statistik' element={<Statistik />} />
          <Route path="/Cybermap" element={<CyberMap />} />
          <Route path="/OnlineCyberTools" element={<OnlineCyberTools />} />
          {/* Halaman 404 Not Found */}
          <Route path="*" element={<NotFound />} />
          {/* dan seterusnya */}
        </Route>

        {/* Layout tanpa navbar + footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
