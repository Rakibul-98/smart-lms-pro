import { Link } from 'react-router';
import heroImg from '../../../assets/hero.svg';

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-10 pt-28 md:pt-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2">
                <div className='text-center md:text-left flex items-center'>
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Revolutionize Your IT Learning Journey  with Smart LMS Pro</h1>
                        <p className="text-lg md:text-xl mb-8">Your Gateway to IT Excellence!</p>
                        <div className="space-x-4 md:space-x-1 lg:space-x-4">
                            <Link to='/courses'>
                                <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none border-2 border-white">
                                    Explore Courses
                                </button></Link>
                            <Link to="/login">
                                <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none border-2 border-white md:mt-3">
                                    Start Learning Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0">
                    <img
                        src={heroImg}
                        alt="Learning illustration"
                        className="mx-auto w-[90%] max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}
