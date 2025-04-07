import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
const Users = ({loggedIn, users, loading, error}) => {

    if (!loggedIn) {
        return <Navigate to={'/login'} />;
    }
    //these condition will be rendered when the state changes
    if(loading) return <p>is loading..</p>
    if(error) return <p>Error: {error}</p>

    return ( 
        <div>
        <h1>List Of Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
            ))}
        </ul>
        </div>
     );
}  
 
export default Users;
// import { Link, Navigate } from "react-router-dom";
// const Users = ({loggedIn}) => {
//     if (!loggedIn) {
//         return <Navigate to={'/login'} />;
//     }
//     return ( 
//         <div>
//         <h1>List Of Users</h1>
//         <ul>
//             <li><Link to='/users/0'>Taregh</Link></li>
//             <li><Link to='/users/1'>Samir</Link></li>
//             <li><Link to='/users/2'>Omar</Link></li>
//         </ul>
//         </div>
//      );
// }
 
// export default Users;