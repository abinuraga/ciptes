import porto1 from "../img/mayora.jpg";
import porto2 from "../img/pamafert.png";
import porto3 from "../img/federal food.jpg";
import porto4 from "../img/suzuki.webp";
import porto5 from "../img/gramedia.jpg";
import porto6 from "../img/seiken.webp";

const logos = [
    {
        name: "mayora",
        image: porto1,
    },
    
    {
        name: "permafert",
        image: porto2,
    },

    {
        name: "federal food",
        image: porto3,
    },

    {
        name: "suzuki",
        image: porto4,
    },

    {
        name: "gramedia",
        image: porto5,
    },

    {
        name: "seiken",
        image: porto6,
    },
];

function Logocaraousel() {
    return (
        <section className="overflow-hidden bg-blue-100 py-10">
            <div className="flex w-max animate-marquee">

                {/* set 1 */}
                <div className="flex items-center gap-16 px-8"> {logos.map((logo, index) => (
                    <div key ={`logo-1-${index}`} className="flex h-16 w-48 shrink-0 items-center justify-center">
                        <img 
                            src={logo.image}
                            alt={logo.name}
                            className="max-h-12 max-h-40 object-contain opacity-50 transition-all duration-300 hover:opacity-100 hover:grascale-0"/>
                    </div> ))}
            </div>

            {/* set 2 */}
            <div className="flex items-center gap-16 px-8"> {logos.map((logo, index) => (
                    <div key ={`logo-2-${index}`} className="flex h-16 w-48 shrink-0 items-center justify-center">
                        <img 
                            src={logo.image}
                            alt={logo.name}
                            className="max-h-12 max-h-40 object-contain opacity-50 transition-all duration-300 hover:opacity-100 hover:grascale-0"/>
                    </div> ))}
            </div>

            </div>
        </section>
    );
}

export default Logocaraousel;