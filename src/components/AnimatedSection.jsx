import { motion } from 'framer-motion'

export default function AnimatedSection({ id, title, children }) {
    return (
        <section
            id={id}
            className="min-h-screen flex items-center justify-center px-6 py-32 bg-white"
        >
            <div className="text-center max-w-4xl w-full">
                <motion.h2
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl text-gray-700"
                >
                    {children}
                </motion.p>
            </div>
        </section>
    )
}
