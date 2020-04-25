import React, {useState, createContext} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './component/login'
import UserLoggedin from './component/userloggedin'

const userId = createContext('')
const App =() => {
  const [userid, setuserid] = useState('');
  const user = (value) =>{
    setuserid(value);
  }
  return (
   <userId.Provider value={userid}>
    <Router>
        <Switch>
          <Route path='/' exact component={() => <Login user={user} userid={userid} />} />
          <Route path={`/${userid}`} component={UserLoggedin}   />
        </Switch>
    </Router> 
   </userId.Provider>
  )  
}

export default App; 
export {userId};