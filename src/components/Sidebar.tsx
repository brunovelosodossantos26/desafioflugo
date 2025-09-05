import { useState } from "react";
import logo from "../assets/flugo_logo.png";
import user from "../assets/user.png";
import primary from "../assets/primary.png";
import { Link } from "react-router";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 flex items-center">
        <div className="pr-2">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 focus:outline-none"
          >
            <div className="space-y-1 mt-2">
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>
        <div>
          <Link to="/">
            <img className="w-[75px] h-[28px]" src={logo} alt="Logo" />
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex w-[20%] h-full p-4 flex-col gap-2 text-[#637381] border-r border-dashed border-gray-300 pb-6">
        <Link to="/">
          <img className="w-[75px] h-[28px]" src={logo} alt="Logo" />
        </Link>
        <div className=" h-[15%] rounded pt-4 flex flex-col">
          <Link to="/">
            <div className="flex items-center gap-3">
              <img className="w-[24px] h-[24px]" src={user} />
              <p className="text-[14px] cursor-pointer">Colaboradores</p>
              <img className="ml-auto mr-5" src={primary} alt="" />
            </div>
          </Link>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 bg-black/30 z-50">
          <div className="fixed left-0 top-0 w-64 h-full bg-white p-4 shadow-lg z-50">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" onClick={() => setOpen(false)}>
                <img className="w-[75px] h-[28px]" src={logo} alt="Logo" />
              </Link>
              <button onClick={() => setOpen(false)}>X</button>
            </div>

            <Link to="/" onClick={() => setOpen(false)}>
              <div className="flex items-center gap-3 mb-4">
                <img className="w-[24px] h-[24px]" src={user} />
                <p className="text-[14px] cursor-pointer">Colaboradores</p>
                <img className="ml-auto mr-5" src={primary} alt="" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
