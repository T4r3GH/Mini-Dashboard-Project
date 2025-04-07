import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UsersDetails = ({users}) => {
    const { id } = useParams();

    useEffect (() =>{
        if(!(id < users.length && id >= 0)) 
        {
            return <Navigate to='/404' />; 
        }
    }, [id]);
    return ( 
        <div>
            <h1>User Details</h1>
            <ul>
                <li>Name: {users[id-1].name}</li>
                <li>Email: {users[id-1].email}</li>
                <li>Phone: {users[id-1].phone}</li>
                <li>Username: {users[id-1].username}</li>
            </ul>
        </div>
     );
}
 
export default UsersDetails;
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const UsersDetails = () => {
//     const { id } = useParams();
    
//     const list = [
//         {name: 'Taregh', job: 'Developer', experience: 10, id: 1}, 
//         {name: 'Samir', job: 'Mechanical Engineer', experience: 15, id: 2}, 
//         {name: 'Omar', job: 'Designer', experience: 20, id: 3}, 
//     ];
//     useEffect (() =>{
//         if(!(id < list.length && id >= 0)) 
//         {
//             return <Navigate to='/404' />; 
//         } else {
//             console.log("failed id");
//         }
//     }, [id]);
//     return ( 
//         <div>
//             <h1>User Details</h1>
//             <ul>
//                 <li>Name: {list[id].name}</li>
//                 <li>Job: {list[id].job}</li>
//                 <li>Experience: {list[id].experience} years</li>
//             </ul>
//         </div>
//      );
// }
 
// export default UsersDetails;