import React,{useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {

  const[navData, setNavData] = useState({link:'/viewTolls', btnText:'View new tolls', searchPlaceholder:'Search Vehicle', title:'Toll Entries/Vehicle Entries', showFilter:true})
  const inputEl = useRef("");
  const selectEl = useRef("");
  function changeNavData () {
    if(navData.btnText ==='Back to vehicle logs'){
      setNavData({link:'/viewTolls', btnText:'View new tolls', searchPlaceholder:'Search vehicle', title:'Toll Entries/Vehicle Entries', showFilter:true})
      props.setPageIdentifier(false);
    } 
    else{
      setNavData({link:'/', btnText:'Back to vehicle logs', searchPlaceholder:'Search a toll', title:'Tollgate List', showFilter:false})
      props.setPageIdentifier(true);
  }
}

function getSearchTerm () {
  props.searchKeyword(inputEl.current.value);
  props.btnHandler('search');

}

function getFilterTerm (){
  props.filterKeyword(selectEl.current.value);
  props.btnHandler('filter');
}

  return (
    <>
    <div className="topnav" >
    <div className='leftDiv'>
        <h3 className="heading">{navData.title}</h3>
          <label>
            {navData.showFilter && <select  value={props.filterTerm} ref={selectEl} onChange={() => {getFilterTerm()}}>
                <option value=''>Filter</option>
                <option value="all">All</option>
                {props.tolls.map((toll) => {
                return (
                  <option value={toll.tollName}>{toll.tollName}</option>   
                );
            })}
            </select>}
            </label>
        <input className="searchBar" placeholder={navData.searchPlaceholder} ref={inputEl} value={props.term} onChange={() => {getSearchTerm()}}/>
    </div>
    <div className='rightDiv'>
      <button className="button" onClick={() => {props.setDialogVec(true)}}>Add vehicle entry</button>
      <button className="button" onClick={() => {props.setDialogToll(true)}}>Add new toll</button>
      <Link to={navData.link}>
      <button className="button" onClick={() => {changeNavData()}}>{navData.btnText}</button>
      </Link>
    </div>
  </div>
  </>
  )
}
