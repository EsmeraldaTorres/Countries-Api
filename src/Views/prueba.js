const handleCountries = async () =>{
const urlAPI = await fetch (`https://restcountries.com/v3/name/united`)
console.log(urlAPI)
const countryObj = await urlAPI.json()
console.log(countryObj)
}
handleCountries()