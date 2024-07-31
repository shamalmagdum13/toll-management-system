import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import VehicleList from './components/VehicleList';
import AddVehicle from './components/AddVehicle';
import AddToll from './components/AddToll';
import TollList from './components/TollList';


function App() {

  const LOCAL_STORAGE_VEHICLES_KEY = "vehicles";
  const LOCAL_STORAGE_TOLLS_KEY = "tolls";
  const [vehicles, setVehicles] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_VEHICLES_KEY)) ?? []
  ); 
  const [tolls, setTolls] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOLLS_KEY)) ?? []
  ); 
  const [dialogVec, setDialogVec] = useState(false);
  const [dialogToll, setDialogToll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [pageIdentifier, setPageIdentifier] = useState(false);
  const [filterTerm, setFilterTerm] = useState('');
  const [btnIdentifier, setBtnIdentifier] = useState('');

  const addVehicleHandler = (vehicle) => {
    setVehicles([...vehicles, {...vehicle }]);
  };

  const addTollHandler = (toll) => {
    setTolls([...tolls, {...toll }]);
  };


  const filterHandler = (filterTerm) => {
    setFilterTerm(filterTerm);
    if(!pageIdentifier)
    {
        if(filterTerm === "" || filterTerm ==="all")
        {
           setSearchResults(vehicles);
        }
        else
        {
          const newVehicleList = vehicles.filter((vehicle) => {
            return vehicle.tollName.toLocaleLowerCase()
                  .includes(filterTerm.toLocaleLowerCase());
          })
          setSearchResults(newVehicleList);
        }
    }
  }


  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(!pageIdentifier)
    {
        if(searchTerm !== "")
        {
          const newVehicleList = vehicles.filter((vehicle) => {
            return vehicle.vecNum.toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase());
          })
          setSearchResults(newVehicleList);
        }
        else
        {
          setSearchResults(vehicles);
        }
    }
    else
    {
        if(searchTerm !== "")
        {
          const newTollList =tolls.filter((toll) => {
            return toll.tollName.toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase());
          })
          setSearchResults(newTollList);
        }
        else
        {
          setSearchResults(tolls);
        }

    }
    
  };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_VEHICLES_KEY, JSON.stringify(vehicles));
  }, [vehicles]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TOLLS_KEY, JSON.stringify(tolls));
  }, [tolls]);

 const btnHandler = (data) =>{
    setBtnIdentifier(data)
  }

function vehicleList () {
  if(btnIdentifier === "filter")
  {
      if(filterTerm === "" || filterTerm === "all")return vehicles;
      else return searchResults;
  }
  else if(btnIdentifier === "search")
  {
      if(searchTerm === "") return vehicles;
      else return searchResults;
  }
  else
  {
      return vehicles;
  }
}

const getTollId = (id) =>{
  const newTollList = tolls.filter((toll) => {
    return toll.id !== id;
  })
  setTolls(newTollList);
}

  
  return (
    <div>
    <Router>
    {dialogVec && <AddVehicle 
                   addVehicleHandler={addVehicleHandler} 
                   closeDialogVec ={setDialogVec}
                   tolls = {tolls}
                   vehicles = {vehicles}/>}

    {dialogToll && <AddToll 
                      addTollHandler={addTollHandler} 
                      closeDialogToll ={setDialogToll}/>  }

        <Navbar setDialogVec={setDialogVec} 
                setDialogToll={setDialogToll} 
                setPageIdentifier={setPageIdentifier}
                term = {searchTerm}
                searchKeyword = {searchHandler}
                filterTerm = {filterTerm}
                filterKeyword = {filterHandler}
                tolls = {tolls} 
                btnHandler ={btnHandler}/>


        <Routes>
            <Route path='/' exact element={ <VehicleList vehicles = {vehicleList()}/> } />
            <Route path="/viewTolls"
                   element={ pageIdentifier && <TollList tolls = {searchTerm === "" ? tolls : searchResults} 
                   deleteHandler = {getTollId}/> }
            />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
