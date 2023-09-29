"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const pathName = usePathname();
  return (
    <nav className="flex justify-between items-center bg-transparent p-10">
      <label className="text-lg font-bold mr-4">
        Design<span className="text-red-500">AGENCY</span>
      </label>
      <div className="flex space-x-4 items-center">
        <Link
          href={"/"}
          className={pathName === "/" ? "text-green-500" : "text-black"}
        >
          Home
        </Link>
        <Link
          href="/team"
          className={pathName === "/team" ? "text-green-500" : "text-black"}
        >
          Team
        </Link>
        <Link
          href="/service"
          className={pathName === "/service" ? "text-green-500" : "text-black"}
        >
          Service
        </Link>
        <Link
          href="/projects"
          className={pathName === "/projects" ? "text-green-500" : "text-black"}
        >
          Projects
        </Link>
        <Link
          href="/testimonials"
          className={
            pathName === "/testimonials" ? "text-green-500" : "text-black"
          }
        >
          Testimonials
        </Link>
        <div className="flex space-x-4">
          <button className="border-2 border-green-700  rounded-lg px-4 py-1 transition duration-300">
            Login
          </button>
          <button className="bg-green-500 text-white hover:bg-green-700 hover:text-white rounded-lg px-4 py-1 transition duration-300">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
