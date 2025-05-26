import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer/footer.jsx';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo Ecosortify */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              {/* Placeholder */}
            </div>
            <h1 className="text-3xl font-bold text-green-600">Ecosortify</h1>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-8 mr-auto ml-16">
            <Link href="/" className="text-gray-800 hover:text-green-600 font-medium text-lg">Home</Link>
            <Link href="/scan" className="text-gray-800 hover:text-green-600 font-medium text-lg">Scan</Link>
            <Link href="/guide" className="text-gray-800 hover:text-green-600 font-medium text-lg">Guide</Link>
            <Link href="/chatbot" className="text-gray-800 hover:text-green-600 font-medium text-lg">Chatbot</Link>
            <Link href="/about" className="text-gray-800 hover:text-green-600 font-medium text-lg">About</Link>
          </nav>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="px-6 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200 text-lg">Register</button>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-lg">Login</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-center text-gray-800 subheading-2 mb-12 md:mb-16">Tentang Kami</h1>

        {/* Tujuan Website Section */}
        <section className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="md:w-1/2">
            <h2 className="text-gray-800 subheading-3 mb-2 md:mb-4">Tujuan Website</h2>
            <p className="text-gray-600 body-6 mb-4 md:mb-6">
              Website ini dibuat sebagai wadah edukatif untuk meningkatkan kesadaran masyarakat tentang pentingnya
              pengelolaan sampah yang benar. Kami percaya bahwa perubahan besar dimulai dari langkah kecil – dengan
              memahami jenis-jenis sampah, dampaknya bagi lingkungan, serta cara memilah dan mengelolanya, kita bisa
              menciptakan masa depan yang lebih bersih dan berkelanjutan.
            </p>
            <div className="flex space-x-2 md:space-x-4">
              <button className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition duration-300 body-7 md:body-6">We Do!</button>
              <button className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition duration-300 body-7 md:body-6">We Care!</button>
              <button className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition duration-300 body-7 md:body-6">We Act!</button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/runner.png" // Pastikan path gambar Anda benar
              alt="Pria berlari"
              className="rounded-lg shadow-md w-full h-auto max-w-md md:max-w-none"
            />
          </div>
        </section>

        {/* Kami percaya Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-gray-700 subheading-5 text-left mb-2 md:mb-4">
            Kami percaya bahwa edukasi tentang sampah bukan sekadar informasi, tapi juga aksi.
          </h2>
          <p className="text-gray-600 body-6 text-left">
            Mari bersama kita jaga bumi, dimulai dari hal kecil: buang sampah pada tempatnya, pilah, dan daur ulang.
          </p>
        </section>

        {/* Meet Our Team Section */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-gray-800 subheading-3 text-left mb-2 md:mb-4">Meet Our Super Creative Geek Squad</h2>
          <p className="text-gray-600 body-6 text-left max-w-3xl">
            Kenalan dengan tim hebat di balik layar! Kami adalah sekelompok kreator muda yang penuh semangat,
            beragam keahlian, dan satu tujuan: menyampaikan edukasi tentang sampah dengan cara yang kreatif,
            informatif, dan menyenangkan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
                <img
                  src="/images/farid.png" // Pastikan path gambar profil anggota tim Anda benar
                  alt="Foto Profil"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-2 md:mb-4 object-cover"
                />
                <h3 className="text-gray-800 subheading-5 mb-0.5 md:mb-1">Farid Al Mudzakir</h3>
                <p className="text-green-600 body-8 mb-1 md:mb-3">Backend Developer</p>
                <p className="text-gray-600 body-6">
                  Pemuda antusias yang penasaran bagaimana cara kerja dan membuat
                  aplikasi web. Mengagumi jawab UI/UX designer dan Backend.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;