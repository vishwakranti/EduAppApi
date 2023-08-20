// import logo from './assets/logo.jpeg';
import './App.css';
import './styles.css'
import Menu from './component/Menu';
import Home from './component/Home'
import About from './component/About'
import Course from './component/Course'
import CourseDetails from './component/CourseDetails'
import Students from './component/Students'
import ContactUs from './component/Contact'
import JoinCourse from './component/JoinCourse'
import TopNav from './component/TopNav';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <TopNav/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Course/>}/>
        <Route path="/coursedetails/:id" element={<CourseDetails/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/join/:id" element={<JoinCourse/>}/>
      </Routes>
      </div>      
      <Menu />
    </div>
  );
}

export default App;
