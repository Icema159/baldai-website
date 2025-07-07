import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Products from '../sections/Products'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
    return (
        <div className="bg-white text-gray-800">
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <Services />
                <Products />
                <Projects />
                <Contact />
            </main>
        </div>
    )
}