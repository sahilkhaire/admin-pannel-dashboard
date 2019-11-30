import React from "react";
import './styles.scss';
import TodoCheckboxText from '../../../../components/todoCheckboxText';
import AddTodoInput from "../../../../components/addTodoNameInput";
import NoTodoAdded from "../../../../components/noTodoAdded";


class TodoList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { data } = this.props;
        return (
            <div className="todo-list-container">
                <div className='todo-name-wrapper'>
                    Todo List
                </div>
                <div className='add-todo-wrapper'>
                    <AddTodoInput
                        addButtonClick={(text) => this.props.addButtonClick(text)}
                    />
                </div>
                <div className='list-todo-wrapper'>
                    {data.length ? data.map((todo_data, index) => {
                        return <TodoCheckboxText
                            data={todo_data}
                            toggleCheckbox={(data) => this.props.toggleCheckbox(data)}
                            deleteTodo={(id) => this.props.deleteTodo(id)}
                        />
                    }) : <NoTodoAdded />}
                </div>
            </div>
        );
    }
}

export default TodoList;
