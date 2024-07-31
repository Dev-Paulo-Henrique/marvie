import "../../scss/styles.scss";
import { Logo } from "../Logo";
import { Search } from "../Search";
import "./style.scss";
import { CiShoppingCart } from "react-icons/ci";

interface HeaderProps {
  role?: string;
}

export function Header({ role }: HeaderProps) {
  return (
    <>
      <header className="p-3 border-bottom w-100 bg-custom-primary">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <Logo/>

            {/* <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
                            <li><a href="#" className="nav-link px-2 link-dark">Inventory</a></li>
                            <li><a href="#" className="nav-link px-2 link-dark">Customers</a></li>
                            <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
                        </ul> */}

            {role === "Administrador" ? (
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  className="rounded-circle mb-1"
                  width={40}
                  alt="Avatar"
                />
                <small className="text-white">John Doe</small>
              </div>
            ) : (
              <>
                <Search />
                <div className="d-flex justify-content-center align-items-center">
                  <a
                    href="#"
                    className="d-block link-dark text-decoration-none"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <CiShoppingCart color="#FFFFFF" size={32} />
                    <span className="badge badge-light text-dark">4</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
