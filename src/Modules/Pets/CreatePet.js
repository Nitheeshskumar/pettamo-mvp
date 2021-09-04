import React, { useState } from 'react'
import uuid from "node-uuid";
import { GlobalContext } from '../../ContextStore/ContextAPI';
import Toast, { toastError, toastSuccess ,toaster} from '../../Components/Toast';
import DateField from '../../Components/DateField';

const CreatePet=({setIsSignup})=>{
  const { loginState } = React.useContext(GlobalContext);


  const refName = React.useRef('')
  const [birthdate, setBirthdate] = useState(null)
  const refGender= React.useRef('')
  const refColour = React.useRef('')


  const payload={
    name: refName.current.value,
    dob: birthdate,
    gender: refGender.current.value,
    id: uuid.v1(),
    color: refColour.current.value,
    rel_type: 'pet',
    rel_id: loginState.userDetails.id
  }

  const handleAddPet = (evt) => {
    evt.preventDefault()

    const data = {
      name: refName.current.value,
      dob: birthdate,
      gender: refGender.current.value,
      color: refColour.current.value,
    }

    console.log('data: ', data)

    // TODO: perform write to backend
    // TODO: show confirmation
  }

  const handleBirthdate = (evt) => {
    const momentObj = evt.target.value
    setBirthdate(momentObj.format())
  }

  const AddPetForm = () => 
  <>
    <form onSubmit={handleAddPet}>
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" id="name" ref={refName}/>
        </div>
      </div>
      <div class="form-group row">
        <label for="birthdate" class="col-sm-2 col-form-label">Birthdate</label>
        <div class="col-sm-10">
          <DateField handleChange={handleBirthdate} />
        </div>
      </div>
      <div class="form-group row">
        <label for="gender" class="col-sm-2 col-form-label">Gender</label>
        <div class="col-sm-10">
          <select id="gender" ref={refGender}>
            <option selected>Female</option>
            <option>Male</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="colour" class="col-sm-2 col-form-label">Colour</label>
        <div class="col-sm-10">
          <select id="colour" ref={refColour}>
            <option selected>Black</option>
            <option>Brown</option>
            <option>White</option>
          </select>
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


