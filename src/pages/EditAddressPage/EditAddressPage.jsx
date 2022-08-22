import { TextField } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import { headers } from "../../constants/headers"
import { BASE_URL } from "../../constants/url"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToProfilePage } from "../../routes/coordinator"
import { FormButton, PageContainer } from "../../styled/GlobalStyle"
import { AddressForm } from "./styled"

const EditAddressPage = () => {

  useProtectedPage()
  const navigate = useNavigate()

  const [street, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [neighbourhood, setNeighbourhood] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [complement, setComplement] = useState("")

  const getFullAddress = async () => {
    await axios
      .get(`${BASE_URL}/profile/address`, headers)
      .then((res) => {
        setStreet(res.data.address.street)
        setNumber(res.data.address.number)
        setNeighbourhood(res.data.address.neighbourhood)
        setCity(res.data.address.city)
        setState(res.data.address.state)
        setComplement(res.data.address.complement)
      })
      .catch((error) => {console.log(error.response)})
  }

  const addAddress = async () => {
    const body = {street, number, neighbourhood, city, state, complement}
    await axios
      .put(`${BASE_URL}/address`, body, headers)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        goToProfilePage(navigate)
      })
      .catch((error) => {console.log(error.message)})
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    addAddress()
  }

  useEffect(() => {
    getFullAddress()
  }, [])

  return (
    <PageContainer>
      <Header title="Endereço" showArrow={true}/>

      <AddressForm onSubmit={onSubmitForm}>
        <TextField
          id="outlined-basic"
          label="Logradouro"
          name="street"
          type={"text"}
          variant="outlined"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
          color="secondary"
          focused
          required
        />

        <TextField
          id="outlined-basic"
          label="Número"
          name="number"
          type={"number"}
          variant="outlined"
          value={Number(number)}
          onChange={(event) => setNumber(event.target.value)}
          color="secondary"
          focused
          required
        />

        <TextField
          id="outlined-basic"
          label="Complemento"
          name="complement"
          type={"text"}
          variant="outlined"
          placeholder={"Apto. / Bloco"}
          value={!complement ? "" : complement}
          onChange={(event) => setComplement(event.target.value)}
          color="secondary"
          focused
        />

        <TextField
          id="outlined-basic"
          label="Complemento"
          name="neighbourhood"
          type={"text"}
          variant="outlined"
          value={neighbourhood}
          onChange={(event) => setNeighbourhood(event.target.value)}
          color="secondary"
          focused
          required
        />

        <TextField
          id="outlined-basic"
          label="Cidade"
          name="city"
          type={"text"}
          variant="outlined"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          color="secondary"
          focused
          required
        />

        <TextField
          id="outlined-basic"
          label="Estado"
          name="state"
          type={"text"}
          variant="outlined"
          value={state}
          onChange={(event) => setState(event.target.value)}
          color="secondary"
          focused
          required
        />

        <FormButton type="submit">Salvar</FormButton>
      </AddressForm>
    </PageContainer>
  )
}

export default EditAddressPage