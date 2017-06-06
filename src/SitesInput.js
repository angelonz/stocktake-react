import React, { Component } from 'react';

class SiteInput extends Component {

    constructor(props) {
        super(props);
        this.addSiteHandler = this.addSiteHandler.bind(this);
        this.dropdownChangeHandler = this.dropdownChangeHandler.bind(this);
    }

    addSiteHandler() {
        console.log('selected', this.siteSelected);
    }

    dropdownChangeHandler(e) {
        this.siteSelected = e.target.value;
    }

    render() {
        return (
            <div className="row uniform">
                <div className="6u 12u$(xsmall)">
                    <div className="select-wrapper">
                        <select name="sites" id="sites" onChange={this.dropdownChangeHandler}>
                            <option value="">- Sites -</option>
                            <option value="Fotolia">Fotolia</option>
                            <option value="Getty">Getty Images</option>
                            <option value="123RF">123RF</option>
                            <option value="Dreamstime">Dreamstime</option>
                        </select>
                    </div>
                </div>

                <div className="6u$ 12u$(xsmall)">
                    <ul className="actions">
                        <li><a href="#" className="button" onClick={this.addSiteHandler}>Add to My Sites</a></li>
                    </ul>
                    
                </div>
            </div>
                
        );
    }
}

export default SiteInput;
