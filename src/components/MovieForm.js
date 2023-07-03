
import React, {useState} from 'react';
import './MovieForm.css';

const ExpenseForm = (props) =>{

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredOpeningText,setEnteredOpeningText]=useState('');
    const [enteredDate,setEnteredDate]=useState('');


    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }

     const amountChangeHandler = (event) =>{
        setEnteredOpeningText(event.target.value);
    }

     const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:enteredOpeningText,
            date:new Date(enteredDate)
        };
         props.onSaveExpenseData(expenseData);
         setEnteredTitle('');
         setEnteredOpeningText('');
         setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
             <div>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Opening Text</label>
                <input type='text'  value ={enteredOpeningText} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Releasing Date</label>
                <input type='date' min="2021-01-01" step="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
                  <button type="button" onClick={props.onCancel}>Cancel</button>
                  <button type="submit">Add Movie</button>
        </div>
        </form>
       
    );
}  

export default ExpenseForm;