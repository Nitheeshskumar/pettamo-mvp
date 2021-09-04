import React from 'react'
const SelectField=({label,options,onChange,name})=>{
return  <div className="form-group text-start mt-2">
<label htmlFor="filterPrdCty ">{label}</label>
<select
  className=" form-select"
  id="filterPrdCty"
  name={name}
  onChange={onChange}>
      {options.map(el=> <option value={el} key={el}
  >{el}</option>)}

</select>
</div>

}

const Filters=()=>{
  const [filter,setFilter]=React.useState({})
const handleChange=e=>{

  setFilter(state=>({...state,[e.target.name]:e.target.value}))
}
    return <div className="productFilter">
    <div id="prdfilter">
      <h4 className="d-flex mb-3">
        <span className="text-muted">Filters:</span>
      </h4>
<SelectField options={['All','Medical','Non-Medical']} label="Category:" name ='serviceType' value={filter.serviceType} onChange={handleChange}/>
<SelectField options={['All','Cat','Dog','Birds']} label="Pet:" name ='petType' value={filter.petType} onChange={handleChange}/>
<SelectField options={['All','Morning','Evening']} label="Time:" name ='time' value={filter.time} onChange={handleChange}/>


    </div>
  </div>
}

export default Filters