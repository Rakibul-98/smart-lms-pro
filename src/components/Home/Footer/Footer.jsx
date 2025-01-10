
export default function Footer() {
    return (
        <footer className="py-10 bg-gray-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                    <div className="text-left">
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul >
                            <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Courses</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Follow Us</h4>
                        <div className="space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                            <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Newsletter</h4>
                        <p className="text-gray-300 mb-4">Subscribe to get the latest updates and offers.</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-lg text-gray-700"
                        />
                        <button>Subscribe</button>
                    </div>
                </div>
                <p className="text-gray-400">&copy; 2025 SmartLMSPro. All rights reserved.</p>
            </div>
        </footer>
    )
}
