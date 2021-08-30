import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Interview from './Interview';

const StudentDetailPage = () => {
    const [add, setAdd] = useState(false);
    const handleAdd = () => {
        setAdd(!add);
    }
    return (
        <div>
            <div className="sdp_navbar">
                <Link to="/dashboard"><p className="home_btn">Back</p></Link>
                <div className="sdp_header"><p>Sandeep Kumar Shah</p></div>
            </div>
            <div className="sdp_container">
                <div className="sdp_div">
                    <div>
                        <div className="sdp_field">
                            <p className="sdp_property">Email: </p><p className="sdp_value">sandeep2016shah@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <div className="sdp_field">
                            <p className="sdp_property">Batch: </p><p className="sdp_value">Nov2020</p>
                        </div>
                    </div>
                    <div>
                        <div className="sdp_field">
                            <p className="sdp_property">College: </p><p className="sdp_value">Amity University Kolkata</p>
                        </div>
                    </div>
                    <div>
                        <div className="sdp_field">
                            <p className="sdp_property">Courses: </p><p className="sdp_value">
                                <ul>
                                    <li><div className="sdp_field"><p className="sdp_property_li">DSA:</p><p className="sdp_value_li">60%</p></div></li>
                                    <li><div className="sdp_field"><p className="sdp_property_li">WebD:</p><p className="sdp_value_li">70%</p></div></li>
                                    <li><div className="sdp_field"><p className="sdp_property_li">React:</p><p className="sdp_value_li">80%</p></div></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div><p className="sdp_property">Interviews</p></div>
                    <div className="sdp_interview">
                        <Interview val={true} />
                    </div>
                    <p className="interview_form_p" onClick={ () => handleAdd() }>{add ? "Cancel" : "Add Interview" }</p>
                        {
                            add && 
                            <div className="interview_form">
                                <form>
                                    <label htmlFor="company_name">Company Name</label>
                                    <input
                                        type="text"
                                        name="company_name"
                                    />
                                    <label htmlFor="date_of_interview">Date</label>
                                    <input
                                        type="text"
                                        name="date_of_interview"
                                    />
                                    <button>ADD</button>
                                </form>
                            </div>
                        }
                </div>
            </div>
        </div>
    )
}

export default StudentDetailPage;
