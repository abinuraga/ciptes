import { useEffect,} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,} from "react-icons/fa";
import Navbar from "./component/Navbar";

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
        <section id="legalitas" className="py-20 bg-blue-100">
        <div  className="mx-auto max-w-7xl px-6 text-center" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            KOMPETENSI
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-sky-500"></div>
          <p className="mt-6 text-2xl text-gray-600">Bukti sertifikasi kelayakan kerja</p>
        </div>
      </section>

      

 


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
export default Layanan;