import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos';
import bgImage from "./img/bg-8.webp"
import bgImage2 from "./img/bg-7.jpg"
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGavel, FaArrowRight} from "react-icons/fa";
import {LuUsersRound, LuChartColumnIncreasing, LuClock } from "react-icons/lu";
import Navbar from "./component/Navbar";
import { HashLink } from "react-router-hash-link";

import porto1 from "./img/mayora.jpg";
import porto2 from "./img/pamafert.png";
import porto3 from "./img/federal food.jpg";
import porto4 from "./img/suzuki.webp";
import porto5 from "./img/gramedia.jpg";
import porto6 from "./img/seiken.webp";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css"

function Homepage() {
  

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

    return (
        <>
        <Navbar />

      {/* Hero */}
      <section
        id="hero"
        className="flex min-h-screen flex-col items-center justify-center bg-White-100 pt-24"
      >
        <img src={bgImage2} alt="background-effect" className="fixed inset-0 h-full w-full object-cover -z-20"/>

        {/* overlay */}
        <div className="absolute inset-0 bg-blue-950/65 -z-20"></div>
        
        <h1 className="text-5xl font-bold text-green-400">
          WELCOME TO PT. CONSULINDO INTI PRIMA
        </h1>
        
        <HashLink smooth to="/#contact" className="mt-8 inline-flex items-center justify-center rounded-full 
        bg-orange-600 px-8 py-3 text-[20px] font-medium tracking-wide 
        text-white transition-all duration-500 hover:-translate-y-1 
        hover:bg-sky-500 hover:shadow-lg">Konsultasi Sekarang</HashLink>
        
      </section>

      {/* About */}
      <section
        id="about"
        className="relative overflow-hidden py-24 bg-blue-100 bg-center bg-local md:bg-fixed"
        >

        <div className="mx-auto max-w-7xl px-6 py-4 bg-white rounded-lg  bg-clip-border pt-24 grid gap-12 md:grid-cols-[45%_50%]" data-aos="fade-down" data-aos-delay="200">

          {/*sisi kiri */}
          <div>
            <span className="px-15 space-y-8 leading-relaxed text-center text-5xl font-bold text-black mt-4 mb-8">
              TENTANG KAMI
            </span> <h2 className="space-y-8 text-justify leading-relaxed text-normal text-gray-700 mt-4 mb-12">
              <strong> PT.CONSULINDO INTI PRIMA</strong> adalah perusahaan konsultan perencana bangunan gedung, berdiri sejak tanggal 9 september tahun 2020 di Kota Cilegon Banten. 
            Awal mula kegiatan PT. Consulindo Inti Prima meliputi perencanaan bangunan gedung Hunian, Komersial dan Industri yang mencakup Arsitektur, Struktur, MEP dan Fire Protection System. 
            Seiring perkembangan usaha dan kegiatan saat ini PT. Consulindo Inti Prima menambah kegiatan usahanya dalam bidang Konsultan Pengkaji Teknis dalam hal pemenuhan perizinan dasar yang meliputi 
            izin Pemanfaatan Ruang (PKKPR), izin Lingkungan (AMDAL & UKL/UPL), Persetujuan Bangunan Gedung (PBG) dan Kelaikan Fungsi Bangunan (SLF).
            </h2>

            <p className="space-y-8 text-justify leading-relaxed text-normal leading-6 text-gray-700">Kegiatan ini melengkapi kompetensi Consulindo Inti Prima sebagai konsultan perencanaan secara Holistik (kepatuhan terhadap regulasi dan implementasi Teknis).
                Dengan  berbekal  pengalaman,  Integritas,  komitmen  dan
                kompetensi yang cukup, kami berkeyakinan akan dapat membantu menyelesaikan problematika dan kebutuhan pelaku industri terkait perencanaan dan implementasi teknis dan kepatuhan terhadap regulasi.</p>
          </div>

          {/*sisi kanan*/}
          <div className="relative space-y-9">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-orange-400"></div>

            {/*card 1*/}
            
            <div className="relative ml-7 border-r-7 border-blue-600 rounded-lg bg-gray-200 p-4 shadow-sm" data-aos="slide-right" data-aos-delay="100">
              <div className="absolute -left-[35px] top-0 h-4 w-4 rounded-full bg-green-600"></div>

              <h3 className="text-2xl mb-6 font-mono font-bold text-black">
                <span></span> Konsultan Perencana Bangunan Gedung
              </h3>
              <ul className="space-y-3 text-normal list-disc list-inside text-gray-800">
                <li>Industri</li>
                <li>Hunian</li>
                <li>Komersial</li>
              </ul>
            </div>

            {/*card 2*/}
            <div className="relative ml-7 border-r-7 border-blue-600 rounded-lg bg-gray-200 p-4 shadow-sm" data-aos="slide-right" data-aos-delay="100">
              <div className="absolute -left-[35px] top-0 h-4 w-4 rounded-full bg-green-600"></div>

              <h3 className="text-2xl mb-6 font-mono font-bold text-black">
                <span></span> Konsultan Pengkaji Teknis
              </h3>
              <ul className="space-y-3 text-normal list-disc list-inside text-gray-800">
                <li>Pemanfaatan Ruang (PKKPR)</li>
                <li>Perizinan Lingkungan (AMDAL, UKL/UPL)</li>
                <li>Persetujuan Bangunan Gedung (PBG)</li>
                <li>Sertifikasi Laik Fungsi (SLF)</li>
              </ul>
            </div>

            {/*card 3*/}
            <div className="relative ml-7 border-r-7 border-blue-600 rounded-lg bg-gray-200 p-4 shadow-sm" data-aos="slide-right" data-aos-delay="100">
              <div className="absolute -left-[35px] top-0 h-4 w-4 rounded-full bg-green-600"></div>

              <h3 className="text-2xl mb-6 font-mono font-bold text-black">
                <span></span> Lembaga Inspeksi Teknis (LIT)
              </h3>
              <ul className="space-y-3 text-normal list-disc list-inside text-gray-800">
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
        className="bg-blue-100 px-6 py-24"
      >
        <div  className="mx-auto max-w-7xl px-6 text-center" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-gray-900">
            VISI
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-sky-500"></div>
          <p className="mt-6 text-2xl text-gray-600">Menjadi perusahaan yang terdepan, kompeten , terpercaya, dan memiliki integritas 
            yang tinggi di seluruh wilayah Indonesia dalam bidang perencanaan bangunan Gedung secara Holistik.</p>
        </div>
      </section>

      <section
        id="vision"
        className="bg-blue-100 px-6 py-26"
      >
        <div  className="mx-auto max-w-7xl px-6 text-center" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-gray-900">
            MISI
          </h2>
          <div className="mx-auto mt-4 h-1 w-26 rounded bg-blue-500"></div>
           
        </div>
        

        
          
      </section> {/*end vision*/}

      <section
      id="misi">
        <div className="mx-auto max-w-8xl px-5 bg-blue-100">

          <div className="pl-8 md:pl-12 lg:pl-16 grid grid-cols-1 px-32 gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl max-w-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate
             -y-2 hover:shadow-xl" data-aos="fade-down" data-aos-delay="100">
              <LuUsersRound className="mt-2 mx-auto max-w-6xl text-2xl text-blue-500"/>
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-lg text-center"> Mempersiapkan sumber daya manusia yang terdidik, terlatih dan memiliki attitude yang baik.</p>
            
            </div>

            <div className="rounded-xl max-w-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate
             -y-2 hover:shadow-xl" data-aos="fade-down" data-aos-delay="100">
              <LuChartColumnIncreasing className="mt-2 mx-auto max-w-6xl text-2xl text-blue-500"/>
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-lg text-center"> Menjalankan system management mutu dengan konsisten.</p>
            
          </div>

          <div className="rounded-xl max-w-xl bg-white p-8 shadow-lg transition duration-300 hover:-translate
             -y-2 hover:shadow-xl" data-aos="fade-down" data-aos-delay="100">
              <FaGavel className="mt-2 mx-auto max-w-6xl text-2xl text-blue-500"/>
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-lg text-center"> Kepatuhan terhadap regulasi pemerintah dan profesionalisme.</p>
            
          </div>

          <div className="rounded-xl max-w-xl bg-white p-8 shadow-lg transition duration-300 hover:-translate
             -y-2 hover:shadow-xl" data-aos="fade-down" data-aos-delay="100">
              <LuClock className="mt-2 mx-auto max-w-6xl text-2xl text-blue-500"/>
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-lg text-center"> Memberikan pelayanan prima dengan kepuasan di atas expektasi pelanggan dan tepat waktu.</p>
            
          </div>
          
          </div>
        </div>
      </section>

      

      {/*services */}
      <section id="services" className="py-20 bg-blue-100">

        <div  className="mx-auto max-w-7xl px-6 text-center" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-gray-900">
            SERVICES
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-sky-500"></div>
          <p className="mt-8 text-2xl text-gray-600">Bentuk pelayanan konsultasi kami</p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-10" data-aos="fade-up" data-aos-delay="100">
        

        <div className="pl-8 md:pl-2 lg:pl-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          

          {/* card 1 */}
          <div className="group relative max-w-lg border-l-7 border-orange-600 bg-green-300 px-6 py-6 rounded-xl shadow-sm transition-all duration-300
          hover:-translate-y-1 hover:shadow-lg" data-aos="slide-left" data-aos-delay="200">

            <span className="mb-8 block text-2xl text-center font-serif font-semibold text-black">Arsitektur & Desain Bangunan</span>
            
            <p className="text-[15px] text-center leading-6 text-medium text-grey-700">
              Konsultan Perencanaan Bangunan Gedung. Perencanaan dengan cakupan yang luas
              dan inklusif. Setiap desain diproses berdasarkan kepatuhan terhadap regulasi yang berlaku.
            </p>

            <HashLink to="/project"
            className="mt-6 inline-flex items-right rounded-full bg-orange-400 px-6 py-2 justify-end text-sm font-medium text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="ml-2 transition-transform duration-300 text-[16px] group-hover:translate-x-1">Learn More</span>
              <FaArrowRight className="ml-2 mx-auto max-w-6xl text-2xl text-blue-700"/>
            </HashLink>

          </div>

          {/* card 2 */}
          <div className="group relative max-w-lg border-l-7 border-orange-600 bg-green-300 px-6 py-6 rounded-xl shadow-sm transition-all duration-300
          hover:-translate-y-1 hover:shadow-lg" data-aos="slide-left" data-aos-delay="200">

            <span className="mb-8 block text-2xl font-serif text-center font-semibold text-black">Konsultan Perizinan Bangunan</span>
            
            <p className="text-[15px] mb-6 text-center leading-6 text-medium text-grey-700">
              Konsultan Pengkaji Teknis untuk Persetujuan Bangunan Gedung
              (PBG), dan Kelaikan Fungsi Bangunan (SLF).
            </p>

            <HashLink to="/project"
            className="mt-6 inline-flex items-right rounded-full bg-orange-400 px-6 py-2 justify-end text-sm font-medium text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="ml-2 transition-transform duration-300 text-[16px] group-hover:translate-x-1">Learn More</span>
              <FaArrowRight className="ml-2 mx-auto max-w-6xl text-2xl text-blue-700"/>
            </HashLink>
          
          </div>

          {/* card 3 */}
          <div className="group relative max-w-lg border-l-7 border-orange-600 bg-green-300 px-6 py-6 rounded-xl shadow-sm transition-all duration-300
          hover:-translate-y-1 hover:shadow-lg" data-aos="slide-left" data-aos-delay="200">

            <span className="mb-8 block text-2xl text-center font-serif font-semibold text-black">Konsultan Perizinan Lingkungan</span>
            
            <p className="text-[15px] text-center leading-6 text-medium text-grey-100">
              Konsultan Pengkaji Teknis untuk Pemanfaatan Ruang PKKPR,
              Lingkungan (AMDAL & UKL/UPL), penerbitan Persetujuan
              Teknis Emisi dan Baku Mutu Air Limbah, Rincian Teknis
              Penyimpanan Limbah B3, serta AMDAL (DELH).
            </p>

            <HashLink to="/project"
            className="mt-6 inline-flex items-right rounded-full bg-orange-400 px-6 py-2 justify-end text-sm font-medium text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="ml-2 transition-transform duration-300 text-[16px] group-hover:translate-x-1">Learn More</span>
              <FaArrowRight className="ml-2 mx-auto max-w-6xl text-2xl text-blue-700"/>
            </HashLink>

          </div>

          {/* card 4 */}
          <div className="group relative max-w-lg border-l-7 border-orange-600 bg-green-300 rounded-xl px-6 py-6 shadow-sm transition-all duration-300
          hover:-translate-y-1 hover:shadow-lg" data-aos="fade-down" data-aos-delay="200">

            <span className="mb-8 block text-2xl text-center font-serif font-semibold text-black">Bangunan Gedung Hijau</span>
            
            <p className="text-[15px] leading-6 text-center text-light text-grey-500">
              Konsultan Perencanaan Bangunan Gedung. Perencanaan dengan cakupan yang luas
              dan inklusif. Setiap desain diproses berdasarkan kepatuhan terhadap regulasi yang berlaku.
            </p>

            <HashLink to="/project"
            className="mt-6 inline-flex items-right rounded-full bg-orange-400 px-6 py-2 justify-end text-sm font-medium text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="ml-2 transition-transform duration-300 text-[16px] group-hover:translate-x-1">Learn More</span>
              <FaArrowRight className="ml-2 mx-auto max-w-6xl text-2xl text-blue-700"/>
            </HashLink>

          </div>

          

        </div>
      </div>
      </section>
      
      

      {/* Contact */}
      <section
        id="contact"
        className="bg-blue-100 px-6 py-24"
      >
        <div  className="mx-auto max-w-7xl px-6 text-center" data-aos="fade-up">
          <h2 className="mb-6 text-4xl font-bold">
            CONTACT
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 bg-sky-500"></div>
          <p className="mt-6 text-2xl text-gray-600">Hubungi kantor pusat kami melalui data dibawah.</p>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 bg-cover bg-center bg-fixed"
        style={{backgroundImage: `url(${bgImage})`,}}>

          {/*blue verlay*/}
          <div className="absolute inset-0 bg-blue-950/65"></div>

          {/* content */}
          <div className="relative mx-auto max-w-7xl px-6 py-10">
            <div className="max-w-xl space-y-12">

              {/* Alamat */}
              <div className="flex items-start gap-5" data-aos="fade-up" data-aos-delay="200">
                <FaMapMarkerAlt className="mt-2 text-2xl text-white"/>
                <div>
                  <h3 className="text-4xl font-bold text-white">Alamat: </h3>
                  <p className="mt-4 text-lg leading-8 text-gray-200">
                    Cilegon Business Square Block B.19,
                  Kedaleman, Cibeber,
                  Kota Cilegon,
                  Banten 42422
                  </p>
                </div>
              </div>

              {/* No telp */}
              <div className="flex items-start gap-5" data-aos="fade-up" data-aos-delay="300">
                <FaPhoneAlt className="mt-2 text 2xl text-white"/>
                <div>
                  <h3 className="text-4xl font-bold text-white">Hubungi No:</h3>
                  <p className="mt-4 text-lg text-gray-200">0254-7877039</p>

                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5" data-aos="fade-up" data-aos-delay="400">
                <FaEnvelope className="mt-2 text-2xl text-white"/>
                <div>
                  <h3 className="text-4xl font-bold text-white">
                    Email Kami:
                  </h3>
                  <p className="mt-4 text-lg text-gray-200">intiprimaptconsulindo@gmail.com</p>
                </div>
              </div>
              
              <div className="w-[900px] h-[400px] overflow-auto rounded-2xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.6021226789162!2d106.08081824628931!3d-6.036828820724524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418dcc5569a9d9%3A0xcf1198ac5d3f37b8!2sPT.%20CONSULINDO%20INTI%20PRIMA!5e0!3m2!1sid!2sid!4v1788245032187!5m2!1sid!2sid"
              className="w-[900px] h-[400px] border-0"
              allowfullscreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="PT. CONSULINDO INTI PRIMA"/>
              </div>

            </div>
            
          </div>
        </section> {/* End Contact */}

      {/* Portfolio */}
      <section
        id="portfolio"
        className="flex min-h-screen flex-col items-center justify-center bg-blue-100 pt-24">
        <h2 className="mb-6 text-4xl font-bold">
          
        </h2>

        <div className="max-w-12xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">
          <img src={porto1} alt="partnership1"
            className="h-80 w-auto object-contain p-2 transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={porto1}>

              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800"></h4>
              <p></p>
          </div>

         </div>

        </div>

         
         <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">
          <img src={porto2} alt="partnership2"
            className="h-30 w-auto object-contain transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={porto2}>

              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800"></h4>
              <p></p>
          </div>

         </div>

        </div>

        <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">
          <img src={porto3} alt="partnership3"
            className="h-80 w-full object-contain p-5 transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={porto3}>

              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800"></h4>
              <p></p>
          </div>

         </div>

        </div>
        <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">
          <img src={porto4} alt="partnership4"
            className="h-80 w-full object-contain p-5 transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={porto4}>

              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800"></h4>
              <p></p>
          </div>

         </div>

        </div>

        <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">
          <img src={porto5} alt="partnership5"
            className="h-80 w-full object-contain p-5 transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={porto5}>

              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800"></h4>
              <p></p>
          </div>

         </div>

        </div>

        <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">
          <img src={porto6} alt="partnership6"
            className="h-80 w-full object-contain p-5 transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={porto6}>

              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800"></h4>
              <p></p>
          </div>

         </div>

        </div>

        </div>

        

      </section>

      

        {/*footer section*/}
        
        <footer id="footer" className="bg-slate-900 py-16 text-white">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-10 lg:grip-cols-3">

              <div data-aos="fade-up">
                <h2 className="text-2xl font-bold">PT.CONSULINDO INTI PRIMA

                </h2>
                
                <div className="mt-6 space-y-4 text-gray-300">
                  <div className="flex items-start gap-5">
                    <FaMapMarkerAlt className="mt-2 text-xs text-white"/>
                   <p><strong className="text-white">Alamat :</strong> {""}Cilegon Business Square Block B.19,
                      Kedaleman,
                      Cibeber,
                      Kota Cilegon</p>
                  
                    
                  </div>

                  <div className="flex items-start gap-5">
                    <FaPhoneAlt className="mt-2 text-xs text-white"/>
                    <p><strong className="text-white">Hubungi :</strong>{" "}0254-7877039</p>
                  </div>

                  <div className="flex items-start gap-5">
                    <FaEnvelope className="mt-2 text-xs text-white"/>
                    <p><strong className="text-white">Email :</strong>{""} intiprimaconsulindo@gmail.com</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </footer>

        </>
    )
}
export default Homepage;