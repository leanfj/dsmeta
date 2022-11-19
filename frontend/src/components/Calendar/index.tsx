import { useState } from "react";

import DatePicker from "react-datepicker";
import pt from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  return (
    <div>
      <div className="dsmeta-form-control-container">
        <DatePicker
          locale={pt}
          className="dsmeta-form-control"
          dateFormat="dd/MMM/yyyy"
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={(date: Date) => setStartDate(date)}
        />
      </div>
      <div className="dsmeta-form-control-container">
        <DatePicker
          locale={pt}
          className="dsmeta-form-control"
          dateFormat="dd/MMM/yyyy"
          selected={endDate}
          onChange={(date: Date) => setendDate(date)}
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
    </div>
  );
}

export default Calendar;
