import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import crypto from "crypto-js";
import '../css/main.css';

function OnlineCyberTools() {
    const [phishingInput, setPhishingInput] = useState("");
    const [phishingResult, setPhishingResult] = useState(null);

    const [password, setPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");

    const [hashInput, setHashInput] = useState("");
    const [hashResult, setHashResult] = useState({});

    const [portInput, setPortInput] = useState("");
    const [portResult, setPortResult] = useState(null);

    const [domainInput, setDomainInput] = useState("");
    const [whoisResult, setWhoisResult] = useState(null);
    const [dnsResult, setDnsResult] = useState(null);
    const [sslResult, setSslResult] = useState(null);

    const checkPhishingURL = async () => {
        setPhishingResult(null);
        if (!phishingInput.trim()) {
            alert("Mohon masukkan URL.");
            return;
        }

        try {
            const response = await fetch('/.netlify/functions/checkPhishing', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: phishingInput })
            });
            console.log("Mengirim URL:", phishingInput);
            const result = await response.json();
            setPhishingResult(result.phishing); // true / false
        } catch (err) {
            alert("Gagal mengecek URL.");
        }
    };

    const checkPasswordStrength = (pwd) => {
        if (pwd.length < 6) return "Weak";
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pwd)) return "Strong";
        return "Medium";
    };

    const generateHashes = () => {
        setHashResult({
            MD5: crypto.MD5(hashInput).toString(),
            SHA1: crypto.SHA1(hashInput).toString(),
            SHA256: crypto.SHA256(hashInput).toString(),
        });
    };

    const simulatePortScan = () => {
        const openPorts = [22, 80, 443];
        const port = parseInt(portInput);
        if (openPorts.includes(port)) {
            setPortResult("Port " + port + " is OPEN (simulated)");
        } else {
            setPortResult("Port " + port + " is CLOSED (simulated)");
        }
    };

    const simulateWhoisLookup = () => {
        setWhoisResult("Simulasi: Pemilik domain " + domainInput + " adalah ExampleCorp, didaftarkan pada 2020-01-01");
    };

    const simulateDnsLookup = () => {
        setDnsResult("Simulasi: A record dari " + domainInput + " adalah 123.456.78.90, MX: mail.example.com");
    };

    const simulateSslCheck = () => {
        setSslResult("Simulasi: Sertifikat SSL valid hingga 2026-12-31");
    };

    const getStrengthColor = (strength) => {
        switch (strength) {
            case "Weak":
                return "#ff4d4f"; // merah
            case "Medium":
                return "#faad14"; // kuning
            case "Strong":
                return "#52c41a"; // hijau
            default:
                return "#ffffff"; // default warna putih
        }
    };

    return (
        <div className="online-tools">
            <header className='homepage'>
                <Container>
                    <Row className='header-box pt-lg-5'>
                        <Col className='ps-0'>
                            <h1 className='profile'>
                                Cybertools
                            </h1>
                        </Col>
                        <Col className="position-relative">
                            <img
                                src={`${import.meta.env.BASE_URL}icon-profile.png`}
                                alt="hero-img"
                                className="hero-img"
                            />
                        </Col>
                    </Row>
                </Container>
            </header>
            <Container style={{ marginTop: '200px' }}>
                <Col md={12}>
                    <Card body className="card-spacing" style={{ backgroundColor: '#2b4569', color: '#bfcbe7' }}>
                        <h5>URL Phishing Checker</h5>
                        <Form.Control
                            type="text"
                            value={phishingInput}
                            onChange={(e) => setPhishingInput(e.target.value)}
                            placeholder="Masukkan URL untuk diperiksa"
                            className="bg-dark text-white"
                        />
                        <Button
                            className="mt-4"
                            style={{ backgroundColor: '#7c1f15', color: '#ffffff', border: 'none' }}
                            onClick={checkPhishingURL}
                        >
                            Cek URL
                        </Button>
                        {phishingResult !== null && (
                            <p className="mt-3 fw-bold" style={{ color: phishingResult ? '#ff4d4f' : '#52c41a' }}>
                                {phishingResult ? '⚠️ URL ini terindikasi phising!' : '✅ URL ini aman.'}
                            </p>
                        )}
                    </Card>
                </Col>
                <Col md={12}>
                    <Card body className="card-spacing" style={{ backgroundColor: '#2b4569', color: '#bfcbe7' }}>
                        <h5>Password Strength Checker</h5>
                        <Form.Control
                            type="text"
                            value={password}
                            onChange={(e) => {
                                const noSpace = e.target.value.replace(/\s/g, ""); // hapus semua spasi
                                setPassword(e.target.value);
                                setPasswordStrength(checkPasswordStrength(e.target.value));
                            }}
                            onKeyDown={(e) => {
                                if (e.key === " ") e.preventDefault(); // cegah tekan spasi
                            }}
                            placeholder="Masukkan password"
                            className="bg-dark text-white"
                        />
                        <p className="mt-2">
                            Strength:{" "}
                            <b style={{ color: getStrengthColor(passwordStrength) }}>
                                {passwordStrength}
                            </b>
                        </p>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card body className="card-spacing" style={{ backgroundColor: '#2b4569', color: '#bfcbe7' }}>
                        <h5>Hash Generator</h5>
                        <Form.Control
                            type="text"
                            value={hashInput}
                            onChange={(e) => setHashInput(e.target.value)}
                            placeholder="Masukkan teks"
                            className="bg-dark text-white"
                        />
                        <Button className="mt-4" style={{ backgroundColor: '#7c1f15', color: '#ffffff', border: 'none' }} onClick={generateHashes}>Generate Hash</Button>
                        {Object.keys(hashResult).length > 0 && (
                            <ul className="mt-3">
                                {Object.entries(hashResult).map(([algo, val]) => (
                                    <li key={algo}><b>{algo}</b>: {val}</li>
                                ))}
                            </ul>
                        )}
                    </Card>
                </Col>
                <Col md={12}>
                    <Card body className="card-spacing" style={{ backgroundColor: '#2b4569', color: '#bfcbe7' }}>
                        <h5>Port Scanner (Simulasi)</h5>
                        <Form.Control
                            type="number"
                            value={portInput}
                            onChange={(e) => setPortInput(e.target.value)}
                            placeholder="Masukkan nomor port"
                            className="bg-dark text-white"
                        />
                        <Button className="mt-4" style={{ backgroundColor: '#7c1f15', color: '#ffffff', border: 'none' }} onClick={simulatePortScan}>Scan Port</Button>
                        {portResult && <p className="mt-2">{portResult}</p>}
                    </Card>
                </Col>
                <Col md={12}>
                    <Card body className="card-spacing" style={{ backgroundColor: '#2b4569', color: '#bfcbe7' }}>
                        <h5>Whois Lookup (Simulasi)</h5>
                        <Form.Control
                            type="text"
                            value={domainInput}
                            onChange={(e) => setDomainInput(e.target.value)}
                            placeholder="Masukkan nama domain"
                            className="bg-dark text-white"
                        />
                        <Button className="mt-4" style={{ backgroundColor: '#7c1f15', color: '#ffffff', border: 'none' }} onClick={simulateWhoisLookup}>Lookup</Button>
                        {whoisResult && <p className="mt-2">{whoisResult}</p>}
                    </Card>
                </Col>
                <Col md={12}>
                    <Card body className="card-spacing" style={{ backgroundColor: '#2b4569', color: '#bfcbe7' }}>
                        <h5>DNS Lookup (Simulasi)</h5>
                        <Form.Control
                            type="text"
                            value={domainInput}
                            onChange={(e) => setDomainInput(e.target.value)}
                            placeholder="Masukkan nama domain"
                            className="bg-dark text-white"
                        />
                        <Button className="mt-4" style={{ backgroundColor: '#7c1f15', color: '#ffffff', border: 'none' }} onClick={simulateDnsLookup}>Lookup</Button>
                        {dnsResult && <p className="mt-2">{dnsResult}</p>}
                    </Card>
                </Col>
                <Col md={12}>
                    <Card body className="card-spacing" style={{ backgroundColor: '#2b4569', color: '#bfcbe7' }}>
                        <h5>SSL Certificate Checker (Simulasi)</h5>
                        <Form.Control
                            type="text"
                            value={domainInput}
                            onChange={(e) => setDomainInput(e.target.value)}
                            placeholder="Masukkan nama domain"
                            className="bg-dark text-white"
                        />
                        <Button className="mt-4" onClick={simulateSslCheck} style={{ backgroundColor: '#7c1f15', color: '#ffffff', border: 'none' }}>Cek SSL</Button>
                        {sslResult && <p className="mt-2">{sslResult}</p>}
                    </Card>
                </Col>
            </Container>
        </div>
    );
}

export default OnlineCyberTools;
