import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './AddToll.css';

export default function AddToll(props) {

    const[tollName, setTollName] = useState('');
    const[vecFareCar, setVecFareCar] = useState({vecType:'', singleJrny:0, returnJrny:0});
    const[vecFareLCV, setVecFareLCV] = useState({vecType:'', singleJrny:0, returnJrny:0});
    const[vecFareTruck, setVecFareTruck] = useState({vecType:'', singleJrny:0, returnJrny:0});
    const[vecFareHeavyVec, setVecFareHeavyVec] = useState({vecType:'', singleJrny:0, returnJrny:0});


    const handleChangeVecType = (e) => {
        if(e.target.value ==="Car/Jeep/Van")
        {
            let updatedValue = {};
            updatedValue = {vecType:e.target.value};
            setVecFareCar(vecFareCar => ({
                 ...vecFareCar,
                 ...updatedValue
               }));
        }
        if(e.target.value ==="LCV")
        {
            let updatedValue = {};
            updatedValue = {vecType:e.target.value};
            setVecFareLCV(vecFareLCV => ({
                 ...vecFareLCV,
                 ...updatedValue
               }));
        }
        if(e.target.value ==="Truck/Bus")
        {
            let updatedValue = {};
            updatedValue = {vecType:e.target.value};
            setVecFareTruck(vecFareTruck => ({
                 ...vecFareTruck,
                 ...updatedValue
               }));
        }
        if(e.target.value ==="Heavy Vehicle")
        {
            let updatedValue = {};
            updatedValue = {vecType:e.target.value};
            setVecFareHeavyVec(vecFareHeavyVec => ({
                 ...vecFareHeavyVec,
                 ...updatedValue
               }));
        }
    }

    const handleChangeSingleJrny = (e) => {
        if(e.target.value ==="Car/Jeep/Van")
        {
            let updatedValue = {};
            updatedValue = {singleJrny:e.target.value};
            setVecFareCar(vecFareCar => ({
                ...vecFareCar,
                ...updatedValue
              }));
        }
        if(e.target.value ==="LCV")
        {
            let updatedValue = {};
            updatedValue = {singleJrny:e.target.value};
            setVecFareLCV(vecFareLCV => ({
                 ...vecFareLCV,
                 ...updatedValue
               }));
        }
        if(e.target.value ==="Truck/Bus")
        {
            let updatedValue = {};
            updatedValue = {singleJrny:e.target.value};
            setVecFareTruck(vecFareTruck => ({
                 ...vecFareTruck,
                 ...updatedValue
               }));
        }
        if(e.target.value ==="Heavy Vehicle")
        {
            let updatedValue = {};
            updatedValue = {singleJrny:e.target.value};
            setVecFareHeavyVec(vecFareHeavyVec => ({
                 ...vecFareHeavyVec,
                 ...updatedValue
               }));
        }
    }

    
    const handleChangeReturnJrny = (e) => {
        if(e.target.value ==="Car/Jeep/Van")
        {
            let updatedValue = {};
            updatedValue = {returnJrny:e.target.value};
            setVecFareCar(vecFareCar => ({
                ...vecFareCar,
                ...updatedValue
              }));
        }
        if(e.target.value ==="LCV")
        {
            let updatedValue = {};
            updatedValue = {returnJrny:e.target.value};
            setVecFareLCV(vecFareLCV => ({
                 ...vecFareLCV,
                 ...updatedValue
               }));
        }
        if(e.target.value ==="Truck/Bus")
        {
            let updatedValue = {};
            updatedValue = {returnJrny:e.target.value};
            setVecFareTruck(vecFareTruck => ({
                 ...vecFareTruck,
                 ...updatedValue
               }));
        }
        if(e.target.value ==="Heavy Vehicle")
        {
            let updatedValue = {};
            updatedValue = {returnJrny:e.target.value};
            setVecFareHeavyVec(vecFareHeavyVec => ({
                 ...vecFareHeavyVec,
                 ...updatedValue
               }));
        }
    }
 

    function onSubmit(e) {
        e.preventDefault();
        const tollData = {
          tollName: tollName ,
          vecFareCar: vecFareCar,
          vecFareLCV: vecFareLCV,
          vecFareTruck: vecFareTruck,
          vecFareHeavyVec: vecFareHeavyVec
        }  
        console.log("tollData",tollData);
        // props.addTollHandler(tollData);
        setTollName('');
        setVecFareCar({vecType:'', singleJrny:0, returnJrny:0});
        setVecFareLCV({vecType:'', singleJrny:0, returnJrny:0});
        setVecFareTruck({vecType:'', singleJrny:0, returnJrny:0});
        setVecFareHeavyVec({vecType:'', singleJrny:0, returnJrny:0});
        alert("Form Submitted!");
    }

  return (
    <div className='modalBackground'>
    <div className='modalContainer'>
    <div className='titleCloseBtn'>
    <Link to="/">
        <button onClick={() => {props.closeDialogBox2(false)}}>X</button>
    </Link>
    </div>
    <div className='title'>
    <h3>Add New Toll</h3>
    </div>
    <div>
        <form onSubmit={onSubmit}>

            <label htmlFor="tollName">Toll Name*</label>
            <input type="text" required placeholder="Enter toll name"
                   value={tollName} onChange={(e) => {setTollName(e.target.value)}}/>
           
            <label htmlFor="fareDetails">Vehicle Fare Details*</label>

            <div className='fareDetails'>
                <select required value={vecFareCar.vecType} onChange={(e) => {handleChangeVecType(e)}}>
                    <option value="">Select</option>
                    <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                    <option value="LCV">LCV</option>
                    <option value="Truck/Bus">Truck/Bus</option>
                    <option value="Heavy vehicle">Heavy vehicle</option>
                </select>
                <input type="number" required placeholder="Single Journey"
                         onChange={(e) => {handleChangeSingleJrny(e)}}/>
                <input type="number" required placeholder="Return Journey"
                         onChange={(e) => {handleChangeReturnJrny(e)}}/>
            </div>

            
            <div className='fareDetails'>
                <select required value={vecFareLCV.vecType} onChange={(e) => {handleChangeVecType(e)}}>
                    <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                    <option value="LCV">LCV</option>
                    <option value="Truck/Bus">Truck/Bus</option>
                    <option value="Heavy vehicle">Heavy vehicle</option>
                </select>
                <input type="number" required placeholder="Single Journey"
                       value={vecFareLCV.singleJrny} onChange={(e) => {handleChangeSingleJrny(e)}}/>
                <input type="number" required placeholder="Return Journey"
                       value={vecFareLCV.returnJrny}  onChange={(e) => {handleChangeReturnJrny(e)}}/>
            </div>

            
            <div className='fareDetails'>
                <select required value={vecFareTruck.vecType} onChange={(e) => {handleChangeVecType(e)}}>
                    <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                    <option value="LCV">LCV</option>
                    <option value="Truck/Bus">Truck/Bus</option>
                    <option value="Heavy vehicle">Heavy vehicle</option>
                </select>
                <input type="number" placeholder="Single Journey"
                       value={vecFareTruck.singleJrny} onChange={(e) => {handleChangeSingleJrny(e)}}/>
                <input type="number" placeholder="Return Journey"
                       value={vecFareTruck.returnJrny}  onChange={(e) => {handleChangeReturnJrny(e)}}/>
            </div>

            
            <div className='fareDetails'>
                <select required value={vecFareHeavyVec.vecType} onChange={(e) => {handleChangeVecType(e)}}>
                    <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                    <option value="LCV">LCV</option>
                    <option value="Truck/Bus">Truck/Bus</option>
                    <option value="Heavy vehicle">Heavy vehicle</option>
                </select>
                <input type="number" placeholder="Single Journey"
                       value={vecFareHeavyVec.singleJrny} onChange={(e) => {handleChangeSingleJrny(e)}}/>
                <input type="number" placeholder="Return Journey"
                       value={vecFareHeavyVec.returnJrny}  onChange={(e) => {handleChangeReturnJrny(e)}}/>
            </div>

            <input type="submit" value="Add Toll Details"/>
            


        </form>
    </div>
    </div>
    </div>
  )
}

