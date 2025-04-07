import './App.css'
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Users from './Pages/Users'
import NotFound from './Pages/NotFound'
import NavBar from './Pages/NavBar'
import UsersDetails from './Pages/UsersDetails'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // check loggin or not
  useEffect(() => { fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
          if(!res.ok) {
              throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(data => {
          setUsers(data);
          setLoading(false);
          console.log(data);
        })
        .catch(error => {
          setLoading(false);  
          setError(error);
          console.log('Error: ', error);
      })}
      , []);

  return (
    <div className='container'>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />}></Route>
      <Route path='/users' element={<Users loggedIn={loggedIn} users={users} loading={loading} error={error}/>}></Route>
      <Route path='/users/:id' element={<UsersDetails users={users}/>}></Route>
      <Route path='/navbar' element={<NavBar />}></Route>
      <Route path='/404' element={<NotFound />}/>
      <Route path='*' element={<Navigate to='/404'/>}></Route>
    </Routes>
    </div>
  )
}

export default App
