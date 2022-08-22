import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToSignUpAddressPage, goToSignUpPage } from "../../routes/coordinator"
import TextField from '@mui/material/TextField'
import { ClickHereButton, LoginForm, Logo, PasswordContainer, PasswordInput, TopText } from "./styled"
import { FormButton, PageContainer } from "../../styled/GlobalStyle"
import { BASE_URL } from "../../constants/url"
import logo from "../../assets/logo-future-eats.png"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { IconButton } from "@mui/material"

const LoginPage = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [checkEmailError, setCheckEmailError] = useState(false)
  const [checkpasswordError, setCheckPasswordError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const login = (body) => {
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        // console.log(res.data)
        setEmail("")
        setEmailError("")
        setCheckEmailError(false)
        setPassword("")
        setPasswordError("")
        setCheckPasswordError(false)

        localStorage.setItem("token", res.data.token)

        if(res.data.user.hasAddress === true) {
          goToHomePage(navigate)
        } else {
          goToSignUpAddressPage(navigate)
        }
      })
      .catch((error) => {
        if(error.response.data.message.includes("Senha incorreta")) {
          setPasswordError(error.response.data.message)
          setCheckPasswordError(true)
        }else {
          setEmailError(error.response.data.message)
          setCheckEmailError(true)
        }
        console.log(error.response.data.message)
      })
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    // console.log("BODY:", form)

    const userLogin = {email, password}

    login(userLogin)
  }

  return(
    <PageContainer>
      
      <Logo src={logo} alt="logo-future-eats" />
      
      <TopText>Entrar</TopText>

      <LoginForm onSubmit={onSubmitForm}>

        <TextField
          id="email"
          label="E-mail"
          name="email"
          type={"email"}
          placeholder="email@email.com"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          color="secondary"
          error={checkEmailError}
          helperText={checkEmailError? emailError : ""}
          focused
          required
        />

        <PasswordContainer>
          <PasswordInput
            id="password"
            label="Senha"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder={"Mínimo 6 caracteres"}
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            
            error={checkpasswordError}
            helperText={checkpasswordError? passwordError : ""}
            color="secondary"
            inputProps={{minLength: 6, title:"A senha deve conter no mínimo 6 caracteres."}}
            focused
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </PasswordContainer>

        
        <FormButton type="submit">Entrar</FormButton>
      </LoginForm>

      <span>Não possui cadastro?<ClickHereButton onClick={() => goToSignUpPage(navigate)}>Clique aqui.</ClickHereButton></span>
    </PageContainer>
  )
}

export default LoginPage