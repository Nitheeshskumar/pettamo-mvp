import CreatePet from "./CreatePet"
import ViewPets from "./ViewPets"
import React from 'react'
import { listPets } from "../../Services/UserServices"
import { toaster, toastError, toastSuccess } from "../../Components/Toast"
import { GlobalContext } from "../../ContextStore/ContextAPI"


const PetsContainer=()=>{
    const { loginState } = React.useContext(GlobalContext);
    const [petList,setPetList]=React.useState([])


const loadPets=()=>{
    let id = toaster.loading("Loading Pets...")
    listPets({rel_id: loginState.userDetails.id}).then(res=>{
     toastSuccess(id,'Loaded 👌');
     const list = Object.keys(res).map(el=>res[el])
     setPetList(list)

   }).catch(e=>{
     toastError(id,e?.response?.data + '🤯')
   })
}
    React.useEffect(()=>{
        loadPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return  <>
        <CreatePet setPetList={setPetList}/>
        <br/><br/>
        <ViewPets petList={petList}/>
    </>
}

export default PetsContainer