import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../img/logo_perusahaan.jpeg";
import { useState } from "react";
import { FaBars, FaTimes, } from "react-icons/fa";


function Navbar () {
    
     const [isOpen, setIsOpen] = useState(false);
  const [, setServiceOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setServiceOpen(false);
  };
    return (
        <header className="relative w-full bg-white/30 backdrop-blur-md shadow-md">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* logo */}
                <HashLink smooth to="/#hero" className="flex items-center gap-3" onClick={closeMenu}>
                <img src={logo} alt="PT. Consulindo Inti Prima" className="h-12 w-12 object-contain"/>

                <h1 className="h-7 w-7 sm:h-8 sm:w-8 md:h-12 md:w-12 object-contain text-2xl font-bold text-blue-900"></h1>
                </HashLink>

                {/* hamburger HP */}
                <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-md p-2 text-2xl text-blue-900 md:hidden"
                aria-label="Toggle menu">{isOpen ? <FaTimes /> : <FaBars />} </button>

                {/* navigation */}
                <nav className="hidden md:block">
                    <ul className="flex w-full gap-2 text-[9px] items-center sm:gap-3 sm-text-[11px] md:text-base md:gap-8 font-medium text-gray-700">

                        <li className="shrink-0">
                            <HashLink smooth to="/#hero" className="whitespace-nowrap text-orange-500 transition hover:text-blue-300">
                            Beranda
                            </HashLink>
                        </li>

                        <li className="shrink-0">
                            <HashLink smooth to="/#contact" className="whitespace-nowrap text-orange-500 transition hover:text-blue-300">
                            Kontak
                            </HashLink>
                        </li>

                        <li className="shrink-0">
                            <Link to="/credential" className="whitespace-nowrap transition text-orange-500 hover:text-blue-300">
                            Kompetensi
                            </Link>
                        </li>

                        <li className="shrink-0">
                            <Link to="/layanan" className="whitespace-nowrap transition text-orange-500 hover:text-blue-300">
                            Layanan 
                            </Link>
                        </li>

                        <li>
                    <Link
                      to="/project"
                    
                      className="whitespace-nowrap transition text-orange-500 hover:text-blue-300">
                      Proyek
                    </Link>
                  </li>

                    

                    </ul>
                </nav>
            </div>

            {/* Tampilan HP */}

            {isOpen && (
                <nav className="border-t border-gray-200 bg-white shadow-md md:hidden">
                    <ul className="flex flex-col px-6 py-3 text-sm font-medium text-gray-700">

                        <li>
                            <HashLink smooth
                            to="/#hero" onClick={closeMenu}
                            className="block py-3 transition hover:text-blue-600">Home</HashLink>
                        </li>
                        

                        <li>
                            <HashLink smooth
                            to="/#contact" onClick={closeMenu}
                            className="block py-3 transition hover:text-blue-600">Contact</HashLink>
                        </li>

                        <li>
                            <HashLink smooth
                            to="/credential" onClick={closeMenu}
                            className="block py-3 transition hover:text-blue-600">Kompetensi</HashLink>
                        </li>

                        <li>
                            <HashLink smooth
                            to="/layanan" onClick={closeMenu}
                            className="block py-3 transition hover:text-blue-600">Layanan</HashLink>
                        </li>

                        <li>
                    <Link
                      to="/project"
                      onClick={closeMenu}
                      className="block py-3 text-green-500 hover:text-blue-600"
                    >
                      Semua Proyek
                    </Link>
                  </li>

                        
                   
                    </ul>
                </nav>
            )}
        </header>
    )
}
export default Navbar;