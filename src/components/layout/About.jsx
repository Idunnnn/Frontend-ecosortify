import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutProfileImage from "@/components/AboutProfileImage";

export default function About() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 300,
    });
  }, []);

  return (
    <>
      <main>
        <div className="flex flex-col items-center mt-10 xl:gap-[120px] md:gap-[80px] gap-[40px]">
          <h1 data-aos="zoom-in" className="text-[32px] font-medium md:text-[36px] w-fit  ">
            Tentang Kami
          </h1>

          <div className="xl:px-[150px] px-8 md:px-[52px] flex justify-between w-full ">
            <div data-aos="zoom-in" className="flex flex-col xl:gap-9 gap-5 lg:max-w-[550px] ">
              <div className="flex flex-col gap-3">
                <h2 className="text-[28px] font-medium md:text-[32px] ">Tujuan Website</h2>
                <p className="text-[#383838]">
                  Website ini dibuat sebagai wadah edukatif untuk meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan
                  sampah yang benar. Kami percaya bahwa perubahan besar dimulai dari langkah kecil, dengan memahami jenis-jenis
                  sampah, dampaknya bagi lingkungan, serta cara memilah dan mengelolanya, kita bisa menciptakan masa depan yang
                  lebih bersih dan berkelanjutan.
                </p>
              </div>
              <div className="flex gap-3 ">
                <div className="flex text-[#e8e8e8] rounded-full py-3 xl:px-6 px-4 items-center  gap-2 bg-red-700">
                  <Icon icon="game-icons:boxing-glove" className=" md:h-6 md:w-6 h-4 w-4 hidden md:block"></Icon>
                  <p className="body-8 text-center">We Do!</p>
                </div>

                <div className="flex text-[#e8e8e8] rounded-full py-3 xl:px-6 px-4 items-center  gap-2 bg-red-700">
                  <Icon icon="streamline:health-care-2-solid" className="md:h-6 md:w-6 h-4 w-4 hidden md:block"></Icon>
                  <p className="body-8 text-center">We Care!</p>
                </div>
                <div className="flex text-[#e8e8e8] rounded-full py-3 xl:px-6 px-4 items-center  gap-2 bg-red-700">
                  <Icon icon="tabler:run" className="md:h-6 md:w-6 h-4 w-4 hidden md:block"></Icon>
                  <p className="body-8 text-center">We Act!</p>
                </div>
              </div>
            </div>
            <Image
              data-aos="zoom-in"
              src="/images/about-hero.jpg"
              width="600"
              className="xl:w-[550px] lg:w-[500px] h-fit hidden lg:block"
              height="500"
              alt="about-hero"
            ></Image>
          </div>

          <div className="flex flex-col xl:px-[150px] md:px-[52px] px-8 w-full bg-gray-100">
            <div data-aos="fade-up" className="flex flex-col gap-3 py-15">
              <h2 className="text-[28px] font-medium md:text-[32px]">
                Meet Our Super <br />
                Creative Geek Squad
              </h2>
              <p className="text-[#383838] max-w-[800px] ">
                Kenalan dengan tim hebat di balik layar! Kami adalah sekelompok kreator muda yang penuh semangat, beragam
                keahlian, dan satu tujuan: menyampaikan edukasi tentang sampah dengan cara yang kreatif, informatif, dan
                menyenangkan.
              </p>
            </div>

            <div data-aos="fade-up" className="flex flex-col gap-20 w-full mb-30 mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2  w-full gap-4 gap-y-20">
                <AboutProfileImage
                  text={
                    "Arsitek panduan yang membangun jembatan antara teknologi dan aksi nyata dalam Ecosortify — agar setiap langkah memilah tak terasa membingungkan, tapi memberdayakan."
                  }
                  role={"Frontend Developer"}
                  alt="Syaiful"
                  name={"Syaiful"}
                  src="/images/about/syaiful.jpg"
                  data-aos="zoom-in"
                />

                <AboutProfileImage
                  text={
                    "Pemuda antusias yang penasaran dan energik, menghargai kerja keras dan usaha. Bertanggung jawab menyusun UI/UX designer dan Backend"
                  }
                  role={"Backend Developer"}
                  alt="farid-al-mudzakir"
                  name={"Farid Al Mudzakir"}
                  src="/images/about/farid-al-mudzakir.jpg"
                  data-aos="zoom-in"
                />

                <AboutProfileImage
                  text={"Yang sudah boleh pulang"}
                  role={"Frontend Developer"}
                  alt="Muhammad Farid Rany"
                  name={"Muhammad Farid Rany "}
                  src="/images/about/muhammad-farid-rany.jpg
                  "
                  data-aos="zoom-in"
                />

                <AboutProfileImage
                  text={
                    "Perancang struktur klasifikasi yang menyusun skema kategorisasi sampah secara sistematis dan menyiapkan output cerdas untuk memastikan Ecosortify merespons secara tepat dan bermakna."
                  }
                  role={"Machine Learning Developer"}
                  alt="Nabila Faradiva"
                  name={"Nabila Faradiva"}
                  src="/images/about/nabila-faradiva.JPG"
                  data-aos="zoom-in"
                />

                <AboutProfileImage
                  name={"Abu Toyib Al Aziz"}
                  text="Pemikir di balik layar yang mengembangkan sistem chatbot supaya bisa membantu pengguna berinteraksi lebih mudah dan manusiawi dengan Ecosortify."
                  role="Machine Learning Developer"
                  alt="abu-toyib-al-aziz"
                  src="/images/about/abu-toyib-al-aziz.jpg"
                  data-aos="zoom-in"
                />

                <AboutProfileImage
                  text={
                    "Pengembang inti yang merancang sistem klasifikasi gambar agar Ecosortify mampu mengenali jenis sampah secara akurat dan efisien dari sebuah foto."
                  }
                  role={"Machine Learning Developer"}
                  alt="Aldhira Calysta Athalia Siahaan"
                  className={"object-center"}
                  name={"Aldhira Calysta Athalia Siahaan"}
                  src="/images/about/aldhira-calysta-athalia-siahaan.jpg"
                  data-aos="zoom-in"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
