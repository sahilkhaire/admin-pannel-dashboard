import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/auth/actions';

import './styles.scss';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }

    }
    onClickRegisterHere = () => {
        this.props.history.push('/register');
    }
    onSuccess = (res) => {
        if (res.status) {
            localStorage.setItem('token', res.data.access_token);
            localStorage.setItem('refreshtkn', res.data.refresh_token);
            this.props.history.push('/todo-list')
        }
        else {
            this.setState({ error: "please enter correct credentials!" })
        }
    }
    onClickLogin = () => {
        const { email, password } = this.state;
        if (!email) {
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
            this.props.authRequest({ "email_id": email, "password": password }, this.onSuccess)
        }
    }
    onChangeInput = (e, field_name) => {
        this.setState({ [field_name]: e.target.value })
    }
    render() {
        const { email, password, error } = this.state;
        return (
            <div className="login-container">
                <div className="login-card">
                    <div className="head-name">
                        Login
                    </div>
                    <div className='login-field-wrapper'>
                        <div className='login-field'>
                            <label className='login-field-label'>Email Id</label>
                            <input className='login-field-input' value={email} onChange={(e) => this.onChangeInput(e, 'email')} placeholder='Enter email id here...' />
                        </div>
                        <div className='login-field'>
                            <label className='login-field-label'>Password</label>
                            <input className='login-field-input' value={password} onChange={(e) => this.onChangeInput(e, 'password')} type='password' placeholder='Enter password here...' />
                        </div>
                        <div className='login-button-wrapper'>
                            {error && <label className='error-label'>{error}</label>}
                            <button className='login-button' onClick={() => this.onClickLogin()}>Login</button>
                        </div>
                        <div className='not-sign-up-text'>
                            Not sign up? <span className="cursor-pointer" style={{ color: "#35846c", paddingLeft: "5px" }} onClick={() => this.onClickRegisterHere()}>click here</span>
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
        authRequest: bindActionCreators(actions.authRequest, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

