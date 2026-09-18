import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos';

import sertifikat1 from "./img/profil-1.jpeg";
import sertifikat2 from "./img/profil-2.jpeg";
import sertifikat3 from "./img/kta-sutarno-1.jpg";
import sertifikat4 from "./img/kta-sutarno-2.jpg";
import sertifikat5 from "./img/skk_sutarno_1.jpg";
import sertifikat6 from "./img/skk_sutarno_2.jpg";
import sertifikat7 from "./img/skk_ade_1.jpg";
import sertifikat8 from "./img/skk_ade_2.jpg";

import Navbar from "./component/Navbar";
import { PhotoProvider, PhotoView } from "react-photo-view";
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
          <h2 className="text-5xl font-bold text-gray-900">
            CERTIFICATION
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-sky-500"></div>
          <p className="mt-6 text-2xl text-gray-600">Bukti sertifikasi kelayakan kerja</p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
        
        <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">

            <img src={sertifikat1} alt="Dokumentasi sertifikat 1"
            className="h-80 w-full object-contain transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={sertifikat1}>
                
              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800">Kartu Tanda Anggota</h4>
              <p></p>
          </div>

          </div>
        </div>

        <div className="group overflow-hidden rounded-xl bg- shadow-lg">

          <div className="relative overflow-hidden">

            <img src={sertifikat2} alt="Dokumentasi sertifikat 1"
            className="h-80 w-full object-contain transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={sertifikat2}>
                
              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800">Kartu Tanda Anggota</h4>
              <p></p>
          </div>

          </div>
        </div>

        <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">

            <img src={sertifikat3} alt="Dokumentasi sertifikat 1"
            className="h-100 w-full object-contain transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={sertifikat3}>
            
              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800">Kartu Tanda Anggota</h4>
              <p></p>
          </div>

          </div>
        </div>

        <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">

            <img src={sertifikat4} alt="Dokumentasi sertifikat 1"
            className="h-100 w-full object-contain transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={sertifikat4}>
                
              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800">Kartu Tanda Anggota</h4>
              <p></p>
          </div>

          </div>
        </div>

        <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">

            <img src={sertifikat5} alt="Dokumentasi sertifikat 1"
            className="h-100 w-full object-contain transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={sertifikat5}>
                
              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800">SERTIFIKASI KOMPETENSI JASA KONSTRUKSI</h4>
              <p></p>
          </div>

          </div>
        </div>

        <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">

            <img src={sertifikat6} alt="Dokumentasi sertifikat 1"
            className="h-100 w-full object-contain transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={sertifikat6}>
                
              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800">DAFTAR UNIT KOMPETENSI</h4>
              <p>Jasa Konstruksi</p>
          </div>

          </div>
        </div>

        <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">

            <img src={sertifikat7} alt="Dokumentasi sertifikat 1"
            className="h-100 w-full object-contain transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={sertifikat7}>
                
              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800">SERTIFIKASI KOMPETENSI JASA KONSTRUKSI</h4>
              <p>Jasa Konstruksi</p>
          </div>

          </div>
        </div>

        <div className="group overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="relative overflow-hidden">

            <img src={sertifikat8} alt="Dokumentasi sertifikat 1"
            className="h-100 w-full object-contain transition duration-500 group-hover:scale-90"/>

            <PhotoProvider>
              <PhotoView src={sertifikat8}>
                
              </PhotoView>
            </PhotoProvider>

            <div className="p-6">
              <h4 className="text-2xl font-bold text-slate-800">DAFTAR UNIT KOMPETENSI</h4>
              <p>Jasa Konstruksi</p>
          </div>

          </div>
        </div>
      </div>

 


      </section>

        </>
    )
}
export default Imgpage;