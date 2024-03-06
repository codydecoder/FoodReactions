import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../global'
import '../styles/SearchCountry.css'


export default function SearchCountry(){
    
    const [countries, setCountries] = useState([])


    useEffect(() => {
        const getCountries = async () => {
            const responseCountries = await axios.get(`${BASE_URL}list.php?a=list`)
            console.log(responseCountries.data.meals)
            setCountries(responseCountries.data.meals)
        }
        getCountries()
    }, [])

    let navigate = useNavigate()

    const showCountries = (key) => {
        navigate(`${key}`)
    }

    if(!countries) {
        return <h1>LOADING...</h1>

    } else {
    
    
    return(
       <div className="area-grid">
            {/* <h1>Search by country</h1> */}
            {
            countries.map((country,key) => (
            <div className="area-card" key={country.strArea}>
                <h3>{country.strArea}</h3>
            </div>
            ))}
       </div>

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