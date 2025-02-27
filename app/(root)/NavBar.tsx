import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FaSquareThreads } from "react-icons/fa6";
import React from "react";

function NavBar() {
  return (
    <nav className=" flex justify-between px-10 py-5 shadow-xl items-center bg-neutral">
      <Link href={"/"} className="flex items-center gap-2 hover:text-primary">
        <FaSquareThreads className="text-3xl text-primary" />
        <p className="text-xl text-primary font-bold">threads clone</p>
      </Link>

      <UserButton></UserButton>
    </nav>
  );
}

export default NavBar;
