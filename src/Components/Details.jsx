import React from "react"
import "../styles/details.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header"

const Details = props => {
    const {name, flags, capital, region, subregion, officialName, independent} = props
    return (
        <>  
        <Header/>
        <section>
        <div className="container-details">
              <h2>{name}</h2>
              <h3>Official Name:  {officialName}</h3>
              <div className="details-information">
                <div className="country-flag">
                  <img src={flags} alt="country-flag" className="flag-img" />
                </div>
                <div className="information">
                  <div>
                    <p> Capital City {capital}</p>
                    <Link to={`/Weather/${capital}`} className="btn">Weather in RealTime</Link>
                  </div>
                  <p>Region{region}</p>
                  <p>Subregion:{subregion}</p>
                  <p>{independent}</p>
                </div>
              </div>
              <div className="align-center">
                <button className="btn-back"><Link to={`/SearchCountry`} className="btn">Back</Link></button>
              </div>
        </div>
        </section>
        </>
    )
}

export default Details