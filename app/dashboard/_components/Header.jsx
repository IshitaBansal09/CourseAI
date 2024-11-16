import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
// import logo from

function Header() {
  return (
    <div className="flex justify-between items-center p-4 shadow-sm">
      <Image src={"/logo.png"} alt="logo" width={40} height={40} />
      <UserButton />
    </div>
  );
}

export default Header;
