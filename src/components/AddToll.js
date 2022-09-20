import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './AddToll.css';

export default function AddToll(props) {

    const[tollName, setTollName] = useState('');
    const[vecFareCar, setVecFareCar] = useState({vecType:'', singleJrny:0, returnJrny:0});
    const[vecFareLCV, setVecFareLCV] = useState({vecType:'', singleJrny:0, returnJrny:0});
    const[vecFareTruck, setVecFareTruck] = useState({vecType:'', singleJrny:0, returnJrny:0});
    const[vecFareHeavyVec, setVecFareHeavyVec] = useState({vecType:'', singleJrny:0, returnJrny:0});

    const handleChangeCarVecType = (e) => {
        let updatedValue = {};
        updatedValue = {vecType:e.target.value};
        setVecFareCar(vecFareCar => ({
             ...vecFareCar,
             ...updatedValue
           }));
    }

    const handleChangeCarSingleJrny = (e) => {
        let updatedValue = {};
        updatedValue = {singleJrny:e.target.value};
        setVecFareCar(vecFareCar => ({
             ...vecFareCar,
             ...updatedValue
           }));
    }

    const handleChangeCarReturnJrny = (e) => {
        let updatedValue = {};
        updatedValue = {returnJrny:e.target.value};
        setVecFareCar(vecFareCar => ({
             ...vecFareCar,
             ...updatedValue
           }));
    }

    const handleChangeLCVVecType = (e) => {
        let updatedValue = {};
        updatedValue = {vecType:e.target.value};
        setVecFareLCV(vecFareLCV=> ({
             ...vecFareLCV,
             ...updatedValue
           }));
    }

    const handleChangeLCVSingleJrny = (e) => {
        let updatedValue = {};
        updatedValue = {singleJrny:e.target.value};
        setVecFareLCV(vecFareLCV => ({
             ...vecFareLCV,
             ...updatedValue
           }));
    }

    const handleChangeLCVReturnJrny = (e) => {
        let updatedValue = {};
        updatedValue = {returnJrny:e.target.value};
        setVecFareLCV(vecFareLCV => ({
             ...vecFareLCV,
             ...updatedValue
           }));
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
        console.log("tollData",tollData.vecFareCar);
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
                <select required value={vecFareCar.vecType} onChange={(e) => {handleChangeCarVecType(e)}}>
                    <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                    <option value="LCV">LCV</option>
                    <option value="Truck/Bus">Truck/Bus</option>
                    <option value="Heavy vehicle">Heavy vehicle</option>
                </select>
                <input type="number" required placeholder="Single Journey"
                         onChange={(e) => {handleChangeCarSingleJrny(e)}}/>
                <input type="number" required placeholder="Return Journey"
                         onChange={(e) => {handleChangeCarReturnJrny(e)}}/>
            </div>

            
            <div className='fareDetails'>
                <select required value={vecFareLCV.vecType} onChange={(e) => {setVecFareLCV(e.target.value)}}>
                    <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                    <option value="LCV">LCV</option>
                    <option value="Truck/Bus">Truck/Bus</option>
                    <option value="Heavy vehicle">Heavy vehicle</option>
                </select>
                <input type="number" required placeholder="Single Journey"
                       value={vecFareLCV.singleJrny} onChange={(e) => {setVecFareLCV(e.target.value)}}/>
                <input type="number" required placeholder="Return Journey"
                       value={vecFareLCV.returnJrny} onChange={(e) => {setVecFareLCV(e.target.value)}}/>
            </div>

            
            <div className='fareDetails'>
                <select required value={vecFareTruck.vecType} onChange={(e) => {setVecFareTruck(e.target.value)}}>
                    <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                    <option value="LCV">LCV</option>
                    <option value="Truck/Bus">Truck/Bus</option>
                    <option value="Heavy vehicle">Heavy vehicle</option>
                </select>
                <input type="number" placeholder="Single Journey"
                       value={vecFareTruck.singleJrny} onChange={(e) => {setVecFareTruck(e.target.value)}}/>
                <input type="number" placeholder="Return Journey"
                       value={vecFareTruck.returnJrny} onChange={(e) => {setVecFareTruck(e.target.value)}}/>
            </div>

            
            <div className='fareDetails'>
                <select required value={vecFareHeavyVec.vecType} onChange={(e) => {setVecFareHeavyVec(e.target.value)}}>
                    <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                    <option value="LCV">LCV</option>
                    <option value="Truck/Bus">Truck/Bus</option>
                    <option value="Heavy vehicle">Heavy vehicle</option>
                </select>
                <input type="number" placeholder="Single Journey"
                       value={vecFareHeavyVec.singleJrny} onChange={(e) => {setVecFareHeavyVec(e.target.value)}}/>
                <input type="number" placeholder="Return Journey"
                       value={vecFareHeavyVec.returnJrny} onChange={(e) => {setVecFareTruck(e.target.value)}}/>
            </div>

            <input type="submit" value="Add Toll Details"/>
            


        </form>
    </div>
    </div>
    </div>
  )
}

