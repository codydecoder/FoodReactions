export default function Header(){
    
    return(
        <div className='header'>
            <h1 className='header-logo'>Food Reactions</h1>
            <nav className='search-nav'>
                <h2 className='nav-clicks'>Recipes</h2>
                <h2 className='nav-clicks'>Ingredients</h2>
                <h2 className='nav-clicks'>Countries</h2>
            </nav>
            <div className='search-area'>
                <input id='search-input' type='Text' placeholder='Enter recipe name...'/>
                <button id='search-submit'>Search</button>
            </div>
        </div>
    )
}