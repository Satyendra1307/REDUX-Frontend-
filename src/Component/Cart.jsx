import React, { useEffect, useState } from 'react'
import './Cart.css'
import StripeCheckout from 'react-stripe-checkout'
import { useNavigate } from 'react-router-dom'  

function Cart({cart,setcart}) {
const[price,setprice]=useState(0)
const navigate=useNavigate()
const handlepricr=()=>{
  let ans = 0 ;
  cart.map((items)=>{
    ans+=items.amount*items.price
  })
  setprice(ans)
}
useEffect(()=>{
  handlepricr()
})

const remove=(id)=>{
  const abc=cart.filter((items)=>items.id!==id)
  setcart(abc)
}
const change=((items,a)=>{
  let ind=0
  cart.forEach((c,index)=>{
    if(c.id===items.id){
      ind=index
    }
  })
  const temp=cart
  temp[ind].amount+=a
  if(temp[ind].amount===0)
    temp[ind].amount=1
  setcart([...temp])
})
const token=(token)=>{
console.log(token)
}
  return (
    <div>
      {cart.map((items)=>{
        return(
            <div className='addtocart-main' key={items.id}>
                <span className='addtocart-image'> <img src={items.img}></img> </span>
                <span className='addtocart-disc'>{items.name}</span>
                <span className='addtocart-disc'>{items.desc}</span>
                
                 <span className='addtocart-price' >{items.price}</span>
                 <div className='addtocart-buttons'>
                <button onClick={()=>change(items,1)}>+</button>
                <button>{items.amount}</button>
                <button onClick={()=>change(items,-1)}>-</button>
                </div>

                <div className='addtocart-remove'>
                <button onClick={()=>remove(items.id)}>Remove</button>
                </div>
            </div>
        )
      })}
      <div className='total'>
        <span>Total price or cart</span>
      <span>Rs-{price}</span>
      </div>

        <div>

                <p style={{ color: 'green', fontSize: '16px' }}>Total Price of Your Cart is : <span>{price}</span></p>

                <StripeCheckout

                token = {token}

                stripeKey = 'pk_test_51NqsGdSEnDx41uiAy91YixIr2Oa4csspmLIFWFuYRsQmQDnUQfqUi78bCNTmIm8gmdAePgxV4LvW4a4BR3aASFfu00kVsnIvNN'

                amount={price*100}

                name='shopping cart'

                currency='INR'

                >

                    <button className='btn btn-primary'>Place Your Order</button>

                </StripeCheckout>

                <button className='btn btn-warning' style={{ color: 'blue' }} onClick={() => navigate('/')}> Back to home</button>

            </div>
    </div>
  )
}

export default Cart