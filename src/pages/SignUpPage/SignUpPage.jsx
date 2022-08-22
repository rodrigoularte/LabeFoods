import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToSignUpAddressPage } from "../../routes/coordinator"
import TextField from '@mui/material/TextField'
import { Logo, PasswordContainer, PasswordInput, SignUpForm, TopText } from "./styled"
import { FormButton, PageContainer } from "../../styled/GlobalStyle"
import { BASE_URL } from "../../constants/url"
import logo from "../../assets/logo-future-eats.png"
import { useForm } from "../../hooks/useForm"
import { IconButton } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import Header from "../../components/Header/Header"

const SignUpPage = () => {

  const navigate = useNavigate()

  const [confirmPassword, setConfirmPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [checkPasswordError, setCheckPasswordError] = useState(false)
  const [checkEmailError, setCheckEmailError] = useState(false)
  const [checkCpfError, setCheckCpfError] = useState(false)

  const [form, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: ""
  })

  //REGEX de cpf
  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1")
  }

  const signUp = async () => {
    await axios
      .post(`${BASE_URL}/signup`, form)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data.token)
        goToSignUpAddressPage(navigate)
      })
      .catch((error) => {
        if (error.response.data.message.includes("Email ou CPF já cadastrados")) {
          setCheckEmailError(true)
          setCheckCpfError(true)
        }
        console.log(error.response.data.message)
      })
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    if (form.password !== confirmPassword) {
      setCheckPasswordError(true)
    } else {
      setCheckPasswordError(false)
      signUp()
    }
  }

  return (
    <PageContainer>
      <Header title="" showArrow={true}/>

      <Logo src={logo} alt="logo-future-eats" />

      <TopText>Cadastrar</TopText>

      <SignUpForm onSubmit={onSubmitForm}>

        <TextField
          id="name"
          label="Nome"
          name="name"
          type={"text"}
          placeholder="Nome e sobrenome"
          variant="outlined"
          value={form.name}
          onChange={onChange}
          color="secondary"
          focused
          required
        />

        <TextField
          id="email"
          label="E-mail"
          name="email"
          type={"email"}
          placeholder="email@email.com"
          variant="outlined"
          value={form.email}
          onChange={onChange}
          error={checkEmailError}
          helperText={checkEmailError ? "Este e-mail já pode estar cadastrado." : ""}
          color="secondary"
          focused
          required
        />

        <TextField
          id="cpf"
          label="CPF"
          name="cpf"
          type={"text"}
          placeholder="000.000.000-00"
          variant="outlined"
          value={cpfMask(form.cpf)}
          onChange={onChange}
          error={checkCpfError}
          helperText={checkCpfError ? "Este CPF já pode estar cadastrado." : ""}
          color="secondary"
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
            value={form.password}
            onChange={onChange}

            inputProps={{ minLength: 6, title: "A senha deve conter no mínimo 6 caracteres." }}
            color="secondary"
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

        <PasswordContainer>
          <PasswordInput
            id="confirmPassword"
            label="Confirmar"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder={"Confirme a senha anterior"}
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}

            error={checkPasswordError}
            helperText={checkPasswordError ? "Deve ser a mesma que a anterior." : ""}
            color="secondary"
            focused
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowConfirmPassword}
            edge="end"
          >
            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </PasswordContainer>

        <FormButton type="submit">Criar</FormButton>

      </SignUpForm>
    </PageContainer>
  )
}

export default SignUpPage