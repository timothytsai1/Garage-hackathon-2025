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
    <div className="w-full h-25 bg-black flex items-center justify-between px-6 text-white fixed top-0 z-50 shadow-md">
      <button
        onClick={openSidebar}
        className="flex items-center gap-2 text-white hover:bg-gray-800 px-3 py-2 rounded-md"
      >
        <MenuIcon fontSize="large" className="text-white" />
        <span className="text-2xl font-inter">Menu</span>
      </button>

      <div className="flex items-center justify-center">
        <img src="/toyotalogo.PNG" alt="Toyota Logo" className="h-13" />
      </div>
      
      <button
        onClick={goToProfile}
        className="text-white hover:bg-gray-800 px-3 py-2 rounded-md"
      >
        <AccountCircleIcon fontSize="large" className="text-white" />
      </button>
    </div>
  );
}
