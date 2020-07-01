import React, { Component } from 'react';


//this is basically a setup to showcase 404 or anyother error
class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    //lifecycle which catches any error and updates the state
    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops! That is not good :(</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry