import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Homepage() {
  const mediaFiles = ['/shoot1.mp4', '/supra-video.mp4', '/shoot2.mp4'];
  const [currentMedia, setCurrentMedia] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentMedia((prev) => (prev + 1) % mediaFiles.length);
        setIsFading(false);
      }, 350);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-black text-white">
      <div className="relative w-screen h-screen">
        {mediaFiles[currentMedia].endsWith('.mp4') ? (
          <video
            key={mediaFiles[currentMedia]}
            className="w-full h-full object-cover"
            autoPlay
            muted
          >
            <source src={mediaFiles[currentMedia]} type="video/mp4" />
          </video>
        ) : (
          <img
            key={mediaFiles[currentMedia]}
            src={mediaFiles[currentMedia]}
            alt="Media"
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute bottom-13/50 left-8 md:left-16 lg:left-24 z-20 space-y-6">
          <h1 className="text-8xl gap-16 space-y-2 font-inter group">
            Let's go places
          </h1>

          <button
            onClick={handleScroll}
            className="px-6 bottom-0 py-3 border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Build your Toyota
          </button>
        </div>

        <div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          onClick={handleScroll}
        >
          <KeyboardArrowDownIcon
            fontSize="large"
            className="opacity-50 text-white animate-bounce"
          />
        </div>
      </div>

      <div
        ref={contentRef}
        className="min-h-screen flex flex-col justify-center items-center px-32 py-16"
      >
        <div className="flex w-full justify-between items-end mt-auto">
          <ul className="text-7xl gap-16 space-y-2 font-inter group">
            <li>
              <NavLink to="/" className="underline hover:underline group-hover:no-underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/purchase"
                className="hover:underline group-hover:no-underline"
              >
                Purchase
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/payments"
                className="hover:underline group-hover:no-underline"
              >
                Payment
              </NavLink>
            </li>
          </ul>
          <p className="w-28 italic font-[Joan] text-xl">
            All In One VR Shopping Experience
          </p>
        </div>

        <div className="flex gap-64 mt-48 w-full justify-end">
          <p className="text-sm font-inter">Made with ❤ by hackers</p>
        </div>
      </div>
    </div>
  );
}
