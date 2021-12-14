import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './component/Navbar'
import AboutPages from './pages/AboutPages'
import Dasbhoard from './pages/Dasbhoard'
import HomePages from './pages/HomePages'
import NotFoundPages from './pages/NotFoundPages'
import UserPages from './pages/UserPages'
import UsersPages from './pages/UsersPages'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/users" element={<UserPages />} />
        <Route path="/usuarios" element={<Navigate replace to="/users" />} />
        <Route path="/users/:id" element={<UsersPages />} />

        <Route path="/dasbhoard/*" element={<Dasbhoard />}>
          <Route path={'welcome'} element={<p>hola perras</p>}></Route>
          <Route path={'goodbye'} element={<p>adios perras</p>}></Route>
        </Route>

        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </BrowserRouter>
  )
}
