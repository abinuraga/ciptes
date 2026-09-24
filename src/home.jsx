import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos';
import bgImage from "./img/bg-8.webp"
import bgImage2 from "./img/bg-7.jpg"
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGavel, FaArrowRight} from "react-icons/fa";
import {LuUsersRound, LuChartColumnIncreasing, LuClock } from "react-icons/lu";
import Navbar from "./component/Navbar";
import Logocaraousel from "./component/caraousel";
import { HashLink } from "react-router-hash-link";

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
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-White-100 pt-24"
      >
        <img src={bgImage2} alt="background-effect" className="absolute inset-0 h-full w-full object-cover -z-20"/>

        {/* overlay */}
        <div className="absolute inset-0 bg-blue-950/65 -z-20"></div>
        
        <h1 className="relative z-10 max-w-5xl text-center text-3xl font-bold text-green-400 sm:text-4xl md:text-5xl">
          WELCOME TO PT. CONSULINDO INTI PRIMA
        </h1>
        
        <HashLink smooth to="/#contact" className="mt-8 inline-flex items-center justify-center rounded-full 
        bg-orange-600 px-8 py-3 text-[20px] font-medium tracking-wide 
        text-white transition-all duration-500 hover:-translate-y-1 
        hover:bg-sky-500 hover:shadow-lg">Konsultasi Sekarang</HashLink>
        
      </section>
      
      <Logocaraousel />

      {/* About */}
      <section
        id="about"
        className="relative w-full overflow-hidden bg-blue-100 bg-center bg-local py-12 sm:py-16 md:py-24 md:bg-fixed"
        >

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 rounded-lg bg-white px-4 py-10 pt-12 sm:px-6 sm:py-12 md:grid-cols-[45%_50%] md:gap-12 md:px-8 md:pt-24" data-aos="fade-down" data-aos-delay="200">

          {/*sisi kiri */}
          <div>
            <h2 className="mt-2 mb-6 text-center text-3xl font-bold leading-tight text-blac sm:text-4xl md:mt-4 md:mb-8 md:text-5xl">
              TENTANG KAMI
            </h2>
            <p classname="mt-4 mb-8 text-justify text-sm leading-7 text-gray-700 sm:text-base sm:leading-7 md:mb-12">
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
        className="w-full bg-blue-100 px-4 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div  className="mx-auto w-full max-w-7xl text-center" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            VISI
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-sky-500 sm:w-20"></div>
          <p className="mx-auto mt-6 max-w-5xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:text-2xl">Menjadi perusahaan yang terdepan, kompeten , terpercaya, dan memiliki integritas 
            yang tinggi di seluruh wilayah Indonesia dalam bidang perencanaan bangunan Gedung secara Holistik.</p>
        </div>
      </section>

      <section
        id="vision"
        className="w-full bg-blue-100 px-4 py-10 sm:px-6 sm:py-12 md:py-16"
      >
        <div  className="mx-auto w-full max-w-7xl text-center" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            MISI
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-500"></div>
           
        </div>
        

        
          
      </section> {/*end vision*/}

      <section
      id="misi">
        <div className="mx-auto max-w-8xl px-5 bg-blue-100">

          <div className="grid w-full grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:px-8">

            <div className="w-full rounded-xl bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6" 
            data-aos="fade-down" data-aos-delay="100">
              <LuUsersRound className="mt-2 mx-auto max-w-6xl text-2xl text-blue-500"/>
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-center text-sm leading-6 text-gray-700 sm:text-base"> Mempersiapkan sumber daya manusia yang terdidik, terlatih dan memiliki attitude yang baik.</p>
            
            </div>

            <div className="w-full rounded-xl bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6" 
            data-aos="fade-down" data-aos-delay="200">
              <LuChartColumnIncreasing className="mx-auto mt-2 text-3xl text-blue-500"/>
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-center text-sm leading-6 text-gray-700 sm:text-base"> Menjalankan system management mutu dengan konsisten.</p>
            
          </div>

          <div className="w-full rounded-xl bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6" 
          data-aos="fade-down" data-aos-delay="250">
              <FaGavel className="mx-auto mt-2 text-3xl text-blue-500"/>
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-center text-sm leading-6 text-gray-700 sm:text-base"> Kepatuhan terhadap regulasi pemerintah dan profesionalisme.</p>
            
          </div>

          <div className="w-full rounded-xl bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6" 
          data-aos="fade-down" data-aos-delay="300">
              <LuClock className="mx-auto mt-2 text-3xl text-blue-500"/>
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-center text-sm leading-6 text-gray-700 sm:text-base"> Memberikan pelayanan prima dengan kepuasan di atas expektasi pelanggan dan tepat waktu.</p>
            
          </div>
          
          </div>
        </div>
      </section>

      

      {/*services */}
      <section id="services" className="w-full bg-blue-100 py-16 sm:py-20 md:py-24">

        <div  className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            SERVICES
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-sky-500 sm:w-20"></div>
          <p className="mt-6 text-base text-gray-600 sm:mt-8 sm:text-lg md:text-2xl">Bentuk pelayanan konsultasi kami</p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 md:px-8" data-aos="fade-up" data-aos-delay="100">
        

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          

          {/* card 1 */}
          <div className="group relative w-full rounded-xl border-l-4 border-orange-600 bg-green-300 px-5 py-6 shadow-sm 
          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:border-l-7 sm:px-6" data-aos="slide-left" data-aos-delay="200">

            <span className="mb-5 block text-center text-xl font-serif font-semibold leading-snug text-black sm:mb-8 sm:text-2xl">Arsitektur & Desain Bangunan</span>
            
            <p className="text-center text-sm leading-6 text-gray-700 sm:text-[15px]">
              Konsultan Perencanaan Bangunan Gedung. Perencanaan dengan cakupan yang luas
              dan inklusif. Setiap desain diproses berdasarkan kepatuhan terhadap regulasi yang berlaku.
            </p>

          </div>

          {/* card 2 */}
          <div className="group relative w-full rounded-xl border-l-4 border-orange-600 bg-green-300 px-5 py-6 shadow-sm 
          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:border-l-7 sm:px-6" data-aos="slide-left" data-aos-delay="200">

            <span className="mb-5 block text-center text-xl font-serif font-semibold leading-snug text-black sm:mb-8 sm:text-2xl">Konsultan Perizinan Bangunan</span>
            
            <p className="text-center text-sm leading-6 text-gray-700 sm:text-[15px]">
              Konsultan Pengkaji Teknis untuk Persetujuan Bangunan Gedung
              (PBG), dan Kelaikan Fungsi Bangunan (SLF).
            </p>

          </div>

          {/* card 3 */}
          <div className="group relative w-full rounded-xl border-l-4 border-orange-600 bg-green-300 px-5 py-6 shadow-sm 
          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:border-l-7 sm:px-6" data-aos="slide-left" data-aos-delay="200">

            <span className="mb-5 block text-center text-xl font-serif font-semibold leading-snug text-black sm:mb-8 sm:text-2xl">Konsultan Perizinan Lingkungan</span>
            
            <p className="text-center text-sm leading-6 text-gray-700 sm:text-[15px]">
              Konsultan Pengkaji Teknis untuk Pemanfaatan Ruang PKKPR,
              Lingkungan (AMDAL & UKL/UPL), penerbitan Persetujuan
              Teknis Emisi dan Baku Mutu Air Limbah, Rincian Teknis
              Penyimpanan Limbah B3, serta AMDAL (DELH).
            </p>
    
          </div>

          {/* card 4 */}
          <div className="group relative w-full rounded-xl border-l-4 border-orange-600 bg-green-300 px-5 py-6 shadow-sm 
          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:border-l-7 sm:px-6" data-aos="fade-down" data-aos-delay="200">

            <span className="mb-5 block text-center text-xl font-serif font-semibold leading-snug text-black sm:mb-8 sm:text-2xl">Bangunan Gedung Hijau</span>
            
            <p className="text-center text-sm leading-6 text-gray-700 sm:text-[15px]">
              Konsultan Perencanaan Bangunan Gedung. Perencanaan dengan cakupan yang luas
              dan inklusif. Setiap desain diproses berdasarkan kepatuhan terhadap regulasi yang berlaku.
            </p> 

          </div>
          

        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <HashLink to="/project" className="inline-flex items-center justify-center rounded-full 
          bg-orange-600 px-6 py-3 text-base font-medium tracking-wide text-white transition-all duration-500 
          hover:-translate-y-1 hover:bg-sky-500 hover:shadow-lg sm:px-8 sm:text-lg md:text-[20px]" 
          data-aos="fade-up" data-aos-delay="300">
            Learn more <FaArrowRight className="ml-2 text-lg text-blue-700 sm:text-xl md:text-2xl"/></HashLink>
        </div>

      </div>
      </section>
      
      

      {/* Contact */}
      <section
        id="contact"
        className="w-full bg-blue-100 px-4 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div  className="mx-auto w-full max-w-7xl text-center" data-aos="fade-up" data-aos-delay="200">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            CONTACT
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded bg-sky-500 sm:w-20"></div>
          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg md:text-2xl">Hubungi kantor pusat kami melalui data dibawah.</p>
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
              allowfullscreen
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

              <div data-aos="fade-up" data-aos-delay="100">
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

        </>
    )
}
export default Homepage;