import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SearchMeal(){

    const [recipe, setRecipe] = useState([])

    let { id } = useParams()

    useEffect(() => {
        const getRecipe = async () => {
            const response = await axios.get('https://themealdb.com/api/json/v1/1/search.php?s')
            console.log(response)
            setRecipe(response.data.results[id])
        }
        getRecipe()
}, [])

    return(
        <h1>Search Meal</h1>
    )
}

