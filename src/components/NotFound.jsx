import { Container, Row, Col } from 'react-bootstrap'

const NotFound = () => {
    return (
        <>
            <header className='homepage'>
                <Container>
                    <Row className='header-box pt-lg-5'>
                        <Col className='ps-0'>
                            <h1 className='profile'>
                                ERROR! PAGE NOT FOUND
                            </h1>
                            <button
                                onClick={() => window.history.back()}
                                className='button-berita-detail'
                                style={{
                                    backgroundColor: '#7c1f15',
                                    color: '#bfcbe7',
                                    border: 'none',
                                    marginTop: '50px',
                                    padding: '10px 40px',
                                    borderRadius: '5px',
                                }}
                            >
                                Kembali
                            </button>
                        </Col>
                        <Col className="position-relative">
                            <img
                                src="./icon-profile.png"
                                alt="hero-img"
                                className="hero-img"
                            />
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default NotFound