const BeritaImage1 = `${import.meta.env.BASE_URL}berita1.png`;
const BeritaImage2 = `${import.meta.env.BASE_URL}berita2.png`;
const BeritaImage3 = `${import.meta.env.BASE_URL}berita3.png`;
const BeritaImage4 = `${import.meta.env.BASE_URL}berita4.png`;
const BeritaImage5 = `${import.meta.env.BASE_URL}berita5.png`;
const BeritaImage6 = `${import.meta.env.BASE_URL}berita6.png`;
const BeritaImage7 = `${import.meta.env.BASE_URL}berita7.png`;
const BeritaImage8 = `${import.meta.env.BASE_URL}berita8.png`;
const BeritaImage9 = `${import.meta.env.BASE_URL}berita9.png`;

const EventImage1 = `${import.meta.env.BASE_URL}event1.png`;
const EventImage2 = `${import.meta.env.BASE_URL}event2.png`;
const EventImage3 = `${import.meta.env.BASE_URL}event3.png`;
const EventImage4 = `${import.meta.env.BASE_URL}event4.png`;
const EventImage5 = `${import.meta.env.BASE_URL}event5.png`;
const EventImage6 = `${import.meta.env.BASE_URL}event6.png`;
const EventImage7 = `${import.meta.env.BASE_URL}event7.png`;
const EventImage8 = `${import.meta.env.BASE_URL}event8.png`;
const EventImage9 = `${import.meta.env.BASE_URL}event9.png`;

const InfoImage1 = `${import.meta.env.BASE_URL}infografis1.png`;
const InfoImage2 = `${import.meta.env.BASE_URL}infografis2.png`;
const InfoImage3 = `${import.meta.env.BASE_URL}infografis3.png`;
const InfoImage4 = `${import.meta.env.BASE_URL}infografis4.png`;
const InfoImage5 = `${import.meta.env.BASE_URL}infografis5.png`;
const InfoImage6 = `${import.meta.env.BASE_URL}infografis6.png`;

const KegiatanImage1 = `${import.meta.env.BASE_URL}kegiatan1.png`;
const KegiatanImage2 = `${import.meta.env.BASE_URL}kegiatan2.png`;
const KegiatanImage3 = `${import.meta.env.BASE_URL}kegiatan3.png`;
const KegiatanImage4 = `${import.meta.env.BASE_URL}kegiatan4.png`;
const KegiatanImage5 = `${import.meta.env.BASE_URL}kegiatan5.png`;
const KegiatanImage6 = `${import.meta.env.BASE_URL}kegiatan6.png`;
const KegiatanImage7 = `${import.meta.env.BASE_URL}kegiatan7.png`;

const KarirImage1 = `${import.meta.env.BASE_URL}karir1.png`;
const KarirImage2 = `${import.meta.env.BASE_URL}karir2.png`;
const KarirImage3 = `${import.meta.env.BASE_URL}karir3.png`;

const KontakIcon1 = `${import.meta.env.BASE_URL}icon-email.png`;
const KontakIcon2 = `${import.meta.env.BASE_URL}icon-wa.png`;
const KontakIcon3 = `${import.meta.env.BASE_URL}icon-youtube.png`;
const KontakIcon4 = `${import.meta.env.BASE_URL}icon-instagram.png`;
const KontakIcon5 = `${import.meta.env.BASE_URL}icon-x.png`;
const KontakIcon6 = `${import.meta.env.BASE_URL}icon-tiktok.png`;

const StatisIcon1 = `${import.meta.env.BASE_URL}shield-halved-solid.svg`;
const StatisIcon2 = `${import.meta.env.BASE_URL}bug-solid.svg`;
const StatisIcon3 = `${import.meta.env.BASE_URL}file-shield-solid.svg`;
const StatisIcon4 = `${import.meta.env.BASE_URL}user-secret-solid.svg`;

import { FaLock, FaWrench, FaHandPointer, FaSyncAlt, FaCloudUploadAlt, FaCogs } from "react-icons/fa";

export const semuaBerita = [
  {
    id: 1,
    image: BeritaImage1,
    title: "Penyedia Hosting VPS Disalahgunakan oleh Pelaku Ancaman untuk Menghindari Pengiriman dan Deteksi Malware",
    desc: 'Google baru-baru ini merilis pembaruan keamanan untuk mengatasi 62 kerentanan yang ditemukan pada perangkat lunaknya, termasuk dua kerentanan yang telah dieksploitasi secara aktif.',
    tanggal: "2025-04-29"
  },
  {
    id: 2,
    image: BeritaImage2,
    title: "Layanan Pembayaran Tol Disalahgunakan oleh Pelaku Ancaman Peretasan",
    desc: 'Google baru-baru ini merilis pembaruan keamanan untuk mengatasi 62 kerentanan yang ditemukan pada perangkat lunaknya, termasuk dua kerentanan yang telah dieksploitasi secara aktif.',
    tanggal: "10-04-2025"
  },
  {
    id: 3,
    image: BeritaImage3,
    title: "Penipuan Hacker untuk Menjalankan Perintah PowerShell Berbahaya di Windows",
    desc: 'Penipuan ini melibatkan penggunaan skrip PowerShell untuk mengunduh dan menjalankan malware di sistem target.',
    tanggal: "13-02-2025"
  },
  {
    id: 4,
    image: BeritaImage4,
    title: "Peringatan Ransomware: File Berbahaya Rdp.exe Terdeteksi",
    desc: 'File Rdp.exe terdeteksi sebagai ransomware yang berbahaya.',
    tanggal: "2025-01-07"
  },
  {
    id: 5,
    image: BeritaImage5,
    title: "LegionLoader: Malware yang Menginfeksi Ekstensi Chrome untuk Menyebarkan Infostealer",
    desc: 'Malware ini menginfeksi ekstensi Chrome untuk menyebarkan infostealer.',
    tanggal: "2025-01-03"
  },
  {
    id: 6,
    image: BeritaImage6,
    title: "Investigasi Eksploitasi Massal Kerentanan 0-Day Fortinet yang Memungkinkan Akses Root",
    desc: 'Investigasi ini dilakukan untuk mengatasi kerentanan 0-day pada perangkat Fortinet yang memungkinkan akses root.',
    tanggal: "2024-12-24"
  },
  {
    id: 7,
    image: BeritaImage7,
    title: "WmRAT dan Serangan Malware MiyaRAT pada Windows Menggunakan PDF Berbahaya",
    desc: 'Serangan ini melibatkan penggunaan PDF berbahaya untuk menginfeksi sistem Windows dengan malware.',
    tanggal: "2024-12-20"
  },
  {
    id: 8,
    image: BeritaImage8,
    title: "Evolusi Ancaman APT: Menghadapi Serangan Canggih di Tahun 2025",
    desc: 'Ancaman APT terus berkembang dan menjadi semakin canggih, memanfaatkan teknologi baru untuk menyerang target.',
    tanggal: "2024-12-20"
  },
  {
    id: 9,
    image: BeritaImage9,
    title: "Apa Itu Bashe? Ransomware Baru yang Diduga Serang Bank Besar Di indonesia",
    desc: 'Bashe adalah ransomware baru yang diduga menyerang bank besar di Indonesia.',
    tanggal: "2024-12-19"
  }
]

export const eventMendatang = [
  {
    id: 1,
    image: EventImage1,
    title: "Sosialisasi Security Awareness - Potensi Ancaman Siber di tahun 2023",
    tanggal: "2025-04-29"
  },
  {
    id: 2,
    image: EventImage2,
    title: "Sosialisasi Penilaian Mandiri - Terkait Kategorisasi Sistem Elektronik",
    tanggal: "10-04-2025"
  },
  {
    id: 3,
    image: EventImage3,
    title: "Sosialisasi Security Awareness - Menjaga Keamanan Akses Jaringan",
    tanggal: "13-02-2025"
  },
  {
    id: 4,
    image: EventImage4,
    title: "Sosialisasi Security Awareness - Workshop Secure Coding #3",
    tanggal: "2025-01-07"
  },
  {
    id: 5,
    image: EventImage5,
    title: "Sosialisasi Security Awareness - Workshop Secure Coding #2",
    tanggal: "2025-01-03"
  },
  {
    id: 6,
    image: EventImage6,
    title: "Sosialisasi Security Awareness - Workshop Secure Coding #1",
    tanggal: "2024-12-24"
  },
  {
    id: 7,
    image: EventImage7,
    title: "Sosialisasi Security Awareness - Social Engineering",
    tanggal: "2024-12-20"
  },
  {
    id: 8,
    image: EventImage8,
    title: "Sosialisasi Security Awareness Mengamankan Perangkat Mobile",
    tanggal: "2024-12-20"
  },
  {
    id: 9,
    image: EventImage9,
    title: "Sosialisasi Penggunaan komputer yang aman",
    tanggal: "2024-12-19"
  }
]

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
      "Tambahan lapisan keamanan saat login",
      "Bisa pakai SMS, email, atau aplikasi autentikator seperti Google Authenticator atau Authy"
    ]
  },
  {
    icon: <FaHandPointer size={40} />,
    title: "Jangan Klik Link Sembarangan",
    items: [
      "Waspada dengan email atau pesan yang mencurigakan (phishing)",
      "Periksa alamat website sebelum login atau isi data"
    ]
  },
  {
    icon: <FaSyncAlt size={40} />,
    title: "Rutin Update Perangkat & Aplikasi",
    items: [
      "Update sistem operasi, browser, dan aplikasi lain",
      "Patch keamanan penting untuk menutup celah yang bisa diserang"
    ]
  },
  {
    icon: <FaCloudUploadAlt size={40} />,
    title: "Backup Data Secara Berkala",
    items: [
      "Simpan salinan data penting di cloud dan/atau hard drive eksternal",
      "Hindari kehilangan data karena serangan atau kerusakan perangkat"
    ]
  },
  {
    icon: <FaCogs size={40} />,
    title: "Kenali Tanda-Tanda Peretasan",
    items: [
      "Akun tiba-tiba logout sendiri",
      "Aktivitas tidak dikenal pada akun/email",
      "Segera ganti password jika merasa dicurigai"
    ]
  }
];

// Tambahkan di file index.jsx
export const videoPanduan = [
  {
    url: "https://www.youtube.com/embed/MGFo7hpZ0Q0?si=x0EFisL1YXeQkbXk",
    title: "Penipuan Hacker untuk Menjalankan Perintah PowerShell Berbahaya di Windows",
    description:
      "Pada tanggal 12 Februari 2025, Microsoft Threat Intelligence mengungkapkan strategi serangan siber baru yang digunakan oleh kelompok peretas yang didukung negara asal Korea"
  },
  {
    url: "https://www.youtube.com/embed/MGFo7hpZ0Q0?si=x0EFisL1YXeQkbXk",
    title: "Penyedia Hosting VPS Disalahgunakan oleh Pelaku Ancaman untuk Menghindari Pengiriman dan Deteksi Malware",
    description:
      "Penyalahgunaan layanan hosting Virtual Private Server (VPS) oleh pelaku ancaman peretasan merupakan masalah yang semakin meningkat, mengingat VPS memberikan kontrol..."
  },
  {
    url: "https://www.youtube.com/embed/MGFo7hpZ0Q0?si=x0EFisL1YXeQkbXk",
    title: "Penyedia Hosting VPS Disalahgunakan oleh Pelaku Ancaman untuk Menghindari Pengiriman dan Deteksi Malware",
    description:
      "Penyalahgunaan layanan hosting Virtual Private Server (VPS) oleh pelaku ancaman peretasan merupakan masalah yang semakin meningkat, mengingat VPS memberikan kontrol..."
  }
];

export const infografis = [
  {
    image: InfoImage1,
    title: "Brute Force Ancaman nyata di dunia digital"
  },
  {
    image: InfoImage2,
    title: "Peringatan Keamanan - Celah berbahaya di temukan di open ssh"
  },
  {
    image: InfoImage3,
    title: "Waspada penipuan melalui whatsapp berkedok file APK"
  },
  {
    image: InfoImage4,
    title: "Tips Aman menggunakan Wifi Publik"
  },
  {
    image: InfoImage5,
    title: "Apa yang harus dilakukan pengelola server jika mengalami insiden siber"
  },
  {
    image: InfoImage6,
    title: "Waspada Bahaya Ransomware kenali modus serangannya"
  }
];

export const kegiatanDetail = [
  {
    id: 1,
    image: KegiatanImage1,
    title: 'Acara bimtek siberchat tanggal 23 maret 2021',
    tanggal: '2024-12-20'
  },
  {
    id: 2,
    image: KegiatanImage2,
    title: 'Pelatihan Malware Analysis',
    tanggal: '2024-12-20'
  },
  {
    id: 3,
    image: KegiatanImage3,
    title: 'Seminar drill test',
    tanggal: '2024-12-20'
  },
  {
    id: 4,
    image: KegiatanImage4,
    title: 'Sosialisasi Security Awareness - Mengamankan Perangkat Mobile',
    tanggal: '2024-12-20'
  },
  {
    id: 5,
    image: KegiatanImage5,
    title: 'Rapat Penyusunan Pendukung Kebijakan Tata Kelola Siber Sandi',
    tanggal: '2024-12-20'
  },
  {
    id: 6,
    image: KegiatanImage6,
    title: 'Bimtek Integrasi ke Aplikasi Esign',
    tanggal: '2024-12-20'
  },
  {
    id: 7,
    image: KegiatanImage7,
    title: 'Sosialisasi Penggunaan komputer yang aman',
    tanggal: '2024-12-20'
  },
  {
    id: 8,
    image: KegiatanImage7,
    title: 'Penilan kematangan Siber Oleh BSSN Senin 25 - rabu 27 Juli 2022',
    tanggal: '2024-12-20'
  },
]

export const halamanKegiatan = [
  { halaman: 2, href: '/kegiatan' },
  { halaman: 3, href: '/kegiatan' },
]

export const halamanBerita = [
  { halaman: 2, href: '/berita' },
  { halaman: 3, href: '/berita' },
]

export const cardKarir = [
  {
    id: 1,
    icon: KarirImage1,
    title: 'Junior Programmer',
    lokasi: 'Jakata Pusat, DKI Jakarta',
    posisi: '1 posisi',
  },
  {
    id: 2,
    icon: KarirImage2,
    title: 'Security Operation Center Analyst',
    lokasi: 'Jakata Pusat, DKI Jakarta',
    posisi: '1 posisi',
  },
  {
    id: 3,
    icon: KarirImage3,
    title: 'Pentester',
    lokasi: 'Jakata Pusat, DKI Jakarta',
    posisi: '1 posisi',
  },
  {
    id: 4,
    icon: KarirImage3,
    title: 'Pentester',
    lokasi: 'Jakata Pusat, DKI Jakarta',
    posisi: '1 posisi',
  }
]

export const cardKontak = [
  {
    id: 1,
    icon: KontakIcon1,
    title: 'Email',
    desc: 'Kirim email, kami selalu  siap membantu',
    url: 'https://mail.google.com/mail/u/0/#inbox'
  },
  {
    id: 2,
    icon: KontakIcon2,
    title: 'Whatsapp',
    desc: 'Butuh bantuan? kami siap membantu',
    url: 'https://web.whatsapp.com/'
  },
  {
    id: 3,
    icon: KontakIcon3,
    title: 'Youtube',
    desc: 'Subscribe kami untuk update video informatif',
    url: 'https://www.youtube.com/'
  },
  {
    id: 4,
    icon: KontakIcon4,
    title: 'Instagram',
    desc: 'Ikuti kami dan selalu cek update terbaru darikami setiap saat',
    url: 'https://www.instagram.com/'
  },
  {
    id: 5,
    icon: KontakIcon5,
    title: 'X / Twitter',
    desc: 'Follow Twitter kami untuk info dan update terbaru setiap hari',
    url: 'https://twitter.com/'
  },
  {
    id: 6,
    icon: KontakIcon6,
    title: 'Tik Tok',
    desc: 'Follow Tik tok kami untuk info seru lainnya!',
    url: 'https://www.tiktok.com/id-ID/'
  },

]

export const faq = [
  {
    id: 1,
    eventKey: '0',
    title: 'Apa itu CSIRT?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, enim aliquam dolor hic molestias architecto excepturi quisquam ratione accusamus tempora a quos vitae quis incidunt, ad, voluptatibus numquam minima libero?'
  },
  {
    id: 2,
    eventKey: '1',
    title: 'Siapa saja yang dapat melaporkan insiden ke CSIRT?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, enim aliquam dolor hic molestias architecto excepturi quisquam ratione accusamus tempora a quos vitae quis incidunt, ad, voluptatibus numquam minima libero?'
  },
  {
    id: 3,
    eventKey: '2',
    title: 'Jenis insiden apa yang bisa dilaporkan?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, enim aliquam dolor hic molestias architecto excepturi quisquam ratione accusamus tempora a quos vitae quis incidunt, ad, voluptatibus numquam minima libero?'
  },
  {
    id: 4,
    eventKey: '3',
    title: 'Bagaimana cara melaporkan insiden ke CSIRT?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, enim aliquam dolor hic molestias architecto excepturi quisquam ratione accusamus tempora a quos vitae quis incidunt, ad, voluptatibus numquam minima libero?'
  },
  {
    id: 5,
    eventKey: '4',
    title: 'Apakah laporan saya akan dirahasiakan?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, enim aliquam dolor hic molestias architecto excepturi quisquam ratione accusamus tempora a quos vitae quis incidunt, ad, voluptatibus numquam minima libero?'
  },
  {
    id: 6,
    eventKey: '5',
    title: 'Apakah layanan dari CSIRT dikenakan biaya?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, enim aliquam dolor hic molestias architecto excepturi quisquam ratione accusamus tempora a quos vitae quis incidunt, ad, voluptatibus numquam minima libero?'
  },
  {
    id: 7,
    eventKey: '6',
    title: 'Apakah CSIRT menyediakan pelatihan keamanan siber?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, enim aliquam dolor hic molestias architecto excepturi quisquam ratione accusamus tempora a quos vitae quis incidunt, ad, voluptatibus numquam minima libero?'
  },
  {
    id: 8,
    eventKey: '7',
    title: 'Bagaimana cara mencegah insiden keaman siber?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, enim aliquam dolor hic molestias architecto excepturi quisquam ratione accusamus tempora a quos vitae quis incidunt, ad, voluptatibus numquam minima libero?'
  }
]

export const cardProfile = [
  {
    id: 1,
    img: BeritaImage1,
    title: "Be there for you",
    desc: "We never lose sight of the people we build our solutions for. Without our customers we wouldn’t exist, so we put them first."
  },
  {
    id: 2,
    img: BeritaImage2,
    title: "Be committed experts",
    desc: "Through our recognized technology expertise, we’re committed to providing our customers with safety and confidence, so they know they can trust us."
  },
  {
    id: 3,
    img: BeritaImage3,
    title: "Be cleverly inventive",
    desc: "We’re tirelessly looking for new, smart solutions and always striving to reach new levels of cybersecurity excellence."
  },
  {
    id: 4,
    img: BeritaImage4,
    title: "Be powered by challenges",
    desc: "We constantly challenge ourselves and the status quo to do what others can’t or won’t do in the cybersecurity space."
  }
];

export const cardStatistik = [
  {
    id: 1,
    icon: StatisIcon1,
    title: "Keberhasilan Penanganan",
    desc: "98%"
  },
  {
    id: 2,
    icon: StatisIcon2,
    title: "Kasus Malware",
    desc: "1.200+"
  },
  {
    id: 3,
    icon: StatisIcon3,
    title: "Kasus Phising",
    desc: "850+"
  },
  {
    id: 4,
    icon: StatisIcon4,
    title: "Ancaman Diblokir",
    desc: "2.500+"
  }
]