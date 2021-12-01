import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} name={todo.name} date={todo.date}/>
                ))}
            </ul>
        </div>
        );
}

export default TodoList;