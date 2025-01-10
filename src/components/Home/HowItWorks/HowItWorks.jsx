
export default function HowItWorks() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-10">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">1. Choose a Course</h3>
                        <p className="text-gray-600">Browse through our wide range of IT courses and select the one that suits you.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">2. Learn with AI-Powered Tools</h3>
                        <p className="text-gray-600">Leverage our dynamic resources and AI tools to enhance your learning.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">3. Achieve Your Goals</h3>
                        <p className="text-gray-600">Complete courses, take quizzes, and earn certifications to boost your career.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
