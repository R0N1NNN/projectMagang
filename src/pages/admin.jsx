import { useEffect, useState } from 'react';
import '../css/login.css'; // reuse CSS dari login

function Admin() {
    const [users, setUsers] = useState([]);

    // Ambil akun dari localStorage
    useEffect(() => {
        const userKeys = Object.keys(localStorage).filter(key => key.startsWith("user-"));
        const userData = userKeys.map(key => {
            try {
                const parsed = JSON.parse(localStorage.getItem(key));
                return {
                    key,
                    name: parsed.name || '-',
                    email: parsed.email || key.replace('user-', ''),
                    occupation: parsed.occupation || '-',
                    birthDate: parsed.birthDate || '-'
                };
            } catch {
                return null;
            }
        }).filter(Boolean);
        setUsers(userData);
    }, []);

    useEffect(() => {
        // Saat halaman admin dibuka
        document.body.style.overflow = 'hidden';

        // Saat halaman admin ditinggalkan (unmount)
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

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

    return (
        <div className="login-page">
            <div className="login-container p-4" style={{ backdropFilter: 'blur(5px)', background: 'rgba(255, 255, 255, 0.1)' }}>
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
            </div>
        </div>
    );
}

export default Admin;
