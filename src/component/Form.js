import React from 'react';

export const Form = ({tacheform,add,setTaches,setTacheform}) => {
  return <form >
  <div className="mb-3">
    <label  class="form-label">Tache</label>
    <input type="text" className="form-control" value={tacheform.text} onChange={(e)=>setTacheform({...tacheform,text:e.target.value})} />
    <button type="button" className='btn btn-primary' onClick={add}>X</button>
 </div>
  </form>;
};
