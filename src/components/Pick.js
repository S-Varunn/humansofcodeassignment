import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "./css/Pick.css";
function Pick() {
  const [invoice, onChangeinvoice] = useState(new Date());
  const [due, onChangedue] = useState(new Date());
  return (
    <div className="tablecontainer">
      <table>
        <tr>
          <th>Invoice Date</th>
          <th>Due Date</th>
        </tr>
        <tr>
          <td>
            <DatePicker onChange={onChangeinvoice} value={invoice} />
          </td>
          <td>
            <DatePicker onChange={onChangedue} value={due} />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Pick;
