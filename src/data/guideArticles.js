// data/guideArticles.js

export const guideData = [
  {
    title: 'Introduction',
    articles: [
      {
        id: 'overview',
        title: 'Overview',
        content: [
          {
            type: 'image',
            src: '/images/assets/pexels-stijn-dijkstra-1306815-2583836.jpg',
            alt: 'Tumpukan sampah di hutan',
            blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
            caption: '', // Kosongkan caption jika tidak ada di mockup
          },
          {
            type: 'blockquote',
            text: '"Merawat bumi itu bukan tugas satu orang, tapi tanggung jawab bersama"',
          },
          {
            type: 'paragraph',
            text: 'Dunia modern makin canggih — dari smartphone canggih, belanja online, sampai makanan cepat saji yang praktis. Tapi tanpa sadar, semua itu menghasilkan sampah dalam jumlah yang makin gila-gilaan. Setiap hari, miliaran orang buang sampah, tapi tidak semua tahu ke mana perginya, atau gimana dampaknya ke lingkungan.',
          },
          {
            type: 'paragraph',
            text: 'Sampah itu bukan cuma soal "bau" atau "jorok". Sampah adalah masalah global yang udah mengganggu ekosistem bumi — mulai dari daratan, sungai, sampai lautan dalam. Kita ngomongin tentang plastik yang butuh ratusan tahun buat terurai, limbah beracun dari industri, sampai sisa makanan yang bikin emisi gas rumah kaca.',
          },
          {
            type: 'paragraph',
            text: 'Yang lebih bikin miris, tidak semua orang paham cara buang dan pilah sampah dengan benar. Banyak yang masih campur aduk, tidak ngerti bedanya organik, anorganik, dan B3 (Bahan Berbahaya dan Beracun). Akibatnya? Tempat pembuangan akhir jadi penuh, laut tercemar, dan banyak hewan mati karena makan sampah manusia.',
          },
          {
            type: 'paragraph',
            text: 'Lewat Ecosortify, kamu tidak cuma dikasih info, tapi juga diajak buat melek lingkungan dengan cara yang asyik dan simpel. Mulai dari kenalan dengan jenis-jenis sampah, belajar cara memilah, sampai tahu fakta-fakta seru yang bisa bikin kamu bilang. "Wah, aku baru tahu!"',
          },
          {
            type: 'list',
            title: 'Tujuan dari halaman ini:',
            items: [
              'Ngebuka mata soal seberapa besar masalah sampah',
              'Kenalin kamu sama jenis-jenis sampah dan bahayanya',
              'Bantu kamu buat mulai kebiasaan baik dari hal kecil',
              'Nunjukin kalau semua orang bisa punya peran — termasuk kamu',
            ],
          },
        ],
        nextLink: '/guide#apa-itu-sampah',
        nextText: 'Materi Selanjutnya: Apa itu Sampah?',
        prevLink: null, // Tidak ada link sebelumnya untuk artikel pertama
      },
      {
        id: 'apa-itu-sampah',
        title: 'Apa itu sampah?',
        content: [
          {
            type: 'paragraph',
            text: 'Pernah kepikiran ke mana perginya tumpukan snack yang kamu buang? Atau bekas botol minum, bungkus sabun, sampai sisa makanan kemarin? Semua itu cuma berakhir di satu istilah: sampah. Tapi sebenarnya, apa sih definisi dari sampah itu?',
          },
          {
            type: 'image',
            src: '/images/assets/pexels-mali-802221.jpg',
            alt: 'Jalanan penuh sampah',
            blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
            caption: '',
          },
          {
            type: 'paragraph',
            text: 'Secara umum, sampah itu adalah sisa dari kegiatan manusia atau proses alam yang sudah tidak terpakai lagi oleh manusia dan dibuang karena dianggap tidak berguna. Tapi di balik "cuma sisa", sampah menyimpan potensi bahaya dan juga peluang lho! Semua tergantung bagaimana kita mengelola sampah dengan benar.',
          },
          {
            type: 'subheading',
            id: 'sampah-bukan-cuma-soal-kotor',
            text: 'Sampah Bukan Cuma Soal “Kotor”',
          },
          {
            type: 'paragraph',
            text: 'Kebanyakan orang menganggap sampah itu cuma barang kotor dan bau yang harus dibuang jauh-jauh. Padahal, bahaya sampah itu lebih dari sekadar bau lho! Sampah bisa mencemari tanah dan air, menyebabkan banjir, jadi sarang penyakit, sampai menghasilkan gas rumah kaca yang bikin pemanasan global makin parah.',
          },
          {
            type: 'paragraph',
            text: 'Beberapa jenis sampah juga masih punya nilai guna, lho! Misalnya, kertas bekas bisa didaur ulang jadi kertas baru, plastik bisa jadi bahan baku kerajinan, bahkan sisa makanan bisa jadi kompos. Jadi, yuk mulai peduli dan pahami sampah lebih dalam, karena kepedulianmu membantu bumi jadi lebih sehat!',
          },
          {
            type: 'subheading',
            id: 'definisi-dari-para-ahli',
            text: 'Definisi dari Para Ahli',
          },
          {
            type: 'paragraph',
            text: 'Menurut Kementerian Lingkungan Hidup dan Kehutanan (KLHK), sampah adalah:',
          },
          {
            type: 'blockquote',
            text: '"Sisa kegiatan sehari-hari manusia atau proses alam yang berbentuk padat."',
          },
          {
            type: 'paragraph',
            text: 'Menurut Kementerian Lingkungan Hidup dan Kehutanan (KLHK), sampah adalah:',
          },
          {
            type: 'blockquote',
            text: '"Sampah adalah sisa kegiatan sehari-hari manusia atau proses alam yang berbentuk padat dan tidak dikehendaki karena sudah tidak digunakan lagi."',
          },
          {
            type: 'paragraph',
            text: 'Ooh, jadi, ya, sampah bukan cuma hasil dari rumah tangga, tapi bisa juga berasal dari industri, pertanian, atau bahkan sisa-sisa alam. Intinya, apa pun yang sudah tidak terpakai dan dibuang. Ini definisi sampah dari KLHK, ya!',
          },
          {
            type: 'subheading',
            id: 'jenis-jenis-sampah',
            text: 'Jenis-Jenis Sampah',
          },
          {
            type: 'paragraph',
            text: 'Ngomongin soal sampah, ternyata Indonesia udah punya aturan hukumnya sendiri, lho! Di Undang-Undang Nomor 18 Tahun 2008 tentang Pengelolaan Sampah, sampah itu dibagi jadi beberapa jenis. Yuk, kita kenalan satu-satu!',
          },
          {
            type: 'subheading',
            id: 'sampah-rumah-tangga',
            text: '1. Sampah Rumah Tangga',
          },
          {
            type: 'paragraph',
            text: 'Ini sampah yang paling sering kita temui sehari-hari, karena asalnya dari aktivitas di rumah. Mulai dari sisa makanan, bungkus plastik, botol bekas, sampai daun-daun kering di halaman rumah. Pokoknya segala sampah hasil dari kegiatan hidup kita di rumah. Contoh: sisa makanan, kemasan, plastik, botol, kertas, kain, kayu.',
          },
          {
            type: 'image',
            src: '/images/assets/sampah-organik.jpg',
            alt: 'Sampah Organik',
            blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
            caption: 'Sampah Organik',
          },
          {
            type: 'subheading',
            id: 'sampah-sejenis-sampah-rumah-tangga',
            text: '2. Sampah Sejenis Sampah Rumah Tangga',
          },
          {
            type: 'paragraph',
            text: 'Kalau sampah ini mirip banget sama sampah rumah tangga, tapi asalnya bukan dari rumah. Biasanya datang dari kantor, warung, sekolah, mal, taman, dan tempat-tempat umum lainnya. Contoh: sisa makanan di restoran, bungkus jajanan di sekolah, bungkus rokok di taman, kertas bekas di kantor atau tempat usaha.',
          },
          {
            type: 'subheading',
            id: 'sampah-spesifik',
            text: '3. Sampah Spesifik',
          },
          {
            type: 'paragraph',
            text: 'Nah, yang satu ini perlu perhatian khusus karena sifatnya berbahaya, jumlahnya banyak, atau perlu penanganan khusus. Sampah spesifik ini biasanya berasal dari industri, rumah sakit, atau jenis kegiatan tertentu. Mereka punya potensi bahaya kalau tidak diolah dengan benar. Contoh: limbah bahan kimia (cat, oli, baterai), limbah medis (masker bekas, jarum suntik), limbah elektronik (HP rusak, TV bekas).',
          },
          {
            type: 'image',
            src: '/images/assets/sampah-spesifik.jpg',
            alt: 'Sampah Spesifik',
            blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUxRUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
            caption: 'Sampah Spesifik',
          },
          {
            type: 'paragraph',
            text: 'Nah, tugas kita sebagai warga negara dan juga sebagai manusia adalah menjaga alam ini tetap lestari dan bersih. Dengan pemahaman yang lebih dalam tentang jenis-jenis sampah ini, diharapkan kita dapat lebih bijak dalam mengelola sampah dan berkontribusi pada lingkungan yang lebih sehat.',
          },
        ],
        prevLink: '/guide#overview',
        prevText: 'Materi Sebelumnya: Overview',
        nextLink: '/guide#apa-jenis-sampah-itu', // Tambahkan link ke artikel selanjutnya
        nextText: 'Materi Selanjutnya: Apa Jenis Sampah Itu?',
      },
      {
        id: 'apa-jenis-sampah-itu',
        title: 'Apa jenis sampah itu?',
        content: [
          {
            type: 'paragraph',
            text: 'Ini adalah artikel placeholder untuk "Apa jenis sampah itu?".',
          },
          // ... konten artikel lainnya
        ],
        prevLink: '/guide#apa-itu-sampah',
        prevText: 'Materi Sebelumnya: Apa itu Sampah?',
        nextLink: '/guide#the-great-pacific-garbage-patch',
        nextText: 'Materi Selanjutnya: The Great Pacific Garbage Patch',
      },
      {
        id: 'the-great-pacific-garbage-patch',
        title: 'The Great Pacific Garbage Patch',
        content: [
          {
            type: 'paragraph',
            text: 'Ini adalah artikel placeholder untuk "The Great Pacific Garbage Patch".',
          },
          // ... konten artikel lainnya
        ],
        prevLink: '/guide#apa-jenis-sampah-itu',
        prevText: 'Materi Sebelumnya: Apa jenis sampah itu?',
        nextLink: '/guide#organic-waste', // Link ke Main content
        nextText: 'Materi Selanjutnya: Organic Waste',
      },
    ],
  },
  {
    title: 'Main content',
    articles: [
      {
        id: 'organic-waste',
        title: 'Organic waste',
        content: [
          {
            type: 'paragraph',
            text: 'Ini adalah artikel placeholder untuk "Organic waste".',
          },
          {
            type: 'subheading',
            id: 'jenis-organik',
            text: 'Jenis-jenis Organik',
          },
          {
            type: 'paragraph',
            text: 'Sisa makanan, daun, dan lain-lain.',
          },
          {
            type: 'subheading',
            id: 'cara-pengelolaan-organik',
            text: 'Cara Pengelolaan',
          },
          {
            type: 'paragraph',
            text: 'Kompos atau biopori.',
          },
        ],
        prevLink: '/guide#the-great-pacific-garbage-patch',
        prevText: 'Materi Sebelumnya: The Great Pacific Garbage Patch',
        nextLink: '/guide#anorganic-waste',
        nextText: 'Materi Selanjutnya: Anorganic waste',
      },
      {
        id: 'anorganic-waste',
        title: 'Anorganic waste',
        content: [
          {
            type: 'paragraph',
            text: 'Ini adalah artikel placeholder untuk "Anorganic waste".',
          },
          // ... konten artikel lainnya
        ],
        prevLink: '/guide#organic-waste',
        prevText: 'Materi Sebelumnya: Organic waste',
        nextLink: '/guide#b3-waste',
        nextText: 'Materi Selanjutnya: B3 waste',
      },
      {
        id: 'b3-waste',
        title: 'B3 waste',
        content: [
          {
            type: 'paragraph',
            text: 'Ini adalah artikel placeholder untuk "B3 waste".',
          },
          // ... konten artikel lainnya
        ],
        prevLink: '/guide#anorganic-waste',
        prevText: 'Materi Sebelumnya: Anorganic waste',
        nextLink: '/guide#elektronik-waste',
        nextText: 'Materi Selanjutnya: Elektronik waste',
      },
      {
        id: 'elektronik-waste',
        title: 'Elektronik waste',
        content: [
          {
            type: 'paragraph',
            text: 'Ini adalah artikel placeholder untuk "Elektronik waste".',
          },
          // ... konten artikel lainnya
        ],
        prevLink: '/guide#b3-waste',
        prevText: 'Materi Sebelumnya: B3 waste',
        nextLink: '/guide#medic-waste',
        nextText: 'Materi Selanjutnya: Medic waste',
      },
      {
        id: 'medic-waste',
        title: 'Medic waste',
        content: [
          {
            type: 'paragraph',
            text: 'Ini adalah artikel placeholder untuk "Medic waste".',
          },
          // ... konten artikel lainnya
        ],
        prevLink: '/guide#elektronik-waste',
        prevText: 'Materi Sebelumnya: Elektronik waste',
        nextLink: '/guide#apakah-semua-sampah-bisa-didaur-ulang',
        nextText: 'Materi Selanjutnya: Apakah semua sampah bisa didaur ulang?',
      },
    ],
  },
  {
    title: 'FAQ',
    articles: [
      {
        id: 'apakah-semua-sampah-bisa-didaur-ulang',
        title: 'Apakah semua sampah bisa didaur ulang?',
        content: [
          {
            type: 'paragraph',
            text: 'Ini adalah artikel placeholder untuk "Apakah semua sampah bisa didaur ulang?".',
          },
          // ... konten artikel lainnya
        ],
        prevLink: '/guide#medic-waste',
        prevText: 'Materi Sebelumnya: Medic waste',
        nextLink: '/guide#faq-anorganic-waste',
        nextText: 'Materi Selanjutnya: Anorganic waste (FAQ)',
      },
      {
        id: 'faq-anorganic-waste',
        title: 'Anorganic waste',
        content: [
          {
            type: 'paragraph',
            text: 'Ini adalah artikel placeholder FAQ untuk "Anorganic waste".',
          },
          // ... konten artikel lainnya
        ],
        prevLink: '/guide#apakah-semua-sampah-bisa-didaur-ulang',
        prevText: 'Materi Sebelumnya: Apakah semua sampah bisa didaur ulang?',
        nextLink: '/guide#faq-b3-waste',
        nextText: 'Materi Selanjutnya: B3 waste (FAQ)',
      },
      {
        id: 'faq-b3-waste',
        title: 'B3 waste',
        content: [
          {
            type: 'paragraph',
            text: 'Ini adalah artikel placeholder FAQ untuk "B3 waste".',
          },
          // ... konten artikel lainnya
        ],
        prevLink: '/guide#faq-anorganic-waste',
        prevText: 'Materi Sebelumnya: Anorganic waste (FAQ)',
        nextLink: '/guide#faq-elektronik-waste',
        nextText: 'Materi Selanjutnya: Elektronik waste (FAQ)',
      },
      {
        id: 'faq-elektronik-waste',
        title: 'Elektronik waste',
        content: [
          {
            type: 'paragraph',
            text: 'Ini adalah artikel placeholder FAQ untuk "Elektronik waste".',
          },
          // ... konten artikel lainnya
        ],
        prevLink: '/guide#faq-b3-waste',
        prevText: 'Materi Sebelumnya: B3 waste (FAQ)',
        nextLink: '/guide#faq-medic-waste',
        nextText: 'Materi Selanjutnya: Medic waste (FAQ)',
      },
      {
        id: 'faq-medic-waste',
        title: 'Medic waste',
        content: [
          {
            type: 'paragraph',
            text: 'Ini adalah artikel placeholder FAQ untuk "Medic waste".',
          },
          // ... konten artikel lainnya
        ],
        prevLink: '/guide#faq-elektronik-waste',
        prevText: 'Materi Sebelumnya: Elektronik waste (FAQ)',
        nextLink: null, // Tidak ada link selanjutnya untuk artikel terakhir
      },
    ],
  },
];