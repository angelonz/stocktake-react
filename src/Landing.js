import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import Section from './Section';

class Landing extends Component {

    componentDidMount() {
        this.props.toggleHeader(false);
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
    toggleHeader: (show) => {
      dispatch({
        type: 'TOGGLE_HEADER',
        value: show
      })
    }
  }
};

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
