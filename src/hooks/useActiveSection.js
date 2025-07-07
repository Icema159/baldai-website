import { useEffect, useState } from 'react'

export default function useActiveSection(sectionIds) {
    const [activeId, setActiveId] = useState('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-0% 0px -70% 0px',
                threshold: 0.1,
            }
        )

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => {
            sectionIds.forEach((id) => {
                const el = document.getElementById(id)
                if (el) observer.unobserve(el)
            })
        }
    }, [sectionIds])

    return activeId
}