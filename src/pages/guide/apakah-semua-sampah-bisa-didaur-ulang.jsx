import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ImageArticle from "@/components/ImageArticle";
import Article from "@/components/Article";

export default function ApakahSemuaSampahBisaDiDaurUlang() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />


      <div className="flex min-h-[calc(100vh-4rem)]"> 
        <Leftbar />

        
        <Article className="flex-1"> 
          <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">Apakah semua sampah bisa didaur ulang?</h1>

          <p>
            Bayangkan setiap sampah yang kita buang seperti sehelai pakaian. Ada yang bisa kita cuci bersih dan pakai lagi, tapi ada juga yang sudah terlalu kotor, robek parah, atau bahkan terbuat dari bahan yang campur aduk sehingga sulit sekali untuk diperbaiki atau diubah jadi sesuatu yang baru. Begitulah kira-kira gambaran sampah dan daur ulang.
          </p>
          <br />
          <p>
            Meskipun semangatnya bagus, tidak semua sampah punya "kesempatan kedua" untuk didaur ulang. Kenapa?
          </p>

          <h2 id="kenapa-sulit-didaur-ulang" className="text-xl font-semibold mt-8 mb-3 text-green-700">Kenapa Sampah Sulit Didaur Ulang?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li>
              <strong>Beda Bahan, Beda Perlakuan:</strong> Plastik itu ada banyak jenisnya, seperti keluarga besar yang punya banyak anggota. Ada yang gampang diolah lagi (seperti botol air mineral), tapi ada juga yang sulit atau butuh teknologi khusus yang belum tentu ada di mana-mana (seperti plastik kemasan makanan ringan). Begitu juga dengan kertas, kaca, dan logam. Masing-masing punya "aturan main" sendiri.
            </li>
            <li>
              <strong>Terkontaminasi Itu Masalah:</strong> Kalau sampah kita kotor atau bercampur sisa makanan, misalnya kotak pizza yang berminyak atau botol yang masih ada sisa sausnya, itu bisa jadi penghalang. Sampah yang kotor seringkali tidak bisa diproses, bahkan bisa merusak seluruh tumpukan sampah daur ulang lainnya. Ibaratnya, satu apel busuk bisa merusak sekotak apel.
            </li>
            <li>
              <strong>Fasilitas Belum Merata:</strong> Di beberapa daerah, fasilitas daur ulangnya mungkin belum lengkap. Jadi, walaupun suatu jenis sampah secara teknis bisa didaur ulang, kalau tidak ada pabrik atau tempat pengolahannya di dekat kita, ya mau bagaimana lagi.
            </li>
            <li>
              <strong>Desain Produk yang "Ribet":</strong> Kadang, produk dibuat dari campuran berbagai bahan yang sulit dipisahkan. Contohnya, sikat gigi yang terbuat dari plastik dan bulu nilon, atau kemasan berlapis-lapis. Ini bikin proses daur ulangnya jadi super susah dan mahal.
            </li>
          </ul>
          <br />

          <h2 id="sampah-sulit-kesempatan-kedua" className="text-xl font-semibold mt-8 mb-3 text-green-700">Sampah yang Seringkali Sulit "Mendapatkan Kesempatan Kedua":</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li><strong>Styrofoam:</strong> Ringan, mudah hancur, dan seringkali tidak ekonomis untuk didaur ulang.</li>
            <li><strong>Popok Bayi atau Pembalut:</strong> Mengandung banyak jenis bahan dan terkontaminasi, jadi hampir mustahil didaur ulang.</li>
            <li><strong>Kertas Tisu dan Kertas yang Kena Makanan:</strong> Seratnya sudah terlalu pendek atau kotor.</li>
            <li><strong>Keramik dan Porselen:</strong> Beda jenis dengan kaca, jadi tidak bisa dilebur bersama.</li>
          </ul>
          <br />

          <h2 id="apa-yang-bisa-kita-lakukan" className="text-xl font-semibold mt-8 mb-3 text-green-700">Jadi, Apa yang Bisa Kita Lakukan?</h2>
          <p>
            Meskipun tidak semua sampah bisa didaur ulang, bukan berarti kita menyerah. Justru, ini jadi pengingat untuk kita:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-5">
            <li><strong>Kurangi dari Awal:</strong> Cara terbaik adalah tidak menghasilkan sampah sama sekali atau sesedikit mungkin. Pikirkan dua kali sebelum membeli barang yang akhirnya jadi sampah.</li>
            <li><strong>Gunakan Ulang:</strong> Sebelum dibuang, pikirkan apakah barang itu bisa dipakai lagi untuk fungsi lain? Contohnya, botol bekas jadi wadah atau kantong belanja dipakai berulang kali.</li>
            <li><strong>Pilahlah Sampahmu:</strong> Ini penting sekali! Pisahkan sampah organik (sisa makanan) dan anorganik (plastik, kertas, kaca, logam) di rumah. Lalu, pisahkan lagi sampah daur ulang berdasarkan jenisnya. Ini membantu petugas daur ulang.</li>
            <li><strong>Cari Tahu Info Lokal:</strong> Setiap kota atau daerah punya aturan dan fasilitas daur ulang yang berbeda. Cari tahu apa saja yang bisa didaur ulang di tempatmu.</li>
          </ul>
          <br />
          <p>
            Intinya, mari kita sama-sama jadi lebih bijak dalam memperlakukan sampah. Karena setiap upaya kecil kita bisa membuat perbedaan besar bagi bumi yang kita tinggali.
          </p>

          <div className="flex justify-between mt-14">
            <Link
              href="/guide/sampah-residu-b3/jenis-sampah-residu-b3/kain-terkontaminasi"
              className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
            >
              <Icon icon="icon-park-solid:back" />
              <p>Sebelumnya</p>
            </Link>
          </div>
          <div className="h-[40px]"></div>
        </Article>

        <Rightbar>
          <ul className="mb-8 space-y-3 ml-3 text-gray-600 text-sm">
            <li>
              <Link href="#overview" className="font-bold cursor-default">Apakah semua sampah bisa didaur ulang?</Link>
            </li>
            <li>
              <Link href="#kenapa-sulit-didaur-ulang" >Kenapa Sampah Sulit Didaur Ulang?</Link>
            </li>
            <li>
              <Link href="#sampah-sulit-kesempatan-kedua" >Sampah yang Sulit "Mendapatkan Kesempatan Kedua"</Link>
            </li>
            <li>
              <Link href="#apa-yang-bisa-kita-lakukan" >Jadi, Apa yang Bisa Kita Lakukan?</Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}