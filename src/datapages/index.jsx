import { FaLock, FaWrench, FaHandPointer, FaSyncAlt, FaCloudUploadAlt, FaCogs } from "react-icons/fa";

// Helper untuk ambil gambar dari public/
const publicImage = (filename) => `${import.meta.env.BASE_URL}${filename}`;

export const semuaBerita = [
  { id: 1, image: publicImage('berita1.png'), title: "Penyedia Hosting VPS...", desc: 'Google baru-baru ini merilis...', tanggal: "2025-04-29" },
  { id: 2, image: publicImage('berita2.png'), title: "Layanan Pembayaran Tol...", desc: 'Google baru-baru ini merilis...', tanggal: "10-04-2025" },
  { id: 3, image: publicImage('berita3.png'), title: "Penipuan Hacker...", desc: 'Penipuan ini melibatkan...', tanggal: "13-02-2025" },
  { id: 4, image: publicImage('berita4.png'), title: "Peringatan Ransomware...", desc: 'File Rdp.exe terdeteksi...', tanggal: "2025-01-07" },
  { id: 5, image: publicImage('berita5.png'), title: "LegionLoader: Malware...", desc: 'Malware ini menginfeksi...', tanggal: "2025-01-03" },
  { id: 6, image: publicImage('berita6.png'), title: "Investigasi Eksploitasi...", desc: 'Investigasi ini dilakukan...', tanggal: "2024-12-24" },
  { id: 7, image: publicImage('berita7.png'), title: "WmRAT dan Malware MiyaRAT...", desc: 'Serangan ini melibatkan...', tanggal: "2024-12-20" },
  { id: 8, image: publicImage('berita8.png'), title: "Evolusi Ancaman APT...", desc: 'Ancaman APT terus berkembang...', tanggal: "2024-12-20" },
  { id: 9, image: publicImage('berita9.png'), title: "Apa Itu Bashe? Ransomware...", desc: 'Bashe adalah ransomware...', tanggal: "2024-12-19" }
];

export const eventMendatang = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  image: publicImage(`event${i + 1}.png`),
  title: `Sosialisasi Event #${i + 1}`,
  tanggal: "2025-04-29"
}));

export const infografis = Array.from({ length: 6 }, (_, i) => ({
  image: publicImage(`infografis${i + 1}.png`),
  title: `Infografis Keamanan ${i + 1}`
}));

export const kegiatanDetail = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  image: publicImage(`kegiatan${i + 1}.png`),
  title: `Kegiatan #${i + 1}`,
  tanggal: "2024-12-20"
}));

export const halamanKegiatan = [
  { halaman: 2, href: '/kegiatan' },
  { halaman: 3, href: '/kegiatan' }
];

export const halamanBerita = [
  { halaman: 2, href: '/berita' },
  { halaman: 3, href: '/berita' }
];

export const cardKarir = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  icon: publicImage(`karir${i + 1}.png`),
  title: ['Junior Programmer', 'SOC Analyst', 'Pentester'][i],
  lokasi: 'Jakarta Pusat, DKI Jakarta',
  posisi: '1 posisi'
}));

export const cardKontak = [
  { id: 1, icon: publicImage('icon-email.png'), title: 'Email', desc: 'Kirim email, kami siap membantu', url: 'https://mail.google.com/' },
  { id: 2, icon: publicImage('icon-wa.png'), title: 'Whatsapp', desc: 'Butuh bantuan? kami siap membantu', url: 'https://web.whatsapp.com/' },
  { id: 3, icon: publicImage('icon-youtube.png'), title: 'YouTube', desc: 'Subscribe untuk info video', url: 'https://www.youtube.com/' },
  { id: 4, icon: publicImage('icon-instagram.png'), title: 'Instagram', desc: 'Follow kami untuk update terbaru', url: 'https://www.instagram.com/' },
  { id: 5, icon: publicImage('icon-x.png'), title: 'Twitter/X', desc: 'Ikuti kami di X untuk berita', url: 'https://twitter.com/' },
  { id: 6, icon: publicImage('icon-tiktok.png'), title: 'TikTok', desc: 'Lihat info seru di TikTok kami', url: 'https://www.tiktok.com/' }
];

export const tips = [
  {
    icon: <FaLock size={40} />,
    title: "Gunakan Password yang Kuat dan Unik",
    items: [
      "Kombinasi huruf besar, huruf kecil, angka, dan simbol",
      "Jangan gunakan ulang password yang sama di banyak akun",
      "Gunakan password manager untuk menyimpan dengan aman"
    ]
  },
  {
    icon: <FaWrench size={40} />,
    title: "Aktifkan Autentikasi Dua Faktor (2FA)",
    items: [
      "Lapisan keamanan ekstra saat login",
      "Gunakan aplikasi autentikator atau SMS"
    ]
  },
  {
    icon: <FaHandPointer size={40} />,
    title: "Jangan Klik Link Sembarangan",
    items: [
      "Waspadai email mencurigakan (phishing)",
      "Periksa URL dengan teliti sebelum mengisi data"
    ]
  },
  {
    icon: <FaSyncAlt size={40} />,
    title: "Rutin Update Perangkat & Aplikasi",
    items: [
      "Update sistem dan software secara rutin",
      "Tutup celah keamanan penting"
    ]
  },
  {
    icon: <FaCloudUploadAlt size={40} />,
    title: "Backup Data Secara Berkala",
    items: [
      "Gunakan cloud dan hard drive eksternal",
      "Untuk menghindari kehilangan data"
    ]
  },
  {
    icon: <FaCogs size={40} />,
    title: "Kenali Tanda-Tanda Peretasan",
    items: [
      "Logout tiba-tiba, aktivitas aneh",
      "Segera ubah password jika dicurigai"
    ]
  }
];

export const videoPanduan = [
  {
    url: "https://www.youtube.com/embed/MGFo7hpZ0Q0?si=x0EFisL1YXeQkbXk",
    title: "PowerShell Berbahaya di Windows",
    description: "Microsoft mengungkapkan strategi serangan peretas menggunakan PowerShell."
  },
  {
    url: "https://www.youtube.com/embed/MGFo7hpZ0Q0?si=x0EFisL1YXeQkbXk",
    title: "Hosting VPS Disalahgunakan",
    description: "Penyalahgunaan layanan VPS untuk pengiriman malware."
  }
];

export const cardProfile = [
  {
    id: 1,
    img: publicImage('berita1.png'),
    title: "Be there for you",
    desc: "Kami hadir untuk melayani dan melindungi."
  },
  {
    id: 2,
    img: publicImage('berita2.png'),
    title: "Be committed experts",
    desc: "Komitmen terhadap keamanan dan keahlian."
  },
  {
    id: 3,
    img: publicImage('berita3.png'),
    title: "Be cleverly inventive",
    desc: "Selalu inovatif dalam solusi siber."
  },
  {
    id: 4,
    img: publicImage('berita4.png'),
    title: "Be powered by challenges",
    desc: "Kami tangguh menghadapi tantangan digital."
  }
];

export const cardStatistik = [
  { id: 1, icon: publicImage('shield-halved-solid.svg'), title: "Penanganan Berhasil", desc: "98%" },
  { id: 2, icon: publicImage('bug-solid.svg'), title: "Kasus Malware", desc: "1.200+" },
  { id: 3, icon: publicImage('file-shield-solid.svg'), title: "Kasus Phishing", desc: "850+" },
  { id: 4, icon: publicImage('user-secret-solid.svg'), title: "Ancaman Diblokir", desc: "2.500+" }
];

export const faq = [
  { id: 1, eventKey: '0', title: 'Apa itu CSIRT?', desc: 'CSIRT adalah tim tanggap insiden siber untuk melindungi sistem informasi.' },
  { id: 2, eventKey: '1', title: 'Siapa saja yang dapat melapor?', desc: 'Individu, organisasi, maupun instansi pemerintah.' },
  { id: 3, eventKey: '2', title: 'Jenis insiden apa yang bisa dilaporkan?', desc: 'Phishing, malware, ransomware, pencurian data, dll.' },
  { id: 4, eventKey: '3', title: 'Bagaimana cara melaporkan?', desc: 'Gunakan formulir di aplikasi atau kirim email ke CSIRT.' },
  { id: 5, eventKey: '4', title: 'Apakah laporan saya rahasia?', desc: 'Ya, semua laporan akan dijaga kerahasiaannya.' },
  { id: 6, eventKey: '5', title: 'Apakah layanan CSIRT gratis?', desc: 'Ya, seluruh layanan CSIRT bersifat gratis untuk publik.' },
  { id: 7, eventKey: '6', title: 'Apakah CSIRT menyediakan pelatihan?', desc: 'Ya, kami menyelenggarakan sosialisasi dan pelatihan rutin.' },
  { id: 8, eventKey: '7', title: 'Bagaimana mencegah insiden?', desc: 'Gunakan password kuat, update rutin, dan edukasi keamanan.' }
];
