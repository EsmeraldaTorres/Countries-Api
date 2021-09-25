import React, { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
// Import Styles & Icons
import "../styles/CountryInformation.css";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
// Import Components
import Header from "../Components/Header";
import Loading from "../Components/Loading"


const CountryInformation = props => {
  const {name} = useParams();
  console.log(name)
  // Components State
  const [loading, setLoading] = useState(false)
  const [details, setDetails] = useState([]);

  const fetchDetailsAPI = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://restcountries.com/v3/name/${name}`);
      const result = await response.json();
      setLoading(false)
      setDetails(result[0]);
      console.log(result[0])

    } catch (e) {
      setLoading(false)
      console.log(e);
    }
  };

  console.log(details)
  console.log(details)

  useEffect(() => {
    fetchDetailsAPI();
  }, []);


  return (
    <>
      <Header/>
      {
        loading ? <Loading/> : 
        details ? (
        <section className="bg">
          <h2>{details.area}</h2>
         <div className="container-country-information">
            <div className="flag-img">
            {/* <img src={details.flags[0]} alt="country-flag" /> */}
            </div>
            <div className="information">
              <p><HomeWorkIcon/>Capital: {details.capital}</p>
            </div>
            <div className="information">
              <p><HomeWorkIcon/>Region {details.region}</p>
            </div>
            <div className="information">
              <p><HomeWorkIcon/>Subregion {details.subregion}</p>
            </div>
          </div>
          <div className="align-center">
            <button><Link to={`/SearchCountry`} className="btn">Back</Link></button>
          </div>
        </section>
        ) : 
        <></>
      }
    </>
    )
}
export default CountryInformation;
