import React,{useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export default function Navbar(props) {

  const[navData, setNavData] = useState({link:'/viewTolls', btnText:'View new tolls', searchPlaceholder:'Search Vehicle'})
  const inputEl = useRef("");
  const selectEl = useRef("");
  function changeNavData () {
    if(navData.btnText ==='Back to vehicle logs'){
      setNavData({link:'/viewTolls', btnText:'View new tolls', searchPlaceholder:'Search vehicle'})
      props.setPageIndentifier(false);
    } 
    else{
      setNavData({link:'/', btnText:'Back to vehicle logs', searchPlaceholder:'Search a toll'})
      props.setPageIndentifier(true);
  }
}

function getSearchTerm () {
  props.searchKeyword(inputEl.current.value);
}

function getFilterTerm (){
  props.filterKeyword(selectEl.current.value);
}

  return (
    <>
    <div className="topnav" >
    <div className='leftDiv'>
        <p className="heading">Toll Entries/Vehicle Entries</p>
        <select  value={props.filterTerm} ref={selectEl} onChange={() => {getFilterTerm()}}>
                <option value="">Select</option>
                <option value="all">All</option>
                <option value="sangli">Sangli</option>
                <option value="kolhapur">Kolhapur</option>
                <option value="satara">Satara</option>
            </select>
        <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
        <input className="searchBar" placeholder={navData.searchPlaceholder} ref={inputEl} value={props.term} onChange={() => {getSearchTerm()}}/>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
    </div>
    <div className='rightDiv'>
    <Link to="/addVehicle">
        <button className="button" onClick={() => {props.setDialogBox(true)}}>Add vehicle entry</button>
    </Link>
    <Link to="/addToll">
        <button className="button" onClick={() => {props.setDialogBox(true)}}>Add new toll</button>
    </Link>
    <Link to={navData.link}>
    <button className="button" onClick={() => {changeNavData()}}>{navData.btnText}</button>
    </Link>
    </div>
  </div>
  </>
  )
}
