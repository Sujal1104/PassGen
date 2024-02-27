// import { useState } from 'react'

import { useCallback, useEffect, useRef, useState } from "react"


function App() {
 
const [len,setlen]=useState(8);
const [numberAllowed,setnum]=useState(false);
const [charAllowed,setchar]=useState(false);
const [Password,setpassword]=useState("");


const passwordref= useRef(null);
 
const passwordGen = useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz";
if(numberAllowed)
{
  str+="0123456879"
}
if(charAllowed)
{
  str+="!@#$%^&*()/"
} 
 
for(let i=1;i<=len;i++)
{
 let char=Math.floor(Math.random()*str.length+1)
 pass+=str.charAt(char)
}

setpassword(pass);
},[len,numberAllowed,charAllowed] );

useEffect(()=>{
  passwordGen(); 

},[len,numberAllowed,charAllowed,passwordGen]) 
 
const copyclip=useCallback(()=>{
passwordref.current?.select();
   

window.navigator.clipboard.writeText(Password);


},[Password])





// passwordGen()

  return (
    <>      

 
<div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 my-10 text-orange-300 bg-slate-800">
<h1 className="text-white text-center my-2 "> Password Generator</h1>
<div className="flex shadow rounded-lg overflow-hidden mb-4"> 
<input type="text" 
value={Password}
className="outline-none w-full py-1 px-3" 
placeholder="Password"
readOnly
ref={passwordref}
/> 
<button  
 onClick={copyclip}
className=" outline-none bg-blue-600 text-yellow-100 px-3 py-0.5 shrink-0">Copy</button>
</div> 
 <div className=" flex text-sm gap-x-2">
  <div className="flex items-center gap-x-1">
    <input type="range" 
    min={6}
    max={100}
    value={len}
    className="cursor-pointer"
    onChange={(e)=>{
      setlen(e.target.value)
    }}
    
    />
    <label >Length:{len}</label>
  </div>
  <div className=" flex items-center gap-x-1">
<input type="checkbox" 
defaultChecked={numberAllowed}
id="numberInpute"
onChange={()=>{
setnum((prev)=>!prev);

}}

/>
<label> Numbers</label>
  </div>
  <div className=" flex items-center gap-x-1">
<input type="checkbox" 
defaultChecked={charAllowed}
id="charInpute"
onChange={()=>{
setchar((prev)=>!prev);

}}

/>
<label> Charaters</label>
  </div>


 </div>

 
   



</div>



    </>
  )
}

export default App
