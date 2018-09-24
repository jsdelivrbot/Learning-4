import React, {Component} from 'react';
import {connect} from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {

        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push("/");
            }
        }

        render() {
            //IF you forget to add {...this.props} all other
            //HOC components will break
            return <ChildComponent {...this.props}/>;
        }
    }

    function mapStateToProps(state) {
        return {auth: state.auth}
    }

    return connect(mapStateToProps)(ComposedComponent);
};

