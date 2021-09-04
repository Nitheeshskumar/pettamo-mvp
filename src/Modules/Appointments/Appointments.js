import React from "react";
import { toaster, toastError, toastSuccess } from "../../Components/Toast";
import { listAppointments } from "../../Services/UserServices";
import DataTable from "./DataTable";

const Appointments = () => {
const [appointMentsList,setAppointMents]=React.useState([])

const loadApointments=(body)=>{
  let payload=body
  let id = toaster.loading("Loading List...")
  listAppointments(payload).then(res=>{
   toastSuccess(id,'Loaded 👌');
   const list = Object.keys(res).map(el=>res[el])
   setAppointMents(list)

 }).catch(e=>{
   toastError(id,e?.response?.data + '🤯')
 })
}
  React.useEffect(()=>{
    loadApointments({serviceType:'Medical'})
  },[])
  // const dummy=[
  //   {
  //     time: 1630749867253,
  //     serviceProviderName: "test name",
  //     petName: "tony",
  //     status: "pending",
  //     providertype: "Medical",
  //   },
  //   {
  //     time: 1240749567253,
  //     serviceProviderName: "test name1",
  //     petname: "tony1",
  //     status: "pending",
  //     providertype: "Non-Medical",
  //   },
  //   {
  //     time: 1640949867253,
  //     serviceProviderName: "test name1",
  //     petname: "tony2",
  //     status: "pending",
  //     providertype: "Non-Medical",
  //   },
  //   {
  //     time: 1640799867293,
  //     serviceProviderName: "test name1",
  //     petname: "tony",
  //     status: "pending",
  //     providertype: "Non-Medical",
  //   },
  // ]
  return (
    <DataTable
      appointMentsList={appointMentsList}
      loadApointments={loadApointments}
    />
  );
};

export default Appointments;
