import React from "react";
import './styles.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="header-wrapper">
                <span className="head-name">Admin Panel</span>
            </div>
        );
    }
}


export default Header;

