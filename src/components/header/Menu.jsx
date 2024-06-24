import PropTypes from "prop-types";
import { Link } from "react-scroll";
import menuItems from "./MenuItems";

function Menu({ setMenu }) {
  return (
    <>
      {menuItems.map((menuItem, ind) => {
        return (
          <li key={ind}>
            <Link
              onClick={() => {
                if (setMenu) {
                  setMenu(false);
                }
              }}
              to={menuItem?.id}
              activeClass="text-black dark:text-cyan-500 font-semibold menu-list-active"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              className="menu-list"
            >
              <button role="link" className=" ">
                {menuItem?.name}
              </button>
            </Link>
          </li>
        );
      })}
    </>
  );
}
Menu.propTypes = {
  setMenu: PropTypes.func,
};
export default Menu;
