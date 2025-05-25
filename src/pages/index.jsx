// === Bagian import semua modul dan aset yang dibutuhkan
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { isUserLogIn } from "@/firebase/firebaseClient";
// ===========================================================

// === Bagian inisialisasi font custom menggunakan next/font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// =================================

// === Komponen halaman utama (Home Page)
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Optional: Add logic to check if user is logged in
    // if (isUserLogIn()) {
    //   router.push("/dashboard"); // Redirect to dashboard if logged in
    // }
  }, [router]);

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen text-gray-800`} // Default text color for sections without specific override
      style={{
        backgroundImage: 'url("/images/pexels-ollivves-931018.jpg")', // Your specified main background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* === Bagian Header (Navigation Bar) */}
      <header className="flex justify-between items-center p-8 z-10 relative text-white"> {/* Add text-white for header */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Ecosortify Logo" width={100} height={100} /> {/* Adjust path to your logo */}
          {/* <span className="text-2xl font-bold">Ecosortify</span> */}
        </div>
        <nav className="flex gap-8">
          <a href="#" className="hover:text-green-300 transition">Home</a>
          <a href="#" className="hover:text-green-300 transition">Scan</a>
          <a href="#" className="hover:text-green-300 transition">Guide</a>
          <a href="#" className="hover:text-green-300 transition">Chatbot</a>
          <a href="#" className="hover:text-green-300 transition">About</a>
        </nav>
        <div className="flex gap-4">
          <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-green-800 transition">Register</button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">Login</button>
        </div>
      </header>

      {/* === Bagian konten utama (main hero section) */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center px-4 text-white"> {/* Add text-white for hero section */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Untuk Bumi yang Lebih Bersih
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed">
          Satu artikel bisa mengubah cara kita melihat dan mengelola sampah
        </p>
        <div className="flex gap-6">
          <button className="bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-green-700 transition">
            Guide
          </button>
          <button className="bg-transparent border border-white text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-green-800 transition">
            Chatbot
          </button>
        </div>
      </main>

      {/* === Bagian: Realita Sampah Section */}
      <section className="bg-white py-16 md:py-24 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-64 md:h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/images/hand-trash-bag.jpg" // Path for the trash bag image from your design
                alt="Tangan memegang kantong sampah"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-sm font-semibold text-blue-600 uppercase mb-2 tracking-wide">
              REALITA SAMPAH DI SEKITAR KITA
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Kita Menghasilkan 10 Juta Ton Sampah Setiap Harinya!
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Menurut United Nations Programme (UNEP), sekitar 33% sampah yang dihasilkan diseluruh dunia tidak dikelola dengan baik, sampah-sampah ini berakhir menumpuk di Tempat Pembuangan Akhir (TPA). Beberapa sumber menyebutkan alasan tidak terkelola dengan baik adalah pemisahan sampah yang buruk, kesadaran masyarakat yang rendah dan sampah yang terkontaminasi.
            </p>
          </div>
        </div>
      </section>

      {/* === Bagian: Mengapa Edukasi Sampah Itu Penting? Section */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-[#1b3d32] text-white">
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-2/5">
          <Image
            src="/images/children-learning.jpg" // Replace with the actual image path for the right side
            alt="Anak-anak belajar tentang lingkungan"
            fill
            sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw, 40vw"
            style={{ objectFit: 'cover', objectPosition: 'left center' }}
            className="hidden md:block"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row">
          {/* Left Content Area */}
          <div className="w-full md:w-1/2 lg:w-3/5 md:pr-12 lg:pr-24">
            <p className="text-sm font-semibold text-green-300 uppercase mb-2 tracking-wide">
              LAYANAN EDUKATIF
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Mengapa Edukasi Sampah Itu Penting ?
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-12">
              Perubahan besar dimulai dari pengetahuan yang sederhana. Dengan memahami dampak sampah terhadap lingkungan, kita bisa mulai membentuk kebiasaan yang lebih bertanggung jawab
            </p>

            {/* Benefit Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Image src="/icons/tree-icon.png" alt="Tree Icon" width={64} height={64} className="mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Meningkatkan kesadaran lingkungan</h3>
              </div>
              <div className="text-center">
                <Image src="/icons/globe-leaf-icon.png" alt="Globe Leaf Icon" width={64} height={64} className="mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Menghemat Sumber Daya Alam</h3>
              </div>
              <div className="text-center">
                <Image src="/icons/law-document-icon.png" alt="Law Document Icon" width={64} height={64} className="mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Mendorong Kebijakan yang Lebih Baik</h3>
              </div>
            </div>
          </div>

          {/* Right Image Area (visible on mobile if needed, but primarily controlled by absolute positioning) */}
          <div className="w-full md:w-1/2 lg:w-2/5 mt-12 md:mt-0 md:hidden">
             <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                    src="/images/children-learning.jpg"
                    alt="Anak-anak belajar tentang lingkungan"
                    fill
                    sizes="(max-width: 768px) 100vw"
                    style={{ objectFit: 'cover' }}
                />
             </div>
          </div>
        </div>
      </section>

      {/* === Bagian: Apa Kata Mereka? (Testimoni/Kutipan) Section */}
      <section className="bg-white py-16 md:py-24 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end">
            <div>
              <p className="text-sm font-semibold text-green-600 uppercase mb-2 tracking-wide">
                PESAN DARI LINGKUNGAN
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Apa Kata Mereka?
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-lg mt-4 md:mt-0 md:ml-8">
              Testimoni dari berbagai kalangan yang menunjukkan pentingnya peran kita semua dalam mengatasi pencemaran sampah
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Kencanaonline.com */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center mb-4">
                <Image src="/logos/kencanaonline-logo.png" alt="Kencanaonline Logo" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-xl">Kencanaonline.com</h3>
                  <p className="text-sm text-gray-500">Media Online</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed flex-grow">
                Pengelolaan sampah yang tidak tepat, terutama pencampuran antara sampah organik dan anorganik, dapat menyebabkan dampak negatif yang signifikan baik terhadap lingkungan maupun ekonomi
              </p>
            </div>

            {/* Card 2: World Health Organization (WHO) */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center mb-4">
                <Image src="/logos/who-logo.png" alt="WHO Logo" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-xl">World Health Organization (WHO)</h3>
                  <p className="text-sm text-gray-500">Media Online</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed flex-grow">
                Pengelolaan sampah yang tidak tepat dapat menyebabkan penyebaran penyakit dan pencemaran lingkungan
              </p>
            </div>

            {/* Card 3: United Nations (UN) */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center mb-4">
                <Image src="/logos/un-logo.png" alt="UN Logo" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-xl">United Nations (UN)</h3>
                  <p className="text-sm text-gray-500">Lembaga Dunia</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed flex-grow">
                Untuk mengatasi krisis sampah, manusia harus memperlakukan sampah sebagai sumber daya
              </p>
            </div>

            {/* Card 4: United Nations Environment Programme (UNEP) */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center mb-4">
                <Image src="/logos/unep-logo.png" alt="UNEP Logo" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-xl">United Nations Environment Programme (UNEP)</h3>
                  <p className="text-sm text-gray-500">Lembaga Dunia</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed flex-grow">
                Tanpa tindakan yang berarti, jumlah plastik yang masuk ke ekosistem perairan diperkirakan hampir tiga kali lipat, dari 11 juta ton pada tahun 2016 menjadi 29 juta ton pada tahun 2040
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Bagian: Mari Kita Buat Bumi Yang Lebih Baik! Section */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-[#1b3d32] text-white">
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 lg:w-2/5">
          <Image
            src="/images/people-talking.jpg" // Replace with the actual image path for the left side
            alt="Orang-orang sedang berbincang santai"
            fill
            sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw, 40vw"
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
            className="hidden md:block"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row-reverse">
          {/* Right Content Area (text and cards) */}
          <div className="w-full md:w-1/2 lg:w-3/5 md:pl-12 lg:pl-24">
            <p className="text-sm font-semibold text-green-300 uppercase mb-2 tracking-wide">
              DEMI MASA DEPAN
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Mari Kita Buat Bumi Yang Lebih Baik!
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-12">
              Lingkungan yang lebih baik dimulai dari kepedulian kita
            </p>

            {/* Action Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: Buang sampah */}
              <div className="bg-green-700 rounded-lg p-6 flex items-start gap-4">
                <Image src="/icons/trash-bin-icon.png" alt="Trash Bin Icon" width={48} height={48} />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Buang sampah pada tempat sampah</h3>
                </div>
              </div>

              {/* Card 2: Pilah sampah */}
              <div className="bg-green-700 rounded-lg p-6 flex items-start gap-4">
                <Image src="/icons/sort-trash-icon.png" alt="Sort Trash Icon" width={48} height={48} />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Pilah sampah sebelum di buang</h3>
                </div>
              </div>

              {/* Card 3: Kurangi plastik */}
              <div className="bg-green-700 rounded-lg p-6 flex items-start gap-4">
                <Image src="/icons/no-plastic-icon.png" alt="No Plastic Icon" width={48} height={48} />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Kurangi penggunaan plastic</h3>
                </div>
              </div>

              {/* Card 4: Edukasi dan ajak */}
              <div className="bg-green-700 rounded-lg p-6 flex items-start gap-4">
                <Image src="/icons/educate-icon.png" alt="Educate Icon" width={48} height={48} />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Edukasi dan ajak orang lain</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Left Image Area (visible on mobile if needed, but primarily controlled by absolute positioning) */}
          <div className="w-full md:w-1/2 lg:w-2/5 mt-12 md:mt-0 md:hidden">
             <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                    src="/images/people-talking.jpg"
                    alt="Orang-orang sedang berbincang santai"
                    fill
                    sizes="(max-width: 768px) 100vw"
                    style={{ objectFit: 'cover' }}
                />
             </div>
          </div>
        </div>
      </section>

      {/* === Bagian: Panduan Ini Bisa Bantu Kamu Beraksi Untuk Lingkungan */}
      <section className="bg-white py-16 md:py-24 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold text-green-600 uppercase mb-2 tracking-wide">
              FEATURED GUIDE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Panduan ini bisa bantu kamu beraksi untuk lingkungan
            </h2>
          </div>

          {/* Guide Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Organik */}
            <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md group">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/organic-waste.jpg" // Path to organic waste image
                  alt="Sampah Organik"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-2xl mb-1">Organik <span className="inline-block transition-transform group-hover:translate-x-1">↗</span></h3>
                  <p className="text-sm">Temukan tentang tata cara pengelolaan sampah organik</p>
                </div>
              </div>
            </div>

            {/* Card 2: Anorganik */}
            <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md group">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/inorganic-waste.jpg" // Path to inorganic waste image
                  alt="Sampah Anorganik"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-2xl mb-1">Anorganik <span className="inline-block transition-transform group-hover:translate-x-1">↗</span></h3>
                  <p className="text-sm">Temukan tentang tata cara pengelolaan sampah anorganik</p>
                </div>
              </div>
            </div>

            {/* Card 3: B3 */}
            <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md group">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/b3-waste.jpg" // Path to B3 waste image
                  alt="Sampah B3"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-2xl mb-1">B3 <span className="inline-block transition-transform group-hover:translate-x-1">↗</span></h3>
                  <p className="text-sm">Temukan tentang tata cara pengelolaan sampah B3</p>
                </div>
              </div>
            </div>

            {/* Card 4: Polyethylene Terephthalate (PETE) */}
            <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md group">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/pete-plastic.jpg" // Path to PETE plastic image
                  alt="Sampah Polyethylene Terephthalate (PETE)"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-2xl mb-1">Polyethylene Terephthalate (PETE) <span className="inline-block transition-transform group-hover:translate-x-1">↗</span></h3>
                  <p className="text-sm">Temukan tentang apa itu Polyethylene Terephthalate</p>
                </div>
              </div>
            </div>

            {/* Card 5: Polypropylene (PP) */}
            <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-md group">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/pp-plastic.jpg" // Path to PP plastic image
                  alt="Sampah Polypropylene (PP)"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-2xl mb-1">Polypropylene (PP) <span className="inline-block transition-transform group-hover:translate-x-1">↗</span></h3>
                  <p className="text-sm">Temukan tentang apa itu Polypropylene</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Bagian baru: Biarkan AI membantu mu Section */}
      <section className="bg-gradient-to-r from-gray-800 to-green-600 py-16 md:py-24 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">
            <div className="relative z-10 w-full md:w-1/2 text-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Biarkan AI membantu mu dalam hal pengelolaan sampah
              </h2>
              <button className="bg-transparent border border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300">
                Chatbot
              </button>
            </div>
            <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
              <Image
                src="/images/blue-robot.png" // Path to the blue robot image
                alt="Blue Robot"
                width={300} // Adjust width as needed for visual balance
                height={300} // Adjust height as needed
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === Bagian footer (Re-structured) */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image src="/images/logo.png" alt="Ecosortify Logo" width={40} height={40} /> {/* Smaller logo for footer */}
            <span className="text-xl font-semibold">Ecosortify</span>
          </div>
          <p className="text-sm text-gray-400">
            Copyright C 2025 Ecosortify
          </p>
        </div>
      </footer>
    </div>
  );
}