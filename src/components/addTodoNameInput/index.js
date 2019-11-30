import React from "react";
import './styles.scss';
import AddIcon from '../../assets/icons/plus.png'

class AddTodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            showPopOptions: false
        }
        this.addDropdownText = this.addDropdownText.bind(this)
    }
    onInputChange = e => {
        this.setState({ value: e.target.value })
    }
    addButtonClick = () => {
        this.props.addButtonClick(this.state.value);
        this.setState({ value: "" })
    }
    onKeyDown = (e) => {
        if (e.keyCode == 13 && this.state.value) {
            this.props.addButtonClick(this.state.value);
            this.setState({ value: "" })
        }
    }
    addDropdownText = (text) => {
        this.props.addButtonClick(text);
        this.setState({ value: "" })
    }
    render() {
        const { is_bucket, bucket_names } = this.props;
        const { showPopOptions, value } = this.state;
        if (is_bucket) {
            return (
                <div className="popup-input-wrapper">
                    <div className="name-input-wrapper-bucket">
                        <input onFocus={() => this.setState({ showPopOptions: true })} onKeyDown={this.onKeyDown} type="text" value={this.state.value} placeholder="Add bucket name" className="name-input" onChange={this.onInputChange} />
                    </div>
                    {showPopOptions && bucket_names.length ? <div className='popup-container'>
                        {bucket_names.map((data, index) => {
                            if (data.bucket_name.includes(value)) {
                                return <div className='popup-fields' onClick={() => this.addDropdownText(data.bucket_name)} >{data.bucket_name}</div>
                            }
                        })}
                    </div> : ""}
                </div>
            );
        }
        else {
            return (
                <div className="name-input-wrapper">
                    <img className="add-icon" src={AddIcon} style={{ width: '20px', height: "20px" }} onClick={() => this.addButtonClick()} />
                    <input onKeyDown={this.onKeyDown} type="text" value={this.state.value} placeholder="Add task" className="name-input" onChange={this.onInputChange} />
                </div>
            );
        }

    }
}

export default AddTodoInput;
