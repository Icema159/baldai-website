import useActiveSection from '../hooks/useActiveSection'

export default function SectionWrapper({ id, children, bg = 'bg-white' }) {
    const sections = ['hero', 'about', 'services', 'products', 'projects', 'contact']
    const activeId = useActiveSection(sections)

    const isActive = activeId === id

    return (
        <section
            id={id}
            className={`${bg} min-h-screen flex flex-col items-center justify-center px-6 text-center transition-all duration-500 ${isActive ? 'scale-[1.02]' : 'scale-100'
                }`}
        >
            {children}
        </section>
    )
}