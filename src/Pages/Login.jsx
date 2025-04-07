import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setLoggedIn}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = {email:'a', password: 1}
    const [error, setError] = useState('');

    const handleAuth = (e) => {
        e.preventDefault();
        if(email == user.email && password == user.password) {
            setEmail('');
            setPassword('');
            console.log("authentication succed/");
            setLoggedIn(true);
            navigate('/users');
        } else {
            console.log("authentication failed/");
            setError('authentication failed');
        }
    }
    return ( 
       <div>
        <h1>Login</h1>
        <form name="loginForm" onSubmit={handleAuth} >
            <label htmlFor="mail">Email</label>
            <input id="mail" 
                type="mail" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            ></input><br/>
            <label htmlFor="password">Password</label>
            <input id="password" type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></input><br/>
            <button className="loginBtn" type="submit">login</button>
            {/* The error message  */}
            { error && <p style={{color: 'red'}}>{error}</p>}
        </form>
       </div>
     );
}
 
export default Login;