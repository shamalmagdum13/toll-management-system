import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import VehicleList from './components/VehicleList';
import AddVehicle from './components/AddVehicle';
import AddToll from './components/AddToll';
import TollList from './components/TollList';


function App() {

  const LOCAL_STORAGE_VEHICLES_KEY = "vehicles";
  const [vehicles, setVehicles] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_VEHICLES_KEY)) ?? []
  ); 
  const [dialogBox, setDialogBox] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [pageIdentifier, setPageIdentifier] = useState(false);
  const [filterTerm, setFilterTerm] = useState('');

  const addVehicleHandler = (vehicle) => {
    setVehicles([...vehicles, {...vehicle }]);
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
    // else
    // {
    //     if(searchTerm !== "")
    //     {
    //       const newTollList = vehicles.filter((vehicle) => {
    //         return vehicle.vecNum.toLocaleLowerCase()
    //               .includes(searchTerm.toLocaleLowerCase());
    //       })
    //       setSearchResults(newVehicleList);
    //       console.log(searchResults);
    //     }
    //     else
    //     {
    //       setSearchResults(vehicles);
    //     }

    // }
    
  };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_VEHICLES_KEY, JSON.stringify(vehicles));
  }, [vehicles]);

  return (
    <div>
    <Router>

        <Navbar setDialogBox={setDialogBox} 
                pageIdentifier={pageIdentifier}
                term = {searchTerm}
                searchKeyword = {searchHandler}
                filterTerm = {filterTerm}
                filterKeyword = {filterHandler}/>

        <Routes>
            <Route path='/' exact element={ <VehicleList vehicles = {filterTerm === "" || filterTerm === "all" ? vehicles : searchResults} /> } />
            <Route path="/addVehicle" 
                   element={ dialogBox && <AddVehicle 
                   addVehicleHandler={addVehicleHandler} 
                   closeDialogBox ={setDialogBox}/> }
            />
            <Route path="/addToll" 
                   element={ dialogBox && <AddToll 
                   closeDialogBox2 ={setDialogBox}/> }
            />
            <Route path="/viewTolls" 
                   element={<TollList/> }
            />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
