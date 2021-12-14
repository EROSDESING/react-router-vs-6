import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePages() {
  return (
    <div>
      <h1>Aplication</h1>
      <Link to="/users">Usuarios</Link>
    </div>
  )
}
