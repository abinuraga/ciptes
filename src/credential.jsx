import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos';



import Navbar from "./component/Navbar";

import "react-photo-view/dist/react-photo-view.css";



function Imgpage () {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

    return (
        <>
         <Navbar />

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

        </>
    )
}
export default Imgpage;