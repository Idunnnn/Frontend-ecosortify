// === Bagian import semua modul dan aset yang dibutuhkan
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router"; 
import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link"; 
import { isUserLogIn } from "@/firebase/firebaseClient";
import Header from '../components/templates/Web component/Header'; 
import Footer from '../components/templates/Web component/Footer';

// ==============================================================

// === Bagian inisialisasi font custom menggunakan next/font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ===============================================

// === Komponen halaman utama (Home Page)
export default function Scan() {
  const router = useRouter();
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [aiResponse, setAiResponse] = useState(
    "Kirim gambar terkait dengan sampah, lalu saya akan memberikan solusi akan pengelolaannya."
  );
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setAiResponse("Gambar siap untuk di-scan. Tekan tombol kirim.");
        setIsLoadingAI(false);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setAiResponse("Kirim gambar terkait dengan sampah, lalu saya akan memberikan solusi akan pengelolaannya.");
    }
  }, []);

  const triggerFileInput = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  const handleScanImage = useCallback(async () => {
    if (!selectedImage) {
      alert("Harap unggah gambar terlebih dahulu!");
      return;
    }

    setIsLoadingAI(true);
    setAiResponse("Memindai gambar Anda, mohon tunggu...");

    // Placeholder untuk integrasi API AI Anda
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setAiResponse(
      "Gambar Anda menunjukkan berbagai jenis sampah:\n\n" +
        "- Sampah Organik\n" +
        "- Plastik PETE\n" +
        "- Sampah B3\n" +
        "- Plastik PP"
    );
    setSelectedImage(null);
    setIsLoadingAI(false);
  }, [selectedImage]);

  useEffect(() => {
    // Logika untuk memeriksa login pengguna
    // if (isUserLogIn()) {
    //   router.push("/dashboard");
    // }
  }, [router]);

  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen text-gray-800`}>
      {/* === Bagian Header (Navigation Bar) */}
      <Header />


      {/* === Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24 pb-16">
        <Image src="/images/assets/white-robot-hello.png" alt="Hello Robot" width={250} height={250} className="mb-8" />
        
        <h2 className="text-2xl font-bold text-green-600">Hello There!</h2>
        <p className="text-lg text-gray-600 mb-8">{aiResponse}</p>

        <div className="max-w-xl w-full bg-white shadow-xl p-6 rounded-2xl mb-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />

          <div className="flex items-center justify-center border border-gray-300 rounded-full px-4 py-2 mt-4">
            <button onClick={triggerFileInput} className="flex items-center text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span className="ml-2">{selectedImage ? "Ubah Gambar" : "Unggah Gambar Sampah"}</span>
            </button>

            {selectedImage && (
              <div className="relative w-16 h-16 ml-4">
                <Image src={selectedImage} alt="Uploaded Preview" fill className="object-cover rounded-lg border" />
              </div>
            )}

            <button onClick={handleScanImage} disabled={isLoadingAI || !selectedImage} className={`ml-auto px-4 py-2 rounded-full ${isLoadingAI || !selectedImage ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* === Bagian footer */}
      <Footer />
    </div>
  );
}
