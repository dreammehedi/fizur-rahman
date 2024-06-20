import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { RiMenu3Line } from "react-icons/ri";
import ResumeBtn from "../button/ResumeBtn";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      {/* header */}
      <header className="w-full sticky top-0 z-[999] bg-white">
        {/* navbar */}
        <nav className="container py-4 md:py-6 lg:py-8 flex justify-between items-center gap-4">
          {/* logo */}
          <Logo></Logo>

          {/* desktop menu */}
          <ul
            className={`hidden lg:flex justify-center items-center gap-4 md:gap-6 font-medium capitalize *:text-primary text-[15px]`}
          >
            <Menu></Menu>
          </ul>
          {/* mobile & tablet menu */}
          {menu && (
            <ul
              className={`${
                menu ? "top-[80px]" : "-top-full"
              } rounded-xl lg:hidden bg-primary z-[9999] w-full h-screen fixed my-transiion left-0 flex flex-col justify-center items-center gap-4 md:gap-6 font-medium capitalize *:text-white *:hover:text-white`}
            >
              <Menu></Menu>
            </ul>
          )}

          <div className="flex items-center gap-4">
            {/* resume button */}
            <a
              href="https://drive.google.com/file/d/1skAkbb5Wd4xI-hogB5nupKO_z8FLUVK3/view?usp=drive_link"
              download={true}
            >
              <ResumeBtn></ResumeBtn>
            </a>
            <div
              onClick={() => {
                setMenu(!menu);
              }}
              className="z-[99999] lg:hidden cursor-pointer text-2xl bg-primary text-white p-2 rounded-xl"
            >
              {menu ? <CgClose></CgClose> : <RiMenu3Line></RiMenu3Line>}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
