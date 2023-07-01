/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { recipes } from "../data/data";
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = createContext();

export const RecipeHandler = ({children}) => {
    const [searchResults, setSearchResults] = useState(recipes)

    const deleteRecipe = (recipeID) => {
        setSearchResults(searchResults?.filter(({id}) => id !== recipeID ))
        localStorage.setItem('recipes', JSON.stringify(searchResults?.filter(({id}) => id !== recipeID )))
    }

    const addRecipe = (recipe) => {
        const id = uuidv4()
        localStorage.setItem('recipes', JSON.stringify([...searchResults, {id: id, ...recipe}]))
        setSearchResults([...searchResults, {id: id, ...recipe}])
    }

    return(
        <RecipeContext.Provider value={{
            searchResults,
            setSearchResults,
            deleteRecipe,
            addRecipe
        }}>
            {children}
        </RecipeContext.Provider>
    )
}