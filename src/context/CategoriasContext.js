import React, { createContext, useState } from 'react';

// Crear el context
export const CategoriasContext = createContext()

// provider de donde van a salir los datos y las funciones state
const CategoriasProvider = (props) => {
    // crear el state del context
    const[ hola, guardarHola ] = useState('hola')

    return(
        <CategoriasContext.Provider
            value={{

                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider
