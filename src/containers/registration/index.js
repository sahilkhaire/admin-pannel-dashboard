import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { message } from 'antd';
import * as actions from '../../redux/auth/actions';
import './styles.scss';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        }

    }
    onClickLoginHere = () => {
        this.props.history.push('/login');
    }
    onSuccess = (res) => {
        if (res.status) {
            message.success('You have successfully registered!')
            // this.props.history.push('/login')
        }
        else {
            message.success('You have successfully registered!')
            this.setState({ error: "Email id already exist!" })
        }
    }
    onSubmitClick = () => {
        const { first_name, last_name, email, password } = this.state;
        if (!first_name) {
            this.setState({ error: "Please enter first name!" })
        }
        else if (!last_name) {
            this.setState({ error: "Please enter last name!" })
        }
        else if (!email) {
            this.setState({ error: "Please enter email address!" })
        }
        else if (!password) {
            this.setState({ error: "Please enter password!" })
        }
        else if (!validateEmail(email)) {
            this.setState({ error: "Please enter valid email id" })
        }
        else {
            this.setState({ error: "" })
            this.props.registerRequest({
                "email_id": email,
                "password": password,
                "first_name": first_name,
                "last_name": last_name
            }, this.onSuccess)
        }
    }
    onChangeInput = (e, field_name) => {
        this.setState({ [field_name]: e.target.value })
    }
    render() {
        const { first_name, last_name, email, password, error } = this.state;
        return (
            <div className="register-container">
                <div className="register-card">
                    <div className="head-name">
                        Registration
                    </div>
                    <div className='register-field-wrapper'>
                        <div className='name-register-field'>
                            <div className="sub-register-field">
                                <label className='register-field-label'>First Name</label>
                                <input className='register-field-input' value={first_name} onChange={(e) => this.onChangeInput(e, "first_name")} placeholder='Enter first name...' />
                            </div>
                            <div className="sub-register-field">
                                <label className='register-field-label'>Last Name</label>
                                <input className='register-field-input' value={last_name} onChange={(e) => this.onChangeInput(e, "last_name")} placeholder='Enter last name...' />
                            </div>
                        </div>
                        <div className='register-field'>
                            <label className='register-field-label'>Email Id</label>
                            <input className='register-field-input' value={email} onChange={(e) => this.onChangeInput(e, "email")} placeholder='Enter email id...' />
                        </div>
                        <div className='register-field'>
                            <label className='register-field-label'>Password</label>
                            <input className='register-field-input' value={password} type='password' onChange={(e) => this.onChangeInput(e, "password")} placeholder='Enter password...' />
                        </div>
                        <div className='register-button-wrapper'>
                            {error && <label className='error-label'>{error}</label>}
                            <button className='register-button' onClick={() => this.onSubmitClick()}>Register</button>
                        </div>
                        <div className='not-sign-up-text'>
                            Already sign up? <span className="cursor-pointer" style={{ color: "#35846c", paddingLeft: "5px" }} onClick={() => this.onClickLoginHere()}>click here</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        registerRequest: bindActionCreators(actions.registerRequest, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);

