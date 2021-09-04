import React from 'react'
import { useHistory, useLocation } from 'react-router'
import DateField from '../../Components/DateField'
import ModalPopup from '../../Components/ModalPopup'
import SelectField from '../../Components/SelectField'

const ServiceProviderDetail=()=>{
  const location =useLocation()
  const history=useHistory()
  const details = location.state
  const [show,setShow]=React.useState(false)
  const [birthdate, setBirthdate] = React.useState(null)
  const refName=React.useRef('')

  React.useEffect(()=>{
if(!details){
  history.push('/dashboard')
}
  },[])
const handleSubmit=()=>{


}
const handleBirthdate = (evt) => {
  const momentObj = evt.target.value
  setBirthdate(momentObj.format())
}

  const bookAppointment=()=>{
setShow(true)
  }

    return   <div className="product-details">
     {show&&<ModalPopup show={show} setShow={setShow} heading='Schedule Appointment' handleSubmit={handleSubmit} >

     <form >
     <SelectField options={['Female','Male']} label="Pet Name"  />
      <div className="form-group row mt-3">
        <label for="birthdate" className="col-sm-2 col-form-label">Schedule At</label>
        <div className="col-sm-10">
          <DateField handleChange={handleBirthdate} />
        </div>
      </div>
      <div className="form-group row mt-2">
        <label for="name" className="col-sm-2 col-form-label">Remarks</label>
        <div className="col-sm-10">
          <input type="text" id="name" className="form-control" ref={refName}/>
        </div>
      </div>
    </form>


     </ModalPopup> }
   {details&& <div className="container">
      <div className="row mb-3">
        <div className="col-sm-4">
          <div className="product-image">
            <div className="view hm-zoom z-depth-2" style={{cursor: 'pointer'}}>
              <img
                src={details.imgUrl}
                alt={details.name}
                className="img-fluid rounded"
                style={{maxHeight:"200px", maxWidth: "200px",margin: "auto"}}
              />
            </div>
            <div style={{marginTop:"15px"}}>
              <ul className="list-group mb-3">

                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Pet Serviced</h6>
                  </div>
                  <span
                    className="text-muted"
                    // style="color:crimson !important"
                  >{details.petType}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Time</h6>
                  </div>
                  <span
                    className="text-muted"
                    // style={{color:"crimson" !important}}
                  >{details.time}</span>
                </li>
              </ul>
              <button className="btn btn-primary" onClick={bookAppointment} >Book Appointment</button>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="product-detail">
            <h3 className="product-head"> Details</h3>
            <table className="table" cellSpacing="0" style={{maxHeight: "28px"}}>
              <tbody>
                <tr>
                  <th scope="row">Provider Name</th>
                  <td>{details.name}</td>
                </tr>
                <tr>
                  <th scope="row">Description</th>
                  <td>{details.description}</td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>{details.serviceType}</td>
                </tr>
                <tr>
                  <th scope="row">Location</th>
                 <td> {details.location}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>}
  </div>
}

export default ServiceProviderDetail