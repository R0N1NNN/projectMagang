import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function BeritaSubs() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

    useEffect(() => {
        const login = localStorage.getItem("isLoggedIn") === "true";
        const email = localStorage.getItem("userEmail") || "";
        const name = localStorage.getItem("userName") || "User CSIRT";
        const alreadySubscribed = localStorage.getItem(`subscribed-${email}`) === "true";

        setIsLoggedIn(login);
        setUserEmail(email);
        setUserName(name);

        if (alreadySubscribed) {
            setSubscribed(true);
        }
    }, []);

    // Untuk login user
    const handleSubscribe = async () => {
        const templateParams = {
            email: userEmail,
            name: userName,
        };

        try {
            await emailjs.send(
                'service_5xto4gl',
                'template_sx7xj7e',
                templateParams,
                'sTM5mgYVSE9bKXvr4'
            );

            alert("Subscription anda berhasil, anda akan mendapatkan info terbaru lebih dulu.");
            localStorage.setItem(`subscribed-${userEmail}`, "true");
            setSubscribed(true);
        } catch (err) {
            console.error("Gagal mengirim email subscription:", err);
            alert("Terjadi kesalahan saat mengirim email.");
        }
    };

    const handleUnsubscribe = async () => {
        if (!confirm("Yakin ingin berhenti berlangganan?")) return;

        const targetEmail = isLoggedIn ? userEmail : formData.email;

        try {
            await emailjs.send(
                'service_5xto4gl',
                'template_sx7xj7e',
                {
                    email: targetEmail,
                    name: isLoggedIn ? userName : formData.name || "Pengunjung",
                },
                'sTM5mgYVSE9bKXvr4'
            );
        } catch (err) {
            console.error("Gagal kirim email unsubscribe:", err);
        }

        localStorage.removeItem(`subscribed-${targetEmail}`);
        setSubscribed(false);
        alert("Anda telah berhenti berlangganan.");
    };

    // Untuk non-login user
    const handleNonLoginSubscribe = async (e) => {
        e.preventDefault();
        const { name, email, phone } = formData;

        if (!name || !email || !phone) {
            alert("Semua data wajib diisi.");
            return;
        }

        const templateParams = { name, email, phone };

        try {
            await emailjs.send(
                'service_5xto4gl',
                'template_sx7xj7e',
                templateParams,
                'sTM5mgYVSE9bKXvr4'
            );

            localStorage.setItem(`subscribed-${email}`, "true");
            alert("Berhasil subscribe, Anda akan mendapatkan info terbaru.");
            setSubscribed(true);
            setShowForm(false);
        } catch (err) {
            console.error("Gagal mengirim subscription:", err);
            alert("Terjadi kesalahan saat subscribe.");
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
                    {subscribed ? (
                        <>
                            <p className="text-success fw-bold">✅ Anda sudah berlangganan berita terbaru.</p>
                            <Button variant="danger" onClick={handleUnsubscribe}>
                                ❌ Berhenti Berlangganan
                            </Button>
                        </>
                    ) : (
                        <>
                            {isLoggedIn ? (
                                <Button variant="primary" onClick={handleSubscribe}>
                                    Subscribe untuk Info Terbaru
                                </Button>
                            ) : (
                                <Button onClick={() => setShowForm(true)} variant="primary">
                                    Subscribe untuk Info Terbaru
                                </Button>
                            )}
                        </>
                    )}
                </div>

                {showForm && (
                    <div className="popup-form" style={{
                        position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
                        backgroundColor: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000
                    }}>
                        <Card style={{ padding: '30px', maxWidth: '400px', width: '100%' }}>
                            <h5 className="mb-3">Form Subscribe</h5>
                            <form onSubmit={handleNonLoginSubscribe}>
                                <input type="text" className="form-control mb-2" placeholder="Nama Lengkap"
                                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                <input type="email" className="form-control mb-2" placeholder="Email"
                                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                <input type="tel" className="form-control mb-3" placeholder="No. Telepon"
                                    value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                <div className="d-flex justify-content-between">
                                    <Button variant="secondary" onClick={() => setShowForm(false)}>Batal</Button>
                                    <Button variant="success" type="submit">Kirim</Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                )}

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
