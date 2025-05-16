import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black bg-opacity-60 backdrop-blur-md border-b border-gray-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-white tracking-wide">
          My<span className="text-pink-500">Site</span>
        </div>
        <nav className="space-x-4 sm:space-x-6 text-sm sm:text-base font-medium">
          <Link
            href="/"
            className="text-white hover:text-pink-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-pink-400 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/book"
            className="text-white hover:text-pink-400 transition-colors duration-200"
          >
            Book
          </Link>
          <Link
            href="/course"
            className="text-white hover:text-pink-400 transition-colors duration-200"
          >
            Course
          </Link>
        </nav>
      </div>
    </header>
  );
}
