import { useState } from "react"

const Login = (props) =>{
    const [username,setUsername] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        props.setUser(username)  
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter your username" 
                onChange={(event)=>setUsername(event.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login