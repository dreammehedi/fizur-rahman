import PropTypes from "prop-types";
function Logo({ cls }) {
  return (
    <a href="/">
      <h4
        className={`font-bold text-xl lg:text-[22px] my-transition text-primary cursor-pointer flex items-center gap-2`}
      >
        <img
          className={`${cls} w-20 h-auto object-cover rounded-full`}
          src="https://i.ibb.co/z4GdkLQ/mehedi-logo.png"
          alt=""
        />
        Mehedi Hassan
      </h4>
    </a>
  );
}
Logo.propTypes = {
  cls: PropTypes.string,
};
export default Logo;
