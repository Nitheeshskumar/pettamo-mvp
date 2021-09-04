import React from "react";
import moment from "moment";

function ItemRow(props) {
  //   console.log(props);
  //   console.log(Date.toLocaleTimeString);

  //   console.log(moment());
  //   console.log(moment(now, "DD/MM/YYYY HH:mm:ss")); moment(props.el.time,"D/M/Y hh:mm a").isBefore()
  return (
    <tr>
      {props.isAdmin ? (
        <td> {props.count}</td>
      ) : (
        <td>
          {/* <input
            onChange={props.handleComplete}
            data-id={props.item.id}
            checked={props.item.status === "3"}
            type="checkbox"
          /> */}
          {moment(props.el.time).format("D/M/Y hh:mm a")}
        </td>
      )}
      <td>
        {/* <span className="tag">
          {moment(props.item.date).format("D/M/Y hh:mm a")}{" "}
        </span> */}
        {props.el.serviceProviderName}
      </td>
      {/* <td>{props.item.name}</td> */}
      {/* <td>
        <StatusTag status={props.item.status} />
      </td> */}

      {/* {props.isAdmin ? (
        <td>{props.item.isDeleted ? "X" : ""}</td>
      ) : (
        <td>
          <button
            className="btn btn-block"
            onClick={() => props.handleEdit(props.item)}
          >
            <i
              className="fas fa-pencil-alt fa-sm"
              style={{ color: "olivedrab" }}
            ></i>
          </button>
          <button className="btn btn-block">
            <span
              onClick={props.handleRemove}
              data-id={props.item.id}
              role="img"
              className="is-pulled-right"
              aria-label="Remove"
            >
              &#10060;
            </span>
          </button>
        </td>
      )} */}

      <td>{props.el.petname}</td>
      {/* {
          props.el.time
      } */}
      <td>{moment(props.el.time).isBefore() ? "Completed" : "Upcoming"}</td>
      <td>{props.el.providertype}</td>
    </tr>
  );
}

export default ItemRow;
