import { Navbar, Container, Nav, NavDropdown, Collapse, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './css/main.css';

function NavbarComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [toggle, setToggle] = useState(false);
  const [cartCount, setCartCount] = useState(0);


  const toggleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const syncLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const email = localStorage.getItem('userEmail') || '';
      setIsLoggedIn(loggedIn);
      setUserEmail(email);
    };

    syncLoginStatus();
    window.addEventListener('storage', syncLoginStatus);

    const syncCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    };

    syncCartCount();
    window.addEventListener("storage", syncCartCount);

    return () => {
      window.removeEventListener('storage', syncLoginStatus);
      window.removeEventListener('storage', syncCartCount);
    };
  }, []);

  const handleLogout = () => {
    // Hapus hanya status login, BUKAN akun-akun yang tersimpan
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");

    window.dispatchEvent(new Event("storage")); // supaya navbar update
    window.location.reload();
  };

  return (
    <Navbar expand="lg" fixed='top' variant='dark'>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="CSIRT Logo"
            height='40px'
            width='auto'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-main">

            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Beranda</NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Profile</NavLink>

            <NavDropdown title="Informasi & Edukasi" id="basic-nav-dropdown" className="menu-dark" renderMenuOnMount={true}>
              <div className="dropdown-grid-wrapper">
                <NavLink to="/berita" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src={`${import.meta.env.BASE_URL}drop-berita.png`} />Berita</NavLink>
                <NavLink to="/beritaSubs" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src={`${import.meta.env.BASE_URL}drop-berita.png`} />Berita Terkini</NavLink>
                <NavLink to="/event" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src={`${import.meta.env.BASE_URL}drop-event.png`} />Event</NavLink>
                <NavLink to="/panduan" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src={`${import.meta.env.BASE_URL}drop-panduan.png`} />Panduan & Infografis</NavLink>
                <NavLink to="/kegiatan" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src={`${import.meta.env.BASE_URL}drop-kegiatan.png`} />Kegiatan</NavLink>
                <NavLink to="/karir" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src={`${import.meta.env.BASE_URL}drop-karir.png`} />Karir</NavLink>
                <NavLink to="/statistik" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src={`${import.meta.env.BASE_URL}drop-statistik.png`} />Statistik</NavLink>
                <NavLink to="/OnlineCyberTools" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src={`${import.meta.env.BASE_URL}tools.svg`} />Cyber Tools</NavLink>
              </div>
            </NavDropdown>

            <NavLink to="/rfc" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>RFC2350</NavLink>
            <NavLink to="/laporan" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Pelaporan Insiden</NavLink>
            <NavLink to="/kontak" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Kontak Kami</NavLink>

          </Nav>
          <div className="d-flex align-items-center gap-3">
            {/* Tombol Login atau Dropdown Akun */}
            {isLoggedIn ? (
              <NavDropdown title={`Akun (${userEmail})`} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavLink to="/login" className="btn button-login">Login</NavLink>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
