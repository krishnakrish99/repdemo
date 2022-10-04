import "./Sidebar.css"
import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <div className="side">
            <ul>
                <Link to="/homepage"><li>Home</li></Link>
                <Link to="/documents"><li>Documents</li></Link>
                <li>Products</li>
                <li>Cart</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
            
        </div>
    );
}
export default Sidebar;