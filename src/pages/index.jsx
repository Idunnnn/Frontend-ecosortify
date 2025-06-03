// === Bagian import semua modul dan aset yang dibutuhkan
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import { isUserLogIn } from "@/firebase/firebaseClient"; // Pastikan path ini benar

import { sendLoginRequest } from "@/api/user"; // Pastikan path ini benar

import Footer from '../components/templates/Web component/Footer'; // Pastikan path ini benar
import Button from "@/components/Button"; // Pastikan path ini benar
import { Montserrat } from "next/font/google";
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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
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
      className={`${geistSans.className} ${geistMono.className} min-h-screen text-gray-800`}
      style={{
        backgroundImage: 'url("/images/pexels-ollivves-931018.jpg")', // Pastikan jalur gambar ini benar
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Biarkan gambar latar belakang tetap saat scroll
      }}
    >
      {/* === Bagian Header (Navigation Bar) */}
      <header className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 z-10 relative text-white bg-black bg-opacity-20"> {/* Tambahkan bg-opacity agar header lebih terlihat */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image src="/images/logo.png" alt="Ecosortify Logo" width={80} height={80} className="md:w-[100px] md:h-[100px]" /> {/* Sesuaikan ukuran logo */}
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4 md:mb-0"> {/* Flex-wrap untuk mobile */}
          <a href="/" className="hover:text-green-300 transition text-sm md:text-base">Home</a> {/* Menggunakan '/' untuk home */}
          <Link href="/scan" className="hover:text-green-300 transition text-sm md:text-base">Scan</Link>
          <Link href="/guide" className="hover:text-green-300 transition text-sm md:text-base">Guide</Link>
          <Link href="/chatbot" className="hover:text-green-300 transition text-sm md:text-base">Chatbot</Link>
          <Link href="/about" className="hover:text-green-300 transition text-sm md:text-base">About us</Link>
        </nav>
        <div className="flex gap-2 md:gap-4">
          <Button variant="rounded_secondary_sm" className="!py-2 !px-4 md:!px-6 text-sm md:text-base">
            Register
          </Button>
          <Button variant="primary_sm" className="!py-2 !px-4 md:!px-6 text-sm md:text-base">
            Login
          </Button>
        </div>
      </header>

      {/* === Bagian konten utama (main hero section) */}
      <main
        className={`flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center px-4 md:px-8 lg:px-16 text-white ${montserrat.className}`}
      >
        <div className="flex flex-col items-center max-w-xl lg:max-w-3xl"> {/* Gunakan max-w untuk kontrol lebar */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" // Font size responsif
          >
            Untuk Bumi yang Lebih Bersih
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl font-normal mt-3 sm:mt-5 leading-normal max-w-md lg:max-w-2xl" // Font size responsif & leading
          >
            Satu artikel bisa mengubah cara kita melihat dan mengelola sampah
          </p>
          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-5"> {/* Stacked di mobile, row di sm: */}
            <Button variant="rounded_primary_lg" className="!text-base sm:!text-lg !px-6 sm:!px-8 !py-3 sm:!py-4">
              Guide
            </Button>
            <Button variant="rounded_secondary_lg" className="!text-base sm:!text-lg !px-6 sm:!px-8 !py-3 sm:!py-4">
              Chatbot
            </Button>
          </div>
        </div>
      </main>

      {/* === Bagian: Realita Sampah Section */}
      <section className="bg-white py-12 md:py-16 lg:py-24 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1"> {/* Order untuk mobile-first */}
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-[475px] max-w-md md:max-w-none rounded-lg md:rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/images/assets/istockphoto-1171440648-612x612.jpg" // Pastikan jalur ini benar
                alt="Tangan memegang kantong sampah"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div
            className={`w-full md:w-1/2 text-center md:text-left flex flex-col order-1 md:order-2 ${montserrat.className}`}
          >
            <p
              className="uppercase tracking-wide text-sm sm:text-base font-normal mb-2 text-green-800"
            >
              REALITA SAMPAH DI SEKITAR KITA
            </p>

            <h2
              className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-tight text-black mb-4"
            >
              Kita Menghasilkan 10 Juta Ton Sampah Setiap Harinya!
            </h2>

            <p
              className="font-normal text-sm sm:text-base text-black leading-relaxed" // leading-relaxed untuk spasi baris
            >
              Menurut United Nations Programme (UNEP), sekitar 33% sampah yang dihasilkan diseluruh dunia tidak dikelola dengan
              baik, sampah-sampah ini berakhir menumpuk di Tempat Pembuangan Akhir (TPA). Beberapa sumber menyebutkan alasan tidak
              terkelola dengan baik adalah pemisahan sampah yang buruk, kesadaran masyarakat yang rendah dan sampah yang
              terkontaminasi.
            </p>
          </div>
        </div>
      </section>

      {/* === Bagian: Mengapa Edukasi Sampah Itu Penting? Section */}
      <section
        className={`relative overflow-hidden text-white flex flex-col md:flex-row ${montserrat.className}`}
        style={{
          backgroundColor: "#003419", // Sea-Green-950
        }}
      >
        {/* Left Content Area - Text and Benefit Cards */}
        <div
          className="flex flex-col flex-shrink-0 p-6 sm:p-8 md:p-12 lg:p-16 w-full md:w-1/2 lg:w-2/5" // Padding responsif & width responsif
        >
          <div className="mb-4 md:mb-6 lg:mb-8">
            <p
              className="uppercase tracking-wide text-sm sm:text-base font-normal mb-2 text-green-300"
            >
              LAYANAN EDUKATIF
            </p>
            <h2
              className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-tight text-white"
            >
              Mengapa Edukasi Sampah Itu Penting ?
            </h2>
          </div>

          <p
            className="text-gray-200 font-normal text-sm sm:text-base leading-relaxed mb-6 md:mb-8 lg:mb-10"
          >
            Perubahan besar dimulai dari pengetahuan yang sederhana. Dengan memahami dampak sampah terhadap lingkungan, kita bisa
            mulai membentuk kebiasaan yang lebih bertanggung jawab
          </p>

          {/* Benefit Cards Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6" // Grid responsif
          >
            {/* Individual Benefit Card 1 */}
            <div
              className="text-center bg-green-800 rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px] lg:min-h-[280px]" // Min-height responsif
            >
              <Image src="/images/assets/forest (1).png" alt="hutan" width={48} height={48} className="mb-3 md:mb-4" /> {/* Ukuran icon responsif */}
              <h3 className="font-semibold text-base sm:text-lg md:text-xl">Meningkatkan kesadaran lingkungan</h3>
            </div>

            {/* Individual Benefit Card 2 */}
            <div
              className="text-center bg-green-800 rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px] lg:min-h-[280px]"
            >
              <Image src="/images/assets/planet-earth.png" alt="planet" width={48} height={48} className="mb-3 md:mb-4" />
              <h3 className="font-semibold text-base sm:text-lg md:text-xl">Menghemat Sumber Daya Alam</h3>
            </div>

            {/* Individual Benefit Card 3 */}
            <div
              className="text-center bg-green-800 rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[220px] lg:min-h-[280px]"
            >
              <Image src="/images/assets/law.png" alt="Law Document Icon" width={48} height={48} className="mb-3 md:mb-4" />
              <h3 className="font-semibold text-base sm:text-lg md:text-xl">Mendorong Kebijakan yang Lebih Baik</h3>
            </div>
          </div>
        </div>

        {/* Main Absolute Positioned Image (Desktop/Larger Screens) */}
        <div
          className="relative w-full h-64 md:h-auto md:w-1/2 lg:w-3/5 flex-grow hidden md:block" // Hidden di mobile, block di md
        >
          <Image
            src="/images/assets/pexels-tima-miroshnichenko-5428264.jpg" // Pastikan jalur ini benar
            alt="Anak-anak belajar tentang lingkungan"
            fill
            sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw, 40vw"
            style={{ objectFit: "cover", objectPosition: "left center" }}
          />
           <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div> {/* Overlay gradien */}
        </div>
      </section>

      {/* === Bagian: Apa Kata Mereka? (Testimoni/Kutipan) Section */}
      <section className="bg-white py-12 md:py-16 lg:py-24 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end">
            <div>
              <p className="text-sm font-normal uppercase mb-1 tracking-wide text-green-800">PESAN DARI LINGKUNGAN</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-semibold leading-tight text-gray-800">Apa Kata Mereka?</h2>
            </div>
            <p className="text-sm sm:text-base font-normal text-gray-700 max-w-md lg:max-w-lg mt-4 md:mt-0 md:ml-8 leading-relaxed">
              Testimoni dari berbagai kalangan yang menunjukkan pentingnya peran kita semua dalam mengatasi pencemaran sampah
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"> {/* Grid responsif */}
            {/* Card 1: Kencanaonline.com */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/assets/kencanaonline-removebg-preview.png" // Pastikan jalur ini benar
                  alt="Kencanaonline Logo"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">Kencanaonline.com</h3>
                  <p className="text-xs sm:text-sm text-gray-500">Media Online</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow">
                Pengelolaan sampah yang tidak tepat, terutama pencampuran antara sampah organik dan anorganik, dapat menyebabkan
                dampak negatif yang signifikan baik terhadap lingkungan maupun ekonomi
              </p>
            </div>

            {/* Card 2: World Health Organization (WHO) */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/assets/WHO 2.png" // Pastikan jalur ini benar
                  alt="WHO Logo"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">World Health Organization (WHO)</h3>
                  <p className="text-xs sm:text-sm text-gray-500">Media Online</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow">
                Pengelolaan sampah yang tidak tepat dapat menyebabkan penyebaran penyakit dan pencemaran lingkungan
              </p>
            </div>

            {/* Card 3: United Nations (UN) */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/assets/United Nations.png" // Pastikan jalur ini benar
                  alt="United Nations Logo"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">United Nations (UN)</h3>
                  <p className="text-xs sm:text-sm text-gray-500">Lembaga Dunia</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow">
                Untuk mengatasi krisis sampah, manusia harus memperlakukan sampah sebagai sumber daya
              </p>
            </div>

            {/* Card 4: United Nations Environment Programme (UNEP) */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/assets/UNEP.png" // Pastikan jalur ini benar
                  alt="UNEP Logo"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">United Nations Environment Programme (UNEP)</h3>
                  <p className="text-xs sm:text-sm text-gray-500">Lembaga Dunia</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow">
                Tanpa tindakan yang berarti, jumlah plastik yang masuk ke ekosistem perairan diperkirakan hampir tiga kali lipat,
                dari 11 juta ton pada tahun 2016 menjadi 29 juta ton pada tahun 2040
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Bagian: Mari Kita Buat Bumi Yang Lebih Baik! Section */}
      <section className="relative overflow-hidden py-12 md:py-16 lg:py-24 bg-[#1b3d32] text-white">
        {/* Gambar Latar Belakang (visible only on md and larger) */}
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 lg:w-2/5 hidden md:block">
          <Image
            src="/images/assets/pexels-buro-millennial-636760-1438072.jpg" // Pastikan jalur ini benar
            alt="Orang-orang sedang berbincang santai"
            fill
            sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw, 40vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row-reverse">
          {/* Right Content Area (text and cards) */}
          <div className="w-full md:w-1/2 lg:w-3/5 md:pl-8 lg:pl-16"> {/* Padding responsif */}
            <p className="text-sm sm:text-base font-normal uppercase mb-2 tracking-wide text-green-300">DEMI MASA DEPAN</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-semibold leading-tight mb-4 md:mb-6">Mari Kita Buat Bumi Yang Lebih Baik!</h2>
            <p className="text-sm sm:text-base font-normal text-gray-200 leading-relaxed mb-6 md:mb-8">Lingkungan yang lebih baik dimulai dari kepedulian kita</p>

            {/* Action Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"> {/* Grid responsif */}
              {/* Card 1: Buang sampah */}
              <div className="bg-green-800 rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                <Image src="/images/assets/litter.png" alt="Trash Bin Icon" width={32} height={32} className="sm:w-48 sm:h-48" /> {/* Ukuran icon responsif */}
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Buang sampah pada tempat sampah</h3>
                </div>
              </div>

              {/* Card 2: Pilah sampah */}
              <div className="bg-green-800 rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                <Image src="/images/assets/reach.png" alt="Sort Trash Icon" width={32} height={32} className="sm:w-48 sm:h-48" />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Pilah sampah sebelum di buang</h3>
                </div>
              </div>

              {/* Card 3: Kurangi plastik */}
              <div className="bg-green-800 rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                <Image src="/images/assets/ad-blocker.png" alt="No Plastic Icon" width={32} height={32} className="sm:w-48 sm:h-48" />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Kurangi penggunaan plastic</h3>
                </div>
              </div>

              {/* Card 4: Edukasi dan ajak */}
              <div className="bg-green-800 rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                <Image src="/images/assets/add-user.png" alt="Educate Icon" width={32} height={32} className="sm:w-48 sm:h-48" />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Edukasi dan ajak orang lain</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Bagian: Panduan Ini Bisa Bantu Kamu Beraksi Untuk Lingkungan */}
      <section className="bg-white py-12 md:py-16 lg:py-24 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading Block */}
          <div className="mb-8 md:mb-12">
            <p className="text-sm sm:text-base font-normal uppercase mb-2 tracking-wide text-green-800">FEATURED GUIDE</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-semibold leading-tight text-gray-800">Panduan ini bisa bantu kamu beraksi untuk lingkungan</h2>
          </div>

          {/* Guide Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> {/* Grid responsif */}
            {/* Card 1: Organik */}
            <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-48 sm:h-64 w-full"> {/* Tinggi responsif */}
                <Image
                  src="/images/assets/pexels-nc-farm-bureau-mark-2255935.jpg" // Pastikan jalur ini benar
                  alt="Sampah Organik"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl sm:text-2xl mb-1">
                    Organik <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">↗</span>
                  </h3>
                  <p className="text-xs sm:text-sm">Temukan tentang tata cara pengelolaan sampah organik</p>
                </div>
              </div>
            </div>

            {/* Card 2: Anorganik */}
            <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-48 sm:h-64 w-full"> {/* Tinggi responsif */}
                <Image
                  src="/images/assets/pexels-mali-802221.jpg" // Pastikan jalur ini benar
                  alt="Sampah Anorganik"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl sm:text-2xl mb-1">
                    Anorganik <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">↗</span>
                  </h3>
                  <p className="text-xs sm:text-sm">Temukan tentang tata cara pengelolaan sampah anorganik</p>
                </div>
              </div>
            </div>

            {/* Card 3: B3 */}
            <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-48 sm:h-64 w-full"> {/* Tinggi responsif */}
                <Image
                  src="/images/assets/1676606284366.jpeg" // Pastikan jalur ini benar
                  alt="Sampah B3"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl sm:text-2xl mb-1">
                    B3 <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">↗</span>
                  </h3>
                  <p className="text-xs sm:text-sm">Temukan tentang tata cara pengelolaan sampah B3</p>
                </div>
              </div>
            </div>

            {/* Card 4: Polyethylene Terephthalate (PETE) */}
            <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-48 sm:h-64 w-full"> {/* Tinggi responsif */}
                <Image
                  src="/images/pete-plastic.jpg" // Pastikan jalur ini benar
                  alt="Sampah Polyethylene Terephthalate (PETE)"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl sm:text-2xl mb-1">
                    Polyethylene Terephthalate (PETE){" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">↗</span>
                  </h3>
                  <p className="text-xs sm:text-sm">Temukan tentang apa itu Polyethylene Terephthalate</p>
                </div>
              </div>
            </div>

            {/* Card 5: Polypropylene (PP) */}
            <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-48 sm:h-64 w-full"> {/* Tinggi responsif */}
                <Image
                  src="/images/pp-plastic.jpg" // Pastikan jalur ini benar
                  alt="Sampah Polypropylene (PP)"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl sm:text-2xl mb-1">
                    Polypropylene (PP) <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">↗</span>
                  </h3>
                  <p className="text-xs sm:text-sm">Temukan tentang apa itu Polypropylene</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Bagian baru: Biarkan AI membantu mu Section */}
      <section
        className="py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 text-white" // Padding horizontal responsif
        style={{
          background: "linear-gradient(96.9deg, #30382F 13.09%, #41583E 59.96%, #317C27 68.32%, #35AA25 94.84%, #5ABE4D 105.34%)",
        }}
      >
        <div className="max-w-6xl mx-auto relative">
          <div
            className="relative bg-white rounded-xl md:rounded-[20px] border border-[#E8E8E8] py-8 px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between overflow-hidden" // Padding dan radius responsif
          >
            <div className="relative z-10 w-full md:w-1/2 text-gray-800 text-center md:text-left mb-6 md:mb-0"> {/* Width dan text alignment responsif */}
              <h2
                className="font-bold mb-4 text-black text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight" // Font size dan line-height responsif
              >
                Biarkan AI membantu mu dalam hal pengelolaan sampah
              </h2>
              <Button variant="rounded_secondary_lg" className="!text-base sm:!text-lg !px-6 sm:!px-8 !py-3 sm:!py-4">
                Chatbot
              </Button>
            </div>
            <div
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[300px] lg:h-[300px] mx-auto md:mx-0
                         md:absolute md:right-[-53.5px] md:top-1/2 md:-translate-y-1/2 flex justify-center md:justify-end"
            >
              <Image
                src="/images/assets/image-removebg-preview (6).png" // Pastikan jalur ini benar
                alt="Blue Robot"
                fill // Menggunakan `fill` untuk gambar agar menyesuaikan ukuran parent `div` yang responsif
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw" // Menambahkan `sizes` untuk optimasi gambar
                style={{ objectFit: "contain" }} // Gunakan 'contain' untuk memastikan seluruh gambar terlihat
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === Bagian footer (Re-structured) */}
      <Footer />
    </div>
  );
}