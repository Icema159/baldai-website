import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-[20vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-amber-50"
        >
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mb-12 max-w-3xl"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Susisiekite su mumis
                </h2>
                <p className="text-xl md:text-2xl text-gray-700">
                    Jei turite klausimų ar norite pradėti projektą, susisiekite el. paštu arba telefonu.
                </p>
            </motion.div>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-10 text-gray-700 text-lg items-center"
            >
                <div className="flex items-center gap-3 text-xl">
                    <FaEnvelope className="text-2xl" />
                    <span>info@baldai.lt</span>
                </div>
                <div className="flex items-center gap-3 text-xl">
                    <FaPhoneAlt className="text-2xl" />
                    <span>+370 600 00000</span>
                </div>
                <div className="flex items-center gap-3 text-xl">
                    <FaMapMarkerAlt className="text-2xl" />
                    <span>Baldų g. 12, Kaunas</span>
                </div>
            </motion.div>
        </section>
    )
}