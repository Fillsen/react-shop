import React, { createContext, useReducer } from 'react'
import {reducer} from "./reducer";

export const ShopContext = createContext()

const initialState = {
    items: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: ''
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }
    value.handleBasketShow  = () => {
        dispatch({type: 'TOGGLE_BASKET'})
    }
    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }
    value.incrementQuantity = (itemId) => {
        dispatch({type: 'INCREMENT_QUANTITY', payload: {id: itemId}})
    }
    value.decrementQuantity = (itemId) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id: itemId}})
    }
    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }
    value.setItems = (data) => {
        dispatch({type: 'SET_ITEMS', payload: data})
    }
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}