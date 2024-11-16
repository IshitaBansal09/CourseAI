import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import {Button} from "../../components/ui/button"


function Header() {
    return (
        <>
            <div className="flex justify-between px-12 py-2 shadow-sm">
            <Image src={logo} alt="logo" width={38} height={38} />
            <Button>Get Started</Button>
            </div>
        </>
    );
}

export default Header;
