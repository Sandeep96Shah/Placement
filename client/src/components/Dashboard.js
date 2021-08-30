import React from 'react';
import { Link } from 'react-router-dom';
import Student from './Student';
import Interview from './Interview';

const Dashboard = () => {
    return (
        <div>
            <div className="home_navbar">
                <Link to="/"><p className="signout">Sign Out</p></Link>
                <div className="home_header"><p>Welcome Teacher</p></div>
            </div>
            <div className="student_body">
                <div className="student_container">
                    <div className="student_div"> 
                        <div className="student_header"><p>Students</p></div>
                        <div className="student_list">
                            <Student />
                        </div>
                    </div>
                </div>
                <div className="interview_container">
                    <div className="interview_div"> 
                        <div className="interview_header"><p>Interviews</p></div>
                        <div className="interview_list">
                            <Interview />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Dashboard;