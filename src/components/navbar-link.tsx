import { NavLink } from "react-router-dom";
import { cn } from "../utilities/utils";

interface NavbarLinkProps {
  link: {
    label: string;
    route: string;
  };
  handleRoute: () => void;
}

function NavbarLink({ link, handleRoute }: NavbarLinkProps) {
  return (
    <li className="w-full" onClick={handleRoute}>
      <NavLink
        to={link.route}
        className={({ isActive }) =>
          cn(
            "w-full whitespace-nowrap inline-block font-lexend py-2 px-3 rounded-lg text-2xl transition ease-in-out hover:bg-gray-100 lg:py-3 lg:px-0 lg:rounded-none lg:text-base lg:hover:text-pink-500 lg:hover:bg-transparent lg:border-b-2 lg:border-b-transparent lg:hover:border-b-pink-300",
            isActive && "lg:text-pink-500 lg:border-b-pink-300 border-pink-300"
          )
        }
      >
        {link.label}
      </NavLink>
    </li>
  );
}

export default NavbarLink;