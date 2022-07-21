import React from 'react'

function AppReducer(state, action) {
  switch (action.type) {
    case 'ADD_EXPENSE' :
        return{
            ...state,
            expenses : [action.payload, ...state.expenses]
        }

    case 'REMOVE_EXPENSE' :
            return{
                ...state,
                expenses : state.expenses.filter((expense) => expense.id !== action.payload)
            }

    case 'EDIT_BUDGET' :
        return{
             ...state,
             budget : action.payload
          }

     case 'CHANGE_ALERT' :
        return{
             ...state,
             alert : action.payload
          }

    default :
    return state
  }
}

export default AppReducer