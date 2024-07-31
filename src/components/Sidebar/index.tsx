import { Logo } from "../Logo";
import { IoHomeOutline, IoShirtOutline, IoLogOutOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
import { GoInbox } from "react-icons/go";
import { ActiveLink } from "./ActiveLink";

import "./style.scss"

export function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-custom-primary position-fixed"
      style={{ width: "280px", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <Logo />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <ActiveLink href="/admin/home">
          <IoHomeOutline className="bi me-2" />
          Início
        </ActiveLink>
        <ActiveLink href="/admin/dashboard">
          <BsBarChart className="bi me-2" />
          Dashboard
        </ActiveLink>
        <ActiveLink href="/admin/orders">
          <GoInbox className="bi me-2" />
          Pedidos
        </ActiveLink>
        <ActiveLink href="/admin/products">
          <IoShirtOutline className="bi me-2" />
          Produtos
        </ActiveLink>
        <ActiveLink href="/admin/customers">
          <FiUsers className="bi me-2" />
          Clientes
        </ActiveLink>
      </ul>
      <hr />
      <ul className="nav nav-pills flex-column mb-0">
        <ActiveLink href="/">
          <IoLogOutOutline className="bi me-2" />
          Sair
        </ActiveLink>
      </ul>
    </div>
  );
}
