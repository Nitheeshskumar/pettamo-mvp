const SelectField=({label,options})=>{
    return  <div class="form-group row mt-2">
    <label htmlFor="filterPrdCty" class="col-sm-2 col-form-label">{label}</label>
    <div class="col-sm-10">
    <select
      class="form-select form-control"
      id="filterPrdCty" >
          {options.map(el=> <option value={el} key={el}
      >{el}</option>)}

    </select>
        </div>

    </div>

    }
    export default SelectField