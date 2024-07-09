
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SingleRecipe = () => {

    let location = useLocation()
    console.log(location)
    console.log(location.state)
    console.log(location.state.recipe)
    console.log(location.state.recipe.label)

    
    

    

  return (
    <div>
        <div className='row d-flex justify-content-center mt-6 '>
     
      <div className='col-md-6  d-flex justify-content-center'>

        <img src={location.state.recipe.image} alt="" />
      </div>
      <div className='col-md-6  '>

        <h3> {location.state.recipe.label}</h3>
        <h4 >Meal type: {location.state.recipe.mealType}</h4>
        <div className='row d-flex justify-content-center gap-3'>
            <div className='col-2 me-2 bg-warning'>
              <p>{location.state.recipe.totalNutrients.CA.label}</p>
              <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)}mg</p>
            </div>
            <div className='col-2 me-2 bg-warning'>
              <p>{location.state.recipe.totalNutrients.FAT.label}</p>
            <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)}mg</p>
            </div>
            <div className='col-2 me-2 bg-warning'>
            <p>{location.state.recipe.totalNutrients.SUGAR.label}</p>
            <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)}mg</p>
            </div>
            <div className='col-2 me-2 bg-warning'>
              <p>{location.state.recipe.totalNutrients.PROCNT.label}</p>
            <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)}mg</p>
            </div>
        </div >
      <Link to={location.state.recipe.url} className='btn btn-success mt-3'>How to Make</Link>

      </div>
      </div>
      <div className='row md-6 d-flex justify-content-center'>
        <div className='col md-6'>
        <h3>Ingredients</h3>
        <ul className='ulone'>
         {location.state.recipe.ingredients.map((ele,index)=>{
            return <li>{ele.text}</li>})}
         </ul>
        </div>
            <div className='col md-6'>
              <h3> Health Labels</h3>
              <h4>Health</h4>
              <ul className='ultwo'>
                {location.state.recipe.healthLabels.map((ele,index)=>{
                  return <li>{ele}</li> })}
              </ul>
            </div>
            
      </div>


    </div>
  )
}

export default SingleRecipe;
