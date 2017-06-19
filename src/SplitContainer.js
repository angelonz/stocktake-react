import React from 'react';
import SiteInput2 from './SiteInput2';
import SiteInput from './SiteInput';

const SplitContainer = () => {
    return (
        <div className="inner-full">
            <div className="row">   
                <div className="8u 12u$(small)">
                    <SiteInput />
                </div>
                <div className="4u 12u$(small)">
                    <SiteInput2 />
                </div>
            </div>
        </div>
    );
};

export default SplitContainer;
