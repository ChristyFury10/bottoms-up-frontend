import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../componenets/Header';
import SpecialItem from '../componenets/SpecialItem';

const BarUpdatePage = ({bar, setBar}) => {

    const navigate = useNavigate();

    let {id} = useParams();

    let [nameState, setNameState] = useState("");
	let [hoursState, setHoursState] = useState("");
	let [addressState, setAddressState] = useState("");
	let [specials, setSpecials] = useState([])


    useEffect(() =>{
        getBar()

    }, [])

    
    let getBar = async () => {
        let response = await fetch(`/api/bars/${id}`)
        let data = await response.json()
        setBar(data)
        const{name, address, hours, specials} = data
        setAddressState(address)
        setNameState(name)
        setHoursState(hours)
        setSpecials(specials)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        const updatedBar = {
            name: nameState,
            address: addressState,
            hours: hoursState
        };
        setBar(updatedBar)
        const options = {
			method: "PUT", 
			'headers': {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(updatedBar)
		}
        console.log("barState:", bar)

        await fetch(`/api/bars/${id}/update`, options);
        
        navigate(`/bars/${id}`)
    
        
    }
    const deleteBar = async ()=>{
            fetch(`/api/bars/${id}/delete`, {
                method: 'DELETE', 
                'headers': {
                    'Content-Type' :'application/json'
                }
            })
            navigate(`/bars`)
        }


    const onChangeHandler = (e, setValue)=>{
        setValue(e.target.value)
    }

    // let specialList = specials.map((special, index)=>{
    //   return(<SpecialItem special={special}/>)
      
    // })

  return (
    <div>
        <Header/>
        <form onSubmit={handleSubmit}>
        Name:<input type="text" value={nameState} name="name" placeholder="name" onChange={(e) => onChangeHandler(e, setNameState)}></input>
            <br/>
        Address:<input type="text" value={addressState} name="name" placeholder="name" onChange={(e) => onChangeHandler(e, setAddressState)}></input>
            <br/>
        Hours:<input type="text" value={hoursState} name="name" placeholder="name" onChange={(e) => onChangeHandler(e, setHoursState)}></input>
        <br/>
        {/* Specials: {specialList} */}
        {/* <label>
        <input type="checkbox" name="monday"/>
        <span>Monday</span>
        </label>
        <label>
        <input type="checkbox" name="monday"/>
        <span>Monday</span>
        </label>
        <label>
        <input type="checkbox" name="monday"/>
        <span>Monday</span>
        </label>
        <label>
        <input type="checkbox" name="monday"/>
        <span>Monday</span>
        </label>
        <label>
        <input type="checkbox" name="monday"/>
        <span>Monday</span>
        </label>
        <label>
        <input type="checkbox" name="monday"/>
        <span>Monday</span>
        </label>
        <label>
        <input type="checkbox" name="monday"/>
        <span>Monday</span>
        </label> */}
        <br/>
        
        <input type="submit" className='btn-floating btn-large waves-effect waves-light blue z-depth-5' value="ok"></input>
        <a class="btn-floating btn-large waves-effect waves-light red z-depth-5" onClick={deleteBar}><i class="material-icons">delete</i></a>


        <div></div>
        </form>
      
    </div>
  )
}

export default BarUpdatePage
