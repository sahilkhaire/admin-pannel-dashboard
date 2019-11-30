import React from "react";
import leftArrowIcon from '../../assets/icons/left.png'
import './styles.scss';

class AddBucketInfo extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="add-bucket-info-container">
                <div className="add-bucket-indicator">
                    <div class="animated bounce" style={{ display: "flex" }}>
                        <img src={leftArrowIcon} style={{ width: "30px", height: "30px" }} /><span style={{ padding: '6px 0px 0px 15px', fontSize: 'large', color: '#35846c' }}>Please Add Bucket</span>
                    </div>
                </div>
                <div className="add-bucket-text">
                    You don't have any bucket available.
                </div>
            </div>
        );
    }
}

export default AddBucketInfo;
