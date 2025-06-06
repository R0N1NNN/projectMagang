import { useParams } from 'react-router-dom';
import { semuaBerita } from '../datapages/index.jsx'; // pastikan path ini sesuai
import { Container, Row, Col } from 'react-bootstrap';

function BeritaDetail() {
  const { id } = useParams();
  const berita = semuaBerita.find((item) => item.id === parseInt(id));

  if (!berita) {
    return <div className="container mt-5">Berita tidak ditemukan.</div>;
  }

  return (
    <div>
      <header className='homepage'>
        <Container>
          <Row className='header-box pt-lg-5'>
            <Col className='ps-0'>
              <h1 className='profile'>
                Berita
              </h1>
            </Col>
            <Col className="position-relative">
              <img
                src="./icon-berita.png"
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="detail-wrapper mb-5">
        <div className="container mt-5 berita-detail">
          <img src={berita.image} alt={berita.title} className="img-fluid mb-5 rounded d-block mx-auto" />
          <h1 className="mb-2 title-berita-detail">{berita.title}</h1>
          <h5 className="mt-4">{berita.tanggal}</h5>
          <p className="mt-5 desc-berita-detail text-justify">
            Ini adalah isi lengkap dari berita berjudul: <strong>{berita.title}</strong>. Konten lengkap dapat dimuat dari database atau API jika diinginkan...
          </p>
        </div>
        <div className="d-flex text-center">
          <button
            onClick={() => window.history.back()}
            className='button-berita-detail ms-2'
            style={{
              backgroundColor: '#7c1f15',
              color: '#bfcbe7',
              border: 'none',
              marginTop: '50px',
              padding: '20px 40px',
              borderRadius: '5px',
            }}
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeritaDetail;