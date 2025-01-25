import { PiWarehouseDuotone } from 'react-icons/pi';
import { NavLink } from 'react-router';
import { Parallax } from 'react-scroll-parallax';

export default function Homepage() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-black text-white flex">
      <div className="w-45/100 relative">
        <PiWarehouseDuotone className="absolute z-15000 top-8 left-8 text-4xl" />
        <Parallax
          className=" w-full h-full parallax-element"
          speed={-20}
          style={{ transform: 'translateX(0)' }}
        >
          <video className="object-cover w-full h-full " autoPlay muted loop>
            <source src={'/supra-video.mp4'} type="video/mp4" />
          </video>
        </Parallax>
      </div>

      <div className="w-55/100 flex flex-col  justify-center items-center px-32 py-16">
        <div className="flex w-full justify-between items-end mt-auto ">
          <ul className="text-7xl gap-16 space-y-2 font-inter">
            <li>
              {/* Homepage */}
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              {/* Purchases */}
              <NavLink to="/purchase" className="hover:underline">
                Purchase
              </NavLink>
            </li>

            <li>
              {/* Payments */}
              <NavLink to="/payments" className="hover:underline">
                Payment
              </NavLink>
            </li>
          </ul>

          <p className="w-28 italic font-[Joan] text-xl">
            All In One VR Shopping Experience
          </p>
        </div>

        <div className="flex gap-64 mt-48 w-full justify-end">
          <p className="text-sm font-inter">
            Made with love by hackers
            {/* make this sound better later */}
          </p>
        </div>
      </div>
    </div>
  );
}
