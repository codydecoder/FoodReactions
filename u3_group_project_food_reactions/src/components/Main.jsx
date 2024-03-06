import { Routes, Route } from 'react-router-dom'
import SearchMeal from '../searchLists/SearchMeal'

const Main = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/listings" element={ <SearchMeal states={states} />} />
          <Route path="/listings/:id" element={ <StateDetails states={states} />} />
          <Route path="/countries" element={ <Listings states={states} />} />
        </Routes>
    </div>
  )
}

export default Main
