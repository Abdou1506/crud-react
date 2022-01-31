import { useEffect, useState } from 'react';
import './App.css';
import {Form} from './component/Form.js';
import {Liste} from './component/Liste.js';



function App({add}) {
  const [taches, setTaches] = useState([
    {id:1,text:"tache 1 "},
    {id:2,text:"tache 2 "}

  ]);
  const [tacheform, setTacheform] = useState({id:0,text:"..... "});
  add=()=>{
    setTaches([...taches,tacheform]);
    fetch(URL,{
      headers: {
        'content-type':'application/json'
      },
      method:'POST',
      body:JSON.stringify(tacheform)
    }).then(res=>all())
  }
  const URL= 'http://localhost:3000/taches/';
  const all=()=>{
fetch(URL).then(res=>res.json()).then(data=>setTaches(data))
  }
  const del=(id)=>{
    setTaches(taches.filter(t=>t.id!==id))
    fetch(URL+id,{
      method:'delete'
    })
  }
  useEffect(() => {
    all();
  
    return () => {
      
    };
  }, []);
  
  return (
   <div className="mb-3">
   <Form tacheform={tacheform} add={add} setTaches={setTaches} setTacheform={setTacheform}/>
  <Liste taches={taches} del={del} />
   </div>
  );
}

export default App;
