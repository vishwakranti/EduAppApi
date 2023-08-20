import {Link} from "react-router-dom"
export default function TopNav(){
    return (
    <nav className="topNavA">        
        <Link to="/" className="topNav"><span className="aSpan">Home</span></Link>
    </nav>
    );
}