"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Service() {
  const pathName = usePathname();
  return (
    <div className="bg-slate-100 text-black p-4">
      <h1 className="text-2xl font-bold">Team</h1>
      <div className="flex gap-5">
        <Link
          href="/"
          className={pathName === "/" ? "text-green-500" : "text-black"}
        >
          Home
        </Link>
        <Link
          href="/testimonials"
          className={
            pathName === "/testimonials" ? "text-green-500" : "text-black"
          }
        >
          Testimonials
        </Link>
      </div>
    </div>
  );
}
