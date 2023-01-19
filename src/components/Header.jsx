export default function Header() {
  return (
    <header className="flex mx-4 my-6 justify-between">
      <h1 className="text-sm text-slate-500">Hello, <span className="block text-lg font-bold text-black">Aurellia!</span></h1>
      <div>
        <img className="w-12 rounded-full" src="https://xsgames.co/randomusers/avatar.php?g=female" alt="" />
      </div>
    </header>
  )
}
