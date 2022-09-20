import React from 'react';
import './VehicleList.css';

export default function TollList() {

  return (
  <>
    <div className='container'>
    <table rules='rows'>
      <tr>
        <th>TOLL NAME</th>
        <th>CAR/JEEP/VAN</th>
        <th>LCV</th>
        <th>TRUCK/BUS</th>
        <th>HEAVY VEHICLE</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Adam</td>
        <td>Johnson</td>
        <td>67</td>
        <td>67</td>
        <td>67</td>
      </tr>
    </table>
  </div>
  </>
  )
}

