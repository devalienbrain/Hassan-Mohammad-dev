// import LogosSection from "./LogoSection";

import LogosSection from "./LogoSection";

const Footer = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center">
      <footer className="footer p-10 container mx-auto flex justify-around">
        <div className="flex flex-col text-left">
          <h3 className="font-black text-xl">Contacts</h3>
          <p className="flex flex-col text-left text-sm text-zinc-300/70">
            <small>email: hassansabbir0321@gmail.com</small>
            <small>phone: +880 1893 070812</small>
            <small>location: Dhaka, Bangladesh</small>
          </p>
        </div>
        <nav>
          <header className="footer-title">Profiles</header>
          <a
            href="https://github.com/devalienbrain"
            target="_blanc"
            className="link link-hover"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/hassan-mohammad-21a0962a0/"
            target="_blanc"
            className="link link-hover"
          >
            Linkedin
          </a>
          <a
            href="https://docs.google.com/document/d/1HqzqNTkhtamA70NjiNhPmuCkvJ6tX0z7/edit?usp=sharing&ouid=112922815759485059346&rtpof=true&sd=true"
            target="_blanc"
            className="link link-hover"
          >
            Resume
          </a>
          <a
            href="https://drive.google.com/file/d/1CGxJCrSUUFQ5n50VPs6aLJN9yL3xf242/view?usp=sharing"
            target="_blanc"
            className="link link-hover"
          >
            Video Resume
          </a>
        </nav>
      </footer>
      <div className="my-10">
        <LogosSection></LogosSection>
      </div>
      <div className="text-center text-xs pt-16">
        <p>
          <small>@ 2023 Hassan + Web Developer</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
