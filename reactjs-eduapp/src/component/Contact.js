import React, { useState } from 'react'

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        //debugger;
        if (name && email && message) {
            // TODO - send mail

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
            alert("Your message has been submitted. We will be in touch shortly!")
        } else {
            alert('Please fill in all fields.');
        }
    }
    return (
        <div>
            <h1> Raise Your Knowledge</h1>
            <small id="smallText" className="form-text text-muted"><h4> You can reach us anytime with Edu App</h4></small>
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
                    <label for="exampleFormControlTextarea1">How can we help you?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </div>
                <p></p>
                <button type="submit" className="btn btn-primary form-control" onClick={submit}>Submit</button>
            </form>
            <form>
            </form>
        </div>
    )
}
