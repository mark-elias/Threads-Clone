import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { FaSquareThreads } from "react-icons/fa6";
import React from "react";

function NavBar() {
  return (
    <nav className=" flex justify-between px-10 py-5 shadow-xl items-center">
      <div>Cool Logo</div>
      <div className="flex gap-5 items-center">
        <Link href={"/"}>skills</Link>
        <Link href={"/"}>skills</Link>
        <Link href={"/"}>skills</Link>
        <UserButton></UserButton>
      </div>
    </nav>
  );
}

export default NavBar;
