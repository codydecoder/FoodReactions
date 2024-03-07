import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../global'
import countryArray  from '../data/CountryCode'
import '../styles/SearchCountry.css'



export default function SearchCountry(){
    
    const [countries, setCountries] = useState([])
    const [countryMeals, setCountryMeal] = useState([])
    //let countryName = ''
    const [countryName,setCountryName] = useState('')
    const [countryCodes,setCountryCodes] = useState(countryArray)


    useEffect(() => {
        const getCountries = async () => {
            const responseCountries = await axios.get(`${BASE_URL}list.php?a=list`)
            // console.log(responseCountries.data.meals)
            setCountries(responseCountries.data.meals)
        }
        getCountries()
    }, [])

    let navigate = useNavigate()

    const showCountries = async (country) => {
        // navigate(`${country.strArea}`)
        const responseListbyCountry = await axios.get(`${BASE_URL}filter.php?a=${country.strArea}`)
        // console.log(responseListbyCountry.data.meals)
        setCountryMeal(responseListbyCountry.data.meals)
        setCountryName(country.strArea)
        

    }

    if(!countries) {
        return <h1>LOADING...</h1>

    } else {
    
    
    return(
        <>
       <div className="area-grid">
            {
            countries.map((country,key) => (
               
            <div className="area-card" onClick={() => showCountries(country)} key={country.strArea}>
                {countryCodes.map((code,key) => (
                    // code.country_name === country.strArea ? <img src={`https://flagcdn.com/${code.country_code}.svg`} width="30" alt={country.strArea} /> : null
                    code.country_name === country.strArea ? <img src={`https://www.themealdb.com/images/icons/flags/big/64/${code.country_code}.png`} width="30" alt={country.strArea} /> : null
                    //https://www.themealdb.com/images/icons/flags/big/64/us.png
                ))}
                <h5>{country.strArea}</h5>
            </div>
            ))}
        </div>

            <div className="country-name"><h1>{countryName}</h1></div>
            <div className="area-grid-detail">
                
                {   
                    
                    countryMeals.map((meals,key) => (
                       <div className="area-card-detail" key={meals.idMeal}>
                            
                            <img src={meals.strMealThumb}></img>
                            <h3>{meals.strMeal}</h3>
                       </div>
                    
               ))}

            </div>
       {/* </div> */}
       </>
    )
}
}

 {/* <ul className="list-area-ul">
                    {
                        countries.map((country, key) => (
                        <li className="list-area-li" key={country.strArea}><span className="country-name"><h2>{country.strArea}</h2></span></li>
                        ))
                    }
                    </ul> */}