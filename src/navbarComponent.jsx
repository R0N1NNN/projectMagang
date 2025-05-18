import { Navbar, Container, Nav, NavDropdown, Collapse, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './css/main.css';

function NavbarComponent() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <Navbar expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="/projectMagang/">
          <img
            src="./logo.png"
            alt="CSIRT Logo"
            height='70px'
            width='auto'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-main">

            <NavLink to="/projectMagang/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Beranda</NavLink>
            <NavLink to="/projectMagang/profile" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Profile</NavLink>

            <NavDropdown title="Informasi & Edukasi" id="basic-nav-dropdown" className="menu-dark" renderMenuOnMount={true}>
              <div className="dropdown-grid-wrapper">
                <NavLink to="/projectMagang/berita" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src='./drop-berita.png' />Berita</NavLink>
                <NavLink to="/projectMagang/event" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src='./drop-event.png' />Event</NavLink>
                <NavLink to="/projectMagang/panduan" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src='./drop-panduan.png' />Panduan & Infografis</NavLink>
                <NavLink to="/projectMagang/kegiatan" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src='./drop-kegiatan.png' />Kegiatan</NavLink>
                <NavLink to="/projectMagang/karir" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src='./drop-karir.png' />Karir</NavLink>
                <NavLink to="/projectMagang/statistik" className={({ isActive }) => isActive ? "dropdown-item active-link" : "dropdown-item"}><img src='./drop-statistik.png' />Statistik</NavLink>
              </div>
            </NavDropdown>

            <NavLink to="/projectMagang/rfc" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>RFC2350</NavLink>
            <NavLink to="/projectMagang/laporan" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Pelaporan Insiden</NavLink>
            <NavLink to="/projectMagang/kontak" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Kontak Kami</NavLink>

          </Nav>
          <div className='input-group'>
            <input type="text" placeholder='Search' className="search-input" />
            <i class="fa-solid fa-magnifying-glass" style={{ color: 'black' }}></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
