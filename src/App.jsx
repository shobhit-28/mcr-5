import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/homePage/homePage"
import { DetailsPage } from "./pages/detailsPage/detailsPage"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:recipeID" element={<DetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
