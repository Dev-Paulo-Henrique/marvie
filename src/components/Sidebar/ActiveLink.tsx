import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
}

export function ActiveLink({ href, children }: ActiveLinkProps) {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          `nav-link d-flex align-items-center ${
            isActive ? "active bg-white text-dark" : "text-white"
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
