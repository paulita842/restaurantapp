import React,{ useReducer } from 'react';

import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';


const FirebaseState = props => {
 //el state y todas las funciones que van a estar en toda la aplicación
 //todos los props hijos estan en childen y todos los provider estaran por encimas de ellos, las funciones y estados estaran todas a los largo de todas las pantllas.

  //crear state inicial (FirebaseState) nos ayudara para traernos la parte inicial el menu

  const initialState = {
      menu:[]
  }

  //useReducer con dispatch(este sirve para llamar ciertas funciones) para ejecutar las funciones
  const [ state, dispatch ] = useReducer(FirebaseReducer, initialState);
    return(
        <FirebaseContext.Provider
        
            value={{
                menu: state.menu  //de esta forma podremos acceder al menu, asi lo pasamos a los componentes
            }}
        >
            {props.children} 
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;