import React, { useState } from 'react'
import Courses from "../data/CourseData";
import {useParams} from "react-router-dom";

export default function JoinCourse() {
    const {id} = useParams();
    const selectedCourse = Courses.find((element) => {
        return id === element.id;
      });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = (e) => {
        e.preventDefault();
        debugger;
        if (name && email) // && course) 
        {
            // TODO - send mail

            setName('');
            setEmail('');
            setCourse('');
            setEmailSent(true);
            alert("Your details have been submitted. We will be in touch shortly!")
        } else {
            alert('Please fill in all fields.');
        }
    }
    return (
        <div>
            <h1> Join Course</h1>
            <small id="smallText" className="form-text text-muted"><h4> Please fill in the below form to join a course</h4></small>
            <form>
                <p></p>
                <p></p>
                <div className="form-group">
                    <label for="exampleInputName">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <p></p>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />

                </div>
                <p></p>

                <div className="form-group">
                    <label for="exampleInputEmail1">Course Name</label>
                    <input type="text" className="form-control" id="exampleInputCourse" aria-describedby="courseHelp" placeholder="Enter course name" value={selectedCourse.title} onLoad={e => setCourse(e.target.value)} />

                </div>
                <p></p>
                <button type="submit" className="btn btn-primary form-control" onClick={submit}>Submit</button>
            </form>
            <form>
            </form>
        </div>
    )
}
