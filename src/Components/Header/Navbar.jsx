import { NavLink } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
const Navbar = () => {
  const links = (
    <>
      <div className="flex justify-center items-center gap-5 md:gap-7">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-zinc-400/10 font-bold py-2 px-4 rounded-xl"
              : ""
          }
        >
          <div className="flex justify-center items-center gap-2">
            About
            <span className="border border-zinc-200/50 rounded">
              <RxSlash />
            </span>
          </div>
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-zinc-400/10 font-bold py-2 px-4 rounded-xl"
              : ""
          }
        >
          Resume
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-zinc-400/10 font-bold py-2 px-4 rounded-xl"
              : ""
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-zinc-400/10 font-bold py-2 px-4 rounded-xl"
              : ""
          }
        >
          Skills
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-zinc-400/10 font-bold py-2 px-4 rounded-xl"
              : ""
          }
        >
          Contact
        </NavLink>
      </div>
    </>
  );

  return (
    <div>
      <div className="flex justify-center items-center gap-3 text-xs md:text-sm">
        {links}
      </div>
    </div>
  );
};

export default Navbar;
