import SectionHeader from "./SectionHeader";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import clsx from "clsx";

function ActivityCard({ type, nominal, text, location, date, time }) {
  return (
    <div className="activity-item grid grid-cols-[.4fr_1.4fr_1fr] gap-4 rounded-lg bg-white p-4 text-sm drop-shadow-lg">
      <div
        className={clsx(
          "flex max-h-[38px] max-w-[38px] items-center justify-center rounded-full",
          type === "deposit" ? "bg-blue-100" : "bg-red-100"
        )}
      >
        {type === "deposit" ? (
          <BiTrendingUp size={20} color="rgb(37,99,235)" />
        ) : (
          <BiTrendingDown size={20} color="rgb(220,38,38)" />
        )}
      </div>
      <div>
        <h3 className="font-bold">
          {type === "deposit" ? "Deposit" : "Withdraw"}
        </h3>
        <p className="mb-4 font-semibold text-blue-500">
          Rp{nominal ? nominal : "15.510.000"},-
        </p>
        <p className="flex items-center gap-1 text-xs text-slate-500">
          <MdLocationOn size={18} /> {location ? location : "Bank Mandiri ATM"}
        </p>
      </div>
      <div className="flex flex-col items-end justify-between text-xs font-semibold text-slate-500">
        <p>{date ? date : "11 March 2022"}</p>
        <p>{time ? time : "11.22"} AM</p>
      </div>
    </div>
  );
}

export default function Activity() {
  return (
    <section>
      <SectionHeader text={"Activity"} />
      <div className="activity-list mx-4 my-4 flex flex-col gap-4">
        <ActivityCard type="deposit" />
        <ActivityCard type="withdraw" />
        <ActivityCard type="withdraw" />
      </div>
    </section>
  );
}
