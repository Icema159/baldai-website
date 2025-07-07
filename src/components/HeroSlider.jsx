import Slider from 'react-slick'

const images = [
    '/images/interjeras.jpg',
    '/images/interjeras3.jpg',
]

export default function HeroSlider() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
        pauseOnHover: false,
    }

    return (
        <Slider {...settings} className="w-full h-full">
            {images.map((src, idx) => (
                <div key={idx}>
                    <img
                        src={src}
                        alt={`baldai-${idx}`}
                        className="w-full h-[100vh] object-cover"
                    />
                </div>
            ))}
        </Slider>
    )
}