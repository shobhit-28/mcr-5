import { useContext, useState } from 'react'
import { Header } from '../../components/header/header'
import './homePage.css'
import { RecipeContext } from '../../contexts/recipeContext'
import { RecipeCard } from '../../components/recipeCard/RecipeCard'
import { VscAdd } from 'react-icons/vsc'
import { RiImageAddLine } from 'react-icons/ri'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export const HomePage = () => {
    const { searchResults, addRecipe } = useContext(RecipeContext)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newRecipeData, setNewRecipeData] = useState({
        recipeName: "",
        image: "",
        country: "",
        ingredients: [],
        instructions: []
    })

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file?.size / 500000 > 1) {
            alert('Image size cannot exceed 500kb')
        } else {
            const base64Promise = (file) =>
                new Promise((resolve, reject) => {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = () => resolve(fileReader.result);
                    fileReader.onerror = (err) => reject(err);
                });
            let base64File = await base64Promise(file);
            setNewRecipeData({ ...newRecipeData, image: base64File })
            // setEditedData({ ...editedUserData, profile_pic: base64File })
        }
    };

    const remove_img_click_Handler = () => {
        setNewRecipeData({ ...newRecipeData, image: '' })
        setTimeout(() => {
            setIsModalOpen(false)
        }, 0);
        setTimeout(() => {
            setIsModalOpen(true)
        }, 1);
    }

    const closeModal = () => {
        setNewRecipeData({
            recipeName: "",
            image: "",
            country: "",
            ingredients: [],
            instructions: []
        })
        setIsModalOpen(false)
    }

    return (
        <div className='home-page'>
            <Header />
            <p className="head">All Recipies</p>
            <div className="recipes">
                {searchResults?.map((recipe) => <RecipeCard key={recipe?.id} recipe={recipe} />)}
            </div>
            <button className="add-recipe" onClick={() => setIsModalOpen(true)}><VscAdd /></button>
            {isModalOpen &&
                <div className="modal-container" onClick={() => closeModal()}>
                    <div className="modal" onClick={(event) => event.stopPropagation()}>
                        <p className="head">Add New Recipe</p>
                        <label htmlFor="nameInp" onChange={(event) => setNewRecipeData({ ...newRecipeData, recipeName: event.target.value })}>
                            <input type="text" name="nameInp" id="nameInp" placeholder='Name' />
                        </label>
                        <label htmlFor="cuisine" onChange={(event) => setNewRecipeData({ ...newRecipeData, country: event.target.value })}>
                            <input type="text" name="cuisine" id="cuisine" placeholder='Cuisine' />
                        </label>
                        <label htmlFor="ingredients" onChange={(event) => setNewRecipeData({ ...newRecipeData, ingredients: (event.target.value)?.split(',') })}>
                            <textarea name="ingredients" id="ingredients" cols="30" rows="10" placeholder='Enter a comma after every ingredient'></textarea>
                        </label>
                        <label htmlFor="instructions" onChange={(event) => setNewRecipeData({ ...newRecipeData, instructions: (event.target.value)?.split(',') })}>
                            <textarea name="instructions" id="instructions" cols="30" rows="10" placeholder='Enter a comma after every instruction'></textarea>
                        </label>
                        {newRecipeData.image !== '' &&
                            <div className="input-img-container">
                                <button onClick={() => remove_img_click_Handler()} className="remove-img">
                                    <IoIosCloseCircleOutline />
                                </button>
                                <img src={newRecipeData?.image} alt="" className="input-pic" />
                            </div>}
                        <div className="post-modal-fileinput-container">
                            <label htmlFor='imgInput' className="fileinput-label"
                                title={`${newRecipeData.image !== "" ? newRecipeData.image : "No file chosen"}`}
                            >
                                <span className="img"><RiImageAddLine /></span>
                                <span className="text">Image</span>
                            </label>
                            <input type="file" name="" id="imgInput" className='post-modal-fileinput'
                                accept='image/*'
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="btn-container">
                            <button className="save" onClick={() => addRecipe(newRecipeData)}>Save</button>
                            <button className="save" onClick={() => closeModal()}>Cancel</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
