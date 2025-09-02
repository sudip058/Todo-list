import React, { useState } from 'react';

function Todo() {
    const [todo , setTodo] = useState([{id : crypto.randomUUID() , text : "Learn React" , completed : false}]);
    const [newTodo , setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo);
    }

    const addTodo = (text) => {
        if(text.trim() === '') return;
        setTodo([...todo , {id : crypto.randomUUID() , text , completed : false}]);
        setNewTodo('');
    }
    const deleteTodo = (id) => {
        setTodo(todo.filter((item) => item.id !== id));
        setNewTodo('');
    }
    return(
        <div>
            <h1>My Todo List</h1>
            <form onSubmit={handleSubmit}>
               <div>
                 <input type="text" placeholder='Type Here..' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                <button type="submit">Add</button>
               </div>
               <div>
                 <ol>
                    {
                        todo.map((item) => {
                            return(
                                <li key={item.id} >
                                    <input type="checkbox" value={item.completed}/>
                                    {item.text} 
                                    <button type="button" onClick={() => deleteTodo(item.id)}>
                                        Delete
                                    </button>
                                </li>
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