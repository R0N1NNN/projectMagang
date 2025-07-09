import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../css/main.css";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

export default function Laporan() {
  const form = useRef();
  const [attachment, setAttachment] = useState(null);
  const [ticketNumber, setTicketNumber] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  const randomizeTicket = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let ticket = '';
    for (let i = 0; i < 10; i++) {
      ticket += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return ticket;
  };


  const sendEmail = (e) => {
    e.preventDefault();

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";


    if (!captchaToken) {
      alert("Silakan selesaikan CAPTCHA terlebih dahulu.");
      return;
    }

    const requiredFields = [
      { name: "firstName", label: "First Name" },
      { name: "lastName", label: "Last Name" },
      { name: "businessEmail", label: "Email Address" },
      { name: "businessPhone", label: "Phone Number" },
      { name: "domainName", label: "Nama Domain" },
      { name: "impactedUrl", label: "URL Terdampak" },
      { name: "incidentType", label: "Jenis Insiden" },
      { name: "incidentImpact", label: "Dampak Insiden" },
      { name: "incidentDescription", label: "Deskripsi" },
      { name: "Pernyataan", label: "Pernyataan" },
    ];

    const formData = new FormData(form.current);

    for (let field of requiredFields) {
      const value = formData.get(field.name);
      if (!value || value.trim() === "") {
        alert(`Pengiriman Gagal, Bagian "${field.label}" wajib diisi`);
        return;
      }
    }

    const newTicket = randomizeTicket();
    setTicketNumber(newTicket);

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "ticketNumber";
    input.value = newTicket;
    form.current.appendChild(input);

    const link = `${window.location.origin}/#/detailticket?token=${newTicket}`;
    const linkInput = document.createElement("input");
    linkInput.type = "hidden";
    linkInput.name = "ticketLink";
    linkInput.value = link;
    form.current.appendChild(linkInput);

    const ticketData = {
      ticketNumber: newTicket,
      domain: formData.get("domainName"),
      url: formData.get("impactedUrl"),
      date: formData.get("incidentDate"),
      type: formData.get("incidentType"),
      impact: formData.get("incidentImpact"),
      description: formData.get("incidentDescription"),
      status: "Diproses",
      createdAt: new Date().toISOString(),
      createdBy: isLoggedIn && userName ? `@${userName}` : getOrCreateGuestId(),
      email: isLoggedIn && userEmail ? userEmail : "-",
      messages: [],
      attachment: attachment || null,
    };

    const existing = JSON.parse(localStorage.getItem("tickets") || "[]");
    existing.push(ticketData);
    localStorage.setItem("tickets", JSON.stringify(existing));

    const fileLinkInput = document.createElement("input");
    fileLinkInput.type = "hidden";
    fileLinkInput.name = "fileLink";
    fileLinkInput.value = `Lihat Lampiran: ${link} (jika ada)`;
    form.current.appendChild(fileLinkInput);

    emailjs.sendForm("service_35zz5vq", "template_2jn9c27", form.current, {
      publicKey: "Xw0Iu8t5mHaLHk3g2",
    }).then(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      form.current.reset();
      setCaptchaToken('');
    }).catch((err) => {
      console.error("Gagal kirim:", err);
      alert("Gagal mengirim laporan.");
    });
  };

  const getOrCreateGuestId = () => {
    let guestId = localStorage.getItem("guestId");
    if (!guestId) {
      guestId = `Guest${Math.floor(100000 + Math.random() * 900000)}`; // contoh: Guest834321
      localStorage.setItem("guestId", guestId);
    }
    return guestId;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAttachment(reader.result); // base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <header className="homepage">
        <Container>
          <Row className="header-box pt-lg-5">
            <Col className="ps-0">
              <h1 className="profile">Lapor Insiden Siber</h1>
            </Col>
            <Col className="position-relative">
              <img
                src={`${import.meta.env.BASE_URL}icon-laporan.png`}
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>

      {showNotification && (
        <div className="custom-notification">
          Form Berhasil Dikirim
        </div>
      )}

      <div className="mt-5 mb-3">
        <Container className="rounded-5" style={{ padding: "75px", marginTop: '150px', border: '1px solid var(--laporan-color)' }}>
          <Col md={12}>
            {localStorage.getItem("isLoggedIn") === "true" && (
              <div className="text-end mb-4">
                <Button variant="primary" onClick={() => window.location.href = "/#/ticket"}>
                  Lihat Ticket Laporan Anda
                </Button>
              </div>
            )}
            <Form ref={form} onSubmit={sendEmail}>
              <h3 className="mb-4">Data Diri</h3>
              <Row className="mb-5 g-5">
                <Col md={4}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name<span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" name="firstName" className="input-secondary-bg" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name<span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" name="lastName" className="input-secondary-bg" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="businessEmail">
                    <Form.Label>Email Address<span className="text-danger">*</span></Form.Label>
                    <Form.Control type="email" name="businessEmail" className="input-secondary-bg" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="businessPhone">
                    <Form.Label>Phone Number<span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" name="businessPhone" className="input-secondary-bg" />
                  </Form.Group>
                </Col>
              </Row>

              <h3 className="mb-4 pt-4">Detail Website</h3>
              <Row className="mb-5 g-5">
                <Col md={4}>
                  <Form.Group controlId="domainName">
                    <Form.Label>Nama Domain<span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" name="domainName" className="input-secondary-bg" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="impactedUrl">
                    <Form.Label>URL Terdampak<span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" name="impactedUrl" className="input-secondary-bg" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="incidentDate">
                    <Form.Label>Tanggal Kejadian<span className="text-danger">*</span></Form.Label>
                    <Form.Control type="date" name="incidentDate" className="input-secondary-bg" />
                  </Form.Group>
                </Col>
              </Row>

              <h3 className="mb-4 pt-4">Laporan Detail</h3>
              <Row className="mb-5 g-5">
                <Col md={4}>
                  <Form.Group controlId="incidentType">
                    <Form.Label>Jenis Insiden<span className="text-danger">*</span></Form.Label>
                    <Form.Select name="incidentType" className="input-secondary-bg bg-dark text-white">
                      <option value="">-- Pilih Jenis Insiden --</option>
                      <option value="Malware" title="Malware adalah perangkat lunak berbahaya yang dirancang untuk merusak atau mengeksploitasi sistem.">Malware</option>
                      <option value="Defacement" title="Defacement adalah perubahan tampilan halaman web tanpa izin.">Defacement</option>
                      <option value="Phishing" title="Phishing adalah upaya penipuan untuk memperoleh data sensitif dengan menyamar sebagai entitas tepercaya.">Phishing</option>
                      <option value="DDoS" title="DDoS adalah serangan terhadap server dengan mengirimkan lalu lintas yang sangat tinggi agar layanan tidak tersedia.">DDoS</option>
                      <option value="Ransomware" title="Ransomware adalah malware yang mengenkripsi data dan meminta tebusan.">Ransomware</option>
                      <option value="Unauthorized Access" title="Akses tidak sah berarti seseorang masuk ke sistem tanpa otorisasi.">Akses Tidak Sah</option>
                      <option value="Data Breach" title="Kebocoran data terjadi saat informasi sensitif jatuh ke tangan yang salah.">Kebocoran Data</option>
                      <option value="Exploit" title="Pemanfaatan kerentanan adalah penggunaan celah keamanan untuk menyerang sistem.">Pemanfaatan Kerentanan</option>
                      <option value="Botnet Activity" title="Aktivitas botnet melibatkan jaringan perangkat yang dikontrol oleh pihak ketiga untuk tujuan berbahaya.">Aktivitas Botnet</option>
                      <option value="Insider Threat" title="Ancaman dari dalam adalah risiko yang berasal dari orang dalam organisasi.">Ancaman dari Dalam</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="incidentImpact">
                    <Form.Label>Dampak Insiden<span className="text-danger">*</span></Form.Label>
                    <Form.Select name="incidentImpact" className="input-secondary-bg bg-dark text-white">
                      <option value="">-- Pilih Dampak --</option>
                      <option value="Downtime" title="Layanan tidak aktif atau tidak dapat diakses.">Downtime / Layanan Tidak Aktif</option>
                      <option value="Kebocoran Data" title="Informasi sensitif atau rahasia tersebar ke publik atau pihak tak berwenang.">Kebocoran Data</option>
                      <option value="Kerusakan Sistem" title="Kerusakan atau malfungsi pada sistem atau perangkat.">Kerusakan Sistem</option>
                      <option value="Reputasi Terganggu" title="Citra atau kepercayaan publik terhadap organisasi menurun.">Reputasi Terganggu</option>
                      <option value="Kehilangan Akses" title="Akses terhadap sistem atau data menjadi tidak tersedia.">Kehilangan Akses</option>
                      <option value="Kerugian Finansial" title="Organisasi mengalami kerugian dalam bentuk uang akibat insiden.">Kerugian Finansial</option>
                      <option value="Pelanggaran Regulasi" title="Melanggar hukum atau peraturan yang berlaku seperti UU Perlindungan Data.">Pelanggaran Regulasi / Kepatuhan</option>
                      <option value="Ancaman Keamanan Lainnya" title="Ancaman lain yang berpotensi merusak sistem atau data.">Ancaman Keamanan Lainnya</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="incidentAttachment">
                    <Form.Label>Lampiran Bukti</Form.Label>
                    <Form.Control type="file" accept="image/*,application/pdf" className="input-secondary-bg bg-dark" onChange={handleFileChange} />
                  </Form.Group>
                </Col>

                <Col md={8}>
                  <Form.Group controlId="incidentDescription">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control as="textarea" rows={8} name="incidentDescription" className="input-secondary-bg" />
                  </Form.Group>
                </Col>
                <Form.Group>
                  <Form.Check
                    controlId="Pernyataan"
                    type="checkbox"
                    label="Saya menyatakan bahwa informasi yang saya berikan adalah benar dan dapat dipertanggung jawabkan."
                    name="Pernyataan"
                  />
                </Form.Group>
                <Col md={4}>
                  <Form.Group controlId="captchaBox">
                    <Form.Label>Verifikasi Keamanan</Form.Label>
                    <ReCAPTCHA
                      sitekey="6Lf7fWkrAAAAAPAdnqBW_dGWX7woXj0s8Dc2tIEc" // Ganti dengan milikmu
                      onChange={(token) => setCaptchaToken(token)}
                    />
                  </Form.Group>
                </Col>

                <Row className="mt-5">
                  <Col className="d-flex justify-content-center">
                    <Button
                      type="submit"
                      className="button-laporkan"
                      style={{ width: "180px", height: "50px" }}
                      value="Send"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>

              </Row>
            </Form>
          </Col>
        </Container>
      </div>
    </div>
  );
}
