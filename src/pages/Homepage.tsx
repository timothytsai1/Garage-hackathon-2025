import { useState, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Modal from '@mui/material/Modal'
import Navbar from '../components/Navbar';
import Build from '../components/Build';

export default function Homepage() {
  const mediaFiles = ['/shoot1.mp4', '/supra-video.mp4', '/shoot2.mp4'];
  const [currentMedia, setCurrentMedia] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentMedia((prev) => (prev + 1) % mediaFiles.length);
      }, 350);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // TODO: add smooth scrolling currently doesn't work
  const handleScroll = (id:string) => {
      const section = document.getElementById(id);
      if (section) {
        const topOffset = section.offsetTop;
        window.scrollTo({
            top: topOffset,
            behavior: "smooth"
        })
      }
  };

  return (
    <div>
        <Navbar/>
      <div className="relative w-full h-screen">
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
            type="button"
            onClick={() => handleScroll("build")}
            className="cursor-pointer px-6 bottom-0 py-3 border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Build your Toyota
          </button>
        </div>

        <div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          onClick={() => handleScroll("build")}
        >
          <KeyboardArrowDownIcon
            fontSize="large"
            className="opacity-50 text-white animate-bounce"
          />
        </div>
      </div>

      <div id="build">
        <Build setOpen={(msg:any) => {setOpen(true); setModalMsg(msg)}}/>
      </div>
    
    <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-md bg-neutral-700 min-w-80'>
            {modalMsg}
        </div>
    </Modal>

    </div>
  );
}
