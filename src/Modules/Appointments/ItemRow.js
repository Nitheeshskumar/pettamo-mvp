import React from "react";
import moment from "moment";
import uuid from "node-uuid";
function ItemRow(props) {
  //   console.log(props);
  //   console.log(Date.toLocaleTimeString);

  //   console.log(moment());
  //   console.log(moment(now, "DD/MM/YYYY HH:mm:ss")); moment(props.el.time,"D/M/Y hh:mm a").isBefore()
  return (
    <tr>

        <td>
          {moment(props.el.time).format("D/M/Y hh:mm a")}
        </td>

      <td>

        {props.el.serviceProviderName}
      </td>


      <td>{props.el.pet}</td>
      {/* {
          props.el.time
      } */}
      <td>{moment(props.el.time).isBefore() ? "Completed" : "Upcoming"}</td>
      <td>{props.el.serviceType}</td>
     {props.filter==='Medical'? <td>  {moment(props.el.time).isBefore() ? "Expired" : "https://us02web.zoom.us/meeting/"+uuid.v1()} </td>:<td>{props.el.remarks}</td>  }
    </tr>
  );
}

export default ItemRow;
