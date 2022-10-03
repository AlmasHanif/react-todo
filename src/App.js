import React, { useState } from 'react';
import './App.css';
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
    const [value, setvalue] = useState('');
    const [editTodo, seteditTodo] = useState(false);
    const [indexid, setIndex] = useState();
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (editTodo) {
            todos[indexid] = value;
            setTodos([...todos, { text: value }]);
            // console.log(todo )
            seteditTodo(false)
        } else {
            setTodos([...todos, { text: value }]);
            console.log(value, "todoo")
        }

    };
    const deleteAll = () => {
        setTodos([])
    }
    const markComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const editTitle = (index, title, todo) => {

        console.log(index, " index ....")
        setvalue(todos[index].text);
        seteditTodo(true);
        setIndex(indexid);

    };

    const deleteItem = (id) => {
        console.log("delete function")
        const list = todos.filter((ele, ind) => {
            return ind !== id;
        });
        setTodos(list);
    }




    return (
        <div className="parent-container">
            <div className="container top-container">
                <div className="app">
                    <div className="todoform">
                        <TodoForm
                            value={value}
                            setvalue={setvalue}
                            addTodo={addTodo}
                            deleteAll={deleteAll} />

                        <Todos todos={todos}
                            markComplete={markComplete}
                            editTitle={editTitle}
                            deleteItem={deleteItem} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
