import React from 'react';

export const Tache = ({Tache,del}) => {
  return <li className="list-group-item">{Tache.id}: {Tache.text}<button onClick={()=>del(Tache.id)} className='ms-auto btn btn-danger'>X</button></li>
  
 
};
