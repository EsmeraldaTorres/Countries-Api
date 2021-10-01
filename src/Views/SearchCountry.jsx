import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Card from "../Components/SearchCountry/Card" 
import Header from "../Components/Header";
import FetchError from "../Components/SearchCountry/FetchError";
import "../styles/SearchCountry.css";
import Loading from "../Components/Loading"

const SearchCountry = () => {
// Estado del componente
 const [inputText, setInputText] = useState("")
 const [click, setClick] = useState(false);
 const [error, setError] = useState(false);
 const [countrycapital, setCountrycapital] = useState([])
 const [worldImage, setWorldImage] = useState(true)
 const [loading, setLoading] = useState(false)

  useEffect(() => {
    //  Consultamos Api
    const handleCallAPI = async () => {
      setLoading(true)
      try{
        const urlAPI = await fetch (`https://restcountries.com/v3/name/${inputText}`)
        const countryObj = await urlAPI.json()
        setLoading(false) 

        if(countryObj.status) {
          setError(countryObj.message)
        }else{
        setCountrycapital(countryObj[0]);
        setError(false)
        }
      } catch (e){
      setLoading(false)
        console.log(e)
      }
    }
    handleCallAPI();
}, [click, inputText]);

  const handleClick = () => {
    setClick(!click)
    setWorldImage(false)
  }

return (
    <>
    <Header/>
    <section className="bg">
    <div className="container">
      <div className="container-search">
        <label for="country-name">Type the country's name</label>
        <div className="display-flex">
          <input type="text" onChange={evento => setInputText(evento.target.value)}/>
          <button onClick={handleClick} className="search-btn">search</button>
        </div>
      </div>

      { loading ? <Loading/> :
        worldImage ? (
          <div className="img-world">
          <img src={"https://i.postimg.cc/0QQP2NyL/Mundo-hecho-de-Banderas.gif"} alt="img-world"/>
        </div>
        ) :
        error ? (
          <FetchError message={error} />
         ) : 
         loading ? <Loading/> : 
         countrycapital ? 
          (
            <Card name={countrycapital.name.common} flags={countrycapital.flags[1]} capital={countrycapital.capital}/>
            )
          : <>
         </>
      }
    </div>
    <div className="align-center">
    <button className="btn-back"><Link to={`/`} className="btn">Back</Link></button>
    </div>
    </section>
    </>
  );
}

export default SearchCountry;
