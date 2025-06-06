import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function besiDanBaja() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20 ">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
              Besi dan Baja
            </h1>

            <h2 id="karakteristik" className="text-xl font-semibold mt-8 mb-3 text-green-700">Karakteristik</h2>
            <p>
              Besi dan baja adalah logam kuat, kokoh, dan magnetis. Baja adalah paduan besi dengan karbon dan elemen lainnya, dikenal karena kekuatan tarik dan ketahanannya. Keduanya adalah material dasar dalam konstruksi dan manufaktur.
            </p>
            <br />
            <div className="flex justify-center my-6">
              <div style={{ width: '687px', height: '350px', position: 'relative' }} className="rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/guide/besibaja1.jpg"
                  alt="Contoh Produk Besi dan Baja"
                  fill
                  sizes="(max-width: 768px) 100vw, 687px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <br />

            <h2 id="contoh-sampah" className="text-xl font-semibold mt-8 mb-3 text-green-700">Contoh Umum Sampah</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Kaleng makanan (misalnya kaleng susu kental manis, biskuit yang tebal).</li>
              <li>Paku, sekrup, besi tua dari bangunan atau kendaraan.</li>
              <li>Peralatan dapur dari besi/baja (panci, wajan), dan rangka barang elektronik rusak.</li>
            </ol>
            <br />
            <div className="flex justify-center my-6">
              <div style={{ width: '687px', height: '350px', position: 'relative' }} className="rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/guide/besibaja2.jpg"
                  alt="Contoh Produk Besi dan Baja"
                  fill
                  sizes="(max-width: 768px) 100vw, 687px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <br />

            <h2 id="cara-penanganan" className="text-xl font-semibold mt-8 mb-3 text-green-700">Cara Penanganan Individu</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Untuk kaleng makanan, pastikan bersih dari sisa makanan dan kering. Jika memungkinkan, pipihkan untuk menghemat ruang.</li>
              <li>Pisahkan dari sampah lain. Untuk barang-barang besi yang lebih besar (misalnya paku, peralatan dapur), kumpulkan di tempat terpisah.</li>
              <li>Karena sifatnya magnetis, mereka mudah dikenali dan dipisahkan. Serahkan ke bank sampah atau pengepul besi tua.</li>
            </ol>
            <br />

            <h2 id="proses-daur-ulang-industri" className="text-xl font-semibold mt-8 mb-3 text-green-700">Proses Pengolahan/Daur Ulang Industri</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Pengumpulan & Penyortiran:</strong> Sampah besi dan baja dikumpulkan dari berbagai sumber (industri, konstruksi, rumah tangga) dan disortir, seringkali menggunakan magnet kuat, untuk memisahkan dari logam non-ferro dan kontaminan lainnya.
              </li>
              <li>
                <strong>Pencacahan (Shredding) & Fragmentasi:</strong> Logam dipotong atau dihancurkan menjadi potongan-potongan yang lebih kecil untuk memudahkan penanganan dan peleburan. Proses ini juga membantu menghilangkan bahan non-logam.
              </li>
              <li>
                <strong>Peleburan:</strong> Potongan-potongan besi dan baja dimasukkan ke dalam tungku listrik busur (Electric Arc Furnace/EAF) atau tungku induksi, di mana mereka dilebur pada suhu sangat tinggi. Proses ini menghemat energi secara signifikan dibandingkan produksi dari bijih besi.
              </li>
              <li>
                <strong>Pemurnian & Pengolahan:</strong> Logam cair dimurnikan dari kotoran, dan elemen paduan dapat ditambahkan untuk mencapai sifat baja atau besi yang diinginkan.
              </li>
              <li>
                <strong>Pencetakan & Pembentukan:</strong> Logam cair kemudian dicetak menjadi billet, slab, atau bloom yang kemudian dapat digiling, ditempa, atau dibentuk menjadi berbagai produk baja dan besi baru (misalnya batangan, lembaran, pipa, suku cadang otomotif). Daur ulang baja menjaga sifat materialnya tetap utuh, memungkinkan daur ulang berulang kali.
              </li>
            </ol>
            <br />

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/other"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Sebelumnya</p>
              </Link>
              <Link
                href="/guide/sampah-anorganik/sampah-logam/tembaga"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <p>Selanjutnya</p>
                <Icon icon="icon-park-solid:next" />
              </Link>
            </div>
            <div className="h-[40px]"></div>
          </article>
        </main>

        <Rightbar>
          <ul className="mb-8 space-y-3 ml-3 text-gray-600 text-sm">
            <li>
              <Link href="#karakteristik">Karakteristik</Link>
            </li>
            <li>
              <Link href="#contoh-sampah" >Contoh Umum Sampah</Link>
            </li>
            <li>
              <Link href="#cara-penanganan" >Cara Penanganan Individu</Link>
            </li>
            <li>
              <Link href="#proses-daur-ulang-industri" >Proses Pengolahan/Daur Ulang Industri</Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}