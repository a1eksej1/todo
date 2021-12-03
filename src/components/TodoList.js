import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos, currentPage, setCurrentPage}) => {
    console.log(todos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.uuid} name={todo.name} date={todo.date}
                        setCurrentPage = {setCurrentPage}
                        currentPage={currentPage}
                        filteredTodos={filteredTodos} />
                ))}
            </ul>
        </div>
        );
}

export default TodoList;