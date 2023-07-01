/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-undef */
import { useContext, useState } from 'react'
import './header.css'
import { RecipeContext } from '../../contexts/recipeContext'
import { recipes } from '../../data/data'

export const Header = () => {
    const { setSearchResults } = useContext(RecipeContext)
    const [filterVal, setFilterVal] = useState('recipeName');

    const changeHandler = (event) => {
        setFilterVal(event.target.value)
    }

    const searchBarChangeHandler = (event) => {
        if (event?.target?.value?.length === 0) {
            setSearchResults(recipes)
        } else {
            switch (filterVal) {
                case 'recipeName':
                    setSearchResults(
                        [
                            ...recipes?.filter((recipe) => recipe?.recipeName?.slice(0, event?.target?.value.length).toLowerCase() === event?.target?.value.toLowerCase()),
                            ...recipes?.filter((recipe) => recipe?.recipeName?.slice(0, event?.target?.value.length).toLowerCase() !== event?.target?.value.toLowerCase())
                                ?.filter((recipe) => recipe?.recipeName.toLowerCase()?.includes(event?.target?.value?.toLowerCase()))
                        ]
                    )
                    break;

                case 'ingredients':
                    setSearchResults(
                        [
                            ...recipes?.filter((recipe) => recipe?.ingredients?.join()?.slice(0, event?.target?.value.length).toLowerCase() === event?.target?.value.toLowerCase()),
                            ...recipes?.filter((recipe) => recipe?.ingredients?.join()?.slice(0, event?.target?.value.length).toLowerCase() !== event?.target?.value.toLowerCase())
                                ?.filter((recipe) => recipe?.ingredients?.join().toLowerCase()?.includes(event?.target?.value?.toLowerCase()))
                        ]
                    )
                    break;

                case 'country':
                    setSearchResults(
                        [
                            ...recipes?.filter((recipe) => recipe?.country?.slice(0, event?.target?.value.length).toLowerCase() === event?.target?.value.toLowerCase()),
                            ...recipes?.filter((recipe) => recipe?.country?.slice(0, event?.target?.value.length).toLowerCase() !== event?.target?.value.toLowerCase())
                                ?.filter((recipe) => recipe?.country.toLowerCase()?.includes(event?.target?.value?.toLowerCase()))
                        ]
                    )
                    break;

                default:
                    break;
            }
        }
    }

    return (
        <div className="nav-bar">
            <label htmlFor="search-inp">
                <input type="text" name="search-inp" id="search-inp" onChange={(event) => searchBarChangeHandler(event)} />
            </label>
            <div className="radio-container">
                <p className="radio-head">Filters</p>
                <ul onChange={(event) => changeHandler(event)}>
                    <li className="name">
                        <label htmlFor="name">
                            <input type="radio" name="filter-select" id="name" defaultChecked value='recipeName' />
                            <span className="text">Name</span>
                        </label>
                    </li>
                    <li className="ingredients">
                        <label htmlFor="ingredients">
                            <input type="radio" name="filter-select" id="ingredients" value='ingredients' />
                            <span className="text">Ingredients</span>
                        </label>
                    </li>
                    <li className="cuisine">
                        <label htmlFor="cuisine">
                            <input type="radio" name="filter-select" id="cuisine" value='country' />
                            <span className="text">Cuisine</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    )
}
