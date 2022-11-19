import NotificationButton from "../NotificationButton";
import TableRow from "../TableRow";
import "./styles.css";

function Table() {
  return (
    <div>
      <table className="dsmeta-sales-table">
        <thead>
          <tr>
            <th className="show992">ID</th>
            <th className="show576">Data</th>
            <th>Vendedor</th>
            <th className="show992">Visitas</th>
            <th className="show992">Vendas</th>
            <th>Total</th>
            <th>Notificar</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
