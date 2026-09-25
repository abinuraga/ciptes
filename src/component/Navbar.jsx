import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../img/logo_perusahaan.jpeg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar () {
    
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => { setIsOpen(false); };
    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">

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
                <nav>
                    <ul className="flex w-full gap-2 text-[9px] items-center sm:gap-3 sm-text-[11px] md:text-base md:gap-8 font-medium text-gray-700">

                        <li className="shrink-0">
                            <HashLink smooth to="/#hero" className="whitespace-nowrap transition hover:text-blue-600">
                            Home
                            </HashLink>
                        </li>

                        <li className="shrink-0">
                            <HashLink smooth to="/#about" className="whitespace-nowrap transition hover:text-blue-600">
                            Tentang Kami
                            </HashLink>
                        </li>
                        
                        <li className="shrink-0">
                            <HashLink smooth to="/#vision" className="whitespace-nowrap transition hover:text-blue-600">
                            Visi & Misi
                            </HashLink>
                        </li>

                        <li className="shrink-0">
                            <HashLink smooth to="/#services" className="whitespace-nowrap transition hover:text-blue-600">
                            Layanan Kami
                            </HashLink>
                        </li>

                        <li className="shrink-0">
                            <HashLink smooth to="/#contact" className="whitespace-nowrap transition hover:text-blue-600">
                            Contact
                            </HashLink>
                        </li>

                        <li className="shrink-0">
                            <Link to="/credential" className="whitespace-nowrap transition hover:text-blue-600">
                            Legalitas
                            </Link>
                        </li>

                        <li className="shrink-0">
                            <Link to="/project" className="whitespace-nowrap transition hover:text-blue-600">
                            Experience 
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
                            to="/#about" onClick={closeMenu}
                            className="block py-3 transition hover:text-blue-600">Tentang Kami</HashLink>
                        </li>

                        <li>
                            <HashLink smooth
                            to="/#vision" onClick={closeMenu}
                            className="block py-3 transition hover:text-blue-600">Visi & Misi</HashLink>
                        </li>

                        <li>
                            <HashLink smooth
                            to="/#services" onClick={closeMenu}
                            className="block py-3 transition hover:text-blue-600">layanan Kami</HashLink>
                        </li>

                        <li>
                            <HashLink smooth
                            to="/#contact" onClick={closeMenu}
                            className="block py-3 transition hover:text-blue-600">Contact</HashLink>
                        </li>

                        <li>
                            <HashLink smooth
                            to="/credential" onClick={closeMenu}
                            className="block py-3 transition hover:text-blue-600">Legalitas</HashLink>
                        </li>

                        <li>
                            <HashLink smooth
                            to="/project" onClick={closeMenu}
                            className="block py-3 transition hover:text-blue-600">Experience</HashLink>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}
export default Navbar;