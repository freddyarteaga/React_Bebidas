import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

// crear el context
export const ModalContext = createContext()

const ModalProvider = (props) => {

    // state del provider
    const [ idreceta, guardarIdReceta ] = useState(null)
    const [ informacion, guardarReceta ] = useState({})

    // una vez tenemos una receta, llamar la API
    // se le pasa como parametro idreceta porque queremos llamar la api cada vez
    //que este cambie

    useEffect ( () => {
        const obtenerReceta = async() => {
            if(!idreceta) return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
            const resultado = await axios.get(url)
            guardarReceta(resultado.data.drinks[0])
        }
        obtenerReceta()
    }, [idreceta] )

    return ( 
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta,
                guardarReceta
            }}
        >
            { props.children }
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;