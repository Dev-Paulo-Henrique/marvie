import { useEffect, useState } from "react";
// import { TableRow } from "../components/TableRow";
import { api } from "../services/api";
import { Title } from "../components/Title";
import { CiSearch } from "react-icons/ci";
import { Header } from "./Admin/Header";

interface OrderProps {
  id: number;
  numeroPedido?: string;
  createdAt: string;
  relativeDate: string;
  total?: string;
  status?: string;
}

export function Orders() {
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  Title({ title: "Pedidos" });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/users");
        setOrders(response.data);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    };

    fetchOrders();
  }, []);

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
  }, [orders]);

  const filteredOrders = orders.filter((order) =>
    order.numeroPedido?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Header title="Pedidos"/>
      <div className="pb-4">
        <div data-mdb-input-init className="form-outline mb-4 position-relative">
          <CiSearch className="position-absolute top-50 start-0 translate-middle-y ms-3" />
          <input
            type="text"
            className="form-control ps-5"
            id="datatable-search-input"
            placeholder="Buscar pedido"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredOrders.length > 0 ? (
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
                  <small className="text-uppercase text-secondary">Número do pedido</small>
                </th>
                <th scope="col">
                  <small className="text-uppercase text-secondary">
                    Data
                  </small>
                </th>
                <th scope="col">
                  <small className="text-uppercase text-secondary">
                    Total
                  </small>
                </th>
                <th scope="col">
                  <small className="text-uppercase text-secondary">
                    Status
                  </small>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {filteredOrders.map((order) => (
                <TableRow
                  key={order.id}
                  id={order.id.toString()}
                //   numeroPedido={order.numeroPedido}
                  name={order.id.toString()}
                  date={order.createdAt}
                  relativeDate={order.createdAt}
                //   total={order.total}
                //   status={order.status}
                />
              ))} */}
            </tbody>
          </table>
        ) : (
          <p className="text-secondary">Nenhum pedido encontrado.</p>
        )}
      </div>
    </>
  );
}
