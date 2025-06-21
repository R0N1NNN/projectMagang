import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../css/main.css"; // Import custom CSS for styling
import emailjs from '@emailjs/browser';

export default function laporan() {
  const form = useRef();
  const [ticketNumber, setTicketNumber] = useState('');
  const [showNotification, setShowNotification] = useState(false);

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

    // ✅ Cek apakah user sudah login
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("Harus login terlebih dahulu.");
      return;
    }

    // ✅ Validasi field wajib
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
      { name: "incidentCaptcha", label: "Captcha" },
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

    // ✅ Generate ticket
    const newTicket = randomizeTicket();
    setTicketNumber(newTicket);

    // ✅ Tambahkan input ticket ke form
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "ticketNumber";
    input.value = newTicket;
    form.current.appendChild(input);


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

    // ✅ Kirim via emailjs
    emailjs
      .sendForm("service_35zz5vq", "template_2jn9c27", form.current, {
        publicKey: "Xw0Iu8t5mHaLHk3g2",
      })
      .then(() => {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
        form.current.reset();
      })
      .catch((err) => {
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
            <div className="text-end mb-4">
              <Button variant="primary" onClick={() => window.location.href = "/#/ticket"}>
                Lihat Ticket Laporan Anda
              </Button>
            </div>
            <Form ref={form} onSubmit={sendEmail}>
              <h3 className="mb-4">Data Diri</h3>
              <Row className="mb-5 g-5">
                <Col md={4}>
                  <Form.Group controlId="firstName">
                    <Form.Label>
                      First Name
                      <span style={{ color: "red", paddingLeft: "5px" }}>
                        *
                      </span>
                    </Form.Label>
                    <Form.Control type="text" className="input-secondary-bg" name="firstName" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="lastName">
                    <Form.Label>
                      Last Name
                      <span style={{ color: "red", paddingLeft: "5px" }}>
                        *
                      </span>
                    </Form.Label>
                    <Form.Control type="text" className="input-secondary-bg" name="lastName" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="businessEmail">
                    <Form.Label>
                      Email Address
                      <span style={{ color: "red", paddingLeft: "5px" }}>
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Cth: abc.xyz@gmail.com"
                      className="input-secondary-bg"
                      name="businessEmail"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="businessPhone">
                    <Form.Label>
                      Phone Number
                      <span style={{ color: "red", paddingLeft: "5px" }}>
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Cth: +62 813 xxxxxx"
                      className="input-secondary-bg"
                      name="businessPhone"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <h3 className="mb-4" style={{ paddingTop: "50px" }}>
                Detail Website
              </h3>
              <Row className="mb-5 g-5">
                <Col md={4}>
                  <Form.Group controlId="domainName">
                    <Form.Label>
                      Nama Domain
                      <span style={{ color: "red", paddingLeft: "5px" }}>
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Cth: Jakarta.go.id"
                      className="input-secondary-bg"
                      name="domainName"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="impactedUrl">
                    <Form.Label>
                      URL Terdampak
                      <span style={{ color: "red", paddingLeft: "5px" }}>
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Cth: https://csirt.jakarta.go.id/"
                      className="input-secondary-bg"
                      name="impactedUrl"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="incidentDate">
                    <Form.Label>Tanggal Kejadian
                      <span style={{ color: "red", paddingLeft: "5px" }}>
                        *
                      </span></Form.Label>
                    <Form.Control type="date" className="input-secondary-bg" name="incidentDate" />
                  </Form.Group>
                </Col>
              </Row>
              <h3 className="mb-4" style={{ paddingTop: "50px" }}>
                Laporan Detail
              </h3>
              <Row className="mb-5 g-5">
                <Col md={4}>
                  <Form.Group controlId="incidentType">
                    <Form.Label>
                      Jenis Insiden
                      <span style={{ color: "red", paddingLeft: "5px" }}>
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Cth: Deface, Malware, dll"
                      className="input-secondary-bg"
                      name="incidentType"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="incidentImpact">
                    <Form.Label>
                      Dampak Insiden
                      <span style={{ color: "red", paddingLeft: "5px" }}>
                        *
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Cth: Website tidak bisa diakses"
                      className="input-secondary-bg"
                      name="incidentImpact"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-5 g-5">
                <Col md={8}>
                  <Form.Group controlId="incidentDescription">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={8}
                      className="input-secondary-bg"
                      name="incidentDescription"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="incidentCaptcha">
                    <Form.Label>Captcha</Form.Label>
                    <br />
                    <img
                      src="./captcha.jpg"
                      className="mb-4"
                      style={{ width: "100%" }}
                      alt="captcha"
                    />
                    <Form.Label>Masukkan Captcha Diatas</Form.Label>
                    <Form.Control type="text" className="input-secondary-bg" name="incidentCaptcha" />
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
                <Button
                  type="submit"
                  className="mx-auto button-laporkan"
                  style={{ width: "180px", height: "50px" }}
                  value="Send"
                >
                  Submit
                </Button>
              </Row>
            </Form>
          </Col>
        </Container>
      </div>
    </div >
  );
}
