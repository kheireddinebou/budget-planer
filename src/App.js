
import './App.css';
import { AppProvider } from './context/AppContext';
import AddExpense from './components/AddExpense';
import Budget from './components/Budget';
import Expenses from './components/Expenses';
import Remaining from './components/Remaining';
import Spent from './components/Spent';

function App() {

  return (
    <AppProvider>

    <div className="container pb-5">
       <h1 className='pt-3 fw-bold display-5'>My Budget Planner</h1>
       <div className='d-flex row align-items-center justify-content-between pt-3'>
         <div className='col-md-4'>
         <Budget />
         </div>
         <div className='col-md-4'>
         <Remaining />
         </div>
         <div className='col-md-4'>
         <Spent />
         </div>
       </div>
       <p className='h1 pt-1 fw-bold'>Expenses</p>
        <Expenses />
        <p className='h1 pt-3 fw-bold'>Add Expense</p>
        <AddExpense />
    </div>

    </AppProvider>
  );
}



export default App;
