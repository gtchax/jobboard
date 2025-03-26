import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/">
        <h1 className="font-bold text-2xl">
          Job<span className="text-primary">Board</span>
        </h1>
      </Link>
      <div className="flex gap-4 items-center">
        <ThemeToggle />
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
