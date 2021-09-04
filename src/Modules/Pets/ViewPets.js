import moment from 'moment'
import calculateAge from 'calculate-age'
import CardsTemplate from './CardsTemplate'
import M from 'minimatch'


const ViewPets=(data)=>{

    // sample: getAge(moment().subtract(500, 'days'))
    const getAge = (data) => {
        const today = moment().format('YYYY-MM-DD')
        const dob = moment(data).format('YYYY-MM-DD')
        
        const age = new calculateAge(dob, today).getObject()
        console.log(age)

        return age
    }

    const dummyData = [
        {
            name: "Buddy",
            dob: moment().subtract(500, 'days'),
            gender: "Male",
            breed: "Labrador Retriever",
            colour: "Black"
        },
        {
            name: "Star",
            dob: moment().subtract(360, 'days'),
            gender: "Female",
            breed: "Poodle",
            colour: "Brown"
        },
    ]
    const PetList = () => <div class="pets">
        <div class="row">
            <br/><br/>
            <div>Your pets</div>
            {dummyData.map((item,index)=>
                <div class="col-md-4" key={index}>
                    <CardsTemplate item={item} />
                </div>
            )}
        </div>
    </div>
    
    return PetList()
}
export default ViewPets