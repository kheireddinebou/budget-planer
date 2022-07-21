import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { numFormatter } from './Remaining'

function Budget() {
    const [edit, setEdit] = useState(false);
    const [editBudgetValue, setEditBudgetValue] = useState('');

    const {editBudget, budget, handleAlert} = useContext(AppContext);

    const handleEdit = () =>{
        setEdit(!edit)
        setEditBudgetValue(budget)
        editBudget(editBudgetValue)
        if(edit){
            handleAlert(true)
        setTimeout(() =>{
            handleAlert(false)
        }, 4000)
        }
    }

  return (
    <div className='alert alert-secondary w-100 d-flex align-items-center justify-content-between'>
    {edit ? (
    <input min='0' type="number" class="form-control me-4"
     value={editBudgetValue} onChange={(e) => setEditBudgetValue(e.target.value)}
    />  
    ) : (
        <span>Budget: {numFormatter.format(budget) }</span>
    )}
    <button onClick={handleEdit} className='btn btn-primary' >Edit</button>
 </div>
  )
}

export default Budget