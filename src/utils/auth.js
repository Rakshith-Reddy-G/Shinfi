import Cookies from "js-cookie"

const TOKEN_KEY = "shinfi_token"

export const setToken = token => {
  Cookies.set(TOKEN_KEY, token, {
    expires: 7,
  })

  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
  return (
    Cookies.get(TOKEN_KEY) ||
    localStorage.getItem(TOKEN_KEY)
  )
}

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY)
  localStorage.removeItem(TOKEN_KEY)
}

export const isAuthenticated = () => {
  return !!getToken()
}