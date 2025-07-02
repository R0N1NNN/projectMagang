import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table, Badge, Button, Form, Row, Col } from "react-bootstrap";
import "../css/main.css";

export default function Ticket() {
    const [tickets, setTickets] = useState([]);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [filterDate, setFilterDate] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

        const stored = localStorage.getItem("tickets");
        const parsed = stored ? JSON.parse(stored) : [];

        if (isLoggedIn) {
            setTickets(parsed);
            setFilteredTickets(parsed);
            return;
        }

        if (token) {
            const match = parsed.find(t => t.ticketNumber === token);
            if (match) {
                setTickets([match]);
                setFilteredTickets([match]);
                return;
            } else {
                alert("Token tidak ditemukan atau tiket tidak valid.");
                // ❌ Jangan navigate, cukup alert dan kosongkan
                setTickets([]);
                setFilteredTickets([]);
                return;
            }
        }

        // ❌ Tidak login dan tidak ada token
        alert("Anda harus login atau mengakses melalui link dengan token.");
        // ❌ Jangan navigate agar tidak reload terus-menerus
        setTickets([]);
        setFilteredTickets([]);
    }, []);

    const handleCancel = (ticketNumber) => {
        const target = tickets.find(t => t.ticketNumber === ticketNumber);
        if (!target || target.status === "Dibatalkan") return;

        if (!window.confirm("Yakin ingin membatalkan laporan ini?")) return;

        const updated = tickets.map(t => {
            if (t.ticketNumber === ticketNumber) {
                return { ...t, status: "Dibatalkan" };
            }
            return t;
        });

        setTickets(updated);
        setFilteredTickets(updated);
        localStorage.setItem("tickets", JSON.stringify(updated));
    };

    const handleFilterDate = (e) => {
        const selectedDate = e.target.value;
        setFilterDate(selectedDate);

        if (!selectedDate) {
            setFilteredTickets(tickets);
            return;
        }

        const filtered = tickets.filter(ticket => {
            const createdDate = new Date(ticket.createdAt).toISOString().slice(0, 10);
            return createdDate === selectedDate;
        });

        setFilteredTickets(filtered);
    };

    return (
        <div>
            <header className="homepage">
                <Container>
                    <Row className="header-box pt-lg-5">
                        <Col className="ps-0">
                            <h1 className="profile">Halaman Ticket Anda</h1>
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
            <div className="pt-5 pb-5" style={{ backgroundColor: "#213450", minHeight: "100vh" }}>
                <Container className="p-5 rounded-4 shadow" style={{ backgroundColor: "#213450", color: "#ffffff" }}>
                    <h2 className="mb-4">🎫 Daftar Ticket Laporan Anda</h2>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Filter berdasarkan tanggal pengiriman laporan</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={filterDate}
                                    onChange={handleFilterDate}
                                    className="text-black"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    {filteredTickets.length === 0 ? (
                        <p>Tidak ada laporan yang cocok.</p>
                    ) : (
                        <Table striped bordered hover responsive variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Ticket</th>
                                    <th>Domain</th>
                                    <th>Dibuat</th>
                                    <th>Status</th>
                                    <th>Deskripsi</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTickets.map((t, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>
                                            <a
                                                href={`/#/detailTicket?token=${t.ticketNumber}`}
                                                style={{ color: "#0dcaf0", textDecoration: "underline" }}
                                            >
                                                <code>{t.ticketNumber}</code>
                                            </a>
                                        </td>
                                        <td>{t.domain}</td>
                                        <td>{new Date(t.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <Badge bg={t.status === "Dibatalkan" ? "danger" : "info"}>
                                                {t.status}
                                            </Badge>
                                        </td>
                                        <td style={{ maxWidth: 200, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                            {t.description || "-"}
                                        </td>
                                        <td>
                                            {t.status === "Dibatalkan" ? (
                                                <Button variant="secondary" size="sm" disabled>
                                                    Laporan Dibatalkan
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="warning"
                                                    size="sm"
                                                    onClick={() => handleCancel(t.ticketNumber)}
                                                >
                                                    Batalkan Laporan
                                                </Button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Container>
            </div>
        </div>
    );
}
