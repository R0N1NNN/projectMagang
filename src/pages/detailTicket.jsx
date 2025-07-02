import { useEffect, useState } from "react";
import { Container, Card, Badge } from "react-bootstrap";

export default function DetailTicket() {
    const [ticket, setTicket] = useState(null);
    const [isChecked, setIsChecked] = useState(false); // ✅ mencegah alert dobel

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");

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

    if (!isChecked) return null; // ⏳ Tunggu pengecekan token dulu

    if (!ticket) return null;

    return (
        <Container className="pt-5 pb-5">
            <Card className="p-4 shadow-lg">
                <h3>Detail Tiket Laporan</h3>
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
        </Container>
    );
}
