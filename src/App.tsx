import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import {Main} from './pages/main/Main';
import Login from './pages/Login';
import {CreatePost} from './pages/create-post/create-post';
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
