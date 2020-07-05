// Localstorage actions

export const setUser = ({user}:any) => localStorage.setItem('user', user)
export const getUser = () => localStorage.getItem('user')
export const setToken = ({token}:any) => localStorage.setItem('token', token)
export const getToken = () => localStorage.getItem('token')
