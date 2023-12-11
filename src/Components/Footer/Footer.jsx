// import LogosSection from "./LogoSection";

const Footer = () => {
  return (
    <div className="py-16 flex justify-center items-center">
      <footer className="footer p-10 container mx-auto flex justify-around">
        <div className="flex flex-col text-left">
          <h3 className="font-black text-xl">Contact</h3>
          <p className="flex flex-col text-left text-sm text-zinc-300/70">
            <small>email: hassan.devalienbrain@gmail.com</small>
            <small>phone: +880 1893 070812</small>
            <small>location: Dhaka, Bangladesh</small>
          </p>
        </div>
        <nav>
          <header className="footer-title">Profiles</header>
          <a className="link link-hover">Github</a>
          <a className="link link-hover">Linkedin</a>
          <a className="link link-hover">Resume</a>
        </nav>
      </footer>
      {/* <div className="border border-t-0 border-b-0 border-red-600 py-10"> */}
      {/* <LogosSection></LogosSection> */}
      {/* </div> */}
    </div>
  );
};

export default Footer;
