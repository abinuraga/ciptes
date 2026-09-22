import { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,} from "react-icons/fa";

import slf1 from "./slf/pt-mayora1.jpg";
import slf1_2 from "./slf/pt-mayora2.jpg";
import slf1_3 from "./slf/pt-mayora3.jpg";
import slf2 from "./slf/pt-sri-rezeki.jpg";
import slf2_2 from "./slf/pt-sri-rezeki2.jpg";
import slf2_3 from "./slf/pr-sri-rezeki3.jpg";
import slf3 from "./slf/pt-graha-cemerlang1.jpeg";
import slf3_2 from "./slf/pt-graha-cemerlang2.jpeg";
import slf3_3 from "./slf/pt-graha-cemerlang3.jpeg";
import slf4 from "./slf/pt-delifood1.jpg";
import slf4_2 from "./slf/pt-delifood2.jpg";
import slf4_3 from "./slf/siteplan-delifood.jpg";
import slf5 from "./slf/siteplan-gramedia.jpg";
import slf6 from "./slf/SLF_PT SYAQUA.jpg";
import slf6_1 from "./slf/site-syaqua.jpg";
import pbg1 from "./pbg/siteplan-jiang yun zhong.jpg";
import pbg2 from "./pbg/siteplan-ruko korelet.jpg";
import pbg3 from "./pbg/pbg_rs_doc.jpeg";
import pbg3_1 from "./pbg/pbg_rs_site.jpg";
import pbg4 from "./pbg/siteplan-lazuli.jpg";
import arc1 from "./img/untara.png";
import arc1_2 from "./img/untara2.png";
import arc2 from "./img/PT National Label.png";
import arc2_2 from "./img/PT National Label3.png";
import Navbar from "./component/Navbar";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {FaSearchPlus} from "react-icons/fa";


const project = [
  {
    id: 1,
    category: "SLF",
    title: "PT.MAYORA",
    image: slf1,
    gallery: [slf1, slf1_2, slf1_3],
  },

  {
    id: 2,
    category: "SLF",
    title: "PT. SRI REZEKI FERTILIZER",
    image: slf2,
    gallery: [slf2, slf2_2, slf2_3],
  },

  {
    id: 3,
    category: "PBG",
    title: "PT. GRAHA CEMERLANG",
    image: slf3,
    gallery: [slf3, slf3_2, slf3_3],
  },

  {
    id: 4,
    category: "SLF",
    title: "PT.DELI FOOD",
    image: slf4,
    gallery: [slf4, slf4_2, slf4_3],
  },

  {
    id: 5,
    category: "PBG",
    title: "PT. JIANG YUN ZHONG",
    image: pbg1,
    gallery: [pbg1],
  },

  {
    id: 6,
    category: "SLF",
    title: "PT. SYAQUA INDONESIA",
    image: slf6,
    gallery: [slf6, slf6_1],
  },

  {
    id: 7,
    category: "PBG",
    title: "RUKO KORELET",
    image: pbg2,
    gallery: [pbg2],
  },

  {
    id: 8,
    category: "PBG",
    title: "RS BUNDA SEJAHTERA",
    image: pbg3,
    gallery: [pbg3, pbg3_1],
  },

  {
    id: 9,
    category: "SLF",
    title: "GRAMEDIA BSD",
    image: slf5,
    gallery: [slf5],
  },

  {
    id: 10,
    category: "PBG",
    title: "PT. LAZULI KARYA SARANA",
    image: pbg4,
    gallery: [slf4],
  },

  {
    id: 11,
    category: "DESAIN",
    title: "KAMPUS UNTARA",
    image: arc1,
    gallery: [arc1, arc1_2],
  },

  {
    id: 12,
    category: "DESAIN",
    title: "PT. NATIONAL LABEL",
    image: arc2,
    gallery: [arc2, arc2_2],
  },
  
];
const categories = [
  "All",
  "SLF",
  "PBG",
  "DESAIN",
  
];

{/* project card */}
function ProjectCard({project}) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      data-aos="fade-up">

        {/* Gambar */}
        <div className="relative overflow-hidden">
          <img
          src={project.image}
          alt={project.title}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"/>

          {/* button zoom */}
          <div className="absolute bottom-4 right-4">

            <PhotoProvider>{project.gallery.map((image, index) => (
              <PhotoView key={image} src={image}>{index === 0 ? ( <button className="rounded-full bg-white p-3 
                text-gray-700 shadow-md transition hover:bg-sky-500 hover:text-white"><FaSearchPlus /> </button>) : (
                  <span className="hidden"></span>)}</PhotoView>))}</PhotoProvider>
          </div>
        </div>

        {/* konten card */}

        <div className="p-6">
          <span className="text-sm font-medium uppercase tracking-wide text-orange-600">
            {project.category}
          </span>

          <h4 className="mt-2 text-2xl font-bold text-slate-800">
            {project.title}
          </h4>
    
        </div>
    </div>
  );
}
        


        


function Project() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = 
  activeCategory === "All"
  ? project
  : project.filter(
    (project) => project.category === activeCategory);
  

    return (
        <>
        <Navbar/>

        <section>
        <section id="Project" className="py-20 bg-blue-100">
        <div  className="mx-auto max-w-7xl px-6 text-center" data-aos="fade-up">
          <h2 className="mt-14 text-5xl font-bold text-gray-900">
            PENGALAMAN PROJEK
          </h2>
          <div className="mx-auto mt-4 mb-14 h-1 w-20 rounded bg-sky-500"></div>
          <p className="mt-6 textlg text-gray-600"></p>
        </div>

        <div className="mt-4 bg-blue-100" data-aos="fade-up">

          <div className="mx-auto flex max-w-7xl justify-center gap-2 overflow-x-auto px-6 py-5">
            {categories.map((category)=>(
              <button key={category} onClick={() =>
                setActiveCategory(category)
              }
              className={`whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium transition-all duration-300
                ${activeCategory === category
                ? "bg-green-500 text-orange-600 shadow-md"
                : "text-gray-600 hover:bg-green-300 hover:text-orange-600"}`}>{category}</button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
          {filteredProjects.map((project)=> (
            <ProjectCard key={project.id} project={project}/>
          ))}
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
export default Project;
