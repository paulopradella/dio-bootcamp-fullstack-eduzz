import React, { Component } from "react";

class ErrorBoundary extends Component {

    constuctor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log('error', error);
        console.log('errorInfo', errorInfo);
    }

    render() {
        return this.props.children
    }
}

export default ErrorBoundary