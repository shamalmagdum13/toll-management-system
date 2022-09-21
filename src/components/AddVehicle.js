import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddVehicle.css';

export default function AddVehicle( props) {

  const[tollName, setTollName] = useState('');
  const[vecType, setVecType] = useState('');
  const[vecNum, setVecNum] = useState('');
  const[tariff, setTarrif] = useState('');
  const[foundResults, setFoundResults] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    const vehicleData = {
      id: Math.random(),
      tollName: tollName ,
      vecType: vecType,
      vecNum: vecNum,
      tariff: tariff,
      date: new Date().toLocaleString()
    }  
    props.addVehicleHandler(vehicleData);
    setTollName('');
    setVecType('');
    setVecNum('');
    setTarrif('');
    alert("Form Submitted!");
  }

  function findTollName (e) {
    setTollName(e.target.value);
    props.tolls.filter((toll) => {
       if(toll.tollName === e.target.value) setFoundResults(toll.fareDetails);
    })
  }

  function calculateTariff (e) {
    setVecNum(e.target.value);
    foundResults.filter((fareDetail) => {
        if(fareDetail.vecType === vecType)
        {
          // let vec = props.vehicles.filter((vehicle) => {
          //   return vehicle.vecNum === e.target.value      
          // })
          setTarrif(fareDetail.singleJrny);
        }
        
    })
    
  }

  return (
    <div className='modalBackground'>
    <div className='modalContainer'>
    <div className='titleCloseBtn'>
        <button onClick={() => {props.closeDialogVec(false)}}>X</button>
    </div>
    <div className='title'>
    <h3>Add New Entry</h3>
    </div>
    <div>
        <form onSubmit={onSubmit} >
            <label htmlFor="toll">Select toll name*</label>
            <select required value={tollName} onChange={(e) => {findTollName(e)}}>
                <option value="">Select</option>
                {props.tolls.map((toll) => {
                return (
                  <option value={toll.tollName}>{toll.tollName}</option>   
                );
                })}
            </select>

            <label htmlFor="vecType">Select vehicle type*</label>
            <select required value={vecType} onChange={(e) => {setVecType(e.target.value)}}>
                <option value="">Select</option>
                <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                <option value="LCV">LCV</option>
                <option value="Truck/Bus">Truck/Bus</option>
                <option value="Heavy Vehicle">Heavy Vehicle</option>
            </select>

            <label htmlFor="vecNum">Vehicle Number*</label>
            <input type="text" required placeholder="Enter your vehicle number" value={vecNum} onChange={(e) => {calculateTariff(e)}}/>

            <label htmlFor="tariff">Tariff*</label>
            <input type="text" required placeholder="Tariff amount" disabled value={tariff} onChange={(e) => {setTarrif(e.target.value)}}/>
        
            <input type="submit" value="Add Entry"/>
        </form>
    </div>
    </div>
    </div>
  )
}
