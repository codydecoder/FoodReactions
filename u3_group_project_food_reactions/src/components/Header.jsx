import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'



export default function Header(){
    
    let navigate = useNavigate()

    const [recipeName, setRecipes] = useState('')

    const handleChange = (event) => {
        setRecipes(event.target.value)
        // ({...formState, [event.target.id]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/recipes/${recipeName}`)
    }

    return(
        <div className='header'>
            <h1 className='header-logo'>Food Reactions</h1>
            <nav className='search-nav'>
                <Link to='/recipes' className='nav-clicks'>Recipes</Link>
                <Link to='/ingredients' className='nav-clicks'>Ingredients</Link>
                <Link to='/countries' className='nav-clicks'>Countries</Link>
            </nav>
            <div className='search-area'>
                <input id='search-input' type='Text' placeholder='Enter recipe name...' onChange={handleChange}/>
                <button id='search-submit' onClick={handleSubmit}>Search</button>
            </div>
        </div>
    )
}