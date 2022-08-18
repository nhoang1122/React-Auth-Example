import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState  } from 'react'

import { UserAuth } from '../Context/AuthContext'

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const {createUser} = UserAuth();

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email,password)
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log("HIT",e.message)
        } 
    }

  return (
    <div>
        <div>
            <h1>SIGN UP</h1>
            <p>Already Have An Account? <Link to='/'>SIGN IN</Link></p>
        </div>
        <form onSubmit={submitHandler}>
            <div>
                <label>EMAIL</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email"/>
            </div>
            <div>
                <label>PASSWORD</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password"/>
            </div>
            <button>SIGN UP</button>
        </form>
    </div>
  )
}

export default SignUp