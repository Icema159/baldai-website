import { FaCouch, FaDraftingCompass, FaCut } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

export default function Services() {
    const services = [
        {
            title: 'Baldų gamyba',
            icon: <FaCouch size={50} />,
        },
        {
            title: 'Dizainerio paslaugos',
            icon: <FaDraftingCompass size={50} />,
        },
        {
            title: 'Plokščių pjovimas',
            icon: <FaCut size={50} />,
        },
    ]

    return (
        <AnimatedSection id="services" title="Mūsų paslaugos">
            <div className="grid md:grid-cols-3 gap-10 mt-12">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className={`group rounded-2xl p-10 flex flex-col items-center justify-center 
            text-white bg-gray-900 transition duration-300 ease-in-out shadow-xl hover:bg-[#f5f5dc] hover:text-gray-900`}
                    >
                        <div className="mb-5 transition-transform duration-300 group-hover:scale-110">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    )
}