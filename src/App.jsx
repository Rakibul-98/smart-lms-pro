
import { Link } from 'react-router';
import './App.css'

const App = () => {
  return (
    <nav >
      <ul className='flex justify-center gap-5 bg-slate-300 py-5'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default App;

