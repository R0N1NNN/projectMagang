import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../css/main.css"; // Import custom CSS for styling

export default function laporan() {
  return (
    <div>
      <header className="homepage">
        <Container>
          <Row className="header-box pt-lg-5">
            <Col className="ps-0">
              <h1 className="profile text-start">Lapor Insiden Siber</h1>
            </Col>
            <Col className="position-relative">
              <img
                src="/public/icon-laporan.png"
                alt="hero-img"
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="mt-5 mb-3">
        <Container>
          <Col md={12}>
            <Form>
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
                    <Form.Control type="text" className="input-secondary-bg" />
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
                    <Form.Control type="text" className="input-secondary-bg" />
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
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="incidentDate">
                    <Form.Label>Tanggal Kejadian</Form.Label>
                    <Form.Control type="date" className="input-secondary-bg" />
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
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="incidentCaptcha">
                    <Form.Label>Captcha</Form.Label>
                    <br />
                    <img
                      src="/public/captcha.jpg"
                      className="mb-4"
                      style={{ width: "100%" }}
                      alt="captcha"
                    />
                    <Form.Label>Masukkan Captcha Diatas</Form.Label>
                    <Form.Control type="text" className="input-secondary-bg" />
                  </Form.Group>
                </Col>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Saya menyatakan bahwa informasi yang saya berikan adalah benar dan dapat dipertanggung jawabkan."
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="mx-auto button-laporkan"
                  style={{ width: "180px", height: "50px" }}
                >
                  Submit
                </Button>
              </Row>
            </Form>
          </Col>
        </Container>
      </div>
    </div>
  );
}
