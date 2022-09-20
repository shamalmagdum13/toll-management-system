import React from 'react';
import './VehicleList.css';
import './Navbar.css'

export default function VehicleList(props) {

  const renderVehicleList = props.vehicles.map((vehicle) => {
    return (<tr key={vehicle.id}>
              <td>{vehicle.vecType}</td>
              <td>{vehicle.vecNum}</td>
              <td>{vehicle.date}</td>
              <td>{vehicle.tollName}</td>
              <td>{vehicle.tariff}</td>
          </tr>
    );
  });
  return (
  <>
    <div className='container'>
    <table rules='rows'>
      <tr>
        <th>VEHICLE TYPE</th>
        <th>VEHICLE NUMBER</th>
        <th>DATE/TIME</th>
        <th>TOLL NAME</th>
        <th>TARRIF</th>
      </tr>
      {renderVehicleList}
    </table>
  </div>
  </>
  )
}



