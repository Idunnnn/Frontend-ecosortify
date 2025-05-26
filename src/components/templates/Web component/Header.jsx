import Image from 'next/image';
import Link from 'next/link'; // Assuming you are using Next.js for the Link component

const Header = () => {
  return (
    <header className="flex justify-between items-center p-8 z-10 relative text-black border border-black"> {/* Add text-white for header */}
              <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="Ecosortify Logo" width={100} height={100} /> {/* Adjust path to your logo */}
                {/* <span className="text-2xl font-bold">Ecosortify</span> */}
              </div>
              <nav className="flex gap-8">
                <a href="src/pages/index.jsx" className="hover:text-green-300 transition">Home</a>
                <Link href="/scan" className="hover:text-green-300 transition">Scan</Link>
                <a href="#" className="hover:text-green-300 transition">Guide</a>
                <a href="#" className="hover:text-green-300 transition">Chatbot</a>
                <a href="#" className="hover:text-green-300 transition">About</a>
              </nav>
              <div className="flex gap-4">
                <button className="bg-transparent border border-black text-black px-6 py-2 rounded-full hover:bg-white hover:text-green-800 transition">Register</button>
                <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">Login</button>
              </div>
            </header>
  );
};

export default Header;