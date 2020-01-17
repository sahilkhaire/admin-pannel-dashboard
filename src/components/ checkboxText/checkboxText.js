import React from "react";
import CloseButton from '../../assets/icons/wrong.png'
import './styles.scss';

class CheckboxText extends React.Component {
    render() {
        const { task, index, is_done, is_checkbox } = this.props;
        return (
            <div className="checkbox-close-wrapper">
                <label class="checkbox-container">
                    {is_checkbox && (<span><input type="checkbox" onChange={() => this.props.toggleCheckbox(index)} value={task} checked={is_done} />
                        <span class="check-mark"></span></span>)}
                    {!is_checkbox&&<span className="numbering-task">{index+1}. </span>}
                    <span class='checkbox-text'>{task}</span>
                </label>
                <img src={CloseButton} className="close-button" onClick={() => this.props.deleteTask(index)} />
            </div>
        );
    }
}

export default CheckboxText;