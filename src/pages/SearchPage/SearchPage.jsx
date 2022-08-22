import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"
import GlobalContext from "../../global/GlobalContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToRestaurantPage } from "../../routes/coordinator"
import { PageContainer } from "../../styled/GlobalStyle"
import { RestaurantListContainer, SearchInput } from "./styled"

const SearchPage = () => {

  useProtectedPage()
  const navigate = useNavigate()

  const { states, requests } = useContext(GlobalContext)
  const { restaurants } = states
  const {getRestaurants} = requests

  const [search, setSearch] = useState("")
  const [isSearchEmpty, setIsSearchEmpty] = useState(true)

  const searchResult = search &&
    restaurants
      .filter((restaurant) => {
        if (search !== "") {
          return restaurant.name.toLowerCase().includes(search.toLowerCase())
        }
      })
      .map((restaurant) => {
        return (
          <RestaurantCard
            key={restaurant.id}
            logoUrl={restaurant.logoUrl}
            name={restaurant.name}
            deliveryTime={restaurant.deliveryTime}
            shipping={restaurant.shipping}
            onClick={() => goToRestaurantPage(navigate, restaurant.id)}
          />
        )
      })

  const checkSearch = () => {
    search ? setIsSearchEmpty(false) : setIsSearchEmpty(true)
  }

  useEffect(() => {
    getRestaurants()
    checkSearch()
  }, [search])

  return (
    <PageContainer>
      <Header title="Busca" showArrow={true}/>

      <SearchInput
        type="text"
        value={search}
        placeholder="Restaurante"
        onChange={(event) => setSearch(event.target.value)}
      />

      <RestaurantListContainer>
        {searchResult.length > 0 && searchResult}
        {(searchResult.length === 0 && isSearchEmpty === false) && <p>{"Não encontramos :("}</p>}
        {isSearchEmpty && <p>{"Busque por nome de restaurante"}</p>}
      </RestaurantListContainer>
    </PageContainer>
  )
}

export default SearchPage