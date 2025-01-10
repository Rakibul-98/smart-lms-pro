import { Link } from "react-router";
import logo from '../../assets/logo.png';

export default function Navbar() {

    const studentId = 'stu12345';

    return (
        <nav className="absolute top-0 left-0 w-full py-4 flex justify-between px-10">
            <Link to="/">
                <img src={logo} alt="Smart LMS" className="h-16" />
            </Link>
            <ul className="flex space-x-8">
                <li>
                    <Link to={`/profile/${studentId}`} className="text-white hover:text-gray-300">
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
