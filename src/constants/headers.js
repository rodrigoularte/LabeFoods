const token = localStorage.getItem("token")

export const headers = { headers: { auth: token } }