import { useState } from 'react'
import Navbar from './Navbar'
import Show from './Show'
import Carditem from './Carditem'
function Main() {
    const[cart,setcart]=useState([])
    const addtocart=((item)=>{
      let present = false
      cart.forEach((product)=>{
        if(item.id===product.id)
          present=true
      })
      if(present)
        return;
      setcart([...cart,item])
   });

   const change=((item,a)=>{
  let ind=0
  cart.forEach((c,index)=>{
    if(c.id===item.id){
      ind=index
    }
  })
  const temp=cart
  temp[ind].amount+=a
  if(temp[ind].amount===0)
    temp[ind].amount=1
  setcart([...temp])
 
})


    const[show,setshow]=useState(true)
  return (
    <div>
      <Navbar size={cart.length} setshow={setshow}/>
      {
        show ?<Show addtocart={addtocart}/>:<Carditem cart={cart} setcart={setcart} change={change}/>
      }
    </div>
  )
}

export default Main
