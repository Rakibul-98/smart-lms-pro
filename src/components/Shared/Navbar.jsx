import { Link } from "react-router";

export default function Navbar() {

    const studentId = 'stu12345';

    return (
        <nav >
            <ul className='flex justify-center gap-5 bg-slate-300 py-5'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to={`/profile/${studentId}`}>Profile</Link></li>
                <li><Link to="/admin">Admin Dashboard</Link></li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </nav>
    )
}
