import axios from "axios"
import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import { TextField } from "@mui/material"
import { BASE_URL } from "../../constants/url"
import { FormButton, PageContainer } from "../../styled/GlobalStyle"
import { ProfileForm } from "./styled"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToProfilePage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { headers } from "../../constants/headers"

const EditProfilePage = () => {

  useProtectedPage()
  const navigate = useNavigate()
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")

  const getProfile = async () => {
    await axios
      .get(`${BASE_URL}/profile`, headers)
      .then(res => {
        setName(res.data.user.name)
        setEmail(res.data.user.email)
        setCpf(res.data.user.cpf)
      })
      .catch(error => console.log(error.response))
  }

  const updateProfile = async () => {
    const body = {name, email, cpf}
    await axios
      .put(`${BASE_URL}/profile`, body, headers)
      .then(res => {
        localStorage.setItem("token", res.data.token)
        goToProfilePage(navigate)
      })
      .catch(error => console.log(error.message))
  }

  // REGEX de cpf
  const cpfMask = (value) => {
    if(cpf){
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")
    }
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    updateProfile()
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <PageContainer>
      <Header title="Editar" showArrow={true} />

      <ProfileForm onSubmit={onSubmitForm}>
        <TextField
          id="outlined-basic"
          label="Nome"
          name="name"
          type={"text"}
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          color="secondary"
          focused
          required
        />

        <TextField
          id="outlined-basic"
          label="E-mail"
          name="email"
          type={"email"}
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          color="secondary"
          focused
          required
        />

        <TextField
          id="outlined-basic"
          label="CPF"
          name="cpf"
          type={"text"}
          variant="outlined"
          value={cpfMask(cpf)}
          onChange={(e) => setCpf(e.target.value)}
          color="secondary"
          focused
          required
        />

        <FormButton type="submit">Salvar</FormButton>
      </ProfileForm>
    </PageContainer>
  )
}

export default EditProfilePage