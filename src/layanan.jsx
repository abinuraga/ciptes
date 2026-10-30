import { useEffect,} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, } from "react-icons/fa";
import Navbar from "./component/Navbar";
import { HashLink } from "react-router-hash-link";

import bg1 from "./img/mekanik.jpg";
import bg2 from "./img/perencanaan.jpg";
import bg3 from "./img/konstruk.jpg";
import bg4 from "./img/gedung_lingkungan.jpg";

function Layanan() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  

    return (
        <>
        <Navbar/>

        <section>
        <section id="pelayanan1"  className="relative flex min-h-[60vh] w-full flex-col items-center px-8  justify-center overflow-hidden bg-White-100 pt-24"
      >
        <img src={bg1} alt="background-effect" className="absolute inset-0 z-0 h-full w-full object-cover"/>

        {/* overlay */}
        <div className="absolute inset-0 z-0 bg-blue-950/65"></div>
        
        <h1 className="relative z-10 max-w-3xl leading-11 text-center text-5xl font-bold text-green-300 sm:text-4xl md:text-4xl">
          Bentuk Layanan Kami
        </h1> 
        
        <p className="relative z-10 mt-10 mr-3 ml-3 max-w-3xl leading-8 text-center text-lg font-semibold text-green-400"> Kami menyediakan layanan
          konsultasi dan pengurusan perizinan bangunan serta lingkungan untuk membantu memenuhi persyaratan regulasi yang berlaku.
        </p>
      </section>

      

      
      <section
      id="pelayanan2">
        <div className="w-full px-4 bg-white overflow-hidden py-12 sm:px-6 lg:px-10 mt-12 items-center">
          
          <div classname="mx-auto max-w-7xl space-y-10 lg;space-y-16">

            {/*text kiri, gambar kanan*/}
            <div className="grid grid-cols-1 overflow-hidden bg-white lg:grid-cols-2">

              <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 xl:px-20" data-aos="fade-down"
              data-aos-delay="100">

                <p className="mb-8 text-xs tracking-[0.2em] text-slate-600">
                  01 / LAYANAN KAMI
                </p>

                 <h2 className="max-w-xl text-4xl font-normal leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                    Konsultan Pengurusan Bangunan.
                  </h2>

                  <div className="mt-10 max-w-md self-end">

                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      Kami menyediakan layanan konsultasi dan pendampingan pengurusan Persetujuan Bangunan Gedung (PBG) 
                      dan Sertifikat Laik Fungsi (SLF) untuk membantu pemilik bangunan maupun pelaku usaha dalam memenuhi persyaratan teknis
                      dan administratif sesuai dengan ketentuan peraturan yang berlaku. 
                    </p>
                  </div>
              </div>

              {/*kolom kanan, gambar */}
              <div className="relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-[600px]">
                <img 
                src={bg2}
                alt="pelayanan konsultan 1"
                className="absolute inset-0 h-full object-cover object-center"/>

                <div className="absolute inset-0 bg-black/5"></div>

                <p className="absolute bottom-6 left-6 text-[10px] font-medium tracking-wider text-white
                drop-shadow-md sm:left-10">PERENCANAAN BANGUNAN</p>
              </div>
            </div>
          </div>

          {/*layanan 2 gambar kiri, text kanan*/}
          <div className="grid grid-cols-1 overflow-hidden bg-white lg:grid-cols-2">
              <div className="relative order-2 min-h-[300px] overflow-hidden sm:min-h-[400px] lg:order-1 lg:min-h-[550px]">

                <img
                src={bg3}
                alt="desain arsitektur 2"
                className="absolute inset-0 h-full w-full object-cover"/>
                
                <p className="absolute bottom-6 left-6 text-xs tracking-wider text-white drop-shadow-md sm:left-10">
                  DESAIN ARSITEKTUR
                </p>
            </div>

            <div className="order-1 flex flex-col justify-center px-7 py-12 sm:px-12 lg:order-2 lg:px-16 xl:px-20"
            data-aos="fade left" data-aos-delay="200">

              <p className="mb-8 text-xs tracking-[0.2em] text-slate-600">02 / DESAIN ARSITEK</p>

              <h2 className="max-w-xl text-4xl font-normal leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                 Desain Arsitektur
              </h2>

            <div className="mt-10 max-w-md self-end">

              <p clasName="text-sm leading-7 text-gray-700 sm:text-base">
                Menyediakan layanan konsultasi dan perencanaan bangunan gedung dengan cakupan yang luas, 
                terintegrasi, dan inklusif, sesuai dengan kebutuhan serta karakteristik setiap proyek. Proses perencanaan dilakukan secara terstruktur 
                dengan mempertimbangkan aspek fungsi bangunan, estetika, kenyamanan, keamanan, dan efisiensi pemanfaatan ruang.
              </p>
            </div>
            </div>
            
            </div>

            {/*layanan 3 text kiri, gambar kanan*/}
            <div className="grid grid-cols-1 overflow-hidden bg-white lg:grid-cols-2">

              <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 xl:px-20" data-aos="fade-down"
              data-aos-delay="100">

                <p className="mb-8 text-xs tracking-[0.2em] text-slate-600">
                  03 / AMDAL
                </p>

                 <h2 className="max-w-xl text-4xl font-normal leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                    Konsultasi Dampak Lingkungan.
                  </h2>

                  <div className="mt-10 max-w-md self-end">

                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      Menyediakan layanan konsultasi lingkungan dan penyusunan dokumen Analisis Mengenai Dampak Lingkungan (AMDAL) 
                      untuk membantu mengidentifikasi, mengevaluasi, serta mengelola potensi dampak yang ditimbulkan 
                      dari suatu rencana usaha atau kegiatan terhadap lingkungan hidup.
                    </p>
                  </div>
              </div>

              {/*kolom kanan, gambar */}
              <div className="relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-[600px]">
                <img 
                src={bg4}
                alt="pelayanan konsultan 1"
                className="absolute inset-0 h-full object-cover object-center"/>

                <div className="absolute inset-0 bg-black/5"></div>

                <p className="absolute bottom-6 left-6 text-[10px] font-medium tracking-wider text-white
                drop-shadow-md sm:left-10">PERENCANAAN AMDAL</p>
              </div>
            </div>

            {/*layanan 4 gambar kiri, text kanan*/}
          <div className="grid grid-cols-1 overflow-hidden bg-white lg:grid-cols-2">
              <div className="relative order-2 min-h-[300px] overflow-hidden sm:min-h-[400px] lg:order-1 lg:min-h-[550px]">

                <img
                src={bg1}
                alt="desain arsitektur 2"
                className="absolute inset-0 h-full w-full object-cover"/>
                
                <p className="absolute bottom-6 left-6 text-xs tracking-wider text-white drop-shadow-md sm:left-10">
                  PERIZINAN LINGKUNGAN
                </p>
            </div>

            <div className="order-1 flex flex-col justify-center px-7 py-12 sm:px-12 lg:order-2 lg:px-16 xl:px-20"
            data-aos="fade left" data-aos-delay="200">

              <p className="mb-8 text-xs tracking-[0.2em] text-slate-600">04 / PERIZINAN LINGKUNGAN</p>

              <h2 className="max-w-xl text-4xl font-normal leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                 PERIZINAN LINGKUNGAN
              </h2>

            <div className="mt-10 max-w-md self-end">

              <p clasName="text-sm leading-7 text-gray-700 sm:text-base">
                Menyediakan layanan konsultasi dan pengurusan perizinan lingkungan untuk membantu perusahaan maupun pelaku usaha 
                dalam memenuhi persyaratan lingkungan sesuai dengan jenis, skala, dan karakteristik kegiatan yang dijalankan.
              </p>
            </div>
            </div>
            
            </div>

            
          
        </div>

        <div className="relative z-10 mt-8 flex justify-center">

          <HashLink smooth to="/project" className=" mt-8 ml-30 mb-12 inline-flex flex flex-col items-center justify-center rounded-full 
        bg-orange-600 px-8 py-3 text-[20px] font-medium tracking-wide 
        text-white transition-all duration-500 hover:-translate-y-1 
        hover:bg-sky-500 hover:shadow-lg">Projek Lainnya</HashLink>
        
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

      </section>

      

      
        </>
    )
}
export default Layanan;