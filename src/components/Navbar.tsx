import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  const openSidebar = () => {
    console.log("shashank sidebar");
  };

  const goToProfile = () => {
    console.log("shashank profile");
  };

  return (
    <div className="w-full bg-black flex items-center justify-between px-6 py-4 text-white fixed top-0 z-50 shadow-md">
      <button
        onClick={openSidebar}
        className="flex items-center gap-2 text-white hover:bg-gray-800 px-3 py-2 rounded-md"
      >
        <MenuIcon className="text-white text-lg" />
        <span className="text-lg font-inter font-semibold">Menu</span>
      </button>

      <div className="flex items-center justify-center gap-x-2">
        <img src="/toyota.png" alt="Toyota Logo" className="h-8" />
        <p className="text-lg font-semibold">TOYOTA</p>
      </div>
      
      <button
        onClick={goToProfile}
        className="text-white hover:bg-gray-800 px-3 py-2 rounded-md"
      >
        <AccountCircleIcon className="text-white text-lg" />
      </button>
    </div>
  );
}
