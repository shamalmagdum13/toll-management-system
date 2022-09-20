import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddVehicle.css';

export default function AddVehicle( props) {

  const[tollName, setTollName] = useState('');
  const[vecType, setVecType] = useState('');
  const[vecNum, setVecNum] = useState('');
  const[tariff, setTarrif] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const vehicleData = {
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

  return (
    <div className='modalBackground'>
    <div className='modalContainer'>
    <div className='titleCloseBtn'>
    <Link to="/">
        <button onClick={() => {props.closeDialogBox(false)}}>X</button>
    </Link>
    </div>
    <div className='title'>
    <h3>Add New Entry</h3>
    </div>
    <div>
        <form onSubmit={onSubmit} >
            <label htmlFor="toll">Select toll name*</label>
            <select required value={tollName} onChange={(e) => {setTollName(e.target.value)}}>
                <option value="">Select</option>
                <option value="sangli">Sangli</option>
                <option value="kolhapur">Kolhapur</option>
                <option value="satara">Satara</option>
            </select>

            <label htmlFor="vecType">Select vehicle type*</label>
            <select required value={vecType} onChange={(e) => {setVecType(e.target.value)}}>
                <option value="">Select</option>
                <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                <option value="LCV">LCV</option>
                <option value="Truck/Bus">Truck/Bus</option>
                <option value="Heavy Vehicle">Heavy Vehicle</option>
            </select>

            <label htmlFor="vecNum">Vehicle Number</label>
            <input type="text" required placeholder="Enter your vehicle number" value={vecNum} onChange={(e) => {setVecNum(e.target.value)}}/>

            <label htmlFor="tariff">Tariff</label>
            <input type="text" required placeholder="Tariff amount" value={tariff} onChange={(e) => {setTarrif(e.target.value)}}/>
        
            <input type="submit" value="Add Entry"/>
            {/* <button type="submit">Add Entry</button> */}
        </form>
    </div>
    </div>
    </div>
  )
}
