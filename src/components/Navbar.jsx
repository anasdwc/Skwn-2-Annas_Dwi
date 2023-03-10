import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function NavbarButton({ icon, isActive, link }) {
  const colorIcon = isActive ? "rgb(37,99,235)" : "rgb(100,116,139)";

  return (
    <div className="icon">
      <NavLink
        to={link ? link : "/"}
        className="flex cursor-pointer flex-col items-center gap-1"
      >
        <IconContext.Provider value={{ color: colorIcon, size: 20 }}>
          {icon}
        </IconContext.Provider>
        {isActive && (
          <div className="active h-[6px] w-[6px] rounded-full bg-blue-500"></div>
        )}
      </NavLink>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 z-10 w-full bg-white py-4 px-8 drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]">
      <div className="menus flex justify-between">
        <NavbarButton isActive={true} icon={<AiFillHome />} />
        <NavbarButton icon={<BiHistory />} />
        <NavbarButton icon={<MdMessage />} />
        <NavbarButton link={"/about"} icon={<BsPersonFill />} />
      </div>
    </nav>
  );
}
