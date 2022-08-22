import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { AddressContainer, AddressInfo, AddressTitle, EditIcon, Info, Line, OrderHistoryContainer, OrdersList, PersonalInfo, ProfilePageContainer } from "./styled"
import edit from "../../assets/edit.svg"
import OrderCard from "../../components/OrderCard/OrderCard"
import { goToEditAddressPage, goToEditProfilePage } from "../../routes/coordinator"
import Menu from "../../components/Menu/Menu"
import Header from "../../components/Header/Header"
import { BASE_URL } from "../../constants/url"
import { headers } from "../../constants/headers"
import GlobalContext from "../../global/GlobalContext"

const ProfilePage = () => {

  useProtectedPage()
  const navigate = useNavigate()

  const { states, requests } = useContext(GlobalContext)
  const { profile } = states
  const { getProfile } = requests

  const [ordersHistory, setOrdersHistory] = useState([])

  const getOrdersHistory = async () => {
    await axios
      .get(`${BASE_URL}/orders/history`, headers)
      .then((res) => {
        setOrdersHistory(res.data.orders)
      })
      .catch((error) => console.log(error.response))
  }

  useEffect(() => {
    getProfile()
    getOrdersHistory()
  }, [])

  return (
    <ProfilePageContainer>
      <Header title="Meu perfil" showArrow={false} showLogout={true} />

      <PersonalInfo>
        <Info>
          <p>{profile.name}</p>
          <p>{profile.email}</p>
          <p>{profile.cpf}</p>
        </Info>
        <EditIcon src={edit} onClick={() => goToEditProfilePage(navigate)} alt="edit-icon" />
      </PersonalInfo>

      <AddressContainer>
        <AddressInfo>
          <AddressTitle>Endereço cadastrado</AddressTitle>
          <p>{profile.address}</p>
        </AddressInfo>
        <EditIcon src={edit} onClick={() => goToEditAddressPage(navigate)} alt="edit-icon" />
      </AddressContainer>

      <OrderHistoryContainer>
        <p>Histórico de pedidos</p>
        <Line />
        <OrdersList>
          {ordersHistory.length > 0 ?
            ordersHistory.map((order) => {
              return (
                <OrderCard
                  key={order.createdAt}
                  restaurantName={order.restaurantName}
                  createdAt={order.createdAt}
                  totalPrice={order.totalPrice}
                />
              )
            }) :
            <p>Você não realizou nenhum pedido</p>
          }
        </OrdersList>
      </OrderHistoryContainer>

      <Menu page={"profile"} />
    </ProfilePageContainer>
  )
}

export default ProfilePage