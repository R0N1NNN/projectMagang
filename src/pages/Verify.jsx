import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Verify() {
    const navigate = useNavigate();
    const hasVerified = useRef(false); // ← flag untuk mencegah eksekusi dobel

    useEffect(() => {
        if (hasVerified.current) return; // jangan ulangi
        hasVerified.current = true;

        const hash = window.location.hash || "";
        const hasQuery = hash.includes("?");
        const queryString = hasQuery ? hash.split("?")[1] : "";
        const query = new URLSearchParams(queryString);
        const email = query.get("email");

        if (email) {
            const cleanEmail = email.trim().toLowerCase();
            const data = localStorage.getItem(`user-${cleanEmail}`);
            if (data) {
                const { name } = JSON.parse(data);
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userEmail", email);
                localStorage.setItem("userName", name);

                window.dispatchEvent(new Event("storage"));
                alert("Email berhasil diverifikasi. Anda sekarang login.");
            } else {
                alert("Data akun tidak ditemukan.");
            }
        } else {
            alert("Tidak ada email ditemukan di link.");
        }

        navigate("/");
    }, [navigate]);

    return <p>Memverifikasi akun Anda...</p>;
}

export default Verify;
