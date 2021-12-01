import Bin from './bin.svg';

const Todo = ({name, setTodos, todos, todo, date}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
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