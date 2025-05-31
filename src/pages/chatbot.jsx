// === Bagian import semua modul dan aset yang dibutuhkan
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
// import { isUserLogIn } from "@/firebase/firebaseClient"; // Komentari atau hapus jika tidak digunakan
import Header from '../components/templates/Web component/Header';
import Footer from '../components/templates/Web component/Footer';
import Button from "@/components/Button"; // Import your Button component
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

// === Komponen halaman utama (Chatbot Page)
export default function Chatbot() { // Ubah nama komponen dari Scan menjadi Chatbot
  const router = useRouter();

  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', message: 'Selamat Datang! Di Chatbot edukasi sampah.\n\nTemukan cara mudah dan interaktif untuk belajar tentang pengelolaan sampah bersama chatbot. Kami siap membantu Anda menjadi agen perubahan untuk bumi yang lebih bersih!' }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  const messagesEndRef = useRef(null); // Ref untuk menggulir ke bawah secara otomatis

  // Fungsi untuk menggulir ke pesan terbaru
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom(); // Gulir ke bawah setiap kali pesan berubah
  }, [chatMessages]);

  const handleSendMessage = useCallback(async () => {
    if (currentMessage.trim() === "") return;

    const userMessage = currentMessage.trim();
    setChatMessages((prevMessages) => [...prevMessages, { sender: 'user', message: userMessage }]);
    setCurrentMessage(""); // Bersihkan input setelah mengirim

    setIsLoadingAI(true);

    // Simulasi respons AI
    await new Promise((resolve) => setTimeout(resolve, 1500));

    let aiResponseText = "Maaf, saya tidak mengerti. Bisakah Anda mengulanginya?";
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("sampah organik")) {
      aiResponseText = "Sampah organik adalah sampah yang dapat membusuk secara alami, seperti sisa makanan, daun, dan ranting. Sampah ini bisa diolah menjadi kompos atau biogas.";
    } else if (lowerCaseMessage.includes("plastik")) {
      aiResponseText = "Sampah plastik membutuhkan waktu sangat lama untuk terurai. Sebaiknya pisahkan plastik untuk didaur ulang atau hindari penggunaannya jika memungkinkan.";
    } else if (lowerCaseMessage.includes("daur ulang")) {
      aiResponseText = "Daur ulang adalah proses mengubah sampah menjadi produk baru. Ini membantu mengurangi sampah di TPA dan menghemat sumber daya alam.";
    } else if (lowerCaseMessage.includes("cara mengelola sampah")) {
        aiResponseText = "Pengelolaan sampah yang baik meliputi 3R: Reduce (mengurangi), Reuse (menggunakan kembali), dan Recycle (mendaur ulang).";
    } else if (lowerCaseMessage.includes("terima kasih")) {
        aiResponseText = "Sama-sama! Ada hal lain yang bisa saya bantu?";
    } else if (lowerCaseMessage.includes("halo") || lowerCaseMessage.includes("hai")) {
        aiResponseText = "Halo juga! Ada yang ingin Anda tanyakan tentang sampah?";
    } else if (lowerCaseMessage.includes("contoh sampah organik")) {
        aiResponseText = "Contoh sampah organik meliputi sisa makanan (kulit buah, sayuran), daun kering, ranting pohon, dan ampas kopi/teh.";
    } else if (lowerCaseMessage.includes("bahaya sampah elektronik")) {
        aiResponseText = "Sampah elektronik (e-waste) bisa sangat berbahaya karena mengandung bahan kimia beracun seperti timbal, merkuri, dan kadmium. Penting untuk mendaur ulangnya di fasilitas khusus.";
    } else if (lowerCaseMessage.includes("kompos")) {
        aiResponseText = "Kompos adalah pupuk alami yang dibuat dari dekomposisi sampah organik. Ini sangat baik untuk menyuburkan tanah.";
    } else if (lowerCaseMessage.includes("jenis sampah")) {
        aiResponseText = "Secara umum, jenis sampah dibagi menjadi organik, anorganik (plastik, kaca, logam), dan B3 (Bahan Berbahaya dan Beracun).";
    }


    setChatMessages((prevMessages) => [...prevMessages, { sender: 'ai', message: aiResponseText }]);
    setIsLoadingAI(false);
  }, [currentMessage]);

  useEffect(() => {
    // Logic to check user login (jika diperlukan)
    // if (isUserLogIn()) {
    //   router.push("/dashboard");
    // }
  }, [router]);

  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen text-gray-800 flex flex-col`}>
      {/* === Bagian Header (Navigation Bar) */}
      <Header />

      {/* --- */}
      {/* === Hero Section (Chat Interface) */}
      <section className="flex-grow flex flex-col items-center justify-between text-center px-4 pt-24 pb-16 relative">
        <div className="flex-grow w-full max-w-2xl overflow-y-auto p-4 mb-4" style={{ maxHeight: 'calc(100vh - 250px)' }}> {/* Batasi tinggi area chat */}
          {chatMessages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
              {msg.sender === 'ai' && (
                <Image src="/images/assets/white-robot-hello.png" alt="AI Avatar" width={40} height={40} className="rounded-full mr-2 self-start" />
              )}
              <div
                className={`max-w-[70%] p-3 rounded-xl ${
                  msg.sender === 'user'
                    ? 'bg-green-600 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                } text-left whitespace-pre-wrap`}
              >
                {msg.message}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* Element kosong untuk scroll ke bawah */}
        </div>

        <div className="w-full max-w-2xl bg-white shadow-xl p-4 rounded-2xl mb-4 flex items-center">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !isLoadingAI) {
                handleSendMessage();
              }
            }}
            placeholder="Tanyakan apa saja..."
            className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 mr-2"
            disabled={isLoadingAI}
          />

          <Button
            variant="primary_sm"
            onClick={handleSendMessage}
            disabled={isLoadingAI || currentMessage.trim() === ""}
            className={`!py-2 !px-4 ${isLoadingAI || currentMessage.trim() === "" ? "bg-gray-300 text-gray-500 cursor-not-allowed" : ""}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </Button>
        </div>
      </section>

      {/* --- */}
      {/* === Bagian footer */}
      <Footer />
    </div>
  );
}