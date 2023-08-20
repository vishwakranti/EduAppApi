import {Link} from "react-router-dom"
export default function Menu(){
    return (
    <nav className="nav">        
        <ul>
            <li><Link to="/courses" className="coursesNav"><span className="aSpan">Courses</span></Link></li>
            <li><Link to="/students" className="studentsNav"><span className="aSpan">Students</span></Link></li>
            <li><Link to="/about" className="aboutNav"><span className="aSpan">About</span></Link></li>
            <li><Link to="/contact" className="contactNav"><span className="aSpan">Contact Us</span></Link></li>
        </ul>
    </nav>
    );
}