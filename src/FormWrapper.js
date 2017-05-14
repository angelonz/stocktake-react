import React from 'react';

const FormWrapper = (props) => {

    return (
        <article id="main">
            <section className="wrapper style5">
                <div className="inner">
                    {props.children}
                </div>
            </section>
        </article>
    );
    
};

export default FormWrapper;
