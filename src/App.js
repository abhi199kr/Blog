import logo from './logo.svg';
import './App.css';
import Dashobard from './Components/Dashobard';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Alogin from './Components/Admin/Alogin';
import AddBlog from './Components/AddBlog';
import User from './Components/User';
import Userlist from './Components/Userlist';
import Bloglist from './Components/Bloglist';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashobard/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/alogin" element={<Alogin/>}/>
      <Route path="/add" element={<AddBlog/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/userl" element={<Userlist/>}/>
      <Route path="/blogl" element={<Bloglist/>}/>


    </Routes>
  </BrowserRouter>
  );
}

export default App;
