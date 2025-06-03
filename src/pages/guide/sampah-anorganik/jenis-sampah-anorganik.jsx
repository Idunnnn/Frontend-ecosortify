import Header2 from "@/components/templates/Header2";
import Leftbar from "@/components/templates/Leftbar";
import Rightbar from "@/components/templates/Rightbar";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function jenisSampahAnorganik() {
  return (
    <>
      <Header2 className={"fixed w-full bg-white"} />

      <div className="flex">
        <Leftbar />

        <main className="lg:ml-[350px] flex-1 h-[calc(100vh-4rem)] p-8 mb-30 xl:mr-[300px] z-1 bg-white relative top-20 ">
          <article className="selection:bg-green-700 selection:text-white text-gray-700">
            <h1 id="overview" className="text-2xl font-bold mb-5 text-gray-800">
              Jenis-Jenis Sampah Anorganik
            </h1>
            <p>
              Limbah anorganik diklasifikasikan berdasarkan sifat dan bahayanya. Pemahaman jenis limbah ini penting agar tidak mencampurkan limbah berbahaya dengan limbah biasa, serta untuk memfasilitasi proses daur ulang.
            </p>
            <br />

            {/* Bagian Sampah Plastik */}
            <h2 id="sampah-plastik" className="text-xl font-bold mb-3 text-gray-800">
              Sampah Plastik
            </h2>
            <p>
              Plastik adalah jenis sampah anorganik yang paling umum dan banyak ditemukan di lingkungan kita. Material ini dibuat dari polimer sintetik, yaitu molekul besar yang tersusun dari unit-unit kecil berulang melalui proses kimia berbasis minyak bumi atau gas alam. Berkat sifatnya yang ringan, kuat, fleksibel, tahan air, dan tahan bahan kimia, plastik telah menjadi material serbaguna yang tak terpisahkan dari kehidupan modern, digunakan dalam berbagai produk mulai dari kemasan, peralatan rumah tangga, hingga komponen industri. Namun, di balik kegunaannya, plastik menyimpan masalah besar: ia sangat sulit terurai dan dapat bertahan di lingkungan selama ratusan hingga ribuan tahun. Akumulasi sampah plastik ini menimbulkan dampak signifikan terhadap lingkungan, terutama lautan, menyebabkan polusi visual, membahayakan satwa liar, hingga membentuk mikroplastik yang dapat masuk ke rantai makanan, membawa potensi bahaya bagi seluruh ekosistem.
            </p>
            <br />
            <p>
              Untuk memahami lebih dalam, mari kita kenali jenis-jenis sampah plastik berdasarkan kode daur ulang:
            </p>
            <br />
            <ul className="list-disc list-inside pl-3 space-y-2">
              <li>
                <Link href="/guide/sampah-anorganik/sampah-plastik/pet" className="text-blue-600 hover:underline">
                  <strong>PET atau PETE (Polyethylene Terephthalate) - Kode 1</strong>
                </Link>
              </li>
              <li>
                <Link href="/guide/sampah-anorganik/sampah-plastik/hdpe" className="text-blue-600 hover:underline">
                  <strong>HDPE (High-Density Polyethylene) - Kode 2</strong>
                </Link>
              </li>
              <li>
                <Link href="/guide/sampah-anorganik/sampah-plastik/pvc" className="text-blue-600 hover:underline">
                  <strong>PVC (Polyvinyl Chloride) - Kode 3</strong>
                </Link>
              </li>
              <li>
                <Link href="/guide/sampah-anorganik/sampah-plastik/ldpe" className="text-blue-600 hover:underline">
                  <strong>LDPE (Low-Density Polyethylene) - Kode 4</strong>
                </Link>
              </li>
              <li>
                <Link href="/guide/sampah-anorganik/sampah-plastik/pp" className="text-blue-600 hover:underline">
                  <strong>PP (Polypropylene) - Kode 5</strong>
                </Link>
              </li>
              <li>
                <Link href="/guide/sampah-anorganik/sampah-plastik/ps" className="text-blue-600 hover:underline">
                  <strong>PS (Polystyrene) - Kode 6</strong>
                </Link>
              </li>
              <li>
                <Link href="/guide/sampah-anorganik/sampah-plastik/other" className="text-blue-600 hover:underline">
                  <strong>OTHER (Lain-lain) - Kode 7</strong>
                </Link>
              </li>
            </ul>
            <br />

            {/* Bagian Sampah Logam */}
            <h2 id="sampah-logam" className="text-xl font-bold mb-3 text-gray-800 mt-8">
              Sampah Logam
            </h2>
            <p>
              Limbah logam mencakup berbagai benda yang terbuat dari unsur-unsur logam seperti aluminium, besi, baja, tembaga, dan seng. Logam dikenal dengan karakteristiknya yang keras, kuat, serta konduktor panas dan listrik yang baik, membuatnya sangat vital dalam berbagai industri, mulai dari konstruksi, otomotif, hingga kemasan. Meskipun memiliki sifat-sifat unggul, logam yang dibuang sembarangan berpotensi mencemari tanah dan air karena proses korosi yang melepaskan partikel dan zat berbahaya ke lingkungan. Namun, logam juga memiliki keunggulan luar biasa: sebagian besar jenis logam dapat didaur ulang berulang kali tanpa kehilangan kualitasnya. Ini menjadikannya material yang sangat berharga dalam konteks ekonomi sirkular. Proses daur ulang logam secara signifikan menghemat energi, mengurangi emisi gas rumah kaca, dan meminimalkan kebutuhan penambangan bijih baru, sehingga sangat penting untuk keberlanjutan lingkungan.
            </p>
            <br />
            <p>
              Beberapa jenis sampah logam yang umum kita temui antara lain:
            </p>
            <br />
            <ul className="list-disc list-inside pl-3 space-y-2">
              <li>
                <Link href="/guide/sampah-anorganik/sampah-logam/aluminium" className="text-blue-600 hover:underline">
                  <strong>Aluminium</strong>
                </Link>
              </li>
              <li>
                <Link href="/guide/sampah-anorganik/sampah-logam/besi-baja" className="text-blue-600 hover:underline">
                  <strong>Besi dan Baja</strong>
                </Link>
              </li>
              <li>
                <Link href="/guide/sampah-anorganik/sampah-logam/tembaga" className="text-blue-600 hover:underline">
                  <strong>Tembaga</strong>
                </Link>
              </li>
              <li>
                <Link href="/guide/sampah-anorganik/sampah-logam/seng-timah" className="text-blue-600 hover:underline">
                  <strong>Seng dan Timah (pada kaleng)</strong>
                </Link>
              </li>
            </ul>
            <br />

            {/* Bagian Sampah Kaca */}
            <h2 id="sampah-kaca" className="text-xl font-bold mb-3 text-gray-800 mt-8">
              Sampah Kaca
            </h2>
            <p>
              Kaca terbuat dari silika (pasir) dan memiliki sifat yang keras serta sangat sulit terurai. Pecahan kaca dapat membahayakan, namun keunggulannya, kaca dapat didaur ulang berulang kali tanpa kehilangan kualitasnya.
            </p>
            <p>
              Contoh: Botol kaca (minuman, saus), pecahan beling, gelas, dan kaca jendela.
            </p>
            <p>
              Waktu Urai: Jutaan tahun.
            </p>
            <br />

            {/* Bagian Sampah Kertas */}
            <h2 id="sampah-kertas" className="text-xl font-bold mb-3 text-gray-800 mt-8">
              Sampah Kertas
            </h2>
            <p>
              Meskipun kertas berasal dari serat alami, proses pengolahannya dan kebutuhan energi besar dalam produksi membuatnya sering dikategorikan anorganik dalam konteks daur ulang. Daur ulang kertas sangat penting untuk mengurangi penebangan pohon dan penggunaan sumber daya.
            </p>
            <p>
              Contoh: Koran, majalah, buku, kardus, dan kertas HVS.
            </p>
            <p>
              Waktu Urai: 2-6 minggu (relatif lebih cepat, namun volume besar memerlukan daur ulang).
            </p>
            <br />

            {/* Bagian Sampah Kain/Tekstil */}
            <h2 id="sampah-kain-tekstil" className="text-xl font-bold mb-3 text-gray-800 mt-8">
              Sampah Kain/Tekstil
            </h2>
            <p>
              Limbah tekstil, terutama yang terbuat dari serat sintetis (seperti poliester, nilon), membutuhkan waktu sangat lama untuk terurai di alam. Campurannya dengan serat sintetis membuat penanganannya kompleks.
            </p>
            <p>
              Contoh: Pakaian bekas, kain perca, selimut, handuk rusak, dan karpet bekas.
            </p>
            <br />

            {/* Bagian Sampah Karet */}
            <h2 id="sampah-karet" className="text-xl font-bold mb-3 text-gray-800 mt-8">
              Sampah Karet
            </h2>
            <p>
              Limbah yang terbuat dari karet atau bahan karet sintetis juga termasuk anorganik dan sulit terurai.
            </p>
            <p>
              Contoh: Ban bekas, sol sepatu karet.
            </p>
            <p>
              Waktu Urai Sol Sepatu Karet: 50-80 tahun.
            </p>
            <br />

            <div className="flex justify-between mt-14">
              <Link
                href="/guide/sampah-anorganik/pengenalan"
                className="py-3 px-5 bg-green-200 rounded items-center flex gap-2 hover:bg-green-300 active:bg-green-300"
              >
                <Icon icon="icon-park-solid:back" />
                <p>Kembali</p>
              </Link>
              <Link
                href="/guide/sampah-anorganik/sampah-plastik/pet" // Mengarahkan ke halaman detail PET sebagai langkah pertama untuk jenis plastik
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
              <Link href="#">Jenis-Jenis Sampah Anorganik</Link>
            </li>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><Link href="#sampah-plastik" className="hover:underline">Sampah Plastik</Link></li>
              <ul className="list-circle list-inside ml-4 space-y-2">
                <li><Link href="/guide/sampah-anorganik/sampah-plastik/pet">PET (Kode 1)</Link></li>
                <li><Link href="/guide/sampah-anorganik/sampah-plastik/hdpe">HDPE (Kode 2)</Link></li>
                <li><Link href="/guide/sampah-anorganik/sampah-plastik/pvc">PVC (Kode 3)</Link></li>
                <li><Link href="/guide/sampah-anorganik/sampah-plastik/ldpe">LDPE (Kode 4)</Link></li>
                <li><Link href="/guide/sampah-anorganik/sampah-plastik/pp">PP (Kode 5)</Link></li>
                <li><Link href="/guide/sampah-anorganik/sampah-plastik/ps">PS (Kode 6)</Link></li>
                <li><Link href="/guide/sampah-anorganik/sampah-plastik/other">OTHER (Kode 7)</Link></li>
              </ul>
              <li><Link href="#sampah-logam" className="hover:underline">Sampah Logam</Link></li>
              <ul className="list-circle list-inside ml-4 space-y-2">
                <li><Link href="/guide/sampah-anorganik/sampah-logam/aluminium">Aluminium</Link></li>
                <li><Link href="/guide/sampah-anorganik/sampah-logam/besi-baja">Besi dan Baja</Link></li>
                <li><Link href="/guide/sampah-anorganik/sampah-logam/tembaga">Tembaga</Link></li>
                <li><Link href="/guide/sampah-anorganik/sampah-logam/seng-timah">Seng dan Timah</Link></li>
              </ul>
              <li><Link href="#sampah-kaca" className="hover:underline">Sampah Kaca</Link></li>
              <li><Link href="#sampah-kertas" className="hover:underline">Sampah Kertas</Link></li>
              <li><Link href="#sampah-kain-tekstil" className="hover:underline">Sampah Kain/Tekstil</Link></li>
              <li><Link href="#sampah-karet" className="hover:underline">Sampah Karet</Link></li>
            </ul>
          </ul>
        </Rightbar>
      </div>
    </>
  );
}