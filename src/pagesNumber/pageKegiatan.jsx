import { halamanKegiatan, kegiatanDetail } from '../datapages/index.jsx'; // pastikan path ini sesuai
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

function pageKegiatan() {
  const { halaman } = useParams();

  if (!halaman) {
    return <div className="container mt-5">Halaman tidak ditemukan.</div>;
  }

  const location = useLocation();
  const currentPath = location.pathname;

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
                src="/public/icon-berita.png"
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="detail-wrapper">
        {/* Center the button */}
        <div className="d-flex justify-content-center mt-5 ">
          <div className='input-berita'>
            <input type="text" placeholder='Search' className="search-input" />
            <span className="material-symbols-outlined icon">search</span>
          </div>
        </div>
        <div className='news-wrapper mt-5'>
          {kegiatanDetail.map((item, idx) => (
            <div className='infografis-group d-flex flex-column align-items-center' key={idx}>
              <Card style={{ backgroundColor: 'transparent', border: 'none' }} className="rounded-4">
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="kegiatan-img rounded-3"
                  style={{ cursor: 'pointer' }}
                />
              </Card>
              <div className="title-infografis-group">
                <h5 className='text-white fw-bold ms-3'>{item.title}</h5>
              </div>
              <h5 className='align-self-start pb-3'>{item.tanggal}</h5>
            </div>
          ))}
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
  );
}

export default pageKegiatan;