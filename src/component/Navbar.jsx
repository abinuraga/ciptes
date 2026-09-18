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

                <h1 className="text-2xl font-bold text-blue-900"></h1>
                </HashLink>

                {/* navigation */}
                <nav>
                    <ul className="flex items-center gap-8 font-medium text-gray-700">

                        <li>
                            <HashLink smooth to="/#hero" className="transition hover:text-blue-600">
                            Home
                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="/#about" classname="transition hover:text-blue-600">
                            Tentang Kami
                            </HashLink>
                        </li>
                        
                        <li>
                            <HashLink smooth to="/#vision" className="transition hover:text-blue-600">
                            Visi & Misi
                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="/#services" className="transition hover:text-blue-600">
                            Layanan Kami
                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="/#contact" className="transition hover:text-blue-600">
                            Contact
                            </HashLink>
                        </li>

                        <li>
                            <Link to="/credential" className="transition hover:text-blue-600">
                            Legalitas
                            </Link>
                        </li>

                        <li>
                            <Link to="/project" className="transition hover:text-blue-600">
                            Project 
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Navbar;