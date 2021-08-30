import React from 'react';
import { Link } from 'react-router-dom';
import Student from './Student';

 const InterviewDetailPage = () => {
    return (
        <div>
            <div className="idp_navbar">
                <Link to="/dashboard"><p className="home_btn">Back</p></Link>
                <div className="idp_header"><p>ABCD</p></div>
            </div>
            <div className="idp_container">
                <div className="idp_list">
                    <Student val={true}/>
                </div>
            </div>
        </div>
    )
}
export default InterviewDetailPage;
