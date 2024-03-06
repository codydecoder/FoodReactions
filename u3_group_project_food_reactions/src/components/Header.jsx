import { Link } from 'react-router-dom'

export default function Header(){
    
    return(
        <div className='header'>
            <h1 className='header-logo'>Food Reactions</h1>
            <nav className='search-nav'>
                <Link to='/recipes' className='nav-clicks'>Recipes</Link>
                <Link to='/ingredients' className='nav-clicks'>Ingredients</Link>
                <Link to='/countries' className='nav-clicks'>Countries</Link>
            </nav>
            <div className='search-area'>
                <input id='search-input' type='Text' placeholder='Enter recipe name...'/>
                <button id='search-submit'>Search</button>
            </div>
        </div>
    )
}