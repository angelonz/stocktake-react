import React from 'react';

const Register = props => {
    return (
        <article id="main">
            <section className="wrapper style5">
                <div className="inner">

                    <section>
                        <h3>Register</h3>
                        <form action="">
                            <div className="row uniform">
                                <div className="6u$ 12u$(xsmall)">
                                    <input type="text" name="username" id="username" value="" placeholder="Name" />
                                </div>
                                <div className="6u$ 12u$(xsmall)">
                                    <input type="email" name="email" id="email" value="" placeholder="Email" />
                                </div>
                                <div className="6u$ 12u$(xsmall)">
                                    <input type="password" name="password" id="password" value="" placeholder="Password" />
                                </div>
                                <div className="6u$ 12u$(xsmall)">
                                    <input type="text" name="secret" id="secret" value="" placeholder="Secret" />
                                </div>
                                <div className="12u$">
                                    <ul className="actions">
                                        <li><input type="submit" value="Register" className="special" /></li>
                                        <li><input type="reset" value="Reset" /></li>
                                    </ul>
                                </div>
                            </div>    
                        </form>
                    </section>

                </div>
            </section>
        </article>
    );
};


export default Register;
