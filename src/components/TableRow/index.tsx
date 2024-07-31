import { format, formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

interface TableRowUsersProps {
  id: string;
  name: string;
  date: string;
  relativeDate: string;
}

interface TableRowProductsProps {
  id: number;
  nome: string;
  estoque: number;
  img: string;
}

export function TableRowUsers({
  id,
  name,
  date,
  relativeDate,
}: TableRowUsersProps) {
  return (
    <tr>
      <th scope="row" className="align-middle">
        <input
          className="form-check-input me-1 row-checkbox"
          type="checkbox"
          value=""
          aria-label="..."
        />
      </th>
      <td className="align-middle">
        <a href={`/admin/customers/${id}`} className="text-decoration-none">
          {name}
        </a>
      </td>
      <td className="align-middle">
        {format(new Date(date), "dd/MM/yyyy HH:mm")}
        <br />
        <small className="text-secondary">
          {formatDistance(new Date(relativeDate), new Date(), {
            addSuffix: true,
            locale: ptBR,
          })}
        </small>
      </td>
    </tr>
  );
}

export function TableRowProducts({
  id,
  img,
  estoque,
  nome,
}: TableRowProductsProps) {
  return (
    <tr>
      <th scope="row" className="align-middle">
        <input
          className="form-check-input me-1 row-checkbox"
          type="checkbox"
          value=""
          aria-label="..."
        />
      </th>
      <td className="align-middle">
        <a href={`/admin/products/${id}`} className="text-decoration-none">
          <img src={img} width={30} />
          <span className="mx-3">{nome}</span>
        </a>
      </td>
      <td className="align-middle">{estoque}</td>
    </tr>
  );
}
