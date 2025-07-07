import { FaBars } from 'react-icons/fa'
import useActiveSection from '../hooks/useActiveSection'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
export default function Navbar() {
    const sections = ['hero', 'about', 'services', 'products', 'projects', 'contact']
    const activeId = useActiveSection(sections)

    const navItems = [
        { id: 'hero', label: 'Pradžia' },
        { id: 'about', label: 'Apie mus' },
        { id: 'services', label: 'Paslaugos' },
        { id: 'products', label: 'Produktai' },
        { id: 'projects', label: 'Projektai' },
        { id: 'contact', label: 'Kontaktai' },
    ]

    return (
        <nav className="sticky top-0 bg-amber-50 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">Baldai</h1>

                <ul className="hidden md:flex gap-8 font-medium text-gray-600">
                    {navItems.map((item) => (
                        <li key={item.id} className="relative">
                            {item.id === 'about' ? (
                                <Link
                                    to="/about"
                                    className={`transition ${activeId === item.id ? 'text-gray-600 font-semibold' : 'hover:text-gray-600'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <HashLink
                                    smooth
                                    to={`/#${item.id}`}
                                    className={`transition ${activeId === item.id ? 'text-gray-600 font-semibold' : 'hover:text-gray-600'
                                        }`}
                                >
                                    {item.label}
                                </HashLink>
                            )}

                            {activeId === item.id && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 bottom-0 h-[4px] w-full bg-black rounded"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>

                <div className="md:hidden text-2xl text-gray-700">
                    <FaBars />
                </div>
            </div>
        </nav>
    )
}