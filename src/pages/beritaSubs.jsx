import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function BeritaSubs() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        const login = localStorage.getItem("isLoggedIn") === "true";
        const email = localStorage.getItem("userEmail") || "";
        setIsLoggedIn(login);
        setUserEmail(email);
    }, []);

    const handleSubscribe = async () => {
        if (!isLoggedIn || !userEmail) {
            alert("Silakan login terlebih dahulu untuk berlangganan.");
            navigate('/login');
            return;
        }

        const templateParams = {
            email: userEmail,
            name: 'User CSIRT', // atau ambil dari localStorage
        };

        try {
            await emailjs.send(
                'service_5xto4gl',
                'template_sx7xj7e', // buat template ini di EmailJS
                templateParams,
                'sTM5mgYVSE9bKXvr4'
            );


            alert("Subscription anda berhasil, anda akan mendapatkan info terbaru lebih dulu.");
            setSubscribed(true);
        } catch (err) {
            console.error("Gagal mengirim email subscription:", err);
            alert("Terjadi kesalahan saat mengirim email.");
        }
    };

    const newsData = [
        {
            id: 1,
            title: "Serangan Siber Menargetkan Infrastruktur Vital",
            content: "Laporan terbaru menyebutkan bahwa beberapa infrastruktur penting di Indonesia menjadi target serangan siber. Pakar keamanan menyarankan peningkatan sistem pertahanan digital.",
            image: "https://picsum.photos/400/250?random=1",
        },
        {
            id: 2,
            title: "Ransomware Baru Menyebar Lewat Email",
            content: "Jenis ransomware baru ditemukan menyebar melalui email dengan lampiran berbahaya. Pengguna diminta lebih waspada terhadap pesan dari pengirim tidak dikenal.",
            image: "https://picsum.photos/400/250?random=2",
        },
        {
            id: 3,
            title: "Tips Mengamankan Data Pribadi Saat Browsing",
            content: "Dalam era digital, menjaga privasi saat berselancar sangat penting. Artikel ini memberikan tips sederhana namun efektif dalam menjaga data pribadi Anda.",
            image: "https://picsum.photos/400/250?random=3",
        }
    ];


    return (
        <div className="berita-subs-page">
            <header className="homepage">
                <Container>
                    <Row className='header-box pt-lg-5'>
                        <Col className='ps-0'>
                            <h1 className='profile'>Berita Terkini</h1>
                        </Col>
                        <Col className="position-relative">
                            <img src={`${import.meta.env.BASE_URL}icon-profile.png`} alt="hero" className="hero-img" />
                        </Col>
                    </Row>
                </Container>
            </header>

            <Container className="mt-5">
                <div className="text-center mb-5">
                    {!subscribed ? (
                        <Button onClick={handleSubscribe} variant="primary">
                            {isLoggedIn ? "Subscribe untuk Info Terbaru" : "Login untuk Subscribe"}
                        </Button>
                    ) : (
                        <p className="text-success fw-bold">✅ Anda sudah berlangganan berita terbaru.</p>
                    )}
                </div>

                <Row>
                    {newsData.map((berita) => (
                        <Col md={4} className="mb-4" key={berita.id}>
                            <Card className="h-100 shadow" style={{ backgroundColor: "#213450", color: "#bfcbe7" }}>
                                <Card.Img variant="top" src={berita.image} />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>{berita.title}</Card.Title>
                                    <Card.Text>{berita.content.slice(0, 100)}...</Card.Text>
                                    <Button onClick={() => navigate("/beritaSubsDetail", { state: berita })}>
                                        Baca Selengkapnya
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    );
}

export default BeritaSubs;
