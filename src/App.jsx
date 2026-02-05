import React from 'react'
import Navbar from './Component/Navbar.jsx'
import Home from './Component/Home.jsx'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Component/Cart.jsx'
import AdminProductPanel from './Component/AdminProductPanel.jsx'
import Signup from './Component/Signup.jsx'
import Signin from './Component/Signin.jsx'
function App() {
  const [cart,setcart] = useState([])


  const handleCart = (item) =>{
// console.log(item._id)
    let present = false

    cart.forEach(element=>{

      if(element._id == item._id)

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
      <Route  path='/Signup' element={<Signup/>}></Route>
      <Route  path='/Signin' element={<Signin/>}></Route>
    </Routes>
    </div>
  )
}

export default App
