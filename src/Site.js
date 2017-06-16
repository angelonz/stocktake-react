import React, { Component } from 'react';
import { fetchBalance } from './actions/dashboardActions';
import { connect } from 'react-redux';

class Site extends Component {

    componentDidMount() {
        console.log(`fetching ${this.props.siteName}`);
        this.props.fetchBalance(this.props.siteName);
    }

    render() {
        const {siteName} = this.props;
        return (
            <div className="4u">
                <span className="image fit">
                    <div className="earnings-box">
                        <header>
                            <h5>{siteName}</h5>
                        </header>
                        <p><i className="fa fa-spinner fa-pulse fa-2x" aria-hidden="true"></i></p>
                        <a href="#" className="button special small">Edit</a>
                    
                    </div>
                </span>
            </div>
        );
    }

    
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBalance: (site) => {
            dispatch(fetchBalance(site));
        }
    }
}

export default connect(null, mapDispatchToProps)(Site);
