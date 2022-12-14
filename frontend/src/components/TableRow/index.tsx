import NotificationButton from "../NotificationButton";

import "./styles.css";

function TableRow() {
  return (
    <tr>
      <td className="show992">#341</td>
      <td className="show576">08/07/2022</td>
      <td>Anakin</td>
      <td className="show992">15</td>
      <td className="show992">11</td>
      <td>R$ 55300.00</td>
      <td>
        <NotificationButton />
      </td>
    </tr>
  );
}

export default TableRow;
