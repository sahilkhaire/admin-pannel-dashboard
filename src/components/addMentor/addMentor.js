
import React from "react";
import './styles.scss';
import AddIcon from '../../assets/icons/plus.png'

class AddMentor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            showPopOptions: false
        }
    }
    onInputChange = e => {
        this.setState({ value: e.target.value })
    }
    addButtonClick = () => {
        if (this.state.value) {
            this.props.addButtonClick(this.state.value);
            this.setState({ value: "" })
        }
    }
    onKeyDown = (e) => {
        if (e.keyCode == 13 && this.state.value) {
            this.props.addButtonClick(this.state.value);
            this.setState({ value: "" })
        }
    }

    render() {

        return (
            <div className="mentor-name-input-wrapper">
                <div className="image-add-css">
                    <img className="mentor-add-icon cursor-pointer" src={AddIcon} style={{ width: '20px', height: "20px" }} onClick={() => this.addButtonClick()} />
                </div>
                <input onKeyDown={this.onKeyDown} type="text" value={this.state.value} placeholder="Add Mentor" className="mentor-name-input" onChange={this.onInputChange} />
            </div>
        );

    }
}

export default AddMentor;