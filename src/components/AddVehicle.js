/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './AddVehicle.css';

export default function AddVehicle( props) {

  const[tollName, setTollName] = useState('');
  const[vecType, setVecType] = useState('');
  const[vecNum, setVecNum] = useState('');
  const[tariff, setTarrif] = useState('');
  const[foundResults, setFoundResults] = useState([]);
  const [isValid, setValid] = useState(true);

  const validate = () => {
    if(tollName ==='' || vecType ==="" || vecNum ==="" || tariff==="") return true;
  };
  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [tollName, vecType, vecNum]);

  function onSubmit(e) {
    e.preventDefault();
    const vehicleData = {
      id: Math.random(),
      tollName: tollName ,
      vecType: vecType,
      vecNum: vecNum,
      tariff: tariff,
      date: new Date()
    }  
    props.addVehicleHandler(vehicleData);
    setTollName('');
    setVecType('');
    setVecNum('');
    setTarrif('');
    alert("Form Submitted!");
  }


  useEffect(() => {
    props.tolls.filter((toll) => {
      if(toll.tollName === tollName) setFoundResults(toll.fareDetails);
   })
    foundResults.filter((fareDetail) => {
        if(fareDetail.vecType === vecType)
        {
          const vec = props.vehicles.filter((vehicle) => {
            return vehicle.vecNum === vecNum      
          })
          if(vec.length === 0)
          {
            setTarrif(fareDetail.singleJrny);
          }
          else
          {
            let diff =new Date() - vec[vec.length -1].date;
            var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000);
            if(diffMins <= 60) setTarrif(fareDetail.returnJrny);
            else setTarrif(fareDetail.singleJrny);
          }
        }   
    })
  }, [tollName, vecType, vecNum]);

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
        <form onSubmit={onSubmit} className="form" >
            <label htmlFor="toll">Select toll name*</label>
            <select required value={tollName} onChange={(e) => {setTollName(e.target.value)}}>
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
                <option value="Heavy vehicle">Heavy Vehicle</option>
            </select>

            <label htmlFor="vecNum">Vehicle Number*</label>
            <input type="text" required pattern="[a-zA-Z0-9]+" placeholder="Enter your vehicle number" value={vecNum} onChange={(e) => {setVecNum(e.target.value)}}/>

            <label htmlFor="tariff">Tariff*</label>
            <input type="text" required placeholder="Tariff amount" disabled value={tariff} onChange={(e) => {setTarrif(e.target.value)}}/>
        
            <input type="submit" value="Add Entry" disabled={isValid}/>
        </form>
    </div>
    </div>
    </div>
  )
}
