import React from "react";
import addBucket from '../../../../assets/icons/plus.png'
import deleteIcon from '../../../../assets/icons/delete.png'
import closeIcon from '../../../../assets/icons/wrong.png'
import CompletedIcon from '../../../../assets/icons/complete.png';
import EditIcon from '../../../../assets/icons/pencil-edit-button.png';
import './styles.scss';
import AddTodoInput from "../../../../components/addTodoNameInput";

let color = ["#8ad7f1", "#f4e669", "#fa9c9c"]
class BucketList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddBucketInput: false,
            displayInput: false,
            inputValue: ""
        }

    }
    getRandomColor = index => {
        return color[index % 3];
    }
    getCompletedResult = (todo_arry) => {
        let i = 0;
        todo_arry.map((todo) => {
            if (todo.is_done) {
                i++;
            }
        })
        return i;
    }
    onClickAddBucket = () => {
        if (this.state.showAddBucketInput) {
            this.setState({ showAddBucketInput: false })
        }
        else {
            this.setState({ showAddBucketInput: true })
        }
    }
    addBucket = (text) => {
        this.props.addBucketList(text);
        this.setState({ showAddBucketInput: false })
    }
    editBucketNameClick = (value, id) => {
        this.setState({
            displayInput: true,
            inputValue: value
        })
    }
    changeBucketName = (e) => {
        this.setState({ inputValue: e.target.value })
    }
    onKeyDown = (e, bucket_id) => {
        if (e.keyCode == 13 && this.state.inputValue) {
            this.props.changeBucketName({ bucket_name: this.state.inputValue, id: bucket_id });
            this.setState({ inputValue: "", displayInput: false })
        }
    }
    render() {
        const { data, active_bucket } = this.props;
        const { showAddBucketInput, displayInput, inputValue } = this.state;
        return (
            <div className="bucket-list-container">
                <div className="header-text-wrapper">
                    <div className="header-text">
                        Bucket Name List
                        <img
                            src={showAddBucketInput ? closeIcon : addBucket}
                            onClick={() => this.onClickAddBucket()}
                            style={{ width: '20px', height: "20px" }}
                            className='cursor-pointer'
                        />
                    </div>
                    {showAddBucketInput && <div>
                        <AddTodoInput
                            addButtonClick={(text) => this.addBucket(text)}
                            bucket_names={data}
                            is_bucket={true}
                        />
                    </div>}
                </div>
                <div className="bucket-list">
                    {data.map((bucket, index) => {
                        if (active_bucket == index) {
                            return <div className='active-bucket-name-container'>
                                <div onClick={() => this.props.onBucketClick(bucket.id)} className="active-bucket-name-wrapper">
                                    {displayInput ?
                                        <input
                                            value={inputValue}
                                            onChange={(e) => this.changeBucketName(e)}
                                            onKeyDown={(e) => this.onKeyDown(e, bucket.id)}
                                            style={{
                                                border: 'none',
                                                borderBottom: '1px solid #cccccc',
                                                backgroundColor: 'beige',
                                                fontSize: 'inherit'
                                            }}
                                        />
                                        :
                                        bucket.bucket_name
                                    }
                                    <div style={{ fontSize: '14px', color: '#35846c' }}>
                                        <img
                                            src={CompletedIcon}
                                            style={{ width: '15px', height: "15px", marginRight: "5px" }} />
                                        {`${this.getCompletedResult(bucket.bucket_id_todo)}/${bucket.bucket_id_todo.length}`}
                                    </div>
                                </div>
                                <div className="delete-bucket">
                                    <img
                                        src={EditIcon}
                                        onClick={() => this.editBucketNameClick(bucket.bucket_name, bucket.id)}
                                        style={{ width: '20px', height: "20px", marginRight: "5px" }}
                                        className='cursor-pointer'
                                    />
                                    <img
                                        src={deleteIcon}
                                        onClick={() => this.props.onDeleteBucketClick(bucket.id)}
                                        style={{ width: '20px', height: "20px" }}
                                        className='cursor-pointer'
                                    />
                                </div>
                            </div>
                        }
                        else {
                            return <div onClick={() => this.props.onBucketClick(bucket.id)} className="bucket-name-wrapper">
                                {bucket.bucket_name}
                                <div style={{ fontSize: '14px', color: '#35846c' }}>
                                    <img
                                        src={CompletedIcon}
                                        style={{ width: '15px', height: "15px", marginRight: "5px" }} />
                                    {`${this.getCompletedResult(bucket.bucket_id_todo)}/${bucket.bucket_id_todo.length}`}
                                </div>
                            </div>
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default BucketList;
