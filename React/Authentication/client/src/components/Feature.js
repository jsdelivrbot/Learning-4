import React, {Component} from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
    render() {
        return (
            <div>Extra Feature Ma Boisss</div>
        );
    }
}

export default requireAuth(Feature);