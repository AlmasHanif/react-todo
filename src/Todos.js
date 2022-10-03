import React from 'react';

const Todos = ({todos, markComplete, editTitle , deleteItem}) => {
    return (
        <div className={"todo-list"}>
                {
                    todos.map((todo, index) => (
                        <><Todo todo={todo} key={index} index={index} markComplete={markComplete} editTitle={editTitle} deleteItem={deleteItem}/>
                        </>
                    ))
                }
        </div>
    );
};

const Todo = ({todo, index, markComplete, editTitle, deleteItem}) =>(
    <div className="todo">
        <p style={{textDecoration : todo.isCompleted ? "line-through" : ""}}>
            <input type={"checkbox"} onChange={() => markComplete(index)} name={"completed"} id={todo.id}/>{' '}
            {todo.text}
        </p>
        <div>
        <button style={{border: "none" , outline : "none" , borderRadius: 7 , width : 35}} onClick={() => editTitle(index, todo)}>edit</button>
        <button style={{border: "none" , outline : "none" , borderRadius: 7 , width : 60}} onClick={() => deleteItem(index)}>delete</button>
        </div>


    </div>
);

export default Todos;
