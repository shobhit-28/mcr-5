import { useNavigate, useParams } from 'react-router-dom'
import './detailsPage.css'
import { useContext } from 'react'
import { RecipeContext } from '../../contexts/recipeContext'

export const DetailsPage = () => {
  const {recipeID} = useParams()
  const {searchResults} = useContext(RecipeContext)

  const recipe = searchResults?.find(({id}) => id === recipeID )

  const navigate = useNavigate()
  
  return (
    <div className='details-page'>
      <button className="back" onClick={() => navigate('/')}>Back</button>
      <div className="head">{recipe.recipeName}</div>
      <div className="img-container">
        <img src={recipe?.image ? recipe?.image : 'https://picsum.photos/1080/1920'} alt="" />
      </div>
      <div className="content">
        <p className="cuisine">{`Cuisine: ${recipe.country}`}</p>
        <p className="ingredients">{`Ingredients: ${recipe.ingredients.join(', ')}`}</p>
        {recipe.instructions.map((ins, index) => (
          <p className="instruction" key={index}>{`${index+1}. ${ins} \n`}</p>
        ))}
      </div>
    </div>
  )
}
