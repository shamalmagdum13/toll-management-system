import {React} from 'react';
import './VehicleList.css';
import './TollList.css';

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
              <td><button onClick={() => {props.deleteHandler(toll.id)}}>Delete</button></td>
          </tr>
    );
  });

  if(props.tolls.length >0)
  {
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
              <th>Button</th>
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
  else
  {
    return(
    <div className='container'>

    <table rules='rows'>
        <thead>
            <tr>
              <th>TOLL NAME</th>
              <th>CAR/JEEP/VAN</th>
              <th>LCV</th>
              <th>TRUCK/BUS</th>
              <th>HEAVY VEHICLE</th>
              <th>Button</th>
            </tr>
        </thead>
    </table>
    <div className='notFound'>
          <h2>
          Toll Not Found
        </h2>
    </div>
  </div>
    )
  }
  }


