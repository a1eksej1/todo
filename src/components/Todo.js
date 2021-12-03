import axios from 'axios';
import Bin from './bin.svg';

const Todo = ({name, setTodos, todos, todo, date, setStatus, status, setCurrentPage, currentPage, filteredTodos}) => {

    const deleteHandler = async (id) => {
        try {
            await axios.delete(`https://todo-api-learning.herokuapp.com/v1/task/2/${id}`);
            let newTodos = todos.filter(el => el.id !== todo.id)
            setTodos(newTodos);
        } catch(err) {
            console.log(err.response.data.message)
        }
        
        // setTodos(todos.filter(el => el.id !== todo.id));
    }

    const completeHandler = async (e) => {

        try {
            await axios.patch(`https://todo-api-learning.herokuapp.com/v1/task/2/${e.id}`, {
                name: name,
                done: !e.done
            })
        } catch(err) {
            console.log(err.response.data.message)
        }

        // setTodos(todos.map((item) => {
        //     if(item.id === todo.id) {
        //         return {
        //             ...item, completed: !item.completed
        //         }
        //     }
        //     return item;
        // }))
    }

    return(
        <div className="todo">
            <input onClick={completeHandler} className="complete-btn" type="checkbox" />
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{name}</li>
            <p className="time">{date}</p>
            <button onClick={deleteHandler} className="trash-btn">
                <img src={Bin} alt="bin" />
            </button>
        </div>
    )
}

export default Todo;