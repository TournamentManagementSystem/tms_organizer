import React from "react";
import { Table } from "react-bootstrap";
import dayjs from "dayjs";

import "./TableWrapper.scss";

export default function TableWrapper(props) {
  const [data, setData] = React.useState([
    { "#": "20391", Name: "AHS Horror House", Time: dayjs().format("MM/DD/YYYY") }
  ]);

  React.useState(() => {
    if (props?.data?.length > 0) {
      setData(props.data);
    }
  }, [props.data]);

  if (!data || data?.length === 0) {
    return <div>No data</div>;
  }

  const keyOrder = Object.keys(data[0]);
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            {keyOrder.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dataPoint) => (
            <tr>
              {keyOrder.map((key) => (
                <td>{dataPoint[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
