import React from "react";
import { Link } from "react-router-dom";

const ShowAllCountries = props => {
  const {name,flags,capital} = props;
  return(
    <div className="single-card">
      <img src={flags} alt={name}/>
      <h2>{name}</h2>
      <Link to={`/CountryInformation/${name}`} className="btn"> More Information...</Link>
      <Link to={`/Weather/${capital}`} className="btn"> Weather in Capital</Link>
    </div>
  )
}
export default ShowAllCountries;