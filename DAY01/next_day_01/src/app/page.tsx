import Link from "next/link";
import ButtonPrint from "./components/button";
import ImageCarousel from "./components/imageCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans relative">
      <main className="flex flex-col sm:flex-row items-start justify-between px-6 py-16 sm:py-32 max-w-7xl mx-auto gap-10">
        {/* Text content top-left */}
        <div className="flex flex-col max-w-xl space-y-6">
          <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Welcome to <span className="text-pink-500">Home</span> Page
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Learn, build, and deploy full-stack applications with ease. Embrace the power of React and the simplicity of Next.js.
          </p>
          <ButtonPrint />
        </div>

        {/* Carousel top-right */}
        <div className="w-full sm:w-1/2 max-w-xl">
          <ImageCarousel />
        </div>
      </main>

      <footer className="absolute bottom-0 w-full text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Next.JS All rights reserved.
      </footer>
    </div>
  );
}
