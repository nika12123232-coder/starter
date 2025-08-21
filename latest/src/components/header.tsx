export const Header = () => {
  return (
    <header className="py-6 bg-gray-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h2 className="text-white text-2xl italic">Logo</h2>
        <nav className="flex gap-10">
          <a href="#" className="text-xl text-white hover:text-blue-400">
            Home
          </a>
          <a href="#" className="text-xl text-white hover:text-blue-400">
            About
          </a>
          <a href="#" className="text-xl text-white hover:text-blue-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
