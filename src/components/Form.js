const Form = ({setInputText, setTodos, todos, inputText, setStatus}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText('');
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <div className="header">
            <div className="input">
                <input value={inputText} onChange={inputTextHandler} type="text" className="input-text"/>
                <button onClick={submitTodoHandler} className="todo-button">!</button>
            </div>
            <div className="sort">
                <div className="select">
                    <select className="select-buttons" onChange={statusHandler} name="todos">
                        <option className="select-button" value="all">All</option>
                        <option className="select-button" value="completed">Completed</option>
                        <option className="select-button" value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                <div className="sort-icons">
                    <div className="sort-text">Sort By</div>
                    <div className="sort-icon">
                        <button className="icon-up">↑</button>
                    </div>
                    <div className="sort-icon">
                        <button className="icon-down">↓</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;