import AnimatedSection from '../components/AnimatedSection'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// 👇 Rodyklių komponentai – turi būti viršuje
function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={`${className} left-0 z-10 text-3xl text-gray-800 hover:text-black`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            ‹
        </div>
    )
}

function NextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={`${className} right-0 z-10 text-3xl text-gray-800 hover:text-black`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            ›
        </div>
    )
}

export default function Projects() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <section id="projects" className="px-6 py-20 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Įgyvendinti projektai</h2>
                <p className="text-gray-600">Pažvelkite į kai kuriuos mūsų atliktus darbus.</p>
            </div>

            <Slider {...settings}>
                <div className="px-4">
                    <img
                        src="/images/project1.jpg"
                        alt="Projektas 1"
                        className="rounded-xl w-full h-80 object-cover shadow-lg"
                    />
                </div>
                <div className="px-4">
                    <img
                        src="/images/project2.jpg"
                        alt="Projektas 2"
                        className="rounded-xl w-full h-80 object-cover shadow-lg"
                    />
                </div>
                <div className="px-4">
                    <img
                        src="/images/project3.jpg"
                        alt="Projektas 3"
                        className="rounded-xl w-full h-80 object-cover shadow-lg"
                    />
                </div>
                {/* Galima pridėti daugiau */}
            </Slider>
        </section>
    )
}