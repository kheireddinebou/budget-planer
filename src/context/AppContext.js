import React, { createContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer';

const initialestate = {
    expenses : localStorage.getItem('expenses') ?
     JSON.parse(localStorage.getItem('expenses'))
    : [],
    budget : localStorage.getItem('budget') ?
    JSON.parse(localStorage.getItem('budget'))
   : 2000,
    alert : false
}

export const AppContext = createContext();



export const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialestate)
   
     useEffect(() =>{
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
    }, [state.expenses])

    useEffect(() =>{
        localStorage.setItem('budget', JSON.stringify(state.budget))
        }, [state.budget])


    const addExpense = (expense) =>{
        dispatch({
            type : 'ADD_EXPENSE',
            payload : expense
        })
     }

     const removeExpense = (id) =>{
        dispatch({
            type : 'REMOVE_EXPENSE',
            payload : id
        })
     }

     const editBudget  = (value) =>{
        dispatch({
            type : 'EDIT_BUDGET',
            payload : value
        })
     }

     const handleAlert  = (value) =>{
        dispatch({
            type : 'CHANGE_ALERT',
            payload : value
        })
     }



    return(
        <AppContext.Provider value={{
            budget : state.budget,
            expenses : state.expenses,
            alert : state.alert,
            handleAlert,
            addExpense,
            removeExpense,
            editBudget
        }} >
        {children}
    </AppContext.Provider>
    )
}