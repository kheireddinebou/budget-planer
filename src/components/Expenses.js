import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

function Expenses() {
    const [search, setSearch] = useState('');
    const {handleAlert, removeExpense, expenses} =  useContext(AppContext);
    
    const buttonAlert = () =>{
      handleAlert(true)
      setTimeout(() =>{
          handleAlert(false)
      }, 4000)
    
    }
    
  return (
    <div className='pt-1'>
       <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Search..." />

       <ul className="list-group pt-3 fs-5">
        {expenses.map((expense) => (
          expense.name.toLowerCase().includes(search.toLowerCase())  && 
          (<li key={expense.id} class="list-group-item d-flex justify-content-between align-items-center">
          {expense.name}
          <div>
          <span className="badge bg-primary rounded-pill me-4">${expense.cost}</span>
           <button onClick={() =>{ removeExpense(expense.id);  buttonAlert()}} className='remove-btn' >
            <i className="fa-solid fa-circle-xmark"></i>
            </button>       
          </div>       
          </li>) 
        ))}
         
        </ul>
    </div>
  )
}

export default Expenses