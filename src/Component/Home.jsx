import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import Action from '../redux/Action'

const Home = ({handleCart}) => {
  const { products } = useSelector(state => state.item)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Action())
  }, [dispatch])

  return (
    <div className="homeContainer">
      {products?.map((item, ind) => (
        <div className="productCart" key={ind}>
          <img src={item.img} alt="" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>Rs.{item.price}</p>
          <p>{item.rating}</p>
          <p>{item.review}</p>
          <p>{item.desc}</p>
          <button className="btn btn-dark" onClick={()=>handleCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Home
