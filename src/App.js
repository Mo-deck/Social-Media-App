import { useState } from 'react';
import Login from './components/Login';


const App = () => {
  const [user,setUser] = useState("")

  if(!user) return <Login setUser={setUser} />
    return(    
      <h1>App</h1>
    )
}

export default App
