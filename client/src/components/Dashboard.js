import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Student from './Student';
import Interview from './Interview';
import { all_students, all_interviews } from '../actions';

const Dashboard = (props) => {
    useEffect(() => {
        props.dispatch(all_students());
        props.dispatch(all_interviews());
    },[]);
    console.log("Dashboard props", props);
    console.log("interviews", props.interview.interviews);
    console.log("students", props.students.students);
    const interviews = props.interview.interviews;
    const students = props.students.students;
    const handleSignOut = () => {
        localStorage.removeItem('token');
    }
    return (
        <div>
            <div className="dashboard_navbar">
                <Link to="/"><p className="signout" onClick={ () => handleSignOut() }>Sign Out</p></Link>
                <div className="dashboard_header"><p>Welcome Teacher</p></div>
            </div>
            <div className="student_body">
                <div className="student_container">
                    <div className="student_div"> 
                        <div className="student_header">
                            <p>Students</p>
                            <Link to='/dashboard/addStudent'><p className="student_header_add">ADD</p></Link>
                        </div>
                        <div className="student_list">
                            {
                                students.map((student) => <Student 
                                                            name={student.name} 
                                                            key={student._id}
                                                            batch={student.batch}
                                                            courses_scores={student.courses_scores}
                                                            email={student.email}
                                                            college={student.college}
                                                            status={student.status}
                                                            interviews={student.interviews}
                                                            />)
                            }
                        </div>
                    </div>
                </div>
                <div className="interview_container">
                    <div className="interview_div"> 
                        <div className="interview_header">
                            <p>Interviews</p>
                            <Link to='/dashboard/addInterview'><p className="interview_header_add">ADD</p></Link>
                        </div>
                        <div className="interview_list">
                            {
                                interviews.map((interview) => <Interview 
                                                                name={interview.company_name} 
                                                                key={interview._id}
                                                                students={interview.students}
                                                                />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToprops(state){
    return{
       students:state.student,
       interview:state.interview,
    }
}

export default  connect(mapStateToprops)(Dashboard);