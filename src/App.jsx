import React, { useState } from "react";
import Create from "./components/Create"
import Show from "./components/Show"
import Home from "./components/Home"
import Nav from "./components/Nav";
import Details from "./components/Details";
import { Route, Routes } from "react-router";

const App = () => {
 
    const [users, setusers] = useState([
        
    ]);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const user = { username, password };

        const copyusers = [...users];
        copyusers.push(user);
        setusers(copyusers);

        // setusers([...users, user])

        setusername("");
        setpassword("");
    };
  
    return (
    <>
        <Nav/>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="create" element={<Create users={users} setusers=
            {setusers} />}/>
            <Route path="/show" element={<Show users={users} setusers={setusers}/>}/>
            <Route path="/show/details/:title" element={<Details/>}/>
        
        </Routes>
       
    </>
    );
};

export default App;
