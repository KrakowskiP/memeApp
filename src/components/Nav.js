import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? "activeNavlink" : "notActiveNavLink"
        }
        to="/hot"
      >
        Hot
      </NavLink>{" "}
      |{" "}
      <NavLink
        className={({ isActive }) =>
          isActive ? "activeNavlink" : "notActiveNavLink"
        }
        to="/regular"
      >
        Regular
      </NavLink>
    </nav>
  );
}
