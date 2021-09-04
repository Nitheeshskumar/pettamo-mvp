import React from "react";
import DataTable from "./DataTable";

const Appointments = () => {
  return (
    <DataTable
      appointMentsList={[
        {
          time: 1630749867253,
          serviceProviderName: "test name",
          petname: "tony",
          status: "pending",
          providertype: "Medical",
        },
        {
          time: 1240749567253,
          serviceProviderName: "test name1",
          petname: "tony1",
          status: "pending",
          providertype: "Non-Medical",
        },
        {
          time: 1640949867253,
          serviceProviderName: "test name1",
          petname: "tony2",
          status: "pending",
          providertype: "Non-Medical",
        },
        {
          time: 1640799867293,
          serviceProviderName: "test name1",
          petname: "tony",
          status: "pending",
          providertype: "Non-Medical",
        },
      ]}
    />
  );
};

export default Appointments;
