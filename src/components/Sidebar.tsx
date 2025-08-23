import logo from "../assets/flugo_logo.png";
import user from "../assets/user.png";
import primary from "../assets/primary.png";

export default function Sidebar() {
  return (
    <div className="w-[20%] h-full p-4 flex-col gap-2 text-[#637381] hidden lg:flex border-r border-dashed border-gray-300 pb-6">
      <img className="w-[75px] h-[28px]" src={logo} alt="Logo" />

      <div className=" h-[15%] rounded pt-4 flex flex-col">
        <div className="flex items-center gap-3">
          <img className="w-[24px] h-[24px]" src={user} />
          <p className="text-[14px] cursor-pointer ">Colaboradores</p>
          <img
            className=" ml-auto mr-5
          
          "
            src={primary}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
