import axios from "axios";

const Form = ({setInputText, setTodos, todos, inputText, setStatus, filteredTodos, setFilteredTodos}) => {

    const inputTextHandler = async (e) => {
        setInputText(e.target.value);
        // try {
        //     e.preventDefault();
        //     await axios.post('https://todo-api-learning.herokuapp.com/v1/task/2')
        //     setInputText(e.target.value)
        // } catch(err) {
        //     console.log(err.response.data.message);
        // }
    }

    const submitTodoHandler = async (e, todo) => {
        
        try {
            e.preventDefault();
            await axios.post('https://todo-api-learning.herokuapp.com/v1/task/2', {name: inputText, done: false})
            setInputText(e.target.value);
        } catch(err) {
            console.log(err.response.data.message);
        }
        
        // e.preventDefault();
        // setTodos([
        //     ...todos, {text: inputText, completed: false, id: Math.random() * 1000, date: new Date().toLocaleTimeString()}
        // ]);
        // setInputText('');
    }

    const statusHandler = (e) => {
        
        setStatus(e.target.value);
    }
    const sortDate = (filter) => {
     
            if (filter === 'Up') {
                setFilteredTodos(filteredTodos => [...filteredTodos].sort((a, b) => {
                    if (a.date > b.date) {
                        return 1;
                    } else {
                        return -1;
                    }
                }));
            } else {
                
                setFilteredTodos(filteredTodos => [...filteredTodos].sort((a, b) => {
                    if (a.date < b.date) {
                        return 1;
                    } else {
                        return -1;
                    }
                }));
            }
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
                    <div className="sort-text">Sort By Date</div>
                    <div className="sort-icon">
                        <button className="icon-up" onClick={() => sortDate('Up')}>↑</button>
                    </div>
                    <div className="sort-icon">
                        <button className="icon-down" onClick={() => sortDate('Down')}>↓</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Form;