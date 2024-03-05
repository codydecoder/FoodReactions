export default function Header(){
    
    return(
        <div className='header'>
            <h1>Food Reactions</h1>
            <div className='search-area'>
                <input id='search-input' type='Text' placeholder='Enter Recipe...'/>
                <button id='search-submit'>Search</button>
            </div>
        </div>
    )
}