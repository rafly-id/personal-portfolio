# Personal Portfolio

Website portofolio pribadi untuk Muhammad Rafly Adriansyah, dibangun menggunakan **React**, **Vite**, **GSAP**, dan **Tailwind CSS**.

---

## Daftar Isi

* [Tentang](#tentang)
* [Fitur](#fitur)
* [Teknologi](#teknologi)
* [Demo](#demo)
* [Prasyarat](#prasyarat)
* [Instalasi & Konfigurasi](#instalasi--konfigurasi)
* [Menjalankan Aplikasi](#menjalankan-aplikasi)
* [Struktur Proyek](#struktur-proyek)

---

## Tentang

Repo ini berisi kode sumber website portofolio pribadi Muhammad Rafly Adriansyah. Tujuan utama adalah menampilkan profil, proyek, pengalaman, dan cara menghubungi melalui antarmuka yang responsif dan interaktif.

---

## Fitur

* 🏠 **Halaman Beranda**: Ringkasan profil dengan foto dan bio singkat.
* 📂 **Portofolio**: Daftar proyek dengan judul, deskripsi singkat, dan link live/demo.
* 📈 **Timeline**: Bagian pengalaman dan pendidikan.
* 📨 **Kontak**: Formulir kontak sederhana.
* 📱 **Responsif**: Dukungan tampilan mobile-first.

---

## Teknologi

* **Vite**
* **React**
* **Tailwind CSS**
* **GSAP** (GreenSock Animation Platform)

---

## Demo

> **Live Demo:** [https://raf-personal-portfolio.vercel.app/](https://raf-personal-portfolio.vercel.app

---

## Prasyarat

* Node.js v16 atau lebih baru
* npm atau yarn

---

## Instalasi & Konfigurasi

1. **Clone repo**

   ```bash
   git clone https://github.com/rafly-id/personal-portfolio.git
   cd personal-portfolio
   ```
2. **Install dependencies**

   ```bash
   npm install
   # atau
   yarn install
   ```
3. **Konfigurasi**

   * Jika ada variabel environment (misal API key), buat file `.env` sesuai kebutuhan.

---

## Menjalankan Aplikasi

* **Mode Pengembangan**

  ```bash
  npm run dev
  ```

  Buka: [http://localhost:5173](http://localhost:5173)

* **Build Produksi**

  ```bash
  npm run build
  ```

  Hasil build di folder `dist/`

* **Preview Hasil Build**

  ```bash
  npm run preview
  ```

---

## Struktur Proyek

```
personal-portfolio/
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js           # Konfigurasi Vite
├── tailwind.config.js       # Konfigurasi Tailwind CSS
├── eslintrc.config.js       # Konfigurasi ESLint
├── vercel.json              # Konfigurasi deployment Vercel
├── index.html               # Template HTML
├── public/                  # Aset statis (favicon, manifest, dsb.)
│   └── ...
├── src/                     # Kode sumber aplikasi
│   ├── assets/              # Gambar, font, media
│   ├── components/          # Komponen UI (About.jsx, Contact.jsx, Nav.jsx, Preloader.jsx, Project.jsx, Technologies.jsx)
│   ├── utils/               # Helper functions (gsapHover.js, scrollAnimation.js)
│   ├── views/               # Halaman utama & gaya
│   │   ├── Home.jsx         # Halaman beranda
│   │   ├── App.jsx          # Root component views
│   │   ├── index.css        # Styles khusus views
│   │   └── main.jsx         # Mount React ke DOM untuk views
│   ├── index.css            # Styles global
│   ├── App.jsx              # Entry point aplikasi (src)
│   └── main.jsx             # Mount React ke DOM (src)
└── README.md                # Dokumentasi proyek
```
