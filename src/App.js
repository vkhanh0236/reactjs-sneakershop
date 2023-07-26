// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
function App() {
  
  const [name,setName]= useState('')
  const [code,setCode]= useState('')
  const clickdb = async ()=>{
    const data = {
      name,
      code
    }
    console.log(JSON.stringify(data))
    await fetch('http://localhost:3000/sql-create',{
      method:'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      // mode: 'no-cors',
      body:JSON.stringify(data),
      
    }).then(res=>res.json()).catch(err=>console.log(err))
  }
  return (
    <div className="App">
      
      <form>
        <label>
          Name:o
          <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)}/>
        </label>
        <label>
          Code:
          <input type="text" name="code" value={code} onChange={e=>setCode(e.target.value)}/>
        </label>
        
      </form>
      <button onClick={clickdb}>Submit</button>
      
    </div>
  );
}

export default App;
