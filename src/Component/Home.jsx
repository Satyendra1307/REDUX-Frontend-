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
          <h2>{item.name}</h2>
          <h3>{item.category}</h3>
          <h4>Rs.{item.price}</h4>
          <h5>{item.rating}</h5>
          <h5>{item.review}</h5>
          <p>{item.desc}</p> 
          <button className="btn btn-dark" onClick={()=>handleCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Home
