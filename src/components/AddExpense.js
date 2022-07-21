import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

function AddExpense() {
    const [name , setName] = useState('');
    const [cost , setCost] = useState('');

    const {addExpense} = useContext(AppContext)
   
   const handleSubmit = (e) =>{
    e.preventDefault()
    const expense = {
        id : new Date().getTime(),
        name : name,
        cost : parseInt(cost)
    }
        addExpense(expense);
        setName('');
        setCost('');

   }

  return (
    <form onSubmit={handleSubmit}>
    <div className="row w-100 align-items-center">
        <div className='col-md-6'>
        <label className="form-label">Name</label>
         <input value={name} onChange={(e) =>setName(e.target.value)} type="text" className="form-control" required />  
        </div>

        <div className='col-md-6'>
        <label className="form-label">Cost</label>
         <input min='0' value={cost} onChange={(e) =>setCost(e.target.value)} type="number" className="form-control" required />  
        </div>
    </div>

    <button type='submit' className='btn btn-primary mt-4' >Save</button>
    </form>
  )
}

export default AddExpense