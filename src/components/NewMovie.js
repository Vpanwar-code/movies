import React, { useState } from 'react';
import './NewMovie.css';
import MovieForm from './MovieForm';

const NewExpense = () =>{
    const [isEditing, setIsEditing]=useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) =>{
       console.log(enteredExpenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    const stopEditingHandler = () =>{
        setIsEditing(false);
    }

    return( 
         <div className='new-expense'>
         {!isEditing && <button onClick={startEditingHandler}>Add New Movie</button>}
           {isEditing && <MovieForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>} 
        </div>
        );
  
}

export default NewExpense;