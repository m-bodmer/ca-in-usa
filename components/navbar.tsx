export default function Navbar() {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/"
          className="text-2xl no-underline text-white hover:border-slate-400"
        >
          Home 🍁
        </a>
      </div>
      <div>
        <a
          href="/about"
          className="text-lg no-underline text-white hover:border-slate-400 ml-2"
        >
          About ❓
        </a>
      </div>
    </nav>
  )
}
