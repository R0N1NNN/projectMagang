import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../css/main.css";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

export default function Laporan() {
  const form = useRef();
  const [ticketNumber, setTicketNumber] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');

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

    const link = `${window.location.origin}/#/ticket?token=${newTicket}`;
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
      createdAt: new Date().toISOString()
    };

    const existing = JSON.parse(localStorage.getItem("tickets") || "[]");
    existing.push(ticketData);
    localStorage.setItem("tickets", JSON.stringify(existing));

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
                    <Form.Control type="text" name="incidentType" className="input-secondary-bg" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="incidentImpact">
                    <Form.Label>Dampak Insiden<span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" name="incidentImpact" className="input-secondary-bg" />
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
