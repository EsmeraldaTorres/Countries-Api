import React, { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
// Import Styles & Icons
import "../styles/CountryInformation.css";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
// Import Components
import Header from "../Components/Header";
import Loading from "../Components/Loading"
import Details from "../Components/Details"


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
      setDetails(result)
      console.log(result)
    } catch (e) {
      setLoading(false)
      console.log(e);
    }
  };


  console.log(details)

  useEffect(() => {
    fetchDetailsAPI();
  }, []);

  return (
      details.map((detail,index) => (
        <Details
        name={detail.name}
        key={index}
        />
      ))
    )
}
export default CountryInformation;
