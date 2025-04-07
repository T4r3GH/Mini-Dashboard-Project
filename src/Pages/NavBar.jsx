import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div>
            <ul className="nav">
                <h3>NavBar</h3>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/users'>Users</Link></li>
            </ul>
        </div>
     );
}
 
export default NavBar;