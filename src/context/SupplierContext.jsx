import React from 'react'
import {createContext} from 'react';

export const supplierContext= createContext(null)

export const SupplierProvider = ({children}) =>{
    //GLOBAL STATE
    const [favorites,setfavorites] =useState([])

    return <SupplierContext.Provider value= {{favorites, setfavorites}} >
        {children}
    </SupplierContext.Provider>
}