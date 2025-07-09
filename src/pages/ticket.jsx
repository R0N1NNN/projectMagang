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
        const hashParams = new URLSearchParams(window.location.hash.split("?")[1]);
        const token = hashParams.get("token");
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
                setTickets([]);
                setFilteredTickets([]);
                return;
            }
        }

        alert("Anda harus login atau mengakses melalui link dengan token.");
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
                                                style={{ color: "#0dcaf0" }}
                                            >
                                                <code>{t.ticketNumber}</code>
                                            </a>
                                        </td>
                                        <td>{t.domain}</td>
                                        <td>{new Date(t.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <Badge
                                                bg={
                                                    t.status === "Dibatalkan"
                                                        ? "danger"
                                                        : t.status === "Selesai"
                                                            ? "success"
                                                            : "primary"
                                                }
                                            >
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
                                            ) : t.status === "Selesai" ? (
                                                <Button variant="secondary" size="sm" disabled>
                                                    Laporan Selesai
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="danger"
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
