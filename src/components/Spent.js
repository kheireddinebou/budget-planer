import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { numFormatter } from './Remaining'

function Spent() {
    const { budget, expenses} = useContext(AppContext);
    const spent = expenses.reduce((total, expense) => total+ expense.cost , 0);

  return (
    <div className={`alert w-100 ${spent < budget ? 'alert-primary' : 'alert-danger' }`}>
    <span>Spent so far: {numFormatter.format(spent) }</span>
 </div>
  )
}

export default Spent