import { Routes, Route } from 'react-router-dom'

//components
import Home from './Home'
import SearchMeal from '../searchLists/SearchMeal'
import SearchCountry from '../searchLists/SearchCountry'


const Main = (props) => {
  
  
  
  return (
    <div>
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/recipes" element={<SearchMeal recipes={props.recipes}/>} />
          <Route path="/recipes/:recipeName" element={<SearchMeal />} />
          {/* <Route path='/ingredients' element={<SearchIngredient recipes={props.recipes}/>}/> */}
          <Route path='/countries' element={<SearchCountry recipes={props.recipes}/>}/>
        </Routes>
    </div>
  )
}

export default Main
