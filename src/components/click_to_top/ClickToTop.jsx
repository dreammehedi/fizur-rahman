import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ClickToTop() {
  const [toggleClickToTop, setToggleClickToTop] = useState(false);
  useEffect(() => {
    const toggleClickToTopFn = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          setToggleClickToTop(true);
        } else {
          setToggleClickToTop(false);
        }
      });
    };
    toggleClickToTopFn();
    return () => {
      window.removeEventListener("scroll", toggleClickToTopFn());
    };
  }, []);
  return (
    <>
      {toggleClickToTop && (
        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="fixed right-10 bottom-10 z-[888] bg-primary rounded-full p-4 text-white shadow-sm shadow-white animate-pulse cursor-pointer hover:ring-1 hover:ring-primary"
        >
          <FaArrowUp></FaArrowUp>
        </div>
      )}
    </>
  );
}

export default ClickToTop;
