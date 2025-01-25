import { PiWarehouseDuotone } from 'react-icons/pi';
import { NavLink } from 'react-router';

export default function Homepage() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-black text-white flex">
      <div className="w-45/100">
        <PiWarehouseDuotone />
        <video>
          <source src={'/supra-video.mp4'} type="video/mp4" />
        </video>
      </div>

      <div className="w-55/100 flex flex-col  justify-center items-center px-32 py-16">
        <div className="flex w-full justify-between items-end mt-auto ">
          <ul className="text-7xl gap-16 space-y-2 font-inter">
            <li>
              {/* Homepage */}
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {/* Purchases */}
              <NavLink to="/purchase">Purchase</NavLink>
            </li>

            <li>
              {/* Payments */}
              <NavLink to="/payments">Payment</NavLink>
            </li>
          </ul>

          <p className="w-28 italic font-[Joan] text-xl">
            All In One VR Shopping Experience
          </p>
        </div>

        <div className="flex gap-64 mt-48 w-full justify-end">
          <p className='text-sm font-inter'>
            Made with love by hackers
            {/* make this sound better later */}
          </p>
        </div>
      </div>
    </div>
  );
}
