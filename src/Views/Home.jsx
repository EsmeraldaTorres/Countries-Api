import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// Import Styles & Icons
import '../styles/showAllCountries.css';
import SearchIcon from '@material-ui/icons/Search';
// Import Components
import ShowAllCountries from "../Components/Home/ShowAllCountries";
import Header from "../Components/Header"
import Loading from "../Components/Loading"

const Home=()=>{
// Component State
const [countries, setCountries] = useState([]);
const [loading, setLoading] = useState(false)
const [allCountries, SetAllCountries] = useState([])
const [numBef,setNumBef] =useState(0)
const [num, setNum] = useState(15)

// Functions
const handleCountries = async () =>{
  setLoading(true)
  try{
    const urlAPI = await fetch (`https://restcountries.com/v3/all`)
    const answerApi = await urlAPI.json()
    console.log(answerApi)
    setLoading(false)
    // answerApi.sort(function (){return Math.random()-0.5})
    SetAllCountries(answerApi)
    const tenCountries = answerApi.slice(numBef,num)
    // setCountries(tenCountries)
    console.log(tenCountries)
  }catch(error){
    setLoading(false)
    console.log(error)
  }
}
console.log(countries)

const more = () =>{
  for(let i = 0; i<1; i++){
    setNumBef(prevNumBef => prevNumBef + 15)
    console.log(numBef)
    setNum(prevNum => prevNum+ 15)
    console.log(num)
  }
  const newCountries = allCountries.slice(numBef,num);
  console.log(numBef)
  console.log(num)
  setCountries([...countries,...newCountries])
}


useEffect(() => {
  handleCountries()
}, [])

  return (
      <>
      <Header/>
      <img src="https://images.pexels.com/photos/6397/white-globe-on-a-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="background"/>
      <div className="title-search">
        <h1 className="title">COUNTRIES OF THE WORLD</h1>
        <div>
        <Link to={`/SearchCountry`} className="search-txt"><SearchIcon className="search-icon"/></Link>
        </div>
      </div>
      
      {loading ? <Loading/> : ( 
      <div className="countries-container">
        {countries.map(country => (
          <ShowAllCountries
            name={country.name}
            flags={country.flags[0]}
            capital={country.capital}
            key={country.id}
          />
        ))}
        
        <div className="align-center bg-grey">
          <button onClick={more}> View More</button>
        </div>
      </div> 
      )} 
    </>
  );
}

export default Home;
