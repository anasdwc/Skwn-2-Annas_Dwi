import SectionHeader from "./SectionHeader";
import { AiFillCreditCard } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { RiQuestionMark } from "react-icons/ri";
import { MdTouchApp } from "react-icons/md";

function ServicesItem({ icon, text }) {
  return (
    <div className="service-item flex flex-col items-center">
      <div className="max-w-[32px] rounded-full bg-blue-100 p-2">{icon}</div>
      <h3 className="mt-2 text-center text-xs font-bold text-slate-500">
        {text}
      </h3>
    </div>
  );
}

export default function Services() {
  return (
    <section className="mb-4">
      <SectionHeader text={"Services"} />
      <div className="services-list m-4 flex justify-around">
        <ServicesItem
          icon={<AiFillCreditCard color="rgb(5, 98, 247)" />}
          text="Card"
        />
        <ServicesItem
          icon={<BiDollar color="rgb(5, 98, 247)" />}
          text="Finance"
        />
        <ServicesItem
          icon={<MdTouchApp color="rgb(5, 98, 247)" />}
          text="Top Up"
        />
        <ServicesItem
          icon={<RiQuestionMark color="rgb(5, 98, 247)" />}
          text="Help"
        />
      </div>
    </section>
  );
}
