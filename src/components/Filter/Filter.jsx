import React from "react"
import Tab from '@mui/material/Tab'
import { FilterCont } from "./styled"

const Filter = (props) => {

  return (
    <FilterCont
      value={props.category}
      onChange={props.handleChangeCategory}
      variant="scrollable"
      textColor="primary"
      indicatorColor="primary"
      aria-label="secondary tabs example"
    >
      <Tab value="Todos" label="Todos" />
      <Tab value="Árabe" label="Árabe" />
      <Tab value="Asiática" label="Asiática" />
      <Tab value="Hamburguer" label="Hamburguer" />
      <Tab value="Italiana" label="Italiana" />
      <Tab value="Sorvetes" label="Sorvetes" />
      <Tab value="Carnes" label="Carnes" />
      <Tab value="Baiana" label="Baiana" />
      <Tab value="Petiscos" label="Petiscos" />
      <Tab value="Mexicana" label="Mexicana" />
    </FilterCont>
  )
}

export default Filter