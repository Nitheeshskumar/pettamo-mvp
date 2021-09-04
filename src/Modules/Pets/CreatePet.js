import React, { useState } from 'react'
import uuid from "node-uuid";
import { GlobalContext } from '../../ContextStore/ContextAPI';
import  { toastError, toastSuccess ,toaster} from '../../Components/Toast';
import DateField from '../../Components/DateField';
import SelectField from '../../Components/SelectField';
import { createPets } from '../../Services/UserServices';

const CreatePet=({setPetList})=>{
  const { loginState } = React.useContext(GlobalContext);



  const [birthdate, setBirthdate] = useState(null)

const [data,setData]=React.useState({gender:'Female'})

const handleChange=e=>{

  setData(state=>({...state,[e.target.name]:e.target.value}))
}

  const handleAddPet = (evt) => {
    evt.preventDefault()

    const payload={
...data,
      dob: birthdate,
      id: uuid.v1(),
      rel_type: 'pet',
      rel_id: loginState.userDetails.id
    }

    console.log('data: ', payload)

     let id = toaster.loading("Creating Pets...")
     createPets(payload).then(res=>{
      toastSuccess(id,'Created 👌');
      const list = Object.keys(res).map(el=>res[el])
      setPetList(list)

    }).catch(e=>{
      toastError(id,e?.response?.data + '🤯')
    })

    // TODO: perform write to backend
    // TODO: show confirmation
  }

  const handleBirthdate = (evt) => {
    const momentObj = evt.target.value
    setBirthdate(momentObj.valueOf())
  }

  const AddPetForm = () =>
  <>
    <form onSubmit={handleAddPet}>
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input type="text" id="name" name="name" className="form-control"  onChange={handleChange} required/>
        </div>
      </div>
      <div className="form-group row mt-3">
        <label htmlFor="birthdate" className="col-sm-2 col-form-label">Birthdate</label>
        <div className="col-sm-10">
          <DateField handleChange={handleBirthdate} />
        </div>
      </div>
      <SelectField options={['Female','Male']} label="Gender" name ='gender' value={data.gender} onChange={handleChange}/>
      {/* <SelectField options={['Female','Male']} label="Gender"  /> */}
      <div className="form-group row mt-2 mb-3">
        <label htmlFor="breed" className="col-sm-2 col-form-label">Breed</label>
        <div className="col-sm-10">
          <input type="text" id="breed" name="breed" className="form-control"  onChange={handleChange} required/>
        </div>
      </div>
      <div className="form-group row mt-2 mb-3">
        <label htmlFor="color" className="col-sm-2 col-form-label">Color</label>
        <div className="col-sm-10">
          <input type="text" id="color" name="color" className="form-control"  onChange={handleChange} required/>
        </div>
      </div>

      <button type="submit" className="btn btn-lg btn-primary btn-block">
      Add Pet
    </button>
    </form>
  </>

  return AddPetForm()
}

export default CreatePet


