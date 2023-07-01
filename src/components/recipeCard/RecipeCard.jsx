/* eslint-disable react/prop-types */
import { useContext } from 'react'
import './RecipeCard.css'

import {CiTrash} from 'react-icons/ci'
import { RecipeContext } from '../../contexts/recipeContext'
import { useNavigate } from 'react-router-dom'

export const RecipeCard = ({recipe}) => {
    const {deleteRecipe} = useContext(RecipeContext)
    const navigate = useNavigate()
    
    const deleteHandler = (event) => {
      event.stopPropagation()
      deleteRecipe(recipe?.id)
    }

  return (
    <div className='recipe-card' onClick={() => navigate(`/recipe/${recipe?.id}`)}>
        <button className="delete" onClick={(event) => deleteHandler(event)} ><CiTrash /> Delete</button>
        <div className="img-container">
            <img src={recipe?.image ? recipe?.image : 'https://picsum.photos/1080/1920'} alt="" />
        </div>
        <p className="name">{recipe?.recipeName}</p>
        <p className="cuisine">{`Cuisine Type: ${recipe?.country}`}</p>
        <p className="ingredients">{`Ingredients: See Recipe >`}</p>
        <p className="instructions">{`Instructions: See Recipe >`}</p>
    </div>
  )
}
