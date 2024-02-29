import './Passgen.css'
import React, { useCallback, useEffect, useState} from 'react'

function Passgen() {

    const[length,setLenght]=useState(4);
    const[checkNum,setCheckNum]=useState(false);
    const[checkChar,setCheckChar]=useState(false);
    const[password,setPassword]=useState("");
    
    const Passgenerator = useCallback(()=>{
        let str="abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let pass="";
        if(checkNum) str+="1234567890";
        if(checkChar) str+="!@#$%^&*()_-+{}:][/" 

        for(let i=1;i<=length;i++){
            let char=Math.floor(Math.random() * str.length +1)
            pass+=str.charAt(char);
        }
        setPassword(pass);


    },[length,checkChar,checkNum,setPassword])

    useEffect(()=>{
        Passgenerator();
    },[length,setCheckChar,setCheckNum,Passgenerator])

    const buttoncopy=()=>{
            window.navigator.clipboard.writeText(password);
            alert("COPIED TO CLIPBOARD");
    }
  return (
    <div id='screen'>
        <div id='mainbox'>
            <h1>PASSWORD GENERATOR</h1>
            <div id='upper'>
               <input id='textbox' type='text' placeholder='password' readOnly value={password}></input>
               <button onClick={buttoncopy }>copy</button>
            </div>
            <div id='lower'>
                <input
                id='slider'
                value={length}
                onChange={(e)=>{setLenght(parseInt(e.target.value))}}
                type="range"
                min={1} max={20}
                ></input>
                <label>Numbers</label>
                <input type='checkbox'
                value={checkNum}
                defaultChecked={checkNum}
                onChange={()=>{setCheckNum((prev)=>!prev)}}

                ></input>

                <label>Characters</label>
                <input type='checkbox'
                defaultChecked={checkChar}
                value={checkChar}
                onChange={()=>{setCheckChar((prev)=>!prev)}}

                ></input>
            </div>

        </div>
    </div>
  )
}

export default Passgen