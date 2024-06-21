import Logo from "./../header/Logo";
function Footer() {
  return (
    <>
      <footer className="py-6 md:py-8">
        <div className="container flex flex-col justify-center items-center text-center">
          <Logo></Logo>
          <p>
            &copy; {new Date().getFullYear()} All rights reserved by Mehedi
            Hassan Miraj.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
