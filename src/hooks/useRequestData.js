import axios from "axios"
import { useEffect, useState } from "react"


const useRequestData = (initialState, url) => {

  const [data, setData] = useState(initialState)

  const getData = async () => {
    const header = { headers: { auth: window.localStorage.getItem("token") } }

    await axios
      .get(url, header)
      .then((res => {
        setData(res.data)
      }))
      .catch((error) => console.log(error.message))
  }

  // console.log(data)

  useEffect(() => {
    getData()
  }, [])

  return data
}

export default useRequestData