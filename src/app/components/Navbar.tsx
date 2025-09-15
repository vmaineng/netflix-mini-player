import { FaBell, FaSearch, FaUser } from "react-icons/fa";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <h1 className="text-red-600 text-2xl font-bold">NETFLIX</h1>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              TV Shows
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Movies
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              New & Popular
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
            >
              My List
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <FaSearch className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
          <FaBell className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
            <FaUser className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
