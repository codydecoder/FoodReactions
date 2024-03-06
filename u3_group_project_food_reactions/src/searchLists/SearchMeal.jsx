import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../global'


export default function SearchMeal(props){

    const [recipe, setRecipes] = useState([])

    /*
    const [selectedRecipe, setSelectedRecipe] = useState(null)

    useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get(`${BASE_URL}search.php?s`)
      console.log(response.data.meals[0])
      setRecipes(response.data.meals)
    }
    getRecipes()

    }, [])
    */

    useEffect(() => {
        const getRecipes = async () => {
            const response = await axios.get(`${BASE_URL}search.php?s`)
            //console.log(response.data.meals)
            setRecipes(response.data.meals)
        }
        getRecipes()
    }, [])

    if(!props.recipes) {
        return <h1>LOADING...</h1>

    } else {
        return (
        <div className="recipe-list-container">
        <ul className='recipes-list'>
            {
                props.recipes.map((recipe) => (
                    <li className="recipe-card" key={recipe.idMeal}>
                        <h3 className="card-labels">Name: <span className='card-details'>{recipe.strMeal}</span></h3>
                        <h3 className="card-labels">Area: <span className='card-details'>{recipe.strArea}</span></h3>
                        <h3 className="card-labels">Ingredients: <span className='card-details'>{recipe.strIngredient1} {recipe.strIngredient2} {recipe.strIngredient3} {recipe.strIngredient4} {recipe.strIngredient5} {recipe.strIngredient6} {recipe.strIngredient7} {recipe.strIngredient8} {recipe.strIngredient9} {recipe.strIngredient10} {recipe.strIngredient11} {recipe.strIngredient12} {recipe.strIngredient13} {recipe.strIngredient14} {recipe.strIngredient15} {recipe.strIngredient16} {recipe.strIngredient17} {recipe.strIngredient18} {recipe.strIngredient19} {recipe.strIngredient20}</span></h3>
                        <h3 className="card-labels">Instructions: <span className='card-details'>{recipe.strInstructions}</span></h3>
                    </li>
                ))
            }
        </ul>
        </div>
    )}

}

