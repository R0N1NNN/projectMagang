import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


import Lottie from 'lottie-react';

import '../css/login.css';
import loginAnimasi from '../../public/animasiLogin.json';
import regAnimasi from '../../public/animasiRegister.json';
import lupaAnimasi from '../../public/animasiLupa.json';
import emailjs from '@emailjs/browser';

// Simpan akun ke localStorage
const saveUserData = (email, name, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const data = JSON.stringify({ name, email: cleanEmail, password });
    localStorage.setItem(`user-${cleanEmail}`, data);
};

function Login() {
    const [isRegister, setIsRegister] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [resetEmail, setResetEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const animasi = isForgotPassword
        ? lupaAnimasi
        : isRegister
            ? regAnimasi
            : loginAnimasi;

    // Register
    const handleRegister = async (e) => {
        e.preventDefault();

        if (!email || !name || !password) {
            alert("Semua field wajib diisi.");
            return;
        }

        saveUserData(email, name, password);

        const cleanEmail = email.trim().toLowerCase();
        const templateParams = {
            user_name: name,
            user_email: cleanEmail,
            user_password: password,
        };

        emailjs.send(
            'service_fgy7l3i',
            'template_44fgsi9',
            templateParams,
            'Xw0Iu8t5mHaLHk3g2'
        ).then(() => {
            alert("Email verifikasi telah dikirim ke " + email);
        }).catch(() => {
            alert("Gagal mengirim email verifikasi.");
        });
    };

    // Ganti password
    const handlePasswordReset = (e) => {
        e.preventDefault();

        if (!newPassword || !confirmPassword) {
            alert("Semua field wajib diisi.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Password baru tidak cocok.");
            return;
        }

        const stored = localStorage.getItem(`user-${resetEmail}`);
        if (!stored) {
            alert("Akun tidak ditemukan.");
            return;
        }

        const userData = JSON.parse(stored);
        userData.password = newPassword;
        localStorage.setItem(`user-${resetEmail}`, JSON.stringify(userData));

        alert("Password berhasil diubah! Silakan login.");
        resetAll();
    };

    const resetAll = () => {
        setIsForgotPassword(false);
        setIsResetting(false);
        setResetEmail('');
        setNewPassword('');
        setConfirmPassword('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-info pt-5">
                    <h2>
                        {isRegister
                            ? "Buat Akun"
                            : isForgotPassword
                                ? isResetting ? "Ganti Kata Sandi" : "Lupa Kata Sandi"
                                : "Login"}
                    </h2>
                    <p>
                        {isRegister
                            ? "Silakan isi formulir untuk membuat akun baru"
                            : isForgotPassword
                                ? isResetting
                                    ? "Masukkan password baru dan konfirmasi"
                                    : "Masukkan email yang Anda gunakan untuk mengatur ulang kata sandi"
                                : "Silakan login dengan akun yang sudah terdaftar"}
                    </p>

                    <Lottie animationData={animasi} loop style={{ maxWidth: 500 }} />
                </div>

                <div className="login-form">
                    <div className="logo text-center mb-5">
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" width="100" />
                    </div>

                    {isRegister ? (
                        <form onSubmit={handleRegister}>
                            <input type="text" placeholder="Nama Lengkap" value={name} onChange={(e) => setName(e.target.value)} className="text-black" />
                            <input type="email" placeholder="Alamat Email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-black" />
                            <input type="password" placeholder="Kata Sandi" value={password} onChange={(e) => setPassword(e.target.value)} className="text-black" />
                            <button type="submit">Daftar</button>
                            <p className="text-center mt-3 text-black">
                                Sudah punya akun? <span className="link" onClick={() => setIsRegister(false)}>Login</span>
                            </p>
                        </form>
                    ) : isForgotPassword ? (
                        isResetting ? (
                            <form onSubmit={handlePasswordReset}>
                                <label className="text-black">Password Baru:</label>
                                <input type="password" placeholder="Password Baru" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="text-black" />
                                <label className="text-black">Konfirmasi Password:</label>
                                <input type="password" placeholder="Konfirmasi Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="text-black" />
                                <button type="submit">Ubah Password</button>
                                <p className="text-center mt-3 text-black">
                                    Tekan <span className="link" onClick={resetAll}>kembali</span> untuk login
                                </p>
                            </form>
                        ) : (
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                const cleanEmail = email.trim().toLowerCase();
                                const stored = localStorage.getItem(`user-${cleanEmail}`);
                                if (!stored) {
                                    alert("Email tidak ditemukan.");
                                    return;
                                }
                                setResetEmail(cleanEmail);
                                setIsResetting(true);
                            }}>
                                <label className="text-black">Masukkan Email:</label>
                                <input type="email" placeholder="Alamat Email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-black" />
                                <button type="submit">Kirim</button>
                                <p className="text-center mt-3 text-black">
                                    Tekan <span className="link" onClick={resetAll}>kembali</span> untuk login
                                </p>
                            </form>
                        )
                    ) : (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const cleanEmail = email.trim().toLowerCase();
                            const stored = localStorage.getItem(`user-${cleanEmail}`);
                            if (!stored) {
                                alert("Akun tidak ditemukan.");
                                return;
                            }
                            const { password: savedPassword, name: savedName } = JSON.parse(stored);
                            if (savedPassword !== password) {
                                alert("Password salah.");
                                return;
                            }
                            localStorage.setItem('isLoggedIn', 'true');
                            localStorage.setItem('userEmail', cleanEmail);
                            localStorage.setItem('userName', savedName);
                            window.dispatchEvent(new Event("storage"));
                            window.location.href = '/';
                        }}>
                            <input type="email" placeholder="Alamat Email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-black" />
                            <input type="password" placeholder="Kata Sandi" value={password} onChange={(e) => setPassword(e.target.value)} className="text-black" />
                            <div className="text-end pt-5">
                                <span className="link" onClick={() => setIsForgotPassword(true)}>Lupa Kata Sandi?</span>
                            </div>
                            <button type="submit">Masuk</button>

                            <div className="text-center mt-3">
                                <p>Atau login dengan akun Google</p>
                                <div className="d-flex justify-content-center">
                                    <GoogleLogin
                                        onSuccess={(credentialResponse) => {
                                            if (!credentialResponse || !credentialResponse.credential) {
                                                alert("Google login gagal: token kosong.");
                                                return;
                                            }

                                            try {
                                                const decoded = jwtDecode(credentialResponse.credential);
                                                const name = decoded.name;
                                                const email = decoded.email;
                                                const cleanEmail = email.trim().toLowerCase();

                                                // Cek & simpan akun jika belum ada
                                                const existing = localStorage.getItem(`user-${cleanEmail}`);
                                                if (!existing) {
                                                    const userData = { name, email: cleanEmail, password: 'google_oauth' };
                                                    localStorage.setItem(`user-${cleanEmail}`, JSON.stringify(userData));
                                                }

                                                // Simpan status login
                                                localStorage.setItem('isLoggedIn', 'true');
                                                localStorage.setItem('userEmail', cleanEmail);
                                                localStorage.setItem('userName', name);

                                                window.dispatchEvent(new Event('storage'));
                                                window.location.href = '/';
                                            } catch (err) {
                                                console.error("❌ Gagal decode token Google:", err);
                                                alert("Gagal memproses login Google.");
                                            }
                                        }}
                                        onError={() => {
                                            alert("Gagal login dengan Google.");
                                        }}
                                        useOneTap
                                        width="100%"
                                    />
                                </div>
                            </div>
                            <p className="text-center mt-3 text-black">
                                Belum punya akun? <span className="link" onClick={() => setIsRegister(true)}>Buat Akun</span>
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
