import { useEffect, useState } from 'react';
import '../css/login.css'; // reuse CSS dari login

function Admin() {
    const [users, setUsers] = useState([]);
    const [mode, setMode] = useState("akun");
    const [tickets, setTickets] = useState([]);
    const [sentMessages, setSentMessages] = useState({}); // key: ticketNumber, value: true
    const [viewingHistory, setViewingHistory] = useState(null); // ticketNumber
    const [newReply, setNewReply] = useState("");
    const ITEMS_PER_PAGE = 6;
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("tickets")) || [];
        setTickets(stored);
    }, []);

    useEffect(() => {
        const userData = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("user-")) {
                try {
                    const parsed = JSON.parse(localStorage.getItem(key));
                    userData.push({
                        key,
                        name: parsed.name || '-',
                        email: parsed.email || key.replace("user-", ""),
                        occupation: parsed.occupation || '-',
                        birthDate: parsed.birthDate || '-',
                    });
                } catch (e) {
                    continue;
                }
            }
        }
        setUsers(userData);
    }, []);

    useEffect(() => {
        const raw = localStorage.getItem("tickets");
        if (!raw) return;

        try {
            const stored = JSON.parse(raw).map(ticket => {
                if (!Array.isArray(ticket.messages)) ticket.messages = [];
                ticket.messages = ticket.messages.map(msg => ({
                    sender: msg.sender || (msg.from === "admin" ? "Admin" : "Anda"),
                    content: msg.content || msg.text || "",
                    timestamp: new Date(msg.time || Date.now()).getTime()
                }));
                return ticket;
            });

            setTickets(stored);
        } catch (err) {
            console.error("Gagal parsing ticket:", err);
        }
    }, []);

    const paginatedTickets = tickets.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleReplyInHistory = () => {
        const index = tickets.findIndex(t => t.ticketNumber === viewingHistory);
        if (index === -1 || !newReply.trim()) return;

        const updated = [...tickets];
        const now = Date.now();

        if (!updated[index].messages) updated[index].messages = [];

        updated[index].messages.push({
            sender: "Admin",
            content: newReply,
            timestamp: now
        });

        updated[index].status = "Diproses";
        localStorage.setItem("tickets", JSON.stringify(updated));
        setTickets(updated);

        setSentMessages(prev => ({
            ...prev,
            [updated[index].ticketNumber]: true,
        }));

        setNewReply("");

        setTimeout(() => {
            setSentMessages(prev => ({
                ...prev,
                [updated[index].ticketNumber]: false,
            }));
        }, 3000);
    };

    const handleCloseTicket = () => {
        const updated = [...tickets];
        const index = updated.findIndex(t => t.ticketNumber === viewingHistory);
        if (index === -1) return;

        updated[index].status = "Selesai";
        localStorage.setItem("tickets", JSON.stringify(updated));
        setTickets(updated);
    };


    const handleDelete = (key) => {
        if (confirm(`Yakin ingin menghapus akun ${key.replace("user-", "")}?`)) {
            localStorage.removeItem(key);
            setUsers(prev => prev.filter(u => u.key !== key));
        }
    };

    const handleDeleteAll = () => {
        if (confirm("Yakin ingin menghapus semua akun?")) {
            for (let key in localStorage) {
                if (key.startsWith("user-")) {
                    localStorage.removeItem(key);
                }
            }
            setUsers([]);
        }
    };

    const currentTicket = tickets.find(t => t.ticketNumber === viewingHistory);
    const isClosed = currentTicket?.status === "Selesai";


    return (
        <div className="admin-page">
            <div className="login-container p-4" style={{ backdropFilter: 'blur(5px)', background: '#213450' }}>
                <div className="text-center mb-4">
                    <button
                        className={`btn btn-${mode === "akun" ? "primary" : "secondary"} me-2`}
                        onClick={() => setMode("akun")}
                    >
                        Kelola Akun
                    </button>
                    <button
                        className={`btn btn-${mode === "ticket" ? "primary" : "secondary"}`}
                        onClick={() => setMode("ticket")}
                    >
                        Kelola Ticket
                    </button>
                </div>
                {mode === "akun" && (
                    <>
                        <h2 className="text-black text-center mb-4 admin-header">Halaman Admin - Kelola Akun</h2>
                        {users.length === 0 ? (
                            <p className="text-white text-center">Tidak ada akun terdaftar.</p>
                        ) : (
                            <>
                                <table className="table table-striped text-white">
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                            <th>Nama</th>
                                            <th>Pekerjaan</th>
                                            <th>Tanggal Lahir</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(user => (
                                            <tr key={user.key}>
                                                <td>{user.email}</td>
                                                <td>{user.name}</td>
                                                <td>{user.occupation}</td>
                                                <td>{user.birthDate}</td>
                                                <td>
                                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.key)}>Hapus</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="text-center mt-3">
                                    <button className="btn btn-warning" onClick={handleDeleteAll}>Hapus Semua Akun</button>
                                </div>
                            </>
                        )}
                    </>
                )}
                {mode === "ticket" && (
                    <>
                        <h2 className="text-black text-center mb-4 admin-header">Kelola Tiket Masuk</h2>
                        {tickets.length === 0 ? (
                            <p className="text-white text-center">Tidak ada tiket yang masuk.</p>
                        ) : viewingHistory ? (
                            <div className="text-white w-100">
                                <button className="btn btn-secondary mb-3" onClick={() => setViewingHistory(null)}>Kembali</button>
                                <hr />
                                <h5>Tiket #{viewingHistory}</h5>
                                <hr />
                                {/* Detail Tiket */}
                                {currentTicket && (
                                    <div className="mb-4">
                                        <p><strong>Dibuat Oleh:</strong> {currentTicket.createdBy || 'Guest'}</p>
                                        <p><strong>Email:</strong> {currentTicket.email || '-'}</p>
                                        <p><strong>Domain:</strong> {currentTicket.domain}</p>
                                        <p><strong>URL:</strong> {currentTicket.url}</p>
                                        {currentTicket.attachment && (
                                            <div className="mt-3">
                                                <h5>Lampiran:</h5>
                                                {currentTicket.attachment.startsWith("data:image") ? (
                                                    <img src={currentTicket.attachment} alt="Lampiran" style={{ maxWidth: '100%', maxHeight: '400px' }} />
                                                ) : (
                                                    <a href={currentTicket.attachment} download="lampiran">Unduh File</a>
                                                )}
                                            </div>
                                        )}
                                        <p><strong>Deskripsi:</strong> {currentTicket.description}</p>
                                        <p><strong>Dibuat Pada:</strong> {new Date(currentTicket.createdAt).toLocaleString()}</p>
                                        <p><strong>Status:</strong> {currentTicket.status}</p>
                                    </div>
                                )}
                                <hr />
                                <div>
                                    {tickets.find(t => t.ticketNumber === viewingHistory)?.messages?.map((msg, i) => {
                                        const sender = msg.sender || msg.from || "Tidak diketahui";
                                        const content = msg.content || msg.text || "(pesan kosong)";
                                        const timeRaw = msg.timestamp || msg.time;
                                        const time = !isNaN(new Date(timeRaw)) ? new Date(timeRaw).toLocaleString() : "Waktu tidak valid";

                                        let displayName = sender;
                                        const ticket = tickets.find(t => t.ticketNumber === viewingHistory);
                                        if (sender === "Anda") {
                                            displayName = ticket.createdBy || `Guest`;
                                        } else if (sender === "Admin") {
                                            displayName = "Anda";
                                        }

                                        const isAdmin = sender === "Admin";

                                        return (
                                            <div key={i} className={`d-flex mb-3 ${isAdmin ? 'justify-content-end' : 'justify-content-start'}`}>
                                                <div
                                                    style={{
                                                        background: isAdmin ? "#0d6efd" : "#6c757d",
                                                        color: "#fff",
                                                        padding: "10px 15px",
                                                        borderRadius: "20px",
                                                        width: "auto",
                                                        textAlign: "left"
                                                    }}
                                                >
                                                    <strong>{displayName}</strong>
                                                    <div style={{ fontSize: "0.9rem" }}>{content}</div>
                                                    <small className="text-light">{time}</small>
                                                </div>
                                            </div>
                                        );
                                    }) || <p>Tidak ada pesan.</p>}
                                </div>
                                <div className="mb-3 mt-4">
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="Ketik balasan untuk user..."
                                        value={newReply}
                                        onChange={(e) => setNewReply(e.target.value)}
                                        disabled={isClosed}
                                    />
                                    <div className="d-flex gap-2 mt-3">
                                        <button
                                            className="btn btn-success"
                                            onClick={handleReplyInHistory}
                                            disabled={isClosed}
                                        >
                                            Kirim Pesan
                                        </button>
                                        <button
                                            className="btn btn-warning"
                                            onClick={handleCloseTicket}
                                            disabled={isClosed}
                                        >
                                            Tutup Ticket
                                        </button>
                                    </div>
                                    {isClosed && (
                                        <div className="text-info mt-2">
                                            🟢 Tiket telah ditutup. Anda tidak bisa mengirim pesan lagi.
                                        </div>
                                    )}

                                </div>
                            </div>

                        ) : (
                            <div className="d-flex flex-wrap justify-content-center w-100">
                                {paginatedTickets.map((ticket, index) => (
                                    <div
                                        key={ticket.ticketNumber}
                                        className="p-3 mb-4"
                                        style={{
                                            background: "#16253f",
                                            borderRadius: 10,
                                            width: "48%", // 👈 penting untuk 2 kolom
                                            minWidth: "300px",
                                            margin: "1%",
                                            color: "white",

                                        }}
                                    >
                                        <p className="text-white"><strong>No Tiket:</strong> {ticket.ticketNumber}</p>
                                        <p className="text-white"><strong>Ticket Dibuat Oleh:</strong> {ticket.createdBy || `Guest`}</p>
                                        <p>
                                            <strong className="text-white me-2">Status:</strong>
                                            <span className={`badge ${ticket.status === "Diproses"
                                                ? "bg-primary"
                                                : ticket.status === "Selesai"
                                                    ? "bg-success"
                                                    : ticket.status === "Dibatalkan"
                                                        ? "bg-danger"
                                                        : "bg-secondary"
                                                }`}>
                                                {ticket.status}
                                            </span>
                                        </p>
                                        <p className="text-white"><strong>URL:</strong> {ticket.url}</p>
                                        {ticket.status === "Dibatalkan" ? (
                                            <p className="text-danger mt-3">Tiket ini telah dibatalkan oleh pengguna. Tidak dapat dibalas.</p>
                                        ) : (
                                            <>
                                                <div className="d-flex gap-2 mt-4">
                                                    <button
                                                        className="btn btn-info"
                                                        onClick={() => setViewingHistory(ticket.ticketNumber)}
                                                    >
                                                        Kirim Pesan
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}

                            </div>
                        )}
                        <div className="text-center mt-3 mx-auto">
                            {Array.from({ length: Math.ceil(tickets.length / ITEMS_PER_PAGE) }, (_, i) => (
                                <button
                                    key={i}
                                    className={`btn ${currentPage === i + 1 ? 'btn-primary' : 'btn-secondary'} mx-1`}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Admin;
