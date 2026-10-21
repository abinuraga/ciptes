import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../img/logo_perusahaan.jpeg";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";


function Navbar () {
    
     const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setServiceOpen(false);
  };
    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white/30 shadow-md">

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
                            <HashLink smooth to="/#hero" className="whitespace-nowrap transition hover:text-blue-300">
                            Beranda
                            </HashLink>
                        </li>

                        <li className="shrink-0">
                            <HashLink smooth to="/#contact" className="whitespace-nowrap transition hover:text-blue-300">
                            Kontak
                            </HashLink>
                        </li>

                        <li className="shrink-0">
                            <Link to="/credential" className="whitespace-nowrap transition hover:text-blue-300">
                            Kompetensi
                            </Link>
                        </li>

                       {/* Dropdown Layanan Desktop */}
            <li
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServiceOpen(!serviceOpen)}
                aria-expanded={serviceOpen}
                className="flex items-center gap-2 whitespace-nowrap py-2 transition hover:text-blue-600"
              >
                Layanan
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {serviceOpen && (
                <ul className="absolute right-0 top-full z-50 min-w-56 rounded-lg border border-white/30 bg-white/10 py-2 shadow-lg">

                  <li>
                    <Link
                      to="/project"
                      onClick={closeMenu}
                      className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Semua Proyek
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/project#perencanaan"
                      onClick={closeMenu}
                      className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Perencanaan Bangunan
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/project#perizinan"
                      onClick={closeMenu}
                      className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Pengurusan Perizinan
                    </Link>
                  </li>

                </ul>
              )}
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

                        
                        {/* Dropdown Layanan HP */}
            <li>
              <button
                type="button"
                onClick={() => setServiceOpen(!serviceOpen)}
                aria-expanded={serviceOpen}
                className="flex w-full items-center justify-between py-3 text-left hover:text-blue-600"
              >
                Layanan
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {serviceOpen && (
                <ul className="mb-2 ml-3 border-l-2 border-blue-200 pl-3">

                  <li>
                    <Link
                      to="/project"
                      onClick={closeMenu}
                      className="block py-3 text-gray-600 hover:text-blue-600"
                    >
                      Semua Proyek
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/project#perencanaan"
                      onClick={closeMenu}
                      className="block py-3 text-gray-600 hover:text-blue-600"
                    >
                      Perencanaan Bangunan
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/project#perizinan"
                      onClick={closeMenu}
                      className="block py-3 text-gray-600 hover:text-blue-600"
                    >
                      Pengurusan Perizinan
                    </Link>
                  </li>

                </ul>
              )}
            </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}
export default Navbar;