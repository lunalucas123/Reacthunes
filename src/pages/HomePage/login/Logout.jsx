import React from 'react'
import LoginPage from './LogInPage'
import { Redirect } from "react-router-dom";


export default function Logout() {
  return (
    <div>
      <Redirect to="/Login" />
    </div>
  )
}
