import React from "react";
import './styles.scss';
import CloseButton from '../../assets/icons/wrong.png'

class Mentor extends React.Component {
    render() {
        const { data, active_mentor } = this.props;
        return (
            <div className="close-button-mentor-name-container">
                <div onClick={() => this.props.onMentorClick(data._id)} className={active_mentor == data._id ? "mentor-name-wrapper active" : "mentor-name-wrapper"}>
                    <span className="mentor-name">{data.mentor_name}</span>

                </div>
                <img src={CloseButton} className="close-button" onClick={() => this.props.deleteTask(data._id)} />
            </div>
        );
    }
}


export default Mentor;

