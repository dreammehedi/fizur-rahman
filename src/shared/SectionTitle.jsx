import PropTypes from "prop-types";
function SectionTitle({ title, desc }) {
  return (
    <>
      <div className="container flex flex-col justify-center items-center text-center space-y-2 w-full md:max-w-2xl md:mx-auto">
        <h2 className="bg-gradient-main-bg text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl font-semibold">
          {title}
        </h2>
        <p>{desc}</p>
      </div>
    </>
  );
}
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default SectionTitle;
