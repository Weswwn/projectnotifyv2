import React from 'react';

// styling
import './Toaster.scss';

export class Toaster extends React.Component {
    static show(response) {
        Toaster.__singletonRef.__show(response);
    }

    static hide() {
        Toaster.__singletonRef.__hide();
    }

    constructor(props) {
        super(props)
        Toaster.__singletonRef = this;
        this.state = {
            status: null,
            message: '',
        }
        console.log(this.props);
    }

    __show(response) {
        this.setState({
            status: response.status,
            message: response.msg
        })
        // setTimeout(() => this.__hide(), 5000);
    }

    __hide() {
        this.setState({
            status: null,
            message: '',
        })
    }
    render() {
        const notificationColor = this.state.status == 'success' ? '#6FF06B' : this.state.status == 'failed' ? '#F0776B' : '';
        return (
            <div id="toaster-main-container" style={{backgroundColor: notificationColor}}>
                {this.state.message}
            </div>
        )
    }
}