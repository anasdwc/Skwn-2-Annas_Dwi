export default function SectionHeader({ text }) {
  return (
    <div className="cards-header mx-4 flex items-center justify-between text-slate-500">
      <h2 className="font-bold">{text}</h2>
      <a href="#" className="text-sm">
        See All
      </a>
    </div>
  );
}
