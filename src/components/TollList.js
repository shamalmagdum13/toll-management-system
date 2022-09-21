import React from 'react';
import './VehicleList.css';

export default function TollList(props) {

  const renderTollList = props.tolls.map((toll) => {
    return (<tr>
              <td>{toll.tollName}</td>
              {toll.fareDetails?.map((fareDetail) => {
                return (
                  <>
                  <td>{fareDetail.singleJrny}/{fareDetail.returnJrny}</td>
                  </>
                );
              })}
          </tr>
    );
  });

  return (
  <>
    <div className='container'>
    <table rules='rows'>
      <thead>
        <tr>
          <th>TOLL NAME</th>
          <th>CAR/JEEP/VAN</th>
          <th>LCV</th>
          <th>TRUCK/BUS</th>
          <th>HEAVY VEHICLE</th>
        </tr>
      </thead>
      <tbody>
        {renderTollList}
        </tbody>
    </table>
  </div>
  </>
  )
}

