import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../img/logo_perusahaan.jpeg";


function Navbar () {
    
    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* logo */}
                <HashLink smooth to="/#hero" className="flex items-center gap-3">
                <img src={logo} alt="PT. Consulindo Inti Prima" className="h-12 w-12 object-contain"/>

                <h1 className="h-7 w-7 sm:h-8 sm:w-8 md:h-12 md:w-12 object-contain text-2xl font-bold text-blue-900"></h1>
                </HashLink>

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
        </header>
    )
}
export default Navbar;