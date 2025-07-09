import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function BeritaSubsDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const berita = location.state;

    if (!berita) {
        return (
            <Container className="text-center mt-5">
                <h2>Berita tidak ditemukan</h2>
                <Button variant="primary" className="mt-3" onClick={() => navigate("/berita-subs")}>
                    Kembali ke Berita
                </Button>
            </Container>
        );
    }

    return (
        <div style={{ minHeight: "100vh" }}>
            <header className="homepage">
                <Container>
                    <Row className='header-box pt-lg-5'>
                        <Col className='ps-0'>
                            <h1 className='profile'>Detail Berita</h1>
                        </Col>
                        <Col className="position-relative">
                            <img src={`${import.meta.env.BASE_URL}icon-profile.png`} alt="hero" className="hero-img" />
                        </Col>
                    </Row>
                </Container>
            </header>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <h1 className="text-center text-white">{berita.title}</h1>
                    <p className="text-center text-muted mt-2">{new Date().toLocaleDateString()}</p>
                    <Col md={10}>
                        <Card className="shadow-lg border-0" style={{ backgroundColor: "#213450", color: "#ffffff" }}>
                            <Card.Img variant="top" src={berita.image} style={{ maxHeight: '400px', objectFit: 'cover' }} />
                            <Card.Body style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                                <Card.Text>
                                    {berita.content}
                                </Card.Text>
                                <Button variant="light" onClick={() => navigate("/beritaSubs")}>
                                    ← Kembali ke Berita
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BeritaSubsDetail;
