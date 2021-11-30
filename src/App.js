import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Pagination from './components/Pagination';
import './App.css';



const App = () => {    

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage, setTododsPerPage] = useState(5); 

    // console.log(todos);
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);


    useEffect(() => {
        getLocalTodos();
    }, [])

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    const filterHandler = () => {
        switch(status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos)
                break;
        }
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const saveLocalTodos = () => {
        if(localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }
    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    }

    return(
        <div className="App">
            <header>    
                <h1>ToDo</h1>
            </header>
            <Form 
                inputText={inputText} 
                todos={todos} 
                setTodos={setTodos} 
                setInputText={setInputText}
                setStatus={setStatus}
            />
            <TodoList filteredTodos={currentTodos} setStatus={setStatus} setTodos={setTodos} todos={todos} />
            <Pagination todosPerPage={todosPerPage} paginate={paginate} totalTodos={filteredTodos.length} />
        </div>
    )
}

export default App;