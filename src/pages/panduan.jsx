import React, { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { tips, videoPanduan, infografis } from "../datapages/index.jsx";

function panduan() {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = infografis.map((item) => ({ src: item.image }));

  return (
    <div>
      <header className='homepage'>
        <Container>
          <Row className='header-box pt-lg-5'>
            <Col className='ps-0'>
              <h1 className='profile text-start'>
                Panduan<br />
                Keamanan Dasar
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
      <Container className="card-panduan mt-5 text-white py-5">
        <Row>
          {tips.map((tip, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="card-panduan-item text-white border-0">
                <Card.Body className="d-flex align-items-center gap-4">
                  <div>{tip.icon}</div>
                  <div>
                    <Card.Title className="fw-bold card-panduan-title">{tip.title}</Card.Title>
                    <ul>
                      {tip.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <h1 className="text-center fw-bold mb-5">Video Panduan Keamanan</h1>
      <div className="panduan-video-grid">
        {videoPanduan.map((video, index) => (
          <div key={index} className="panduan-video-card">
            <div style={{ width: "100%", background: "#111", borderRadius: "24px 24px 0 0" }}>
              <iframe
                className='panduan-video-thumb'
                src={video.url}
                title={`YouTube video ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ border: "none", borderRadius: "24px 24px 0 0" }}
              ></iframe>
            </div>
            <div className="panduan-video-body">
              <div className="panduan-video-title">{video.title}</div>
              <div className="panduan-video-desc">{video.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className='halaman-panduan'>
        <div className="infografis-section-title">Infografis Keamanan</div>
        <div className="infografis-grid">
          {infografis.map((item, idx) => (
            <div className='infografis-group' key={idx}>
              <Card className="rounded-4 w-100">
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="infografis-img rounded-3"
                  onClick={() => {
                    setIndex(idx);
                    setOpen(true);
                  }}
                />
              </Card>
              <div className="title-infografis-group">
                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
        <Lightbox
          plugins={[Zoom]}
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
          styles={{
            container: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
          controller={{
            closeOnBackdropClick: true,
            closeOnPullDown: true,
          }}
          on={{
            view: ({ index }) => setIndex(index),
          }}
        />
      </div>
    </div>
  )
}

export default panduan