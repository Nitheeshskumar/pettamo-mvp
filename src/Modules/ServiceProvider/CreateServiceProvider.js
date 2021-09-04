import React from 'react'

import uuid from "node-uuid";

import Toast, { toastError, toastSuccess ,toaster} from '../../Components/Toast';

import { createService } from '../../Services/UserServices';

const CreatePet=()=>{

const [data,setData]=React.useState({})

  const handleSignup=(e)=>{
    e.preventDefault()

    const payload={
...data,
isLicensed:data.isLicensed?true:false,
      id:uuid.v1(),
      rel_type:'provider',

    }
    console.log(payload)
// const payload={
//   petType:'Dogs',
//         imgUrl:'https://thumbs.dreamstime.com/b/dog-veterinary-clinic-veterinarian-staff-examine-dogs-health-adoption-92643875.jpg',
//         time:'Afternoon',
//         name:'Global Dog Palace',
//         description:' place for your puppies',
//         serviceType:'Medical',
//         location:'Ohio',
//         isLicensed:true,
//         id:uuid.v1(),
//         rel_type:'provider',

//       }

 let id = toaster.loading("Creating Service...")
 createService(payload).then(res=>{
   console.log(res);
   toastSuccess(id,'Created 👌');
    }).catch(e=>{
      toastError(id,e?.response?.data + '🤯')
    })
  }

  const handleChange=e=>{
    setData(state=>({...state,[e.target.name]:e.target.value}))
  }

    return  <div className="create-account">
    <form className="form-signup needs-validation" onSubmit={handleSignup} >
      <h1 className="h3 mb-3 font-weight-normal">Create a Service</h1>

<div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="name"
            placeholder="Name"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="petType"
            placeholder="petType"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="imgUrl"
            placeholder="imgUrl"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="time"
            placeholder="time"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="description"
            placeholder="description"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="serviceType"
            placeholder="serviceType"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="location"
            placeholder="location"

            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="isLicensed"
            placeholder="isLicensed"

            onChange={handleChange}
          />
        </div>
      </div>


      <button className="btn btn-lg btn-primary btn-block" type="submit">
       Create
      </button>
    </form>
    <Toast/>
  </div>
}

export default CreatePet


