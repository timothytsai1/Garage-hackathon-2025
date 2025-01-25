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
        <div className='flex w-full justify-between items-end mt-auto font-inter'>
          <ul className='text-6xl gap-16 space-y-2'>
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

          <p className='w-24 italic '>All in one VR shopping experience</p>
        </div>

        <div className="flex gap-64 mt-48 w-full justify-end">
          <p>
            Made with love by hackers
            {/* make this sound better later */}
          </p>
        </div>
      </div>
    </div>
  );
}
