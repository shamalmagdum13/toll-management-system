import React from 'react';
import './VehicleList.css';
import './Navbar.css'

export default function VehicleList(props) {

  const renderVehicleList = props.vehicles.map((vehicle) => {
    return (<tr key={vehicle.date}>
              <td>{vehicle.vecType}</td>
              <td>{vehicle.vecNum}</td>
              <td>{vehicle.date.toLocaleString()}</td>
              <td>{vehicle.tollName}</td>
              <td>{vehicle.tariff}</td>
          </tr>
    );
  });
  if(props.vehicles.length >0)
  {
  return (
  <>
    <div className='container'>

    <table rules='rows'>
      <thead>
        <tr>
          <th>VEHICLE TYPE</th>
          <th>VEHICLE NUMBER</th>
          <th>DATE/TIME</th>
          <th>TOLL NAME</th>
          <th>TARRIF</th>
        </tr>
      </thead>
      <tbody>
        {renderVehicleList}
      </tbody>
    </table>
  </div>
  </>
  )
  }
  else{
    return(
      <>
    <div className='container'>

    <table rules='rows'>
      <thead>
        <tr>
          <th>VEHICLE TYPE</th>
          <th>VEHICLE NUMBER</th>
          <th>DATE/TIME</th>
          <th>TOLL NAME</th>
          <th>TARRIF</th>
        </tr>
      </thead>
      
     
    </table>
    <div className='notFound'>
          <h2>
          Vehicle Not Found
        </h2>
    </div>
  </div>
  </>
    )
  }
}