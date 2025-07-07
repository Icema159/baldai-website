import Navbar from '../components/Navbar'

export default function About() {
    return (
        <>
            <Navbar />
            <section className="min-h-screen px-6 py-20 bg-white text-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">Apie mus</h1>
                    <p className="text-lg text-gray-600">
                        Esame baldų gamybos komanda, kurianti išskirtinius sprendimus jūsų namams ar verslui.
                        Patirtis, kokybė, kruopštumas – mūsų kertinės vertybės.
                    </p>
                </div>
            </section>
        </>
    )
}