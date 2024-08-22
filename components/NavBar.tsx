import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="h-[300px] w-full bg-[#b66225] flex flex-col items-center justify-center">
      <div>
        <Button
          className="p-4 rounded-full w-[200px] h-[50px] 
        font-bold text-2xl bg-white text-[red] hover:bg-[red] 
        hover:text-[white] transition duration-300    "
        >
          اتصل الان
        </Button>
      </div>

      <div className="mt-5">
        <p
          className="text-center text-white font-bold
          text-3xl"
        >
          ابو خالد
        </p>
      </div>
      <div className="mt-5">
        <p
          className="text-center text-white font-bold
          text-3xl"
        >
          0546742134
        </p>
      </div>
      <div className="mt-5">
        <Link href={"https://wa.me/+966546742134"} target="_blank">
          <Button
            className="p-4 rounded-full w-[200px] h-[50px] 
        font-bold text-2xl bg-white text-[red] hover:bg-[red] 
        hover:text-[white] transition duration-300    "
          >
            واتساب
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
