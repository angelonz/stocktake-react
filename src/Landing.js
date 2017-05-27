import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import Section from './Section';

class Landing extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'TOGGLE_HEADER',
            value: false
        });
    }

    render() {
        return (
            <div>
                <Banner />
                <Section />
            </div>
        );
    }

};

export default connect()(Landing);
