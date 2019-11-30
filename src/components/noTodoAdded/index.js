import React from "react";
import './styles.scss';

class NoTodoAdded extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="no-todo-added-wrapper">
                Please Add Todo From Above Add Text Input Field
            </div>
        );
    }
}

export default NoTodoAdded;
