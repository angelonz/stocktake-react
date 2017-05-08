import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerClass: 'alt'
        };
        this.hideHeader = this.hideHeader.bind(this);    
    }

    hideHeader() {
        this.setState({
            headerClass: ''
        });
    }

    componentDidMount () {
        this.setState({
            headerClass: 'alt'
        });
    }

    render() {
        return (
            <div id="page-wrapper">
                <Header cssClass={this.state.headerClass}/>
                <Main action={this.hideHeader}/>
                <Footer />
            </div>
        );
    }
};

export default App;
