function Footer() {
  return (
    <>
      <footer className="py-6 md:py-8 bg-main-bg dark:bg-gray-900">
        <div className="container flex flex-col justify-center items-center text-center">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved by Fizur
            Rahman.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
