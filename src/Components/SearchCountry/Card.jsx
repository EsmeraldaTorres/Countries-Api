import React from "react";
import { Link } from "react-router-dom";
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const Card = (props) =>{
  const {flags,name,capital} = props

  return(
    <div className="card">
      <img src={flags} alt="flag-img"/>
       <div className="information"> 
      <p><HomeWorkIcon/>Capital:{capital}</p>
      </div>
      <Link to={`/CountryInformation/${name}`} className="btn">View More...</Link>
    </div>
  )
}

export default Card