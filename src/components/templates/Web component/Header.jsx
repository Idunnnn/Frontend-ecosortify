import Image from 'next/image';
import Link from 'next/link'; // Assuming you are using Next.js for the Link component

const Header = () => {
  return (
    <header style={{
  width: '1440px',
  height: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '20px',
  paddingRight: '100px',
  paddingBottom: '20px',
  paddingLeft: '100px',
  boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.25)', // #00000040 is rgba(0,0,0,0.25)
  backgroundColor: 'white', // "volour putih"
  color: 'black', // text-black
  border: '1px solid black', // border border-black
  position: 'relative', // z-10 relative
  zIndex: 10 // z-10 relative
}}>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '2px', // Assuming a small gap for logo and potential text if you add it back
    width: '165px', // Overall div width for logo area
    height: '39px' // Overall div height for logo area
  }}>
    <Image src="/images/logo.png" alt="Ecosortify Logo" width={165} height={39} /> {/* Applied your specified dimensions here */}
    {/* <span className="text-2xl font-bold">Ecosortify</span> */}
  </div>
  <nav style={{
    display: 'flex',
    gap: '33px',
    width: '448px',
    height: '28px'
  }}>
    <Link href="/index" className="hover:text-green-300 transition">Home</Link>
    <Link href="/scan" className="hover:text-green-300 transition">Scan</Link>
    <Link href="/guide" className="hover:text-green-300 transition">Guide</Link>
    <Link href="/chatbot" className="hover:text-green-300 transition">Chatbot</Link>
    <Link href="/about" className="hover:text-green-300 transition">About us</Link>
  </nav>
  <div style={{
    display: 'flex',
    gap: '12px',
    width: '274px',
    height: '52px'
  }}>
    <button className="bg-transparent border border-black text-black px-6 py-2 rounded-full hover:bg-white hover:text-green-800 transition">Register</button>
    <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">Login</button>
  </div>
</header>
  );
};

export default Header;