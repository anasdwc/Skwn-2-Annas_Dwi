import { SiVisa } from "react-icons/si";
import { BiChip } from "react-icons/bi";
import clsx from "clsx";
import SectionHeader from "./SectionHeader";

function CardItem({ primary }) {
  return (
    <div
      className={clsx(
        "card-item relative h-40 w-72 flex-shrink-0 flex-grow rounded-lg bg-white p-4 text-slate-500 drop-shadow-lg",
        primary &&
          "bg-gradient-to-tl from-cyan-400 via-cyan-500 to-blue-500 text-white"
      )}
    >
      <div className="icon absolute flex w-full items-center justify-between pr-8">
        <BiChip size={24} color={primary ? "white" : "blue"} />
        <p className="self-start text-xs">Premium</p>
      </div>
      <div className="number absolute bottom-4 w-full">
        <p>4000 5127 2123 2018</p>
        <div className="name items-cener mt-4 flex justify-between pr-8">
          <p className="text-sm font-bold">Aurellia</p>
          <SiVisa size={24} />
        </div>
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <section className="cards-wrapper">
      <SectionHeader text={"Your Visa"} />
      <div className="cards-list flex gap-6 overflow-x-auto py-4 px-4">
        <CardItem primary />
        <CardItem />
      </div>
    </section>
  );
}
