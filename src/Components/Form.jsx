import {useRef, useState} from 'react';

export default function Form(){

    const [username,setUsername]= useState("");
    const [password,setPassword]= useState("");
    const handleUsername =(e) =>{
        console.log(e.target.value);
        setUsername(e.target.value);
    }
    const handlesubmit = () => {
        console.log(username);
        console.log(password);
    }
    
    
    return (

        <>
         <h2>Form component</h2>

         <p> <input type="text" placeholder="username" onChange={handleUsername}/></p>
         <p> <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} /></p>
         <p> <button onClick={handlesubmit}>submit</button></p>
        </>
    )
   
}