import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";

// export default function guide(){
//   // Inisialisasi activeMainSection: Ambil ID artikel pertama dari bagian Introduction
//   const [activeMainSection, setActiveMainSection] = useState(() => {
//     // Cari artikel pertama di bagian 'Introduction'
//     const introductionSection = guideData.find(sec => sec.title === 'Introduction');
//     if (introductionSection && introductionSection.articles.length > 0) {
//       return introductionSection.articles[0].id;
//     }
//     // Fallback jika tidak ada artikel di Introduction
//     const firstArticle = guideData.flatMap(sec => sec.articles)[0];
//     return firstArticle ? firstArticle.id : '';
//   });
//   const [activeSubSection, setActiveSubSection] = useState('');

//   // Flat array dari semua artikel untuk pencarian mudah
//   const allArticles = guideData.flatMap(section => section.articles);

//   // currentActiveArticle dan subHeadingsForSidebar dihitung ulang setiap kali activeMainSection berubah
//   const currentActiveArticle = allArticles.find(article => article.id === activeMainSection);
//   const subHeadingsForSidebar = currentActiveArticle ?
//     currentActiveArticle.content.filter(item => item.type === 'subheading' && item.id) : [];

//   useEffect(() => {
//     const handleScroll = () => {
//       let foundMainSection = '';
//       let foundSubSection = '';

//       // Loop melalui semua artikel untuk menentukan main section yang aktif
//       // Dimulai dari bawah agar lebih akurat saat scroll ke atas
//       for (let i = allArticles.length - 1; i >= 0; i--) {
//         const article = allArticles[i];
//         const sectionElement = document.getElementById(article.id);

//         if (sectionElement) {
//           const rect = sectionElement.getBoundingClientRect();
//           // Tentukan main section yang aktif jika bagian atasnya melewati 30% dari tinggi viewport
//           // dan bagian bawahnya masih terlihat.
//           if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0) {
//             foundMainSection = article.id;
//             break; // Hentikan setelah menemukan yang paling atas
//           }
//         }
//       }

//       // Update activeMainSection jika ada perubahan
//       if (foundMainSection && foundMainSection !== activeMainSection) {
//         setActiveMainSection(foundMainSection);
//       } else if (!foundMainSection && activeMainSection !== '') {
//         // Jika tidak ada main section yang aktif (misal di paling atas halaman)
//         // Set ke artikel pertama jika ada, atau kosongkan
//         setActiveMainSection(allArticles[0]?.id || '');
//       }

//       // Tentukan sub-bagian yang aktif jika ada main section yang aktif
//       // Gunakan activeMainSection yang sudah di-update
//       if (activeMainSection) {
//         const articleForSubheadings = allArticles.find(article => article.id === activeMainSection);
//         if (articleForSubheadings && articleForSubheadings.content) {
//           const subheadings = articleForSubheadings.content.filter(item => item.type === 'subheading' && item.id);
//           for (let i = subheadings.length - 1; i >= 0; i--) {
//             const subElement = document.getElementById(subheadings[i].id);
//             if (subElement) {
//               const rect = subElement.getBoundingClientRect();
//               // Aktifkan sub-bagian jika bagian atasnya melewati 30% dari tinggi viewport
//               if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0) {
//                 foundSubSection = subheadings[i].id;
//                 break;
//               }
//             }
//           }
//         }
//       }
//       // Update activeSubSection jika ada perubahan
//       if (foundSubSection !== activeSubSection) {
//         setActiveSubSection(foundSubSection);
//       }
//     };

//     // Panggil sekali saat mount untuk mengatur posisi awal dan tambahkan event listener
//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Panggil di awal untuk mengatur status awal

//     // Cleanup listener saat komponen unmount
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [activeMainSection, activeSubSection, allArticles]); // Dependency array: efek akan dijalankan ulang jika state ini berubah atau allArticles berubah

//   // Fungsi helper untuk merender konten artikel berdasarkan 'type'
//   const renderArticleContent = (contentItem) => {
//     switch (contentItem.type) {
//       case 'paragraph':
//         return <p className="body-6 mb-4">{contentItem.text}</p>;
//       case 'blockquote':
//         return (
//           <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 mb-6 body-3">
//             {contentItem.text}
//           </blockquote>
//         );
//       case 'image':
//         return (
//           <div className="my-8 text-center">
//             {/* Wrapper div dengan padding-bottom untuk mempertahankan rasio aspek */}
//             {/* Ratio: 250 (height) / 678 (width) = ~0.3687 = 36.87% */}
//             <div className="relative w-full max-w-[678px] mx-auto border-4 border-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300 pb-[36.87%]">
//               <Image
//                 src={contentItem.src}
//                 alt={contentItem.alt}
//                 fill // Menggunakan fill untuk mengisi container
//                 className="object-cover" // Memastikan gambar mengisi container dan memotong jika perlu
//                 sizes="(max-width: 768px) 100vw, 678px" // Ini membantu browser memilih ukuran gambar yang tepat
//                 placeholder="blur"
//                 blurDataURL={contentItem.blurDataURL || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}
//               />
//             </div>
//             {contentItem.caption && <p className="text-gray-500 text-sm mt-3">{contentItem.caption}</p>}
//           </div>
//         );
//       case 'list':
//         return (
//           <div className="bg-green-50 p-4 rounded-lg my-6">
//             <h3 className="font-semibold text-green-700 mb-2">{contentItem.title}</h3>
//             <ul className="list-disc pl-6 space-y-1">
//               {contentItem.items.map((item, i) => (
//                 <li key={i} className="body-6">{item}</li>
//               ))}
//             </ul>
//           </div>
//         );
//       case 'subheading':
//         return <h3 id={contentItem.id} key={contentItem.id} className="text-gray-800 subheading-5 mt-8 mb-4">{contentItem.text}</h3>;
//       default:
//         return null;
//     }
//   };

//   if (allArticles.length === 0) {
//     return (
//       <div className="min-h-screen bg-white text-gray-800 font-sans flex items-center justify-center">
//         <p className="text-lg text-gray-600">Tidak ada artikel panduan yang ditemukan.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white text-gray-800 font-sans">
//       {/* Header */}
//       <header className="border-b py-4">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           {/* Logo Ecosortify */}
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
//               {/* Placeholder untuk logo jika ada */}
//             </div>
//             <h1 className="text-3xl font-bold text-green-600">Ecosortify</h1>
//           </div>

//           {/* Bagian navigasi utama */}
//           <nav className="flex space-x-8 mr-auto ml-16">
//             <Link href="/" className="text-gray-800 hover:text-green-600 font-medium text-lg">Home</Link>
//             <Link href="/scan" className="text-gray-800 hover:text-green-600 font-medium text-lg">Scan</Link>
//             <Link href="/guide" className="text-green-600 font-bold text-lg">Guide</Link>
//             <Link href="/chatbot" className="text-gray-800 hover:text-green-600 font-medium text-lg">Chatbot</Link>
//             <Link href="/about" className="text-gray-800 hover:text-green-600 font-medium text-lg">About</Link>
//           </nav>

//           {/* Tombol Register dan Login */}
//           <div className="flex space-x-4">
//             <button className="px-6 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200 text-lg">Register</button>
//             <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-lg">Login</button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content - 3 Column Layout */}
//       <main className="container mx-auto px-4 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* KIRI: Navigasi Bagian Utama (Introduction, Main content, FAQ) */}
//           <aside className="lg:w-1/6 order-first lg:order-first">
//             <div className="sticky top-8 space-y-8">
//               <nav className="space-y-4"> {/* Menambahkan space-y untuk jarak antar section utama */}
//                 {guideData.map((sectionGroup) => (
//                   <div key={sectionGroup.title}>
//                     <h2 className="text-gray-700 mb-2 font-bold text-lg">{sectionGroup.title}</h2>
//                     <ul className="list-none pl-0 space-y-1"> {/* Menghilangkan bullet dan padding bawaan */}
//                       {sectionGroup.articles.map((article) => (
//                         <li key={article.id}>
//                           <a
//                             href={`#${article.id}`}
//                             className={`block py-1 px-2 rounded ${activeMainSection === article.id ? 'text-green-600 font-semibold bg-green-50' : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'}`}
//                           >
//                             {article.title}
//                           </a>
//                           {/* Tampilkan sub-bab jika artikel utama ini aktif */}
//                           {activeMainSection === article.id && subHeadingsForSidebar.length > 0 && (
//                             <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
//                               {subHeadingsForSidebar.map((subheading) => (
//                                 <li key={subheading.id}>
//                                   <a
//                                     href={`#${subheading.id}`}
//                                     className={`block py-0.5 ${activeSubSection === subheading.id ? 'text-green-600 font-medium' : 'text-gray-600 hover:text-green-600'}`}
//                                   >
//                                     {subheading.text}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </nav>
//             </div>
//           </aside>

//           {/* TENGAH: Konten Utama Artikel */}
//           <div className="lg:w-4/6 order-2 lg:order-2">
//             {allArticles.map((article) => (
//               <section id={article.id} key={article.id} className="mb-12">
//                 <h2 className="text-gray-800 subheading-5 mb-4">{article.title}</h2>
//                 {article.content.map((contentItem, index) => (
//                   <React.Fragment key={contentItem.id || index}>
//                     {renderArticleContent(contentItem)}
//                   </React.Fragment>
//                 ))}

//                 {/* Navigasi Sebelumnya/Selanjutnya */}
//                 <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between items-center">
//                   {article.prevLink ? (
//                     <Link href={article.prevLink} className="flex items-center justify-center px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition duration-300">
//                       <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                       <span>{article.prevText}</span>
//                     </Link>
//                   ) : <div />}

//                   {article.nextLink ? (
//                     <Link href={article.nextLink} className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
//                       <span>{article.nextText}</span>
//                       <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </Link>
//                   ) : <div />}
//                 </div>
//               </section>
//             ))}
//           </div>

//           {/* KANAN: Daftar Isi Sub-Bab (On this page) */}
//           <aside className="lg:w-1/6 order-last lg:order-last">
//             <nav className="sticky top-8">
//               <h2 className="text-gray-700 mb-4 body-5">On this page</h2>
//               {subHeadingsForSidebar.length > 0 ? (
//                 <ul className="space-y-2">
//                   {subHeadingsForSidebar.map((sub) => (
//                     <li key={sub.id}>
//                       <a
//                         href={`#${sub.id}`}
//                         className={`body-6 ${activeSubSection === sub.id ? 'text-green-600 font-semibold' : 'text-gray-700 hover:underline'}`}
//                       >
//                         {sub.text}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="body-8 text-gray-500">No sub-sections on this page.</p>
//               )}
//             </nav>
//           </aside>
//         </div>
//       </main>

//     </div>
//   );
// };

export default function guide() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex pt-20">
        <Leftbar />

        {/* Konten utama scrollable */}
        <main className="lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-4 xl:mr-[300px] z-1 bg-white" tabIndex={0}>
          <article>
            {/* Konten artikel panjang di sini */}
            <h1>Judul Artikel</h1>
            <p>Paragraf panjang...</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus error alias ipsum eligendi molestiae
            exercitationem, eveniet animi veniam, et optio at molestias illo dolore quae deleniti similique, vel totam eum! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam fugit quidem laborum maxime. Itaque officia
            minus, debitis maxime animi delectus, doloremque autem unde consectetur quod saepe aperiam magnam harum? Minus ipsum
            dolorum temporibus aspernatur autem, quod enim, exercitationem, rerum recusandae quo provident consequatur vero quas
            iste est quis vitae omnis eum. Fugit a eius asperiores deserunt, temporibus quis consequatur! Placeat voluptates,
            saepe modi ut labore hic? Eum distinctio perspiciatis architecto facere eius. Nam provident obcaecati totam accusamus
            quos. Et provident rerum officia voluptates! Doloremque et quis nisi consequatur quia! Perspiciatis iure natus facilis
            beatae consequatur, mollitia corrupti ratione! Natus reiciendis fugit consequatur consequuntur neque. Corrupti dolores
            quaerat soluta dolore esse, a fugit voluptatum molestiae ut atque minus vel distinctio? Rem cupiditate maxime beatae
            amet a sit doloribus, vero reprehenderit. Sapiente animi eligendi consequuntur nesciunt perferendis ea adipisci
            inventore laboriosam architecto, veniam est molestiae exercitationem neque ducimus, et illo temporibus? Ad in, quaerat
            obcaecati, voluptatem sequi ab deleniti sapiente soluta hic eos saepe unde voluptates similique. Optio quos cumque
            nesciunt, aliquam consectetur asperiores sint iure deleniti esse labore atque excepturi! Est minima itaque, ducimus ab
            ullam eligendi accusantium possimus nulla aliquam. Non laboriosam nulla labore? Voluptas obcaecati quia, voluptatibus
            provident itaque nemo aliquid dolores, ipsam dolorem laudantium molestias, qui odio? Dolores aspernatur nisi, quaerat
            beatae quae dolorum doloribus cupiditate blanditiis totam ipsum recusandae atque optio autem temporibus perferendis
            neque, obcaecati exercitationem? Unde nobis aliquam ratione asperiores omnis et, corrupti velit? Ullam possimus vel,
            deserunt recusandae obcaecati omnis accusantium dicta mollitia voluptates magni distinctio reprehenderit assumenda ut
            quam sequi modi molestiae labore ex expedita ab nostrum necessitatibus dignissimos commodi laudantium! Repellendus!
            Maxime adipisci, accusamus nesciunt iure dolorem enim magni? Porro accusamus maxime consequatur a, adipisci veritatis
            deleniti modi, itaque eos similique illum fuga obcaecati. Animi tempore assumenda nostrum asperiores, sapiente
            provident?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga exercitationem porro eos fugiat eveniet
            eligendi, ratione labore sit dicta similique officia architecto veniam placeat optio ea molestias iure consequatur!
            Enim illo cupiditate alias? Similique, quaerat! Velit saepe officia corporis molestiae, veniam doloremque repudiandae
            repellendus accusantium blanditiis vel quis facere alias enim nihil cupiditate nam pariatur, esse inventore? Hic, rem?
            Voluptas quae suscipit porro sit molestiae esse quisquam? Autem eius fugit illum! Velit labore id maiores doloremque
            laboriosam distinctio, sequi provident, alias repellat eius molestias est esse perferendis minus illum. Aliquid
            nesciunt minus praesentium deleniti ducimus nulla dolorum amet, nisi repellat facilis! Cum sed, nesciunt sunt totam
            voluptates rem, at autem ipsam, fuga possimus adipisci neque ipsum error reiciendis est. Dolores, ratione hic. Quod,
            facilis hic. Aliquam, a corporis aperiam deleniti dicta odio quasi repudiandae, et ratione quibusdam ducimus, eos ex
            sapiente illo quas labore illum iste. Reiciendis, minus neque! Quisquam iusto odio enim. Quia fugit alias fuga. Eaque
            itaque quia dolore, atque ducimus libero asperiores voluptatibus nisi deleniti enim ad aliquid assumenda nulla quasi
            vero? Obcaecati vel repellendus ut! Laboriosam, sint consectetur rerum ab id blanditiis, vero illum tempore explicabo
            officiis eligendi soluta magnam iusto, suscipit pariatur fugiat sed placeat dicta assumenda odio doloremque.
            Consequatur accusamus fugiat velit atque? Molestiae tempore natus iste. Esse blanditiis corrupti corporis neque culpa
            amet commodi magni harum pariatur, qui porro adipisci accusamus dolores odio rerum unde voluptatum. Rem assumenda
            illum temporibus voluptatem animi. Totam excepturi dolores dolorem provident id animi ratione voluptate pariatur
            reprehenderit velit sequi, blanditiis fugit rerum debitis aliquid aliquam saepe neque repellendus, tenetur distinctio
            quod, quas sit. Molestiae, quam ad! Illum libero magnam fugiat pariatur ipsa incidunt, sed omnis consectetur eaque
            dolore quidem aspernatur nobis quisquam ut alias doloremque corporis est cupiditate placeat reprehenderit? Molestias
            perspiciatis nulla temporibus culpa explicabo? Ullam ut officiis deleniti in dolore. Velit earum asperiores, iste,
            provident quod voluptatem iusto excepturi reiciendis, atque cumque ab. Minima saepe vitae ad praesentium sapiente
            itaque asperiores corrupti voluptas architecto! Ipsam, amet veritatis sint pariatur minus cum reprehenderit eius
            deserunt doloribus praesentium ullam soluta labore numquam maxime nemo distinctio recusandae cumque molestias placeat
            rerum! Quo perspiciatis dolor voluptates esse voluptate? Qui nesciunt temporibus eveniet sit veritatis culpa eaque
            repellat corrupti blanditiis aliquam laboriosam nemo vitae reprehenderit cupiditate enim quibusdam quas molestias
            adipisci, corporis repellendus commodi distinctio? Pariatur quisquam sequi animi. Adipisci ipsum deleniti perferendis,
            beatae saepe sint repellendus repellat fugiat optio nihil tempora in iste reiciendis exercitationem atque molestiae.
            Dolorum quae temporibus ullam sunt provident aliquam ad necessitatibus animi eveniet. Qui, ipsa nemo. Id tenetur quasi
            minus dicta iste corporis. Fugit corporis unde maxime rerum eaque magnam. Commodi similique numquam nostrum ipsum
            consequatur iure maiores et fugit quisquam id. Impedit? Odio laboriosam, tempora eius repellendus quod tempore.
            Aperiam repellat illo cumque animi ullam, voluptate, consequuntur eum et corporis rerum ipsum. Minima nam quod a amet.
            Odit exercitationem voluptate doloremque necessitatibus. Debitis enim unde labore cumque quidem. Id laboriosam sit
            consectetur architecto facere laborum. Laborum odit dolore laudantium enim nemo minus. Recusandae distinctio tempore
            labore ipsum voluptatibus quasi molestiae quaerat fugit. Dignissimos aliquam sit deleniti? Fuga nulla deleniti
            repellat reiciendis, possimus officiis saepe error qui accusamus maxime sapiente ea explicabo sit accusantium
            exercitationem facere vel at non dicta consequatur perspiciatis! Autem! Repellat animi eveniet esse, modi dicta eius?
            Eius laborum ipsum at ipsa, recusandae sapiente natus, nostrum quam, sit ullam quaerat explicabo sint voluptate
            necessitatibus nobis. Eos quos molestiae culpa quo. Quod, odit vitae non repudiandae, iusto velit doloremque saepe
            ipsum similique illo labore veniam cumque corporis aspernatur officia placeat voluptatibus ex modi. Accusamus eos
            impedit est blanditiis pariatur aliquid possimus.
          </article>
        </main>

        <Rightbar/>
        
      </div>
    </>
  );
}
