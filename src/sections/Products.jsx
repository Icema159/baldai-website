import AnimatedSection from '../components/AnimatedSection'

export default function Products() {
    return (
        <AnimatedSection id="products" title="Mūsų produktai">
            <p className="text-gray-600 mb-12">Pasirinkite jums aktualią baldų kategoriją:</p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {/* Virtuvės baldai */}
                <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform duration-300">
                    <img
                        src="/images/virtuviniai.jpg"
                        alt="Virtuvės baldai"
                        className="h-80 w-full object-cover rounded-t-xl"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">Virtuvės baldai</h3>
                    </div>
                </div>

                {/* Svetainės baldai */}
                <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform duration-300">
                    <img
                        src="/images/svetaine.jpg"
                        alt="Svetainės baldai"
                        className="h-80 w-full object-cover rounded-t-xl"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">Svetainės baldai</h3>
                    </div>
                </div>

                {/* Spintos ir prieškambario baldai */}
                <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform duration-300">
                    <img
                        src="/images/spintos.jpg"
                        alt="Spintos ir prieškambario baldai"
                        className="h-80 w-full object-cover rounded-t-xl"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">Spintos ir prieškambario baldai</h3>
                    </div>
                </div>

                {/* Vonios baldai */}
                <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform duration-300">
                    <img
                        src="/images/vonios.jpg"
                        alt="Vonios baldai"
                        className="h-80 w-full object-cover rounded-t-xl"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">Vonios baldai</h3>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    )
}