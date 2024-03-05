import React, { useState } from 'react'
import Create from './components/Create';
import Show from './components/Show';
import Nav from './components/Nav';

const App = () => {
    const [users, setusers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
   
  return (
    <div>
      <Nav/>
      <Create users={users} setusers={setusers} />
      <Show users={users} setusers={setusers} /> 
    </div>
  )
}

export default App
