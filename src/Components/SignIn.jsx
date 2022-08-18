import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'


const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const {signIn} = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try{
            await signIn(email,password)
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

  return (
  <div>
    <div>
        <h1>SIGN IN</h1>
        <p>Don't Have An Account? <Link to='/SignUp'>SIGN UP</Link></p>
    </div>
    <form onSubmit={handleSubmit}>
        <div>
            <label>EMAIL</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email"/>
        </div>
        <div>
            <label>PASSWORD</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password"/>
        </div>
        <button>SIGN IN</button>
    </form>
</div>
  )
}

export default SignIn