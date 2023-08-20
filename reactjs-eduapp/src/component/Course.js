import Courses from "../data/CourseData";
import {Link} from "react-router-dom"

export default function Course() {
    return (<div>
        <h1> Course</h1>
        {Courses.map((item) => (
                    <div className="card text-center p-4 mb-4">
                        <img src={item.image} class="card-img-top" alt="..."></img>
                    <div class="card-header">
                        <h2> {item.title} </h2>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.description}</h5>
                        <p className="card-text"></p>
                        <Link to={`/courseDetails/${item.id}`} className="btn btn-primary">Course Details</Link>
                    </div>
                </div>
        ))}

    </div>)
}