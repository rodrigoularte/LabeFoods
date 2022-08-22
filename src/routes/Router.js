import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartPage from "../pages/CartPage/CartPage"
import EditAddressPage from "../pages/EditAddressPage/EditAddressPage"
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage"
import SearchPage from "../pages/SearchPage/SearchPage"
import SignUpAddressPage from "../pages/SignUpAddressPage/SignUpAddressPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

const Router = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<SignUpPage/>}/>
        <Route path="/cadastro/endereco" element={<SignUpAddressPage/>}/>
        <Route path="/busca" element={<SearchPage/>}/>
        <Route path="/restaurante/:id" element={<RestaurantPage/>}/>
        <Route path="/perfil" element={<ProfilePage/>}/>
        <Route path="/perfil/editar-perfil" element={<EditProfilePage/>}/>
        <Route path="/perfil/editar-endereco" element={<EditAddressPage/>}/>
        <Route path="/carrinho" element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router