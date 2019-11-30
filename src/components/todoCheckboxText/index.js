import React from "react";
import CloseButton from '../../assets/icons/wrong.png'
import './styles.scss';

class TodoCheckboxText extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { data } = this.props;
        return (
            <div className="checkbox-close-wrapper">
                <label class="checkbox-container">
                    <input type="checkbox" onChange={() => this.props.toggleCheckbox(data)} value={data.todo_name} checked={data.is_done} />
                    <span class="check-mark"></span>
                    <span class='checkbox-text'>{data.todo_name}</span>
                </label>
                <img src={CloseButton} className="close-button" onClick={()=>this.props.deleteTodo(data.id)} />
            </div>
        );
    }
}

export default TodoCheckboxText;
