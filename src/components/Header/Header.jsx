import React from "react"
import { useNavigate } from "react-router-dom"
import { goBack, goToLoginPage } from "../../routes/coordinator"
import { GoBackArrow, HeaderContainer, Logout } from "./styled"

const Header = ({title, showArrow, showLogout}) => {

  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.removeItem("token")
    goToLoginPage(navigate)
  }

  return(
    <HeaderContainer>
      {showArrow &&
        <GoBackArrow
          onClick={() => goBack(navigate)}
        />
      }
      <p>{title}</p>
      {showLogout && <Logout onClick={logout}/>}
    </HeaderContainer>
  )
}

export default Header