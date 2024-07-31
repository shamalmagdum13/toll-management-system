/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import './AddToll.css';

export default function AddToll(props) {

    const[tollName, setTollName] = useState('');
   
    const[row1Vec, setRow1Vec] = useState('');
    const[row1SingleJrny, setRow1SingleJrny] = useState(0);
    const[row1ReturnJrny, setRow1ReturnJrny] = useState(0);

    const[row2Vec, setRow2Vec] = useState('');
    const[row2SingleJrny, setRow2SingleJrny] = useState(0);
    const[row2ReturnJrny, setRow2ReturnJrny] = useState(0);

    const[row3Vec, setRow3Vec] = useState('');
    const[row3SingleJrny, setRow3SingleJrny] = useState(0);
    const[row3ReturnJrny, setRow3ReturnJrny] = useState(0);

    const[row4Vec, setRow4Vec] = useState('');
    const[row4SingleJrny, setRow4SingleJrny] = useState(0);
    const[row4ReturnJrny, setRow4ReturnJrny] = useState(0);
    const [isValid, setValid] = useState(true);

    const validate = () => {
      if(tollName ==='' || row1Vec ==="" || row1SingleJrny ==="" || row1ReturnJrny===""
      || row2Vec ==="" || row2SingleJrny ==="" || row2ReturnJrny===""
      || row3Vec ==="" || row3SingleJrny ==="" || row3ReturnJrny===""
      || row4Vec ==="" || row4SingleJrny ==="" || row4ReturnJrny==="") return true;
    };
    useEffect(() => {
      const isValid = validate();
      setValid(isValid);
    }, [tollName,
        row1Vec, row1SingleJrny, row1ReturnJrny,
        row2Vec, row2SingleJrny, row2ReturnJrny,
        row3Vec, row3SingleJrny, row3ReturnJrny,
        row4Vec, row4SingleJrny, row4ReturnJrny]);
   
    function handleSubmit(e){
        e.preventDefault();
        let row1 = {vecType: row1Vec, singleJrny:row1SingleJrny, returnJrny:row1ReturnJrny};
        let row2 = {vecType: row2Vec, singleJrny:row2SingleJrny, returnJrny:row2ReturnJrny};
        let row3 = {vecType: row3Vec, singleJrny:row3SingleJrny, returnJrny:row3ReturnJrny};
        let row4 = {vecType: row4Vec, singleJrny:row4SingleJrny, returnJrny:row4ReturnJrny};
        
        const array = [];

        if(row1Vec === "Car/Jeep/Van") array.push(row1);
        else if(row2Vec === "Car/Jeep/Van") array.push(row2);
        else if(row3Vec === "Car/Jeep/Van") array.push(row3);
        else array.push(row4);

        if(row1Vec === "LCV") array.push(row1);
        else if(row2Vec === "LCV") array.push(row2);
        else if(row3Vec === "LCV") array.push(row3);
        else array.push(row4);

        if(row1Vec === "Truck/Bus") array.push(row1);
        else if(row2Vec === "Truck/Bus") array.push(row2);
        else if(row3Vec === "Truck/Bus") array.push(row3);
        else array.push(row4);

        if(row1Vec === "Heavy vehicle") array.push(row1);
        else if(row2Vec === "Heavy vehicle") array.push(row2);
        else if(row3Vec === "Heavy vehicle") array.push(row3);
        else array.push(row4);
        
        const formData = {
            id: Math.random(), 
            tollName :tollName,
            fareDetails :array
        }       
        props.addTollHandler(formData);
        setTollName('');
        setRow1Vec('');
        setRow1SingleJrny(0);
        setRow1ReturnJrny(0);
        setRow2Vec('');
        setRow2SingleJrny(0);
        setRow2ReturnJrny(0);
        setRow3Vec('');
        setRow3SingleJrny(0);
        setRow3ReturnJrny(0);
        setRow4Vec('');
        setRow4SingleJrny(0);
        setRow4ReturnJrny(0);
        alert("Form Submitted!");
    }

  return (
    <div className='modalBackground'>
    <div className='modalContainer'>
    <div className='titleCloseBtn'>
        <button onClick={() => {props.closeDialogToll(false)}}>X</button>
    </div>
    <div className='title'>
    <h3>Add New Toll</h3>
    </div>
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="tollName">Toll Name*</label>
            <input type="text" required placeholder="Enter toll name" value={tollName} onChange={(e) => {setTollName(e.target.value)}}/>
           
            <label htmlFor="fareDetails">Vehicle Fare Details*</label>
            <table className="table">
                <tbody>
                    <tr >
                        <td>
                            <select required value={row1Vec} onChange={(e) => {setRow1Vec(e.target.value)}}>
                                <option value="">Select</option>
                                <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                                <option value="LCV">LCV</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                        </td>
                        <td>
                            <input required type="number" value={row1SingleJrny} placeholder='Single Journey' onChange={(e) => {setRow1SingleJrny(e.target.value)}}/>
                        </td>
                        <td>
                            <input required type="number" value={row1ReturnJrny} placeholder='Return Journey' onChange={(e) => {setRow1ReturnJrny(e.target.value)}}/>
                        </td>
                    </tr >

                    <tr>
                        <td>
                            <select required value={row2Vec} onChange={(e) => {setRow2Vec(e.target.value)}}>
                                <option value="">Select</option>
                                <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                                <option value="LCV">LCV</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                        </td>
                        <td>
                            <input required type="number" value={row2SingleJrny} placeholder='Single Journey' onChange={(e) => {setRow2SingleJrny(e.target.value)}}/>
                        </td>
                        <td>
                            <input required type="number" value={row2ReturnJrny} placeholder='Return Journey' onChange={(e) => {setRow2ReturnJrny(e.target.value)}}/>
                        </td>
                    </tr >  

                    <tr>
                        <td>
                            <select required value={row3Vec} onChange={(e) => {setRow3Vec(e.target.value)}}>
                                <option value="">Select</option>
                                <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                                <option value="LCV">LCV</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                        </td>
                        <td>
                            <input required type="number" value={row3SingleJrny} placeholder='Single Journey' onChange={(e) => {setRow3SingleJrny(e.target.value)}}/>
                        </td>
                        <td>
                            <input required type="number" value={row3ReturnJrny} placeholder='Return Journey' onChange={(e) => {setRow3ReturnJrny(e.target.value)}}/>
                        </td>
                    </tr >  

                    <tr>
                        <td>
                            <select required value={row4Vec} onChange={(e) => {setRow4Vec(e.target.value)}}>
                                <option value="">Select</option>
                                <option value="Car/Jeep/Van"> Car/Jeep/Van</option>
                                <option value="LCV">LCV</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                        </td>
                        <td>
                            <input required type="number" value={row4SingleJrny} placeholder='Single Journey' onChange={(e) => {setRow4SingleJrny(e.target.value)}}/>
                        </td>
                        <td>
                            <input required type="number" value={row4ReturnJrny} placeholder='Return Journey' onChange={(e) => {setRow4ReturnJrny(e.target.value)}}/>
                        </td>
                    </tr >    
                </tbody>
            </table>
            <input type="submit" value="Add Toll Details" disabled={isValid}/>
    </form>
    </div>
    </div>
    </div>
  )
}

