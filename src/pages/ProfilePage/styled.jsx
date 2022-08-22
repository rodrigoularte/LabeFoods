import styled from "styled-components"

export const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 500px;
  min-height: 100vh;

  padding-top: 40px;
`

export const PersonalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;

  padding: 16px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 8px;
`

export const EditIcon = styled.img`
  display: flex;

  width: 24px;
`

export const AddressContainer = styled.div`
  display: flex;

  padding: 16px;
  gap: 8px;

  width: 100%;

  background-color: #eeeeee;
`

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  gap: 8px;
`

export const AddressTitle = styled.p`
  color: #b8b8b8;
`

export const Line = styled.div`
  height: 1px;
  width: 100%;

  background-color: black;
`

export const OrderHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  gap: 8px;

  width: 100%;
`

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 8px;

  width: 100%;
`