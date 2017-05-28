import React from "react";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        console.log("constructor: props: ", this.props);
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps: nextProps:");
        console.log(nextProps);
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return false;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");
        return (
            <div className="app container">
                <h1>LifeCycle</h1>
            </div>
        );
    }
}
