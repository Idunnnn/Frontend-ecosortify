const organicWasteContent = <>🍃 <b>Sampah Organik</b><br />
    <br />

    <p>Berdasarkan klasifikasi, ini termasuk dalam kategori <strong>sampah organik</strong>, yaitu sampah yang berasal dari bahan alami dan mudah terurai secara alami.</p>
    <br />

    <b>🔎 Penjelasan Sampah</b>
    <p>Sampah organik adalah jenis sampah yang berasal dari bahan-bahan alami dan bisa terurai secara hayati. Contohnya seperti sisa makanan, daun kering, kulit buah, atau ampas sayuran. Karena mudah membusuk, sampah ini sering menjadi penyebab bau tak sedap jika tidak segera ditangani. Namun, di balik itu semua, sampah organik justru punya potensi besar untuk dimanfaatkan kembali, terutama sebagai kompos atau pupuk alami.</p>
    <br />

    <b>✅ Rekomendasi Penanganan</b>
    <p>Alih-alih dibuang begitu saja, sampah organik bisa dijadikan kompos melalui teknik sederhana seperti composting di rumah. Bagi yang tinggal di perkotaan, menggunakan komposter tertutup atau bokashi bisa jadi solusi praktis. Di tingkat komunitas, pengolahan terpusat juga bisa mengubah sampah organik menjadi pupuk untuk pertanian atau taman kota.</p>
    <br />

    <b>♻️ Metode Pemilahan</b>
    <p>Pisahkan sisa makanan dan bahan organik lain dari jenis sampah lainnya. Gunakan wadah khusus berpenutup untuk menghindari serangga dan bau. Pastikan tidak tercampur dengan plastik, logam, atau bahan anorganik lainnya agar hasil kompos tetap berkualitas.</p>
</>

const anorganicWasteContent = <>🧴 <b>Sampah Anorganik</b><br />
    <br />

    <p>Berdasarkan klasifikasi, ini termasuk dalam kategori <strong>sampah anorganik</strong>, yaitu sampah buatan manusia yang sulit terurai secara alami.</p>
    <br />

    <b>🔎 Penjelasan Sampah</b>
    <p>Sampah anorganik adalah sampah yang berasal dari bahan-bahan buatan atau non-alami seperti plastik, kaleng, kaca, dan logam. Jenis ini sulit terurai dan jika dibuang sembarangan dapat mencemari tanah, sungai, hingga laut.</p>
    <br />

    <b>✅ Rekomendasi Penanganan</b>
    <p>Langkah bijaknya adalah memanfaatkan kembali (reuse) dan mendaur ulang (recycle). Botol plastik, kardus, atau kaleng bekas bisa dimanfaatkan untuk kerajinan, pot tanaman, atau dikirim ke bank sampah. Mengurangi penggunaan sekali pakai dan memilih produk daur ulang juga sangat membantu.</p>
    <br />

    <b>♻️ Metode Pemilahan</b>
    <p>Pisahkan sampah anorganik ke dalam kategori seperti plastik, logam, dan kaca. Bersihkan terlebih dahulu sebelum disimpan agar tidak menjadi sarang bakteri. Gunakan wadah berbeda agar proses daur ulang lebih mudah dilakukan oleh petugas atau pengelola bank sampah.</p>
</>

const residualB3WasteContent = <>⚠️ <b>Sampah Residu dan B3</b><br />
    <br />

    <p>Sampah pada gambar termasuk <strong>sampah residu dan B3 (Bahan Berbahaya dan Beracun)</strong> yang tidak bisa didaur ulang dan berpotensi mencemari lingkungan.</p>
    <br />

    <b>🔎 Penjelasan Sampah</b>
    <p>Sampah residu adalah sisa sampah yang tidak bisa didaur ulang, seperti popok dan pembalut, sementara B3 mencakup zat berbahaya seperti cat, oli, atau pestisida. Sampah jenis ini sangat merusak jika dibuang sembarangan karena bisa mencemari air tanah dan berbahaya bagi makhluk hidup.</p>
    <br />

    <b>✅ Rekomendasi Penanganan</b>
    <p>Minimalkan penggunaan produk yang menghasilkan sampah residu. Sampah jenis ini sebaiknya dibungkus rapat sebelum dibuang. Untuk limbah B3, serahkan ke tempat pengelolaan resmi atau gunakan layanan pengumpulan limbah berbahaya dari pemerintah atau produsen produk tersebut.</p>
    <br />

    <b>♻️ Metode Pemilahan</b>
    <p>Identifikasi sampah yang termasuk residu dan B3. Simpan dalam wadah tertutup, pisahkan dari jenis sampah lain, dan beri label jika memungkinkan. Jangan membuang limbah B3 ke saluran air atau tanah secara langsung karena bisa mencemari lingkungan secara serius.</p>
</>

const eletronicWasteContent = <>📱 <b>Sampah Elektronik</b><br />
    <br />

    <p>Sampah pada gambar tergolong dalam <strong>sampah elektronik</strong> yang bisa mengandung bahan kimia berbahaya jika tidak ditangani dengan benar.</p>
    <br />

    <b>🔎 Penjelasan Sampah</b>
    <p>Sampah elektronik atau e-waste mencakup semua barang elektronik yang sudah tidak terpakai, seperti HP rusak, charger bekas, baterai, televisi, dan komputer. Sampah ini mengandung logam berat dan bahan kimia beracun yang dapat mencemari lingkungan dan berbahaya bagi kesehatan.</p>
    <br />

    <b>✅ Rekomendasi Penanganan</b>
    <p>Sampah elektronik sebaiknya dikirim ke fasilitas pengumpulan e-waste khusus atau dimanfaatkan kembali lewat program tukar-tambah produsen. Jika masih bisa diperbaiki, mendonasikan perangkat tersebut juga merupakan pilihan bijak.</p>
    <br />

    <b>♻️ Metode Pemilahan</b>
    <p>Kumpulkan perangkat elektronik bekas dalam wadah khusus. Jika memungkinkan, pisahkan bagian baterai atau komponen berbahaya. Jangan mencampurkannya dengan sampah basah atau organik agar perangkat yang masih bisa dimanfaatkan tidak rusak.</p>
</>

const nonWasteContent = <><p>Gambar yang dimasukan berada <b>di luar kategori sampah</b>.</p></>

export const getScanResultContent = (content) => {
    switch (content) {
        case 'Organik':
            return organicWasteContent;
        case 'Anorganik':
            return anorganicWasteContent;
        case 'Residu-B3':
            return residualB3WasteContent;
        case 'Elektronik':
            return eletronicWasteContent;
        case 'Non-Sampah':
            return nonWasteContent;
        default:
            break;
    }
}