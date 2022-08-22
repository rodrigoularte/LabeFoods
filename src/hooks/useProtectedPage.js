import { useEffect } from "react"
import { useNavigate } from "react-router"
import { goToLoginPage } from "../routes/coordinator"

export const useProtectedPage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    // console.log(token)

    if(token === null) {
      goToLoginPage(navigate)
    }
  }, [navigate])

}