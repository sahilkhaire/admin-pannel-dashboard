import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/app/actions';

import './styles.scss';
import Header from "../../components/header/header";
import Mentor from "../../components/mentors/mentors";
import Task from "../../components/task/task";
import AddMentor from "../../components/addMentor/addMentor";
import CheckboxText from "../../components/ checkboxText/checkboxText";
import AddTodoInput from "../../components/addTaskInput/addTaskInput";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {
        this.props.getMentorListRequest();

    }

    toggleCheckbox = (index) => {

    }
    deleteTask = (index) => {
        let { active_mentor } = this.props;
        this.props.deleteTaskRequest({ mentor_id: active_mentor, task_id: index })
    }
    addButtonClick = (task) => {
        let { active_mentor } = this.props;
        this.props.addTaskRequest({ mentor_id: active_mentor, task: task })
    }
    deleteMentor = (id) => {
        const { active_mentor, list } = this.props;
        let new_active_id = "";
        if (active_mentor == id) {
            for (let i = 0; i < list.length; i++) {
                if (id != list[i]._id) {
                    new_active_id = list[i]._id;
                    break;
                }
            }
        }
        this.props.deleteMentorRequest({ mentor_id: id, new_active_id: new_active_id })

    }
    getMentorName = () => {
        const { active_mentor, list } = this.props;
        for (let i = 0; i < list.length; i++) {
            if (active_mentor == list[i]._id) {
                return list[i].mentor_name+" > Tasks";
            }
        }
        return "Mentor 1: Tasks"
    }
    render() {
        const { list, active_mentor } = this.props;
        return (
            <div className="admin-panel-container">
                <Header />
                <div className="mentors-and-task-wrapper">
                    <div className="mentor-container">
                        <div className="add-mentor-wrapper">
                            <div className="mentor-list-name">
                                Mentor List
                            </div>
                            <AddMentor
                                addButtonClick={(name) => this.props.addMentorRequest({ name: name })}
                            />
                        </div>
                        {list.map((list_data, index) => {
                            return <Mentor
                                data={list_data}
                                active_mentor={active_mentor}
                                onMentorClick={(id) => this.props.updateActiveMentor(id)}
                                deleteTask={(id) => this.deleteMentor(id)}
                            />
                        })}


                    </div>
                    <div className="task-container">
                        <div className='task-header'>
                            <span>{this.getMentorName()}</span>
                            <AddTodoInput
                                addButtonClick={(text) => this.addButtonClick(text)}
                            />
                        </div>

                        {list.map((list_data) => {
                            if (list_data._id == active_mentor) {
                                return list_data.tasks.map((task, ind) => {
                                    return <CheckboxText
                                        is_done={false}
                                        task={task}
                                        index={ind}
                                        is_checkbox={false}
                                        deleteTask={(index) => this.deleteTask(index)}
                                        toggleCheckbox={(index) => this.toggleCheckbox(index)}
                                    />
                                })
                            }
                        })}

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: JSON.parse(JSON.stringify(state.app.data)),
        active_mentor: state.app.active_mentor
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMentorListRequest: bindActionCreators(actions.getMentorListRequest, dispatch),
        addMentorRequest: bindActionCreators(actions.addMentorRequest, dispatch),
        deleteMentorRequest: bindActionCreators(actions.deleteMentorRequest, dispatch),
        addTaskRequest: bindActionCreators(actions.addTaskRequest, dispatch),
        deleteTaskRequest: bindActionCreators(actions.deleteTaskRequest, dispatch),
        updateActiveMentor: bindActionCreators(actions.updateActiveMentorRequest, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);

