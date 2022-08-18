import React from 'react'
import { UserAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
const AccountPage = () => {

  const {user,logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logout()
      navigate('/')
      console.log("LOGGED OUT")
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div>
      <h1>ACCOUNT</h1>
      <p>User Email: {user && user.email}</p>
      <button onClick={handleLogOut}>LOG OUT</button>
    </div>
  )
}

export default AccountPage