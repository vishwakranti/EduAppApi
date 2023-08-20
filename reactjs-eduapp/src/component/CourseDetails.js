import Courses from "../data/CourseData";
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
export default function CourseDetails() {
    const {id} = useParams();

    const selectedCourse = Courses.find((element) => {
        return id === element.id;
      });
    return (<div>
        <h1> CourseDetails</h1>
        <div className="card text-center">
                        <img src={selectedCourse.image} class="card-img-top" alt="..."></img>
                    <div class="card-header">
                        <h2> {selectedCourse.title} </h2>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{selectedCourse.description}</h5>
                        <p className="card-text">Includes : {selectedCourse.Course1}, {selectedCourse.Course2}, {selectedCourse.Course2}</p>
                        <Link to={`/join/${selectedCourse.id}`} className="btn btn-primary">Join</Link>
                    </div>
                    <div className="card-footer text-muted">
                    Fees: $ {selectedCourse.price}
                    </div>
                </div>
    </div>)
}