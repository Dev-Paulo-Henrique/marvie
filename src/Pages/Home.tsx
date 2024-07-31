import { useState } from "react";
import ContentLoader from "react-content-loader";
import { Statics } from "../components/Stats";
import { Title } from "../components/Title";

export function Home() {
  const MyLoader = () => <ContentLoader />;
  const [loading, setLoading] = useState(true);

  Title({title: "Home"})

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <div className="p-4">
      {!loading ? (
        <>
          <div>
            <h2 className="fw-normal">Olá, Paulo Henrique!</h2>
            <span className="text-secondary">
              Você fez login em: <strong>{import.meta.env.VITE_APP_TITLE}</strong>
            </span>
          </div>
          <div className="d-flex bg-white w-100 rounded border border-secondary shadow my-4">
          <Statics count={28} text="Pedidos pendentes nesta semana"/>
          <Statics count={6} text="Pedidos não aprovados nesta semana"/>
          <Statics count={2} text="Carrinhos abandonados nesta semana"/>
          <Statics count={3} text="Produtos sem estoque"/>
          </div>
          <hr />
        </>
      ) : (
        <MyLoader />
      )}
    </div>
  );
}
