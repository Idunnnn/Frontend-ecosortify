
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Image src="/images/logo.png" alt="EcoSortify Logo" width={150} height={30} className="mx-auto md:mx-0" />
        </div>
        <p className="text-gray-400 text-sm">Copyright &copy; 2025 Ecosortify</p>
      </div>
    </footer>
  );
};

export default Footer;