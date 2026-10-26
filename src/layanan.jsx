import { useEffect,} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, } from "react-icons/fa";
import Navbar from "./component/Navbar";
import { HashLink } from "react-router-hash-link";

import bg1 from "./img/mekanik.jpg";

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
          konsultasi dan pengurusan perizinan bangunan serta lingkungan untuk membantu memenuhi persyaratan regulasi yang berlaku. Layanan kami
          mencakup Persetujuan Bangunan Gedung (PBG), Sertifikat Laik Fungsi(SLF), serta jasa Analisis Mengenai Dampak Lingkungan (AMDAL) dan
          pengurusan perizinan bangunan. 
        </p>
      </section>

      

      
      <section
      id="pelayanan2">
        <div className="relative mx-auto max-w-8xl relative flex px-5 bg-white overflow-hidden mt-12 items-center">

          <div className="grid w-full grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:px-8">

            <div className="w-full rounded-xl bg-gray-200 p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6" 
            data-aos="fade-down" data-aos-delay="100">
              
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-center text-sm leading-6 text-gray-700 sm:text-base"> SLF</p>
            
            </div>

            <div className="w-full rounded-xl bg-gray-200 p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6" 
            data-aos="fade-down" data-aos-delay="200">
              
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-center text-sm leading-6 text-gray-700 sm:text-base"> PBG</p>
            
          </div>

          <div className="w-full rounded-xl bg-gray-200 p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6" 
          data-aos="fade-down" data-aos-delay="250">
              
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-center text-sm leading-6 text-gray-700 sm:text-base"> AMDAL</p>
            
          </div>

          <div className="w-full rounded-xl bg-gray-200 p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6" 
          data-aos="fade-down" data-aos-delay="300">
              
              <h4 className="mb-6 text-5xl text-center font-bold text-sky-600"></h4>
              <p className="text-center text-sm leading-6 text-gray-700 sm:text-base"> perizinan lingkungan</p>
            
          </div>
          
          </div>
          
        </div>

        <HashLink smooth to="/project" className=" mt-8 mb-12 inline-flex flex flex-col items-center justify-center rounded-full 
        bg-orange-600 px-8 py-3 text-[20px] font-medium tracking-wide 
        text-white transition-all duration-500 hover:-translate-y-1 
        hover:bg-sky-500 hover:shadow-lg">Projek Lainnya</HashLink>

       
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