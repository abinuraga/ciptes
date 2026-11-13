import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import 'aos/dist/aos';
import bgImage from "./img/bg-8.webp"
import bgImage2 from "./img/bg-7.jpg"
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGavel, FaArrowUp, FaArrowLeft, FaArrowRight, FaRegClock,} from "react-icons/fa";
import {LuUsersRound, LuChartColumnIncreasing, LuClock } from "react-icons/lu";
import Navbar from "./component/Navbar";
import Logocaraousel from "./component/caraousel";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import icon1 from "./img/icon_gedung.png";
import icon2 from "./img/pbg_icon.png";
import icon3 from "./img/sertif_icon.png";
import icon4 from "./img/arsi_icon.png";

import "react-photo-view/dist/react-photo-view.css"

function Homepage() {

  // Mengatur visibilitas tombol scroll
  const [showScroll, setShowScroll] = useState(false);
  
  //efek animasi AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

     // Otomatis scroll ke posisi paling atas
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  //Mendeteksi posisi scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Fungsi kembali keatas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    return (
        <>
        <Navbar />

      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-screen w-full flex-col items-center px-8  justify-center overflow-hidden bg-White-100 pt-24"
      >
        <img src={bgImage2} alt="background-effect" className="absolute inset-0 z-0 h-full w-full object-cover"/>

        {/* overlay */}
        <div className="absolute inset-0 z-0 bg-blue-950/65"></div>
        
        <h1 className="relative z-10 max-w-auto leading-11 text-center text-5xl font-bold text-green-300 sm:text-lg md:text-4xl">
          Konsultan Perencanaan Bangunan Industri : Desain Terintegrasi & Pengurusan Izin Tuntas dalam Satu Atap.
        </h1> 
        
        <p className="relative z-10 mt-10 mr-3 ml-3 max-w-3xl leading-8 text-center text-lg sm:text-base font-semibold text-green-400">Kami memadukan keahlian Arsitektur, Struktur, MEP, dan Pengurus
          permit untuk membangun fasilitas industri yang efisien, aman, dan patuh regulasi.
        </p>
        
        <HashLink smooth to="/#contact" className="relative z-10 mt-8 inline-flex items-center justify-center rounded-full 
        bg-orange-600 px-8 py-3 text-[20px] font-medium tracking-wide 
        text-white transition-all duration-500 hover:-translate-y-1 
        hover:bg-sky-500 hover:shadow-lg">Konsultasi Sekarang</HashLink>
        
      </section>
      
      <Logocaraousel />

      {/* About */}
      <section
        id="about"
        className="relative w-full overflow-hidden bg-white bg-center bg-local py-12 sm:py-16 md:py-24 md:bg-fixed"
        >

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 rounded-lg bg-white px-4 py-10 pt-12 sm:px-6 sm:py-12 md:grid-cols-[45%_50%] md:gap-12 md:px-8 md:pt-24" data-aos="fade-down" data-aos-delay="200">

          {/*sisi kiri */}
          <div>
            <h2 className="mt-2 mb-6 text-center text-3xl font-bold leading-tight text-black sm:text-4xl md:mt-4 md:mb-8 md:text-5xl">
              TENTANG KAMI
            </h2>
            <p className="mt-4 mb-8 text-justify text-sm leading-7 text-gray-700 sm:text-base sm:leading-7 md:mb-12">
              <strong>PT.CONSULINDO INTI PRIMA</strong> adalah perusahaan konsultan perencana bangunan gedung, berdiri sejak tanggal 9 september tahun 2020 di Kota Cilegon Banten. 
            Awal mula kegiatan PT. Consulindo Inti Prima meliputi perencanaan bangunan gedung Hunian, Komersial dan Industri yang mencakup Arsitektur, Struktur, MEP dan Fire Protection System. 
            Seiring perkembangan usaha dan kegiatan saat ini PT. Consulindo Inti Prima menambah kegiatan usahanya dalam bidang Konsultan Pengkaji Teknis dalam hal pemenuhan perizinan dasar yang meliputi 
            izin Pemanfaatan Ruang (PKKPR), izin Lingkungan (AMDAL & UKL/UPL), Persetujuan Bangunan Gedung (PBG) dan Kelaikan Fungsi Bangunan (SLF).
            </p>
            
            <p className="text-justify mt-4 text-sm leading-7 text-gray-700 sm:text-base sm:leading-7 md:mb-12">Kegiatan ini melengkapi kompetensi Consulindo Inti Prima sebagai konsultan perencanaan secara Holistik (kepatuhan terhadap regulasi dan implementasi Teknis).
                Dengan  berbekal  pengalaman,  Integritas,  komitmen  dan
                kompetensi yang cukup, kami berkeyakinan akan dapat membantu menyelesaikan problematika dan kebutuhan pelaku industri terkait perencanaan dan implementasi teknis dan kepatuhan terhadap regulasi.</p>
          </div>

          {/*sisi kanan*/}
          <div className="relative space-y-6 sm:space-y-8 md:space-y-9">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-orange-400"></div>

            {/*card 1*/}
            
            <div className="relative ml-5 rounded-lg border-r-4 border-blue-600 bg-gray-200 p-4 shadow-sm sm:ml-7 sm:border-r-7" data-aos="slide-right" data-aos-delay="100">
              <div className="absolute -left-[27px] top-1 h-3.5 w-3.5 rounded-full bg-green-600 sm:-left-[35px] sm:h-4 sm:w-4"></div>

              <h3 className="mb-4 text-lg font-bold leading-snug text-black sm:text-xl md:mb-6 md:text-2xl">
                <span></span> Konsultan Perencana Bangunan Gedung
              </h3>
              <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-gray-800 sm:text-base">
                <li>Industri</li>
                <li>Hunian</li>
                <li>Komersial</li>
              </ul>
            </div>

            {/*card 2*/}
            <div className="relative ml-5 rounded-lg border-r-4 border-blue-600 bg-gray-200 p-4 shadow-sm sm:ml-7 sm:border-r-7" data-aos="slide-right" data-aos-delay="100">
              <div className="absolute -left-[27px] top-1 h-3.5 w-3.5 rounded-full bg-green-600 sm:-left-[35px] sm:h-4 sm:w-4"></div>

              <h3 className="mb-4 text-lg font-bold leading-snug text-black sm:text-xl md:mb-6 md:text-2xl">
                <span></span> Konsultan Pengkaji Teknis
              </h3>
              <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-gray-800 sm:text-base">
                <li>Pemanfaatan Ruang (PKKPR)</li>
                <li>Perizinan Lingkungan (AMDAL, UKL/UPL)</li>
                <li>Persetujuan Bangunan Gedung (PBG)</li>
                <li>Sertifikasi Laik Fungsi (SLF)</li>
              </ul>
            </div>

            {/*card 3*/}
            <div className="relative ml-5 rounded-lg border-r-4 border-blue-600 bg-gray-200 p-4 shadow-sm sm:ml-7 sm:border-r-7" data-aos="slide-right" data-aos-delay="100">
              <div className="absolute -left-[27px] top-1 h-3.5 w-3.5 rounded-full bg-green-600 sm:-left-[35px] sm:h-4 sm:w-4"></div>

              <h3 className="mb-4 text-lg font-bold leading-snug text-black sm:text-xl md:mb-6 md:text-2xl">
                <span></span> Lembaga Inspeksi Teknis (LIT)
              </h3>
              <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-gray-800 sm:text-base">
                <li>Pembangkit Listrik Tenaga Diesel (500KW)</li>
                <li>IPTL/Tegangan Menengah (20KV)</li>
                
                
              </ul>
            </div>
          </div>
        </div>
        
</section> {/* end about}

      {/* Vision */}
      <section
        id="vision"
        className="w-full bg-gray-100 px-4 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div  className="mx-auto w-full max-w-7xl text-center" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            VISI
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-sky-500 sm:w-20"></div>
          <p className="mx-auto mt-6 max-w-5xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:text-lg">Menjadi perusahaan yang terdepan, kompeten , terpercaya, dan memiliki integritas 
            yang tinggi di seluruh wilayah Indonesia dalam bidang perencanaan bangunan Gedung secara Holistik.</p>
        </div>
      </section>

      <section
        id="vision"
        className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:py-16"
      >
        <div  className="mx-auto w-full max-w-7xl text-center" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            MISI
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>
           
        </div>
        

        
          
      </section> {/*end vision*/}

      <section
      id="misi">
        <div className="mx-auto max-w-8xl px-5 bg-white">

          <div className="grid w-full grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:px-8">

            <div className="w-full rounded-xl bg-gray-200 p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6" 
            data-aos="fade-down" data-aos-delay="100">
              <LuUsersRound className="mt-2 mx-auto max-w-6xl text-2xl text-blue-500"/>
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-center text-sm leading-6 text-gray-700 sm:text-base"> Mempersiapkan sumber daya manusia yang terdidik, terlatih dan memiliki attitude yang baik.</p>
            
            </div>

            <div className="w-full rounded-xl bg-gray-200 p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6" 
            data-aos="fade-down" data-aos-delay="200">
              <LuChartColumnIncreasing className="mx-auto mt-2 text-3xl text-blue-500"/>
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-center text-sm leading-6 text-gray-700 sm:text-base"> Menjalankan system management mutu dengan konsisten.</p>
            
          </div>

          <div className="w-full rounded-xl bg-gray-200 p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6" 
          data-aos="fade-down" data-aos-delay="250">
              <FaGavel className="mx-auto mt-2 text-3xl text-blue-500"/>
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-center text-sm leading-6 text-gray-700 sm:text-base"> Kepatuhan terhadap regulasi pemerintah dan profesionalisme.</p>
            
          </div>

          <div className="w-full rounded-xl bg-gray-200 p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6" 
          data-aos="fade-down" data-aos-delay="300">
              <LuClock className="mx-auto mt-2 text-3xl text-blue-500"/>
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-center text-sm leading-6 text-gray-700 sm:text-base"> Memberikan pelayanan prima dengan kepuasan di atas expektasi pelanggan dan tepat waktu.</p>
            
          </div>
          
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan"
      className="w-full bg[#05bfd2] px-4 py-16 sm:px-6 sm:py-20 md:py-24">

        <div className="mx-auto w-full max-w-7xl">

          {/* Heading */}
          <div className="mb-14 text-center" data-aos="fade-down" data-aos-delay="100">

          <span className="inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
            LAYANAN KAMI
          </span>

          
        </div>

          {/* Service grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                image: icon1,
                title: "SERTIFIKAT LAIK FUNGSI (SLF)",
                description: "Menyediakan layanan konsultasi SLF untuk memastikan bangunan gedung memenuhi persyaratan teknis dan ketentuan kelaikan fungsi sesuai regulasi yang berlaku.",
              },

              {
                image: icon2,
                title: "PERSETUJUAN BANGUNAN GEDUNG (PBG)",
                description: "Menyediakan layanan konsultasi PBG bagi pemilik bangunan dalam memenuhi persyaratan pembangunan, perubahan, perluasan, maupun pengurangan bangunan gedung sesuai standar teknis dan regulasi yang berlaku.",
              },

              {
                image: icon3,
                title: "PERIZINAN LINGKUNGAN",
                description: "Menyediakan konsultasi perizinan lingkungan untuk mengidentifikasi, mengevaluasi, serta memastikan dampak kegiatan pembangunan terhadap lingkungan sekitar sesuai ketentuan dan regulasi yang berlaku.",
              },

              {
                image: icon4,
                title: "ARSITEK",
                description: "Bertanggung jawab dalam merancang dan mengembangkan konsep desain arsitektur sesuai dengan kebutuhan dan karakteristik proyek.",
              },
            ].map((service, index) => (
              <div key={index}
              className="flex h-full flex-col items-center rounded-md bg-green-700 px-5 py-6 text-center shadow-md transition
              duration-300 hover:-translate-y-2 hover:shadow-xl sm:px-4 sm:py-6" data-aos="fade-left" data-aos-delay={100 + index * 100}>

                {/* gambar layanan */}
                <div className="mb-5 flex h-[110px] w-[110px] shrink-0 items-center justify-center overflow-hidden bg-green-700">
                  <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-contain p-1"/>
                </div>

                {/* Judul */}
                <h3 className="mb-3 min-h-[48px] text-base font-bold leading-5 text-white sm:text-base">
                  {service.title}
                </h3>

                {/* Deskripsi */}
                <p className="mb-5 flex-1 text-sm leading-6 text-cyan-50">
                  {service.description}
                </p>

              </div>

            ))}
          </div>

          {/* tombol link layanan */}
          <div className="mt-9 flex justify-center sm:mt-10" data-aos="fade-up" data-aos-delay="200">

            <Link smooth to="/layanan" className=" mt-8 ml-30 mb-12 inline-flex flex flex-col items-center justify-center rounded-full 
              bg-orange-600 px-8 py-3 text-[20px] font-medium tracking-wide 
            text-white transition-all duration-500 hover:-translate-y-1 
            hover:bg-sky-500 hover:shadow-lg">Lihat Selengkapnya</Link>
        

          </div>
        </div>
      </section>

      {/*proses perizinnan*/}
      <section
      id="proses"
      className="w-full overflow-hidden bg-gray-100 px-4 py-16 sm:px-6
      sm:py-20 md:py-24">

        {/*header*/}
        <div className="mb-14 text-center" data-aos="fade-down" data-aos-delay="100">

          <span className="inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
            Proses kami
          </span>

          <h2 className="mt-5 text-2xl font-bold text-[#17b50] sm:text-3xl md:text-4xl">
            Alur Proses Konsultasi
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#24395d] sm:text-base md:text-lg">
            Langkah-langkah proses kerja konsultasi kami
          </p>
        </div>

        {/*Timeline Desktop*/}
        <div className="relative hidden lg:block">

          {/* Garis timeline */}
          <div className="absolute left-[6%] right-[6%] top-[9px] h-[2px] bg-gray-300"></div>

          {/* panah kiri */}
          <FaArrowLeft className="absolute -left-1 -top-[3px] text-xl text-gray-700"/>
          {/* panah kanan */}
          <FaArrowRight className="absolute -left-1 -top-[3px] text-xl text-gray-700"/>
          {/* timeline konten */}
          <div className="relative grid grid-cols-6 gap-4">
            {[
              {
                title: "Konsultasi Awal",
                description: "Hubungi kami untuk konsultasi dan analisa kebutuhan perizinan",
              },

              {
                title: "Survey & Analisa",
                description: "Tim kami melakukan survey lokasi dan menganalisa dokumen yang dibutuhkan",
              },

              {
                title: "Persiapan Dokumen",
                description: "Mempersiapkan dan melengkapi semua persyaratan dokumen perizinan",
              },

              {
                title: "Verifikasi & Review",
                description: "Tim teknis akan memverifikasi kelengkapan dokumen",
              },

              {
                title: "Pengajuan ke Instansi",
                description: "Dokumen diajukan ke instansi terkait proses yang transparan",
              },

              {
                title: "Penerbitan Izin",
                description: "Sertifikat terbit dan diserahkan beserta dokumentasi lengkap",
              },
            ].map((step, index) => (
              <div
              key={index}
              className="flex flex-col items-center text-center" data-aos="faded down" data-aos-delay={100 + index * 100}>

                {/* titik timeline */}
                <div className="z-10 h-[18px] w-[18px] shrink-0 rounded-full bg-black"></div>

                {/* Judul */}
                <h3 className="mt-3 min-h-[52px] text-base font-bold leading-6 text-[#172b50] xl:text-xl">
                  {step.title}
                </h3>

                {/* deskripsi */}
                <p className="mt-3 text-sm leading-[23px] text-[#24395d]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* timeline mobile dan tablet */}
        <div className="relative lg:hidden">

          {/* garis vertikal */}
          <div className="absolute bottom-5 left-[9px] top-2 w-[2px] bg-gray-300"></div>

          <div className="space-y-9">
            {[
              {
                title: "Konsultasi Awal",
                description: "Hubungi kami untuk konsultasi dan analisa kebutuhan perizinan",
              },

              {
                title: "Survey & Analisa",
                description: "Tim kami melakukan survey lokasi dan menganalisa dokumen yang dibutuhkan",
              },

              {
                title: "Persiapan Dokumen",
                description: "Mempersiapkan dan melengkapi semua persyaratan dokumen perizinan",
              },

              {
                title: "Verifikasi & Review",
                description: "Tim teknis akan memverifikasi kelengkapan dokumen",
              },

              {
                title: "Pengajuan ke Instansi",
                description: "Dokumen diajukan ke instansi terkait proses yang transparan",
              },

              {
                title: "Penerbitan Izin",
                description: "Sertifikat terbit dan diserahkan beserta dokumentasi lengkap",
              },
            ].map ((step, index) => (
              <div
              key={index}
              className="relative flex gap-6" data-aos="fade-down" data-aos-delay={100 + index * 100}>
                {/* titik */}
                <div className="relative z-10 mt-1 h-5 w-5 shrink-0 rounded-full border-4 border-white bg-black shadow-sm"></div>

                {/* konten */}
                <div className="pb-1">
                  <h3 className="text-lg font-bold text-[#172b50]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#24395d]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      
      

      {/* Contact */}
      <section
        id="contact"
        className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        {/*header*/}
        <div className="mb-14 text-center" data-aos="fade-down" data-aos-delay="100">

          <span className="inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
            KONTAK
          </span>

          <h2 className="mt-5 text-2xl font-bold text-[#17b50] sm:text-3xl md:text-4xl">
            Hubungi kami 
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#24395d] sm:text-base md:text-lg">
            Melalui data informasi dibawah ini
          </p>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-cover bg-center bg-local py-16 sm:py-20 md:bg-fixed md:py-24"
        style={{backgroundImage: `url(${bgImage})`,}}>

          {/*blue verlay*/}
          <div className="absolute inset-0 bg-blue-950/65"></div>

          {/* content */}
          <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-8">
            <div className="w-full max-w-xl space-y-8 sm:space-y-10 md:space-y-12">

              {/* Alamat */}
              <div className="flex items-start gap-5" data-aos="fade-up" data-aos-delay="200">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-xl text-white sm:mt-2 sm:text-2xl"/>

                <div className="min-w-0">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">Alamat: </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-200 sm:mt-4 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                    Cilegon Business Square Block B.19,
                  Kedaleman, Cibeber,
                  Kota Cilegon,
                  Banten 42422
                  </p>
                </div>
              </div>

              {/* No telp */}
              <div className="flex items-start gap-3 sm:gap-5" data-aos="fade-up" data-aos-delay="300">
                <FaPhoneAlt className="mt-1 shrink-0 text-xl text-white sm:mt-2 sm:text-2xl"/>

                <div className="min-w-0">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">Hubungi No:</h3>
                  <p className="mt-3 text-sm text-gray-200 sm:mt-4 sm:text-base md:text-lg">0254-7877039</p>

                </div>
              </div>

              {/* Jam kerja */}
              <div className="flex items-start gap-3 sm:gap-5" data-aos="fade-up" data-aos-delay="300">
                <FaRegClock className="mt-1 shrink-0 text-xl text-white sm:mt-2 sm:text-2xl"/>

                <div className="min-w-0">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">Jam Kerja:</h3>
                  <p className="mt-3 text-sm text-gray-200 sm:mt-4 sm:text-base md:text-lg">Senin - Jumat : 8.00 - 17.00</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-5" data-aos="fade-up" data-aos-delay="400">
                <FaEnvelope className="mt-1 shrink-0 text-xl text-white sm:mt-2 sm:text-2xl"/>

                <div className="min-w-0">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                    Email Kami:
                  </h3>
                  <p className="mt-3 break-words text-sm text-gray-200 sm:mt-4 sm:text-base md:text-lg">intiprimapconsulindo@gmail.com</p>
                </div>
              </div>
              
              <div className="w-full max-w-4xl overflow-hidden rounded-2xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.6021226789162!2d106.08081824628931!3d-6.036828820724524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418dcc5569a9d9%3A0xcf1198ac5d3f37b8!2sPT.%20CONSULINDO%20INTI%20PRIMA!5e0!3m2!1sid!2sid!4v1788245032187!5m2!1sid!2sid"
              className="h-[300px] w-full border-0 sm:h-[350px] md:h-[400px]"
              allowFullscreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="PT. CONSULINDO INTI PRIMA"/>
              </div>

            </div>
            
          </div>
        </section> {/* End Contact */}

      

      

        {/*footer section*/}
        
        <footer id="footer" className="w-full bg-slate-900 py-12 text-white sm:py-14 md:py-16">

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">

            <div className="grid w-full gap-8 md:gap-10 lg:grid-cols-3">

              <div>
                <h2 className="text-xl font-bold leading-snug sm:text-2xl">PT.CONSULINDO INTI PRIMA

                </h2>
                
                <div className="mt-5 space-y-4 text-sm text-gray-300 sm:mt-6 sm:text-base">
                  <div className="flex items-start gap-3 sm:gap-5">
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-xs text-white sm:mt-2"/>
                   <p className="leading-6 sm:leading-7"><strong className="text-white">Alamat :</strong> {""}Cilegon Business Square Block B.19,
                      Kedaleman,
                      Cibeber,
                      Kota Cilegon</p>
                  
                    
                  </div>

                  <div className="flex items-start gap-3 sm:gap-5">
                    <FaPhoneAlt className="mt-1 shrink-0 text-xs text-white sm:mt-2"/>
                    <p className="leading-6 sm:leading-7"><strong className="text-white">Hubungi :</strong>{" "}0254-7877039</p>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-5">
                    <FaEnvelope className="mt-1 shrink-0 text-xs text-white sm:mt-2"/>
                    <p className="leading-6 sm:leading-7"><strong className="text-white">Email :</strong>{""} intiprimaconsulindo@gmail.com</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Button Back to top */}
        {showScroll && (
          <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center 
          rounded-full bg-orange-600 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
          aria-label="Kembali ke atas">
            <FaArrowUp className="text-xl" />
          </button>
        )}

        </>
    )
}
export default Homepage;