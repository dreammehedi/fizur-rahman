import ResumeBtn from "../button/ResumeBtn";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <>
      {/* header */}
      <header className="w-full sticky top-0 z-[99999] bg-white">
        {/* navbar */}
        <nav className="container py-8 flex justify-between items-center gap-4">
          {/* logo */}
          <Logo></Logo>

          {/* desktop menu */}
          <ul
            className={`flex justify-center items-center gap-4 md:gap-6 font-medium capitalize *:text-[#2a1454] text-[15px]`}
          >
            <Menu></Menu>
          </ul>

          {/* resume button */}
          <ResumeBtn></ResumeBtn>
        </nav>
      </header>
    </>
  );
}

export default Header;
