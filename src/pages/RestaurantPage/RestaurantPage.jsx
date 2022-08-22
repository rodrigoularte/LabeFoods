import React, { useContext, useEffect } from "react"
import { useParams } from 'react-router-dom'
import Header from "../../components/Header/Header"
import ProductCard from "../../components/ProductCard/ProductCard"
import RestaurantDetailCard from "../../components/RestaurantDetailCard/RestaurantDetailCard"
import GlobalContext from "../../global/GlobalContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { PageContainer } from "../../styled/GlobalStyle"
import { CategoryName, Line, ProductsContainer } from "./styled"
import CircularProgress from '@mui/material/CircularProgress'

const RestaurantPage = () => {

  useProtectedPage()
  const pathParams = useParams()

  const { states, requests } = useContext(GlobalContext)
  const { restaurantDetails, products } = states
  const { getRestaurantDetails } = requests

  const allCategories = products.map((product) => {
    return product.category
  })

  const categories = [...new Set(allCategories)]

  useEffect(() => {
    getRestaurantDetails(pathParams.id)
  }, [])

  return (
    <PageContainer>
      <Header title="Restaurante" showArrow={true} />

      {restaurantDetails ?
        <RestaurantDetailCard
        id={restaurantDetails.id}
        logoUrl={restaurantDetails.logoUrl}
        name={restaurantDetails.name}
        category={restaurantDetails.category}
        deliveryTime={restaurantDetails.deliveryTime}
        shipping={restaurantDetails.shipping}
        address={restaurantDetails.address}
        /> :
        <CircularProgress/>
      }

      {categories.length > 0 ? categories
        .map((category) => {
          return (
            <ProductsContainer key={category}>
              <CategoryName>{category}</CategoryName>
              <Line />
              <ProductsContainer>
                {
                  products
                    .filter((product) => {
                      return product.category === category
                    })
                    .map((product) => {
                      return (
                        <ProductCard
                          key={product.id}
                          id={product.id}
                          product={product}
                          photoUrl={product.photoUrl}
                          name={product.name}
                          description={product.description}
                          price={product.price}
                        />)
                    })
                }
              </ProductsContainer>
            </ProductsContainer>
          )
        }) : <CircularProgress/>
      }
    </PageContainer>
  )
}

export default RestaurantPage