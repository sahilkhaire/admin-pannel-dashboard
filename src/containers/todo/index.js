import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/app/actions';

import './styles.scss';

import TodoList from './components/todoList';
import BucketList from './components/bucketListSidebar';
import AddBucketInfo from "../../components/addBucketInfo";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bucket_data: [],
            todo_data: [],
            active_bucket: 0
        }
    }
    componentDidMount() {
        if (!localStorage.getItem('token') && !localStorage.getItem('refreshtkn')) {
            this.props.history.push('/login');
        } else {
            this.props.getBucketListRequest();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            let todo_data = []
            nextProps.bucket_data.filter((bucket_list, index) => {
                if (this.state.active_bucket == index) {
                    todo_data = bucket_list.bucket_id_todo
                }
            })
            this.setState({ bucket_data: nextProps.bucket_data, todo_data: todo_data })
        }
    }
    toggleCheckbox = (data) => {
        // let bucket_data = this.state.bucket_data;
        // let todo_data = this.state.todo_data;
        // todo_data.map(list => {
        //     if (list.id === data.id) {
        //         list.is_done = !list.is_done
        //     }
        // })
        // bucket_data.map(bucket => {
        //     if (bucket.id == data.bucket_id) {
        //         bucket.bucket_id_todo = todo_data
        //     }
        // })
        // this.setState({ bucket_data: bucket_data, todo_data: todo_data })
        this.props.updateTaskRequest({
            todo_name: data.todo_name,
            is_done: !data.is_done,
            bucket_id: data.bucket_id,
            id: data.id
        })
    }
    addButtonClick = (text) => {
        this.state.bucket_data.map((bucket, index) => {
            if (index == this.state.active_bucket) {
                this.props.createTaskRequest({
                    "todo_name": text,
                    "is_done": false,
                    "bucket_id": bucket.id
                })
            }
        })
    }
    onBucketClick = (bucket_id) => {
        let bucket_data = this.state.bucket_data;
        bucket_data.map((bucket, index) => {
            if (bucket.id == bucket_id) {
                let todo_data = bucket.bucket_id_todo;
                this.setState({ active_bucket: index, todo_data: todo_data })
            }
        })
    }
    onDeleteBucketClick = (id) => {
        this.setState({ active_bucket: this.state.active_bucket - 1 })
        this.props.deleteBucketListRequest(id)
    }
    addBucketList = (name) => {
        this.setState({ active_bucket: this.state.bucket_data.length })
        this.props.createBucketListRequest({ bucket_name: name })
    }
    render() {
        const { bucket_data, todo_data, active_bucket } = this.state;
        return (
            <div className='todo-container display-flex-center'>
                <div className='todo-wrapper'>
                    <div className='bucket-list-wrapper'>
                        <BucketList
                            data={bucket_data}
                            active_bucket={active_bucket}
                            onBucketClick={(bucket_id) => this.onBucketClick(bucket_id)}
                            onDeleteBucketClick={(id) => this.onDeleteBucketClick(id)}
                            addBucketList={(name) => this.addBucketList(name)}
                            changeBucketName={(data) => this.props.updateBucketListRequest(data)}
                        />
                    </div>
                    <div className='todo-list-wrapper'>
                        {bucket_data.length ? <TodoList
                            data={todo_data}
                            addButtonClick={(text) => this.addButtonClick(text)}
                            toggleCheckbox={(data) => this.toggleCheckbox(data)}
                            deleteTodo={(id) => this.props.deleteTaskRequest(id)}
                        /> : <AddBucketInfo />}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bucket_data: JSON.parse(JSON.stringify(state.app.data)),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBucketListRequest: bindActionCreators(actions.getBucketListRequest, dispatch),
        updateBucketListRequest: bindActionCreators(actions.updateBucketListRequest, dispatch),
        createBucketListRequest: bindActionCreators(actions.createBucketListRequest, dispatch),
        deleteBucketListRequest: bindActionCreators(actions.deleteBucketListRequest, dispatch),
        createTaskRequest: bindActionCreators(actions.createTaskRequest, dispatch),
        updateTaskRequest: bindActionCreators(actions.updateTaskRequest, dispatch),
        deleteTaskRequest: bindActionCreators(actions.deleteTaskRequest, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);

