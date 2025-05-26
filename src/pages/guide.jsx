import React from 'react';
import Link from 'next/link';

const Guide = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo Ecosortify */}
          <div className="flex items-center space-x-2">
            {/* Anda bisa ganti src="/path/to/your/logo.png" dengan path logo aktual Anda */}
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              {/* Ini adalah placeholder jika Anda tidak memiliki file gambar logo */}
              {/* Anda bisa menggantinya dengan <img src="/path/to/your/logo.png" alt="Ecosortify Logo" className="h-8 w-8" /> */}
            </div>
            <h1 className="text-3xl font-bold text-green-600">Ecosortify</h1>
          </div>

          {/* Bagian navigasi utama */}
          <nav className="flex space-x-8 mr-auto ml-16">
            <Link href="/" className="text-gray-800 hover:text-green-600 font-medium text-lg">Home</Link>
            <Link href="/scan" className="text-gray-800 hover:text-green-600 font-medium text-lg">Scan</Link>
            <Link href="/guide" className="text-gray-800 hover:text-green-600 font-medium text-lg">Guide</Link>
            <Link href="/chatbot" className="text-gray-800 hover:text-green-600 font-medium text-lg">Chatbot</Link>
            <Link href="/about" className="text-gray-800 hover:text-green-600 font-medium text-lg">About</Link>
          </nav>

          {/* Tombol Register dan Login */}
          <div className="flex space-x-4">
            <button className="px-6 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200 text-lg">Register</button>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-lg">Login</button>
          </div>
        </div>
      </header>

      {/* Main Content - 3 Column Layout */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* KIRI: Introduction, Main content, FAQ */}
          <aside className="lg:w-1/6 order-first lg:order-first">
            <div className="sticky top-8 space-y-8">
              {/* Introduction Section */}
              <nav>
                {/* Judul Introduction menggunakan body-8 */}
                <h2 className="text-gray-700 mb-4 body-8">Introduction</h2>
                <ul className="list-disc pl-6 space-y-1 body-8"> {/* UL dan LI menggunakan body-8 */}
                  <li>Overview</li>
                  <ul className="list-disc pl-6 mt-1 space-y-1 body-8">
                    <li>Apa itu sampah?</li>
                    <li>Ada berapa jenis sampah itu?</li>
                    <li>The Great Pacific Garbage Patch</li>
                  </ul>
                </ul>
              </nav>

              {/* Main Content Section */}
              <nav>
                {/* Judul Main content menggunakan body-8 */}
                <h2 className="text-gray-700 mb-4 body-8">Main content</h2>
                <ul className="list-disc pl-6 space-y-1 body-8"> {/* UL dan LI menggunakan body-8 */}
                  <li>Overview</li>
                  <ul className="list-disc pl-6 mt-1 space-y-1 body-8">
                    <li>Organic waste</li>
                    <li>Anorganic waste</li>
                    <li>B3 waste</li>
                    <li>Elektronik waste</li>
                    <li>Medic waste</li>
                  </ul>
                </ul>
              </nav>

              {/* FAQ Section */}
              <nav>
                {/* Judul FAQ menggunakan body-8 */}
                <h2 className="text-gray-700 mb-4 body-8">FAQ</h2>
                <ul className="list-disc pl-6 space-y-1 body-8"> {/* UL dan LI menggunakan body-8 */}
                  <li>Apakah semua sampah bisa didaur ulang?</li>
                  <ul className="list-disc pl-6 mt-1 space-y-1 body-8">
                    <li>Anorganic waste</li>
                    <li>B3 waste</li>
                    <li>Elektronik waste</li>
                    <li>Medic waste</li>
                  </ul>
                </ul>
              </nav>
            </div>
          </aside>

          {/* TENGAH: Main Content */}
          <div className="lg:w-4/6 order-2 lg:order-2">
            {/* Overview Section */}
            <section id="overview" className="mb-12">
              <div className="flex justify-between items-center mb-4">
                {/* Judul Overview menggunakan Subheading 5 */}
                <h2 className="text-gray-800 subheading-5">Overview</h2>
              </div>

              {/* Blockquote menggunakan body-3 */}
              <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 mb-6 body-3">
                "Merawat bumi itu bukan tugas satu orang, tapi tanggung jawab bersama"
              </blockquote>

              <div className="space-y-4">
                {/* Semua elemen <p> menggunakan body-6 */}
                <p className="body-6">
                  Dunia modern makin canggih — dari smartphone canggih, belanja online, sampai makanan cepat saji yang praktis.
                  Tapi tanpa sadar, semua itu menghasilkan sampah dalam jumlah yang makin gila-gilaan. Setiap hari, miliaran orang buang sampah,
                  tapi tidak semua tahu ke mana perginya, atau gimana dampaknya ke lingkungan.
                </p>

                <p className="body-6">
                  Sampah itu bukan cuma soal "bau" atau "jorok". Sampah adalah masalah global yang udah mengganggu ekosistem bumi —
                  mulai dari daratan, sungai, sampai lautan dalam. Kita ngomongin tentang plastik yang butuh ratusan tahun buat terurai,
                  limbah beracun dari industri, sampai sisa makanan yang bikin emisi gas rumah kaca.
                </p>

                <p className="body-6">
                  Yang lebih bikin miris, tidak semua orang paham cara buang dan pilah sampah dengan benar. Banyak yang masih campur aduk,
                  tidak ngerti bedanya organik, anorganik, dan B3 (Bahan Berbahaya dan Beracun). Akibatnya? Tempat pembuangan akhir jadi penuh,
                  laut tercemar, dan banyak hewan mati karena makan sampah manusia.
                </p>

                <p className="body-6">
                  Lewat Ecosortify, kamu tidak cuma dikasih info, tapi juga diajak buat melek lingkungan dengan cara yang asyik dan simpel.
                  Mulai dari kenalan dengan jenis-jenis sampah, belajar cara memilah, sampai tahu fakta-fakta seru yang bisa bikin kamu bilang.
                  "Wah, aku baru tahu!"
                </p>

                <div className="bg-green-50 p-4 rounded-lg">
                  {/* Judul di dalam div ini tidak disebutkan, jadi tetap default atau bisa disesuaikan */}
                  <h3 className="font-semibold text-green-700 mb-2">Tujuan dari halaman ini:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li className="body-6">Ngebuka mata soal seberapa besar masalah sampah</li>
                    <li className="body-6">Kenalin kamu sama jenis-jenis sampah dan bahayanya</li>
                    <li className="body-6">Bantu kamu buat mulai kebiasaan baik dari hal kecil</li>
                    <li className="body-6">Nunjukin kalau semua orang bisa punya peran — termasuk kamu</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Next Page Button */}
            <div className="mt-12 pt-6 border-t border-gray-200 flex justify-end">
              <Link href="/apa-itu-sampah" className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                <span>Materi Selanjutnya: Apa itu Sampah?</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* KANAN: Daftar isi */}
          <aside className="lg:w-1/6 order-last lg:order-last">
            <nav className="sticky top-8">
              {/* Judul Daftar isi menggunakan body-5 */}
              <h2 className="text-gray-700 mb-4 body-5">Daftar isi</h2>
              <ul className="space-y-2">
                {/* Tautan di Daftar isi menggunakan body-6 (default dari Link jika tidak diatur) */}
                <li>
                  <a href="#overview" className="text-green-600 hover:underline body-6">Overview</a>
                </li>
                <li>
                  <Link href="/apa-itu-sampah" className="text-green-600 hover:underline body-6">
                    <span>Apa itu Sampah?</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Guide;