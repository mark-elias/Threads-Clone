import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";

function LeftMenu() {
  return (
    <section className="flex flex-col bg-neutral items-start max-lg:hidden h-screen gap-8 px-16 pt-10 text-xl">
      <Link href={"/"} className="flex items-center gap-2 hover:text-primary">
        <GoHome className="text-[27px] -mt-1" />
        <p>Home</p>
      </Link>
      <Link
        href={"/search"}
        className="flex items-center gap-2 hover:text-primary"
      >
        <IoSearch className="text-[27px] " />
        <p>Search</p>
      </Link>
      <Link
        href={"/activity"}
        className="flex items-center gap-2 hover:text-primary"
      >
        <FaRegHeart className="text-[24px]" />
        <p>Activity</p>
      </Link>
      <Link
        href={"/create"}
        className="flex items-center -ml-[10px] hover:text-primary"
      >
        <IoIosAdd className="text-[45px]" />
        <p>Create</p>
      </Link>
      <Link
        href={"/communities"}
        className="flex items-center gap-2 hover:text-primary"
      >
        <GrGroup className="text-[25px]" />
        <p>Communities</p>
      </Link>
      <Link
        href={"/profile"}
        className="flex items-center gap-2 hover:text-primary"
      >
        <MdOutlinePersonOutline className="text-[30px] -ml-[1px]" />
        <p>Profile</p>
      </Link>
    </section>
  );
}

export default LeftMenu;
