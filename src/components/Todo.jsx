import React, { useState } from 'react';

function Todo() {
    const [todo , setTodo] = useState([{id : new Guid().toString() , text : "Learn React" , completed : false}]);
    const [newTodo , setNewTodo] = useState('');
    const addTodo = (text) => {
        if(text.trim() === '') return;
        setTodo([...todo , {id : new Guid().toString() , text , completed : false}]);
        setNewTodo('');
    }
    return(
        <div>
            <h1>My Todo List</h1>
            <form action="#">
               <div>
                 <input type="text" placeholder='Type Here..' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                <button onSubmit={()=>addTodo(newTodo)}>Add</button>
               </div>
               <div>
                 <ol>
                    {
                        todo.map((item , index) => {
                            return(
                                <li key={index} ><input type="checkbox" value={item.completed}/>{item}</li>
                            )
                        })
                    }
                </ol>
               </div>
            </form>
        </div>
    );
}

export default Todo