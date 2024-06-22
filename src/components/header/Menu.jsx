import PropTypes from "prop-types";
import menuItems from "./MenuItems";

function Menu({ setMenu }) {
  return (
    <>
      {menuItems.map((menuItem, ind) => {
        return (
          <li
            onClick={() => {
              if (setMenu) {
                setMenu(false);
              }
            }}
            key={ind}
          >
            <a href={menuItem?.id}>
              <button role="link" className="menu-list ">
                {menuItem?.name}
              </button>
            </a>
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
