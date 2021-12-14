import React from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom'

export default function Dasbhoard() {
  const navigation = useNavigate()

  const handleClick = () => {
    navigation('/')
  }
  return (
    <div>
      <Outlet />
      <h1>Dasbhoard</h1>
      <button onClick={handleClick}>Logout</button>
      <br />
      <Link to="welcome"> Dame Click</Link>
      <br />
      <Link to="goodbye"> Adios</Link>
    </div>
  )
}
