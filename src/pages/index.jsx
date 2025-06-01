// === Bagian import semua modul dan aset yang dibutuhkan
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import { isUserLogIn } from "@/firebase/firebaseClient";
import Footer from '../components/templates/Web component/Footer';
import Button from "@/components/Button"; // Import your Button component
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
  weight: ["400", "700"], // Sesuaikan bobot yang Anda butuhkan
  variable: "--font-montserrat", // Opsional, jika ingin menggunakannya sebagai variabel CSS
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
        backgroundImage: 'url("/images/pexels-ollivves-931018.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* === Bagian Header (Navigation Bar) */}
      <header className="flex justify-between items-center p-8 z-10 relative text-white">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Ecosortify Logo" width={100} height={100} />
        </div>
        <nav className="flex gap-8">
          <Link href="/index" className="hover:text-green-300 transition">Home</Link>
          <Link href="/scan" className="hover:text-green-300 transition">Scan</Link>
          <Link href="/guide" className="hover:text-green-300 transition">Guide</Link>
          <Link href="/chatbot" className="hover:text-green-300 transition">Chatbot</Link>
          <Link href="/about" className="hover:text-green-300 transition">About us</Link>
        </nav>
        <div className="flex gap-4">
          {/* Using Button component for Register */}
          <Button variant="rounded_secondary_sm" className="!py-2 !px-6"> {/* Override default padding to match original */}
            Register
          </Button>
          {/* Using Button component for Login */}
          <Button variant="primary_sm" className="!py-2 !px-6"> {/* Override default padding to match original */}
            Login
          </Button>
        </div>
      </header>

      {/* === Bagian konten utama (main hero section) */}
      <main className={`flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center px-4 text-white ${montserrat.className}`}>
  {/* This div acts as a container for the text and buttons to control their collective width and vertical gaps */}
  <div 
    className="flex flex-col items-center" 
    style={{ 
      width: "650px", /* Explicitly setting width as requested for the main content block */
      /* Height (298px) is achieved through content and vertical spacing (mt-5 and mt-10) */
    }}>
    <h1
      className="text-center font-bold mx-auto"
      style={{
        fontSize: "52px",
        lineHeight: "100%",
        /* width: "650px" is already handled by the parent div */
      }}
    >
      Untuk Bumi yang Lebih Bersih
    </h1>

    {/* The gap of 20px between h1 and p is handled by mt-5 */}
    <p
      className="text-center mx-auto text-[20px] font-normal mt-5 max-w-[650px]" /* mt-5 = 20px gap */
      style={{
        lineHeight: "100%",
      }}
    >
      Satu artikel bisa mengubah cara kita melihat dan mengelola sampah
    </p>

    {/* The gap of 40px between the text block (h1+p) and the buttons is handled by mt-10 */}
    <div className="mt-10"></div> {/* mt-10 = 40px gap */}

    {/* The gap of 20px between the two buttons is handled by gap-5 */}
    <div className="flex gap-5"> {/* gap-5 = 20px horizontal gap */}
      {/* Using Button component for Guide */}
      <Button variant="rounded_primary_lg" className="!text-lg !px-8 !py-4"> {/* !py-4 for vertical padding, contributing to approximate 64px height */}
        Guide
      </Button>
      {/* Using Button component for Chatbot */}
      <Button variant="rounded_secondary_lg" className="!text-lg !px-8 !py-4"> {/* !py-4 for vertical padding */}
        Chatbot
      </Button>
    </div>
  </div>
</main>

      {/* === Bagian: Realita Sampah Section */}
      <section className="bg-white py-16 md:py-24 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Image Section - Revised based on previous request */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div
            style={{
              width: '519px',
              height: '475px',
              borderRadius: '8px',
              overflow: 'hidden', /* Crucial for border-radius */
              position: 'relative', /* Required for Next.js Image fill */
            }}
            className="relative shadow-lg border border-gray-200" /* Keep existing Tailwind classes for styling */
          >
            <Image
              src="/images/assets/istockphoto-1171440648-612x612.jpg"
              alt="Tangan memegang kantong sampah"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div
          className="w-full md:w-1/2 text-center md:text-left flex flex-col"
          style={{
            width: '572px', /* Explicitly setting width for the text block as requested */
            /* Height (284px) and gap (8px) will be managed by margins on child elements */
          }}
        >
          {/* "REALITA SAMPAH DI SEKITAR KITA" Paragraph */}
          <p
            className="text-sm font-semibold text-blue-600 uppercase tracking-wide"
            style={{
              fontFamily: 'Montserrat', /* Ensure Montserrat is loaded globally or imported */
              fontWeight: '400', /* Changed from font-semibold (600) to 400 as per your typograph */
              fontSize: '16px', /* Changed from text-sm (14px) to 16px as per your typograph */
              lineHeight: '100%', /* Equivalent to leading-none or custom value */
              letterSpacing: '0%', /* Tracking-normal or custom value */
              marginBottom: '8px', /* Explicit 8px gap below this element */
              color: '#0B5C31' /* Specified background color, using it as text color for p */
            }}
          >
            REALITA SAMPAH DI SEKITAR KITA
          </p>

          {/* "Kita Menghasilkan 10 Juta Ton Sampah Setiap Harinya!" Heading */}
          <h2
            className="font-bold leading-tight" /* Removed mb-6 to control gap directly */
            style={{
              fontFamily: 'Montserrat',
              fontWeight: '600', /* Already font-bold in Tailwind, which is 700. Use 600 explicitly if needed */
              fontSize: '36px', /* Changed from text-4xl/5xl to 36px as per your typograph */
              lineHeight: '100%', /* Equivalent to leading-none or custom value */
              letterSpacing: '0%',
              marginBottom: '20px', /* This creates the 20px gap from h2 to the next p */
              color: 'black' /* Specified black color */
            }}
          >
            Kita Menghasilkan 10 Juta Ton Sampah Setiap Harinya!
          </h2>

          {/* Long Paragraph */}
          <p
            className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: '400', /* Already font-normal in Tailwind, which is 400 */
              fontSize: '16px', /* Changed from text-lg (18px) to 16px as per your typograph */
              lineHeight: '100%', /* Changed from leading-relaxed (1.625) to 100% as per your typograph */
              letterSpacing: '0%',
              color: 'black' /* Specified black color */
            }}
          >
            Menurut United Nations Programme (UNEP), sekitar 33% sampah yang dihasilkan diseluruh dunia tidak dikelola dengan baik, sampah-sampah ini berakhir menumpuk di Tempat Pembuangan Akhir (TPA). Beberapa sumber menyebutkan alasan tidak terkelola dengan baik adalah pemisahan sampah yang buruk, kesadaran masyarakat yang rendah dan sampah yang terkontaminasi.
          </p>
        </div>
      </div>
    </section>

      {/* === Bagian: Mengapa Edukasi Sampah Itu Penting? Section */}
     <section
  className="relative overflow-hidden text-white flex" /* Added flex to section to control direct children layout */
  style={{
    width: '1442px', /* Full page width */
    height: '658px', /* Full page height */
    backgroundColor: '#003419', /* New background color: Sea-Green-950 */
  }}
>
  {/* Left Content Area - Text and Benefit Cards */}
  <div
    className="flex flex-col flex-shrink-0" /* flex-shrink-0 to ensure it respects its fixed width */
    style={{
      width: '714px', /* Specific width for the text content area */
      height: '636px', /* Specific height for the text content area */
      gap: '28px', /* Vertical gap between direct children (heading block, long paragraph, and benefit cards grid) */
      paddingTop: '52px',
      paddingBottom: '52px',
      marginLeft: '100px', /* Apply the 100px left padding here directly to the content block */
      marginRight: '32px', /* Apply the 32px gap to the right of this block */
      // Removed max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 from parent,
      // as we are now directly positioning this content block.
      // This div essentially replaces the role of the 'Main Content Wrapper' for the left side.
    }}
  >
    {/* LAYANAN EDUKATIF & Mengapa Edukasi Sampah Itu Penting ? block */}
    <div
      className="flex flex-col"
      style={{
        width: '662px', /* Specific width for this sub-block */
        height: '116px', /* Specific height for this sub-block */
        gap: '8px', /* Vertical gap between p and h2 */
      }}
    >
      <p
        className="uppercase tracking-wide"
        style={{
          fontFamily: 'Montserrat',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#34F489',
          width: '166px',
          height: '20px',
        }}
      >
        LAYANAN EDUKATIF
      </p>
      <h2
        className="font-bold leading-tight"
        style={{
          fontFamily: 'Montserrat',
          fontWeight: '600',
          fontSize: '36px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: 'white',
          width: '662px',
          height: '88px',
        }}
      >
        Mengapa Edukasi Sampah Itu Penting ?
      </h2>
    </div>

    {/* Long Paragraph */}
    <p
      className="text-gray-200"
      style={{
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '100%',
        letterSpacing: '0%',
        marginBottom: '42px', /* Explicit 42px gap before the benefit cards grid */
      }}
    >
      Perubahan besar dimulai dari pengetahuan yang sederhana. Dengan memahami dampak sampah terhadap lingkungan, kita bisa mulai membentuk kebiasaan yang lebih bertanggung jawab
    </p>

    {/* Benefit Cards Grid */}
    <div
      className="grid grid-cols-1 md:grid-cols-3" /* Keep existing Tailwind classes for grid */
      style={{
        width: '714px', /* Overall width of the grid container */
        height: '312px', /* Overall height of the grid container */
        gap: '20px', /* Horizontal and vertical gap between grid items (used for the individual cards) */
      }}
    >
      {/* Individual Benefit Card 1 */}
      <div
        className="text-center"
        style={{
          width: '210px',
          height: '312px',
          paddingTop: '80px',
          paddingRight: '20px',
          paddingBottom: '40px',
          paddingLeft: '16px',
          borderRadius: '20px',
          gap: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/images/assets/forest (1).png"
          alt="hutan"
          width={64}
          height={64}
          className="mb-4"
        />
        <h3 className="font-semibold text-xl mb-2">Meningkatkan kesadaran lingkungan</h3>
      </div>

      {/* Individual Benefit Card 2 */}
      <div
        className="text-center"
        style={{
          width: '210px',
          height: '312px',
          paddingTop: '80px',
          paddingRight: '20px',
          paddingBottom: '40px',
          paddingLeft: '16px',
          borderRadius: '20px',
          gap: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/images/assets/planet-earth.png"
          alt="planet"
          width={64}
          height={64}
          className="mb-4"
        />
        <h3 className="font-semibold text-xl mb-2">Menghemat Sumber Daya Alam</h3>
      </div>

      {/* Individual Benefit Card 3 */}
      <div
        className="text-center"
        style={{
          width: '210px',
          height: '312px',
          paddingTop: '80px',
          paddingRight: '20px',
          paddingBottom: '40px',
          paddingLeft: '16px',
          borderRadius: '20px',
          gap: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/images/assets/law.png"
          alt="Law Document Icon"
          width={64}
          height={64}
          className="mb-4"
        />
        <h3 className="font-semibold text-xl mb-2">Mendorong Kebijakan yang Lebih Baik</h3>
      </div>
    </div>
  </div>

  {/* Main Absolute Positioned Image (Desktop/Larger Screens) */}
  <div
    className="relative flex-grow hidden md:block" /* relative and flex-grow to take remaining space, hidden md:block for visibility */
    style={{
      width: '594px', /* Specific width for the image container */
      height: '658px', /* Specific height for the image container, matching section height */
      borderRadius: '4px', /* Specific border-radius for the image container */
      overflow: 'hidden', /* Crucial for border-radius on the image */
      background: 'linear-gradient(90.48deg, rgba(0, 0, 0, 0) 0.4%, rgba(0, 0, 0, 0.25) 49.99%, rgba(0, 0, 0, 0.375) 74.78%, rgba(0, 0, 0, 0.4375) 87.18%, rgba(0, 0, 0, 0.5) 99.57%)',
      /* Removed absolute positioning here. Now it's a flex item. */
    }}
  >
    <Image
      src="/images/assets/pexels-tima-miroshnichenko-5428264.jpg"
      alt="Anak-anak belajar tentang lingkungan"
      fill
      sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw, 40vw"
      style={{ objectFit: 'cover', objectPosition: 'left center' }}
    />
  </div>

  {/* Right Image Area (Mobile Fallback - hidden on md: and larger) */}
  {/* This section appears to be a fallback for mobile and is hidden on md: and larger screens. */}
  <div className="w-full md:w-1/2 lg:w-2/5 mt-12 md:mt-0 md:hidden">
    <div
      className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg"
    >
      <Image
        src="/images/children-learning.jpg" /* Check this path, might be a placeholder */
        alt="Anak-anak belajar tentang lingkungan"
        fill
        sizes="(max-width: 768px) 100vw"
        style={{ objectFit: 'cover' }}
      />
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
                <Image
                  src="/images/assets/kencanaonline-removebg-preview.png"
                  alt="Kencanaonline Logo"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
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
                <Image
                  src="/images/assets/WHO 2.png"
                  alt="Kencanaonline Logo"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
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
                <Image
                  src="/images/assets/United Nations.png"
                  alt="Kencanaonline Logo"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                /><div>
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
                <Image
                  src="/images/assets/UNEP.png"
                  alt="Kencanaonline Logo"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                /><div>
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
            src="/images/assets/pexels-buro-millennial-636760-1438072.jpg"
            alt="Orang-orang sedang berbincang santai"
            fill
            sizes="(max-width: 768px) 100vw"
            style={{ objectFit: 'cover' }}
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
                <Image src="/images/assets/litter.png" alt="Trash Bin Icon" width={48} height={48} />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Buang sampah pada tempat sampah</h3>
                </div>
              </div>

              {/* Card 2: Pilah sampah */}
              <div className="bg-green-700 rounded-lg p-6 flex items-start gap-4">
                <Image src="/images/assets/reach.png" alt="Sort Trash Icon" width={48} height={48} />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Pilah sampah sebelum di buang</h3>
                </div>
              </div>

              {/* Card 3: Kurangi plastik */}
              <div className="bg-green-700 rounded-lg p-6 flex items-start gap-4">
                <Image src="/images/assets/ad-blocker.png" alt="No Plastic Icon" width={48} height={48} />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Kurangi penggunaan plastic</h3>
                </div>
              </div>

              {/* Card 4: Edukasi dan ajak */}
              <div className="bg-green-700 rounded-lg p-6 flex items-start gap-4">
                <Image src="/images/assets/add-user.png" alt="Educate Icon" width={48} height={48} />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Edukasi dan ajak orang lain</h3>
                </div>
              </div>
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
                  src="/images/assets/pexels-nc-farm-bureau-mark-2255935.jpg"
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
                  src="/images/assets/pexels-mali-802221.jpg"
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
                  src="/images/assets/1676606284366.jpeg"
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
                  src="/images.jpegimages/pete-plastic.jpg"
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
                  src="/images/pp-plastic.jpg"
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
      <section className="py-20 px-[100px] text-white" style={{ background: 'linear-gradient(96.9deg, #30382F 13.09%, #41583E 59.96%, #317C27 68.32%, #35AA25 94.84%, #5ABE4D 105.34%)' }}>
  <div className="max-w-6xl mx-auto relative">
    {/* Removed overflow-hidden from this div to allow the absolute image to extend outside */}
    <div className="relative bg-white rounded-[20px] border border-[#E8E8E8] py-6 px-10 flex flex-col md:flex-row items-center justify-between" style={{ width: '1065px', height: '358.6387634277344px', gap: '80px' }}>
      <div className="relative z-10 w-full md:w-1/2 text-gray-800" style={{ width: '585px', height: '104px', gap: '28px' }}>
        <h2 className="font-bold mb-4 text-black" style={{ fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '100%', letterSpacing: '0%', width: '585px', height: '24px' }}>
          Biarkan AI membantu mu dalam hal pengelolaan sampah
        </h2>
        {/* Using Button component for Chatbot */}
        <Button variant="rounded_secondary_lg" className="!text-lg !px-8 !py-4"> {/* !py-4 for vertical padding */}
        Chatbot
      </Button>
      </div>
      {/* Changed position to absolute and adjusted positioning */}
      <div className="absolute right-[-53.5px] top-1/2 -translate-y-1/2 flex justify-center md:justify-end" style={{ width: '394px', height: '406px' }}>
        <Image
          src="/images/assets/image-removebg-preview (6).png"
          alt="Blue Robot"
          width={300}
          height={300}
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