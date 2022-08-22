import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../../routes/coordinator"
import TextField from '@mui/material/TextField'
import { SignUpForm, TopText } from "./styled"
import { FormButton, PageContainer } from "../../styled/GlobalStyle"
import { BASE_URL } from "../../constants/url"
import { useForm } from "../../hooks/useForm"
import Header from "../../components/Header/Header"

const SignUpAddressPage = () => {

  const navigate = useNavigate()

  const [form, onChange, clean] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  })

  const addAddress = async () => {
    const header = { headers: { auth: window.localStorage.getItem("token") } }

    await axios
      .put(`${BASE_URL}/address`, form, header)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data.token)
        goToHomePage(navigate)
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log("BODY:", form)
    addAddress()
  }

  return (
    <PageContainer>
      <Header title="" showArrow={true}/>

      <TopText>Meu endereço</TopText>

      <SignUpForm onSubmit={onSubmitForm}>

        <TextField
          id="outlined-basic"
          label="Logradouro"
          name="street"
          type={"text"}
          placeholder="Rua / Av."
          variant="outlined"
          value={form.street}
          onChange={onChange}
          color="secondary"
          focused
          required
        />

        <TextField
          id="outlined-basic"
          label="Número"
          name="number"
          type={"number"}
          placeholder="Número"
          variant="outlined"
          value={form.number}
          onChange={onChange}
          color="secondary"
          focused
          required
        />

        <TextField
          id="outlined-basic"
          label="Complemento"
          name="complement"
          type={"text"}
          placeholder="Apto. / Bloco"
          variant="outlined"
          value={form.complement}
          onChange={onChange}
          color="secondary"
          focused
        />

        <TextField
          id="outlined-basic"
          label="Bairro"
          name="neighbourhood"
          type={"text"}
          placeholder="Bairro"
          variant="outlined"
          value={form.neighbourhood}
          onChange={onChange}
          color="secondary"
          focused
          required
        />

        <TextField
          id="outlined-basic"
          label="Cidade"
          name="city"
          type={"text"}
          placeholder="Cidade"
          variant="outlined"
          value={form.city}
          onChange={onChange}
          color="secondary"
          focused
          required
        />

        <TextField
          id="outlined-basic"
          label="Estado"
          name="state"
          type={"text"}
          placeholder="Estado"
          variant="outlined"
          value={form.state}
          onChange={onChange}
          color="secondary"
          focused
          required
        />

        <FormButton type="submit">Salvar</FormButton>

      </SignUpForm>
    </PageContainer>
  )
}

export default SignUpAddressPage