import HeroSlider from '../components/HeroSlider'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen bg-white">
            <HeroSlider />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-6 text-center">
                <motion.h1
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Sveiki atvykę į mūsų baldų pasaulį
                </motion.h1>
                <motion.p
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl text-white/90 max-w-2xl"
                >
                    Gaminame individualius baldus, kurie kuria jaukumą ir stilių jūsų namuose ar biure.
                </motion.p>
            </div>
        </section>
    )
}