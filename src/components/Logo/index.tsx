import Logotipo from "/logo.svg";

export function Logo() {
  return (
    <a
      href="/"
      className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
    >
      <img src={Logotipo} alt="mdo" width="auto" height="50" />
      <span className="OneLittleFont">{import.meta.env.VITE_APP_TITLE}</span>
    </a>
  );
}
