import { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

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
import slf4_3 from "./slf/pt-delifood3.jpg";
import slf5 from "./slf/pt-adhiwesa-mandiri1.jpg";
import slf5_2 from "./slf/pt-adhiwesa-mandiri2.jpg";
import slf5_3 from "./slf/pt-adhiwesa-mandiri3.jpg";
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
    category: "PBG",
    title: "PT.DELI FOOD",
    image: slf4,
    gallery: [slf4, slf4_2, slf4_3],
  },

  {
    id: 5,
    category: "PBG",
    title: "PBG 5",
    image: slf5,
    gallery: [slf5, slf5_2, slf5_3],
  },
];
const categories = [
  "All",
  "SLF",
  "PBG",
  "DESAIN",
  "AMDAL",
  "UKL & UPL",
  
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
            RIWAYAT PROJEK LAPANGAN
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

      
        </>
    )
}
export default Project;
