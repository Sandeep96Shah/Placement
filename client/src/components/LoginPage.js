import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function LoginPage() {
    return (
        <div>
            <div className="home_navbar">
                <Link to="/"><p className="home_btn">Home</p></Link>
                <div className="home_header"><p>Placement Cell</p></div>
            </div>
            <div className="signin_container">
                <div className="signin_div">
                    <p>Sign In</p>
                {/* </div>
                <div> */}
                <form>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                    />
                    <div className="signin_btn">
                        <button>SignIn</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}
