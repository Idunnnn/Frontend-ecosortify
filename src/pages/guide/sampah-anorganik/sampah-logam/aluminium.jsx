import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function aluminium() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20 ">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
              Aluminium
            </h1>

            <h2 id="karakteristik" className="text-xl font-semibold mt-8 mb-3 text-green-700">Karakteristik</h2>
            <p>
              Aluminium adalah logam yang sangat ringan namun kuat, memiliki ketahanan korosi yang sangat baik, serta merupakan konduktor panas dan listrik yang efisien. Sifatnya yang tidak beracun dan mudah dibentuk menjadikannya pilihan populer untuk kemasan makanan dan minuman.
            </p>
            <br />
            <div className="flex justify-center my-6">
              <div style={{ width: '687px', height: '250px', position: 'relative' }} className="rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/guide/aluminium1.jpg"
                  alt="Contoh Produk Aluminium"
                  fill
                  sizes="(max-width: 768px) 100vw, 687px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <br />

            <h2 id="contoh-sampah" className="text-xl font-semibold mt-8 mb-3 text-green-700">Contoh Umum Sampah</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Kaleng minuman (soda, bir).</li>
              <li>Kaleng makanan (misalnya kaleng sarden, kornet), aluminium foil.</li>
              <li>Wadah makanan take-away dari aluminium, dan beberapa komponen furnitur atau kendaraan.</li>
            </ol>
            <br />
            <div className="flex justify-center my-6">
              <div style={{ width: '687px', height: '500px', position: 'relative' }} className="rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/guide/aluminium2.jpg"
                  alt="Contoh Produk Aluminium"
                  fill
                  sizes="(max-width: 768px) 100vw, 687px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <br />

            <h2 id="cara-penanganan" className="text-xl font-semibold mt-8 mb-3 text-green-700">Cara Penanganan Individu</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Untuk kaleng minuman, pastikan kosong sepenuhnya dan bilas bersih dari sisa minuman atau makanan.</li>
              <li>Jika memungkinkan dan tidak terlalu keras, pipihkan kaleng untuk menghemat ruang.</li>
              <li>Kumpulkan secara terpisah dari jenis sampah lain dan serahkan ke bank sampah atau pengepul yang menerima aluminium. Pastikan aluminium foil bersih dari sisa makanan yang menempel.</li>
            </ol>
            <br />

            <h2 id="proses-daur-ulang-industri" className="text-xl font-semibold mt-8 mb-3 text-green-700">Proses Pengolahan/Daur Ulang Industri</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Pengumpulan & Penyortiran:</strong> Sampah aluminium dikumpulkan dan disortir untuk memisahkan dari jenis logam lain (aluminium bersifat non-magnetis, sehingga mudah dipisahkan dari besi/baja dengan magnet) dan kontaminan.
              </li>
              <li>
                <strong>Pencacahan (Shredding):</strong> Aluminium dihancurkan menjadi serpihan-serpihan kecil (flakes) untuk mengurangi volume dan mempercepat peleburan.
              </li>
              <li>
                <strong>Pembersihan:</strong> Serpihan dibersihkan lebih lanjut untuk menghilangkan cat, label, atau sisa kotoran yang menempel.
              </li>
              <li>
                <strong>Peleburan:</strong> Serpihan aluminium dimuat ke dalam tungku peleburan bersuhu tinggi (sekitar 700-1200°C) hingga menjadi cairan. Proses ini menghemat hingga 95% energi dibandingkan produksi aluminium dari bijih bauksit.
              </li>
              <li>
                <strong>Pemurnian & Pencetakan:</strong> Aluminium cair dimurnikan dari kotoran. Kemudian, dapat dicampur dengan elemen lain untuk membentuk paduan aluminium sesuai kebutuhan, lalu dicetak menjadi batangan (ingots) atau lembaran.
              </li>
              <li>
                <strong>Penggunaan Kembali:</strong> Batangan aluminium daur ulang ini siap digunakan kembali oleh industri manufaktur untuk memproduksi kaleng minuman baru, komponen otomotif, konstruksi, atau produk rumah tangga.
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
                href="/guide/sampah-anorganik/sampah-logam/besi-baja"
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
              <Link href="#karakteristik" className="hover:font-semibold">Karakteristik</Link>
            </li>
            <li>
              <Link href="#contoh-sampah" className="hover:font-semibold">Contoh Umum Sampah</Link>
            </li>
            <li>
              <Link href="#cara-penanganan" className="hover:font-semibold">Cara Penanganan Individu</Link>
            </li>
            <li>
              <Link href="#proses-daur-ulang-industri" className="hover:font-semibold">Proses Pengolahan/Daur Ulang Industri</Link>
            </li>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}