import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../global'


export default function SearchMeal(){

    const [recipes, setRecipes] = useState([])


    useEffect(() => {
        const getRecipes = async () => {
            const response = await axios.get(`${BASE_URL}search.php?s`)
            //console.log(response.data.meals)
            setRecipes(response.data.meals)
        }
        getRecipes()
    }, [])

    let navigate = useNavigate()

    const showRecipe = (key) => {
        navigate(`${key}`)
    }

    if(!recipes) {
        return <h1>LOADING...</h1>

    } else {
        return (
        <div className="recipe-list">
        
            {
                recipes.map((recipe, key) => (
                    <li className="recipe-card" key={recipe.idMeal}>
                        <h3 className="recipe-name">Name: <span className='recipe-name-details'>{recipe.strMeal}</span></h3>
                        <h3 className="recipe-area">Area: <span className='recipe-area-details'>{recipe.strArea}</span></h3>
                        <h3 className="recipe-ingredients">Ingredients: <span className='recipe-ingredients-details'>{recipe.strIngredient1} {recipe.strIngredient2} {recipe.strIngredient3} {recipe.strIngredient4} {recipe.strIngredient5} {recipe.strIngredient6} {recipe.strIngredient7} {recipe.strIngredient8} {recipe.strIngredient9} {recipe.strIngredient10} {recipe.strIngredient11} {recipe.strIngredient12} {recipe.strIngredient13} {recipe.strIngredient14} {recipe.strIngredient15} {recipe.strIngredient16} {recipe.strIngredient17} {recipe.strIngredient18} {recipe.strIngredient19} {recipe.strIngredient20}</span></h3>
                        <h3 className="recipe-instructions">Instructions: <br/><span className='recipe-instructions-details'>{recipe.strInstructions}</span></h3>
                    </li>
                ))
            }
        
        </div>
    )}

}

