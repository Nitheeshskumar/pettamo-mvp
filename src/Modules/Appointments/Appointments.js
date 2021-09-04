import React from "react";
import DataTable from "./DataTable";

const Appointments = () => {
  return (
    <DataTable
      appointMentsList={[
        {
          time: "4/09/21",
          serviceProviderName: "test name",
          petname: "tony",
          status: "pending",
          providertype: "Medical",
        },
        {
          time: "4/09/21",
          serviceProviderName: "test name1",
          petname: "tony1",
          status: "pending",
          providertype: "Non-Medical",
        },
      ]}
    />
  );
};

export default Appointments;
