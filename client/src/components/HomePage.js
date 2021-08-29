import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const HomePage = () => {
    return (
        <div>
            <div className="home_navbar">
                <div className="home_header"><p>Placement Cell</p></div>
                <Link to='/login'><p className="signin">SignIn</p></Link>
            </div>
            <div className="homepage_container">
                <div className="quote_container">
                    <div className="quote">
                        <p>
                        There are always two sides to the coins. 
                        Behind every successful person, there are 
                        some teachers who always trust them. They 
                        encourage them and motivate them. Teaching 
                        is not a just profession but a great responsibility.
                        </p>
                    </div>
                    <div className="quote">
                        <p>
                        There are always two sides to the coins. 
                        Behind every successful person, there are 
                        some teachers who always trust them. They 
                        encourage them and motivate them. Teaching 
                        is not a just profession but a great responsibility.
                        </p>
                    </div>
                </div>
                <div className="signup_container">
                    <div className="signup_div">
                        <div className="signup_header"><p>Sign Up</p></div>
                        <div className="form_container">
                            <form>
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text"  
                                    name="name"
                                    placeholder="Name"
                                    //onChange listener    
                                />
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email"  
                                    name="email"
                                    placeholder="Email"
                                    //onChange listener    
                                />
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password"  
                                    name="password"
                                    placeholder="Password"
                                    //onChange listener    
                                />
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input 
                                    type="password"  
                                    name="confirm_password"
                                    placeholder="Confirm Password"
                                    //onChange listener    
                                />
                                <button>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
