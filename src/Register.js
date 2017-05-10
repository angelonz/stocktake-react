import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

class Register extends Component {

    componentDidMount() {
        this.props.toggleHeader(true);
    }

    render() {
        return (
            <article id="main">
                <section className="wrapper style5">
                    <div className="inner">

                        <section>
                            <h3>Register</h3>
                            <LoginForm />
                        </section>

                    </div>
                </section>
            </article>
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

export default connect(null, mapDispatchToProps)(Register);
