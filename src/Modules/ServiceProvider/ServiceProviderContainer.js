import React from 'react'
import { useHistory } from 'react-router'
import Filters from './Filters'
import ServiceProviderList from './ServiceProviderList'

const ServiceProviderContainer=()=>{
  let Dummy = [{id:'sdfsdf',petType:'Dogs',imgUrl:'https://www.wikihow.com/images/thumb/e/ed/Take-Care-of-a-Dog-Step-12-Version-2.jpg/v4-460px-Take-Care-of-a-Dog-Step-12-Version-2.jpg',
  time:'Morning',name:'Global Dog care',description:'Best place for your puppies',serviceType:'Non-Medical',location:'Texas',isLicensed:true}]
const history =useHistory()
  const handleDetail=item=>{
    console.log('sdf')
    history.push({pathname:'/detail',state:item})
  }
    return  <div className="products">
    <div className="row">
    <div className="col-md-3 order-md-1 mb-4">

      <Filters />

    </div>
    <div className="col-md-9 order-md-2">
        <ServiceProviderList providerList={Dummy} handleDetail={handleDetail} />
    </div>
  </div>
</div>
}

export default ServiceProviderContainer