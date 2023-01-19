import { IoMdArrowBack } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function HeaderAbout() {
  return (
    <header className="mb-4 bg-gradient-to-tl from-cyan-400 via-cyan-500 to-blue-500 px-4">
      <div className="flex items-center justify-between pt-4">
        <div className="title-nav flex items-center gap-2">
          <NavLink to="/" exact>
            <IoMdArrowBack color="white" />
          </NavLink>
          <h2 className="text-white">Account Finance</h2>
        </div>
        <div className="icon">
          <AiFillQuestionCircle color="white" />
        </div>
      </div>
      <div className="mt-4 pb-8 text-sm text-white">
        <h3 className="text-xl font-bold">Rp. 25.550.000,-</h3>
        <p>12 June 2022</p>
      </div>
    </header>
  );
}
