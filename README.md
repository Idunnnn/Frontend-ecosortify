Halo! Selamat datang di file README EcoSortify Frontend.
Di sini akan dijelaskan mengenai struktur proyek frontend EcoSortify yang dibangun menggunakan Next.js — termasuk REST API untuk klasifikasi gambar dan chatbot QnA tentang sampah.

---

## 🌿 EcoSortify Frontend

Selamat datang di proyek Frontend **EcoSortify!**
Frontend ini dibangun menggunakan **React.js (Next.js)** dan terintegrasi dengan backend EcoSortify untuk memberikan pengalaman klasifikasi sampah berbasis gambar serta chatbot tanya jawab seputar pengelolaan sampah. 

### Fitur Utama
1. **Autentikasi Pengguna** - Login dengan Google menggunakan Firebase Authentication.
2. **Klasifikasi Sampah Berbasis Gambar** - Upload gambar sampah dan dapatkan prediksi jenis sampah secara real-time.
3. **Chatbot Tanya Jawab (QnA) Tentang Sampah** - Berinteraksi dengan chatbot untuk mendapatkan edukasi terkait pengelolaan sampah.
4. **Panduan Pengelolaan Sampah** - Menampilkan riwayat percakapan user dengan chatbot.

## 🗂️ Struktur Direktori

| Nama File/Folder             | Tipe       | Deskripsi                                                                                         |
| ---------------------------- | ---------- | ------------------------------------------------------------------------------------------------- |
| `public/`                  | Folde   | 	Folder berisi aset publik seperti gambar dan manifest PWA. proyek.                                                |
| `public/images/`                  | Folder | Menyimpan gambar statis aplikasi.js.                                                                       |
| `public/PWA/`                       | Folder     | Konfigurasi Progressive Web App seperti manifest.json dan favicon.                                             |
| `src/`           | Folder     | Folder utama source code aplikasi frontend.                                                    |
| `src/components/`   | Folder | Berisi komponen UI yang dapat digunakan ulang.                                                 |
| `src/contexts/`  | Folder | Berisi context global seperti autentikasi user.                                                           |
| `src/firebase/config.jsx` | JavaScript | Konfigurasi Firebase. database                               |
| `src/firebase/firebaseClient.jsx`              | JavaScript     | Inisialisasi Firebase Client.                                                     |
| `src/pages/`      | Folder | Setup routing dan export handler klasifikasi gambar.                                              |
| `src/pages/index.jsx`     | JavaScript | Halaman landing page (beranda).                                       |
| `src/pages/about.jsx`    | JavaScript | Halaman tentang aplikasi.                                       |
| `src/pages/login.jsx`      | JavaScript | Halaman login pengguna.         |
| `src/pages/register.jsx`  | JavaScript | Halaman registrasi pengguna.        |
| `src/pages/scan.jsx`              | JavaScript     | 	Halaman klasifikasi gambar sampah. user                                                            |
| `src/pages/chatbot.jsx`      | JavaScript | Halaman chatbot tanya jawab tentang sampah. sampah.                                                    |
| `src/pages/guide.jsx`     | JavaScript | Halaman panduan pengelolaan sampah.                                                         |
| `src/pages/guide/`    | Folder | Folder untuk halaman panduan tambahan jika ada.                                                                  |
| `src/pages/api/`                 | Folder     | API route bawaan Next.js |
| `src/pages/_app.js`                  | JavaScript     | Setup global untuk styling dan provider aplikasi.                  |
| `src/pages/_document.js`                  | JavaScript     | Setup dokumen HTML utama di Next.js.                  |
| `package.json`               | JSON       | File konfigurasi project dan daftar dependensi NPM                                      |
| `package-lock.json`          | JSON       | File yang mengunci versi dependensi project.                                                      |
| `.gitignore`                 | File       | File konfigurasi untuk mengecualikan file/folder tertentu dari Git tracking.                      |

### Cara Menjalankan

#### 1. Clone project ini:

```
git clone https://github.com/EcoSortify/frontend.git
cd backend
```

#### 2. Install dependensi:

```
npm install
```

#### 3. Jalankan server:

```
npm run dev
```

#### 4. Server akan berjalan di:

```
http://localhost:3000
```
---

## 🔑 Konfigurasi Environment
Buat file `.env.local` di root project dan isi dengan konfigurasi berikut:

```
NEXT_PUBLIC_BACKEND_URL= (YOUR_BACKEND_URL);
GOOGLE_SERVICE_ACCOUNT_KEY= (YOUR_VERTEX_KEY);
```

## 📚 Teknologi yang Digunakan
- Next.js
- Firebase
- Tailwind CSS
- AOS