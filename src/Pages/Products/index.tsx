import { useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { api } from "../../services/api";
import { CiSearch } from "react-icons/ci";
import { TableRowProducts } from "../../components/TableRow";
import Logo from "/logo.svg";
import { Header } from "../Admin/Header";

interface ProductsProps {
  id: number;
  nome: string;
  createdAt: string;
  relativeDate: string;
  descricao: string;
  estoque: number;
  data_fabricacao: string;
  valor: number;
  categoria: number;
}

export function Products() {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  Title({ title: "Produtos" });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
        // console.log(products);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchUsers();
  }, [products]);

  useEffect(() => {
    const headerCheckbox = document.getElementById(
      "header-checkbox"
    ) as HTMLInputElement;

    if (headerCheckbox) {
      const handleCheckboxChange = (event: Event) => {
        const isChecked = (event.target as HTMLInputElement).checked;
        const rowCheckboxes = document.querySelectorAll(
          ".row-checkbox"
        ) as NodeListOf<HTMLInputElement>;
        rowCheckboxes.forEach((checkbox) => {
          checkbox.checked = isChecked;
        });
      };

      headerCheckbox.addEventListener("change", handleCheckboxChange);

      return () => {
        headerCheckbox.removeEventListener("change", handleCheckboxChange);
      };
    }
  }, [products]);

  const filteredProducts = products.filter((product) =>
    product.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Header title="Produtos" link="products/new" textButton="Novo Produto"/>
      <div className="pb-4">
        <div
          data-mdb-input-init
          className="form-outline mb-4 position-relative"
        >
          <CiSearch className="position-absolute top-50 start-0 translate-middle-y ms-3" />
          <input
            type="text"
            className="form-control ps-5"
            id="datatable-search-input"
            placeholder="Buscar produto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredProducts.length > 0 ? (
          <table className="table table-hover shadow-sm">
            <thead>
              <tr>
                <th scope="col">
                  <input
                    id="header-checkbox"
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                  />
                </th>
                <th scope="col">
                  <small className="text-uppercase text-secondary">Nome</small>
                </th>
                <th scope="col">
                  <small className="text-uppercase text-secondary">
                    Quantidade em estoque
                  </small>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((user) => (
                <TableRowProducts
                  key={user.id}
                  id={user.id}
                  nome={user.nome}
                  img={Logo}
                  estoque={2}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-secondary">Nenhum produto encontrado.</p>
        )}
      </div>
    </>
  );
}
