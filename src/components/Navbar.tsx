import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className="w-full bg-black flex items-center justify-between px-6 py-4 text-white fixed top-0 z-50 shadow-md">

      <div className="flex items-center justify-center gap-x-2">
        <img src="/toyota.png" alt="Toyota Logo" className="h-8" />
        <p className="text-lg font-semibold">TOYOTA</p>
      </div>
      
      <NavLink
        to={"/login"}
        className="text-white hover:bg-gray-800 px-3 py-2 rounded-md"
      >
        <AccountCircleIcon className="text-white text-lg" />
      </NavLink>
    </div>
  );
}
