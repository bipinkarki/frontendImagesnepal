import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.tableRef = React.createRef();
  }
  cancel = id => {
    const token = localStorage.getItem("token");

    axios
      .delete(`http://localhost:4000/appoint/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        console.log(response.data);
        window.location.reload(false);
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidUpdate() {}

  render() {
    const { title, body, status, date, _id } = this.props.col;
    console.log(_id);
    const index = this.props.sn;
    return (
      <tr>
        <td>{index}</td>
        <td>{date}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td>{status}</td>
        <td>
          <Button onClick={() => this.cancel(_id)}>Delete</Button> &nbsp; 
          <Button onClick={() => this.cancel(_id)}>Update</Button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
