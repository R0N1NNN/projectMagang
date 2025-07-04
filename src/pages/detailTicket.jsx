import { useEffect, useState } from "react";
import { Container, Card, Badge, Row, Col, Form, Button } from "react-bootstrap";

export default function DetailTicket() {
    const [ticket, setTicket] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [replyMessage, setReplyMessage] = useState("");

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.split("?")[1]);
        const token = hashParams.get("token");

        const stored = localStorage.getItem("tickets");
        const tickets = stored ? JSON.parse(stored) : [];

        if (!token) {
            setIsChecked(true);
            return;
        }

        const found = tickets.find(t => t.ticketNumber === token);

        if (!found) {
            setIsChecked(true);
            alert("Tiket tidak ditemukan atau token salah.");
            return;
        }

        setTicket(found);
        setIsChecked(true);
    }, []);

    const handleUserReply = () => {
        if (!replyMessage.trim()) return;

        const updatedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
        const index = updatedTickets.findIndex(t => t.ticketNumber === ticket.ticketNumber);

        if (index !== -1) {
            const now = Date.now();
            if (!updatedTickets[index].messages) updatedTickets[index].messages = [];

            updatedTickets[index].messages.push({
                sender: "Anda",
                content: replyMessage,
                timestamp: now
            });

            localStorage.setItem("tickets", JSON.stringify(updatedTickets));
            setTicket(updatedTickets[index]);
            setReplyMessage("");
        }
    };

    if (!isChecked || !ticket) return null;
    const isClosed = ticket?.status === "Selesai";

    return (
        <div>
            <header className="homepage">
                <Container>
                    <Row className="header-box pt-lg-5">
                        <Col className="ps-0">
                            <h1 className="profile">Detail Tiket Laporan</h1>
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
            <Card className="p-4" style={{ backgroundColor: "#213450", color: "#ffffff" }}>
                <h3>Detail Tiket</h3>
                <hr />
                <p><strong>Nomor Tiket:</strong> <code>{ticket.ticketNumber}</code></p>
                <p>
                    <strong>Status:</strong>{" "}
                    <Badge bg={ticket.status === "Dibatalkan" ? "danger" : "info"}>
                        {ticket.status}
                    </Badge>
                </p>
                <p><strong>Domain:</strong> {ticket.domain}</p>
                <p><strong>URL:</strong> {ticket.url}</p>
                <p><strong>Tanggal Kejadian:</strong> {ticket.date}</p>
                <p><strong>Jenis Insiden:</strong> {ticket.type}</p>
                <p><strong>Dampak:</strong> {ticket.impact}</p>
                <p><strong>Deskripsi:</strong></p>
                <p>{ticket.description || "(Tidak ada deskripsi)"}</p>
                <p><strong>Waktu Laporan:</strong> {new Date(ticket.createdAt).toLocaleString()}</p>
            </Card>
            <div className="chat-container mt-3">
                {ticket.messages.map((msg, idx) => {
                    const isUser = msg.sender === "Anda";
                    return (
                        <div
                            key={idx}
                            className={`chat-bubble ${isUser ? "user-bubble" : "admin-bubble"}`}
                        >
                            <p className="chat-sender">
                                <strong>{msg.sender}</strong> <small>{new Date(msg.timestamp).toLocaleString()}</small>
                            </p>
                            <p className="chat-text">{msg.content}</p>
                        </div>
                    );
                })}
            </div>
            {ticket.status !== "Dibatalkan" && (
                <div className="mt-4">
                    <h5>Kirim Balasan</h5>
                    <Form.Control
                        as="textarea"
                        disabled={isClosed}
                        rows={3}
                        placeholder="Tulis balasan Anda..."
                        value={replyMessage}
                        onChange={(e) => setReplyMessage(e.target.value)}
                        className="mb-2"
                    />
                    <Button variant="primary" onClick={handleUserReply} disabled={isClosed}>Kirim</Button>
                    {isClosed && <div className="text-info mt-2">Tiket telah ditutup oleh admin.</div>}
                </div>
            )}
        </div>
    );
}
