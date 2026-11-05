import { useEffect } from "react";
import AOS from "aos";
import bg1 from "./img/blueprint.jpg";
import tim1 from "./img/profile.jpg";
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
        <section id="Kompetensi"  className="relative flex min-h-[60vh] w-full flex-col items-center px-8  justify-center overflow-hidden bg-White-100 pt-24"
      >
        <img src={bg1} alt="background-effect" className="absolute inset-0 z-0 h-full w-full object-cover"/>

        {/* overlay */}
        <div className="absolute inset-0 z-0 bg-blue-950/65"></div>
        
        <h1 className="relative z-10 max-w-3xl leading-11 text-center text-5xl font-bold text-green-300 sm:text-4xl md:text-4xl">
          Kompetensi Tim Kami
        </h1> 
        
      </section>

      <section>
          <div  className="mx-auto max-w-7xl px-6 text-center" data-aos="fade-up">
          <h2 className="mt-14 text-5xl font-bold text-green-500">
            
          </h2>
          <p className="mt-6 text-lg text-gray-600 sm:px-4 sm:text-lg sm:leading-8">PT. Consulindo Inti Prima didukung oleh tim profesional 
            yang memiliki kompetensi, pengalaman, dan semangat kolaborasi dalam setiap pekerjaan. Dengan keahlian yang saling 
            melengkapi serta komitmen terhadap kualitas, kami bekerja bersama untuk menghadirkan layanan konsultasi dan perizinan 
            yang profesional, terarah, dan terpercaya.</p>
        </div>
        </section>

        <section
        id="team"
        className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20">

          <div className="mx-auto w-full max-w-7xl">

            {/* Heading */}
            <div className="mb-10 text-center sm:mb-12 md:mb-14" data-aos="fade-up" data-aos-delay="100">

              <h2 className="text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl md:text-5xl">
                MEET OUR TEAM
              </h2>

              <div className="mx-auto mt-4 h-1 w-16 rounded bg-sky-500 sm:w-20"></div>

              <p className="mx-auto mt-4 max-w-2xl px-2 text-sm leading-6 text-gray-600 sm:mt-5 sm:text-base
                sm:leading-7">
                  Didukung oleh tenaga professional dan tim teknis yang berpengalaman dalam memberikan layanan terbaik.
                </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12
            lg:grid-cols-2 lg:gap-12">

              {[
                {
                  image:tim1,
                  name: "Temu Mulyono",
                  position: "Direktur",

                },

                {
                  image:tim1,
                  name: "IR.Sutarno",
                  position: "Wakil Direktur",
                },

                {
                  image:tim1,
                  name: "ounur Rofiq",
                  position: "Manager",
                },

                {
                  image:tim1,
                  name: "Ade Yulyana",
                  position: "Drafter",
                }
              ].map((member, index) => (
                <div key={index}
                className={`w-full max-w-[280px] text-center sm:max-w-[300px] lg:max-w-[320px] ${
                  index ===2
                  ? "sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:justify-self-auto"
                  : ""
                }`} data-aos= "fade-up" data-aos-delay={150 + index * 150}>

                  {/* foto anggota */}
                  <div className="group mx-auto aspect-[4/5] w-full overflow-hidden">
                  <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"/>
                  </div>

                  {/* nama */}
                  <h3 className="mt-4 break-words text-base font-bold leading-6 text-gray-900 sm:mt-5 sm:text-lg md:text-xl">
                    {member.name}
                  </h3>

                  {/* jabatan */}
                  <p className="mt-1 text-sm leading-5 text-gray-700 sm:text-base">
                    {member.position}
                  </p>
                  </div>
              ))}
            </div>
          </div>

        </section>

      

 


      </section>

        </>
    )
}
export default Imgpage;