import { Routes, Route } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/listings" element={ <Listings states={states} />} />
          <Route path="/listings/:id" element={ <StateDetails states={states} />} />
        </Routes>
    </div>
  )
}

export default Main
