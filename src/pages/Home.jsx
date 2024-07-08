import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
// import Navbar from '../component/Navbar'

const Home = () => {
  const inputRef = useRef();
  const [searchValue , setsearchValue] = useState(["pizza"]);

  const [allFood , setallFood] = useState([]);
  console.log(allFood)

let getData = async()=>{
  let res = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=ac394d89&app_key=ca938532964f371b2c2443c01c36038f`);
  let data = await res.json();
  console.log(data);

  console.log(data.hits)
  setallFood(data.hits);
}
  useEffect(()=>{
    getData();
  },[searchValue])

  const handleSearch = (ans)=>{
 console.log(ans)
  }

  const handleSearchelement =(e)=>{
    e.preventDefault()
    let value = inputRef.current.value
    console.log(value)
    setsearchValue(value)
  }
    

  


  return (
    <div className='row d-flex justify-content-center gap-2 '>
      <div className='div'>
        <input ref={inputRef} className='input' type="text" placeholder='search' />
        <button onClick={handleSearchelement} className='btn bg-info'>Search</button>
      </div>
        {/* <Navbar/> */}
     <p> Home page</p>
     
     {allFood.map((ele,index)=>{
   
      return <div key={index} className="card" style={{width: "18rem"}}>
   
    
      
  <img src={ele.recipe.image} className="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{ele.recipe.label}</h5>
  
    <Link state={ele} to="/single" className="btn btn-primary">View Recipe</Link>
    {/* <button onClick={()=>handleSearch(ele)}>Click Me</button> */}
  </div>
</div>
    
  
     } )}
    </div>
  )
}

export default Home
