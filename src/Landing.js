import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import Section from './Section';

class Landing extends Component {

    componentDidMount() {
        this.props.showHeader(false);
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

const mapDispatchToProps = (dispatch) => {
  return {
    showHeader: (show) => {
      dispatch({
        type: 'TOGGLE_HEADER',
        value: show
      })
    }
  }
};

export default connect(null, mapDispatchToProps)(Landing);
