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
    <div className="lg:hidden flex">
      <Link href={"/"}>
        <GoHome></GoHome>
        Home
      </Link>
      <Link href={"/search"}>
        <IoSearch></IoSearch>
        Search
      </Link>
      <Link href={"/activity"}>
        <FaRegHeart />
        Activity
      </Link>
      <Link href={"/create"}>
        <IoIosAdd />
        Create
      </Link>
      <Link href={"/communities"}>
        <GrGroup />
        Communities
      </Link>
      <Link href={"/profile"}>
        <MdOutlinePersonOutline />
        Profile
      </Link>
    </div>
  );
}

export default MobileMenu;
