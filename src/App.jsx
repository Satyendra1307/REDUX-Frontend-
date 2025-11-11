import React from 'react'
import Navbar from './Component/Navbar.jsx'
// import Home from './Component/Home.jsx'
import Home from './Component/Home.jsx'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Component/Cart.jsx'
import AdminProductPanel from './Component/AdminProductPanel.jsx'
function App() {
  const [cart,setcart] = useState([])


  const handleCart = (item) =>{

    let present = false

    cart.forEach(element=>{

      if(element.id === item.id)

        present = true

    })

    if(present)
      return 
    setcart([...cart,{...item , amount:1}])

    


  }
  return (
    <div>
    <Navbar size={cart.length} />
    <Routes>
      <Route path='/' element={<Home handleCart={handleCart}/>}></Route>
      <Route path="/Cart" element={<Cart cart={cart} setcart={setcart} />} ></Route>
      <Route path='/admin' element={<AdminProductPanel/>}></Route>
    </Routes>
    </div>
  )
}

export default App

















// import React, { useEffect, useState } from 'react'
// import Navbar from './Component/Navbar.jsx'
// import axios from 'axios'

// function App() {
//   const[data,setdata]=useState([])
//    useEffect(()=>{
//     axios.get("http://localhost:9000/getProducts").then((response)=>{
//        setdata(response.data)
//     },[])
//    })

//   return (
    
//     <div>
//       <Navbar/>
//      <h1>{data.map((item)=>{
//   return(   
//       <ul>
//         <li key={item.id}> {item.name} :{item.discription}:{item.price}:{item.rating}:{item.review}:{item.category}{item.image}</li>

//       </ul>)
// })}</h1>
//     </div>
//   )
  
// }

// export default App