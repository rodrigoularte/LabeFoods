import axios from "axios"
import React, { useState } from "react"
import { headers } from "../constants/headers"
import { BASE_URL } from "../constants/url"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {

  const [restaurants, setRestaurants] = useState([])
  const [profile, setProfile] = useState({})
  const [restaurantInfo, setRestaurantInfo] = useState([])
  const [restaurantDetails, setRestaurantDetails] = useState([])
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [orderInfo, setOrderInfo] = useState([])

  const getRestaurants = async () => {
    await axios
      .get(`${BASE_URL}/restaurants`, headers)
      .then((res) => {
        setRestaurants(res.data.restaurants)
      })
      .catch((error) => console.log(error.response))
  }

  const getProfile = async () => {
    await axios
      .get(`${BASE_URL}/profile`, headers)
      .then((res) => {
        setProfile(res.data.user)
      })
      .catch((error) => console.log(error.response.data))
  }

  const getRestaurantDetails = async (id) => {
    await axios
      .get(`${BASE_URL}/restaurants/${id}`, headers)
      .then((res) => {
        setRestaurantDetails(res.data.restaurant)
        setProducts(res.data.restaurant.products)
      })
      .catch((error) => console.log(error.response))
  }

  const addToCart = (product, quantity, newRestaurant, newPrice) => {
    if(newRestaurant.id === restaurantInfo.id){
      setCartProducts([...cartProducts, { ...product, quantity, price: newPrice }])
      setOrderInfo([...orderInfo, {id: product.id, quantity}])
    } else {
      setCartProducts([{ ...product, quantity, price: newPrice }])
      setOrderInfo([{id: product.id, quantity}])
      setRestaurantInfo(newRestaurant)
    }
  }

  const states = {restaurants, profile, restaurantInfo, restaurantDetails, products,cartProducts, orderInfo}
  const setters = {setRestaurants, setRestaurantDetails, setProducts, setCartProducts, setOrderInfo}
  const requests = {getRestaurants, getProfile, getRestaurantDetails, addToCart}

  return(
    <GlobalContext.Provider value={{states, setters, requests}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState