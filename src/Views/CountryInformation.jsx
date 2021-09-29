import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
// Import Styles & Icons
import "../styles/details.css";

// Import Components
import Loading from "../Components/Loading"
import Details from "../Components/Details"


const CountryInformation = props => {
  const {name} = useParams();
  // Components State
  const [loading, setLoading] = useState(false)
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetailsAPI = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://restcountries.com/v3/name/${name}`).then(res => res.json())
        console.log(response)
        setLoading(false)
        setDetails(response)
      } catch (e) {
        setLoading(false)
        console.log(e);
      }
    };
    fetchDetailsAPI();
  }, []);

  return (
    <>
      { loading ? <Loading/> : 
        details && details.map((detail,index) => (
        <Details
        capital={detail.capital && detail.capital[0].length > 0 ? detail.capital[0] : "This country doesn´t have capital"}
        name={detail.name.common}
        officialName={detail.name.official}
        key={index}
        flags={detail.flags[0]}
        region={detail.region}
        subregion={detail.subregion}
        independent={detail.independent ? "This is an independent country" : "This isn't an independent country"}
        // coin={detail.currencies && detail.currencies.CA.name ? detail.currencies.CA.name : "This country doesn´t have currencies"}
        // symbolCoin={detail.currencies && detail.currencies.CA.symbol ? detail.currencies.CA.symbol : "This country doesn´t have currencies"}
        // languages={detail.languages && detail.languages.key ? detail.languages.key  : "Don't have"}
        />
      ))
      }
      
    </>
    )
}
export default CountryInformation;
