import React from 'react';
import {Tache} from './Tache.js';
export const Liste = ({taches,del}) => {
  return <ul className="list-group">
    {
      taches.map(t=><Tache Tache={t} del={del}/>)
    }
    
  
   </ul>;
};
