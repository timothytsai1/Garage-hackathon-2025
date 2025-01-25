import { FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-black text-white flex font-inter">
      <div className="w-1/2 h-full">
        <img/>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center p-16">
        <form className="border-b-2 pb-8 w-full flex flex-col gap-y-4">
          <h1 className="text-3xl font-bold">Log In</h1>
          <div className="flex flex-col gap-y-2">
            <label>Email</label>
            <input className="px-4 py-3 bg-neutral-200 text-black" type="email" />
          </div>
          <div className="flex flex-col gap-y-2">
            <label>Password</label>
            <input className="px-4 py-3 bg-neutral-200 text-black" type="password" />
          </div>
          <button type="button" className="mt-4 bg-white text-black px-4 py-3 font-bold">Log In</button>
        </form>
        <div className="w-full mt-8">
          <button className="w-full bg-white text-black px-4 py-3 flex justify-center items-center gap-x-2 font-bold">
            <FaGoogle />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
