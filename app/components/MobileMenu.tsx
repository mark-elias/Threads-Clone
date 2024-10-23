import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { MdOutlinePersonOutline } from "react-icons/md";

function MobileMenu() {
  return (
    <div className="flex justify-center gap-5 items-center lg:hidden bg-neutral">
      <Link href={"/"} className="text-[30px]">
        <GoHome></GoHome>
      </Link>
      <Link href={"/search"} className="text-[27px]">
        <IoSearch></IoSearch>
      </Link>
      <Link href={"/activity"} className="text-[27px]">
        <FaRegHeart />
      </Link>
      <Link href={"/create"} className="text-[50px]">
        <IoIosAdd />
      </Link>
      <Link href={"/communities"} className="text-[25px]">
        <GrGroup />
      </Link>
      <Link href={"/profile"} className="text-[30px]">
        <MdOutlinePersonOutline />
      </Link>
    </div>
  );
}

export default MobileMenu;
