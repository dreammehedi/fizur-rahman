import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { RiMenu3Line } from "react-icons/ri";
import ResumeBtn from "../button/ResumeBtn";
import ThemeController from "./../theme/ThemeController";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const stickyHeaderFn = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", stickyHeaderFn);
    return () => {
      window.removeEventListener("scroll", stickyHeaderFn);
    };
  }, []);
  return (
    <>
      {/* header */}
      <header
        className={`w-full ${
          sticky && "sticky top-0 shadow-lg shadow-primary/30"
        } z-[999] bg-white dark:bg-gray-900 my-transition`}
      >
        {/* navbar */}
        <nav
          className={`container ${
            sticky ? "py-3 lg:py-6" : "py-4 md:py-6 lg:py-8"
          }  flex justify-between items-center gap-3`}
        >
          {/* logo */}
          <Logo cls={"hidden md:inline-block"}></Logo>

          {/* desktop menu */}
          <ul
            className={`hidden lg:flex justify-center items-center gap-4 md:gap-6 font-medium capitalize *:text-primary dark:*:text-white text-[15px]`}
          >
            <Menu></Menu>
          </ul>
          {/* mobile & tablet menu */}
          {menu && (
            <ul
              className={`${
                menu ? "top-[64px]" : "-top-full"
              } rounded-xl lg:hidden bg-primary dark:bg-gray-900 z-[99999] w-full h-[calc(100vh-64px)] fixed my-transiion left-0 flex flex-col justify-center items-center gap-4 md:gap-6 font-medium capitalize *:text-white *:hover:text-white`}
            >
              <Menu setMenu={setMenu}></Menu>
              {/* resume button */}
              <a
                href="https://drive.google.com/file/d/1skAkbb5Wd4xI-hogB5nupKO_z8FLUVK3/view?usp=drive_link"
                download={true}
                className=""
              >
                <ResumeBtn></ResumeBtn>
              </a>
            </ul>
          )}

          <div className="flex items-center gap-4">
            {/* resume button */}
            <a
              href="https://drive.google.com/file/d/1skAkbb5Wd4xI-hogB5nupKO_z8FLUVK3/view?usp=drive_link"
              download={true}
              className="hidden lg:inline-block"
            >
              <ResumeBtn></ResumeBtn>
            </a>
            {/* hamburger menu */}
            <div
              onClick={() => {
                setMenu(!menu);
              }}
              className="z-[99999] lg:hidden cursor-pointer text-2xl dark:bg-white dark:text-primary bg-primary text-white p-2 rounded-xl"
            >
              {menu ? <CgClose></CgClose> : <RiMenu3Line></RiMenu3Line>}
            </div>

            {/* toggle screen more dark & light */}
            <ThemeController></ThemeController>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
