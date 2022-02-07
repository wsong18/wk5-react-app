// import logo from './logo.svg';
import './App.css';

import { Route, Routes, Link } from 'react-router-dom';

import ClickCounter from './ClickCounter';
import RenderingData from './RenderingData';
import Home from './Home';
import Projects from './Projects';
import Project from './Project';
import NotFound from './NotFound';
import HomeButton from './HomeButton';
import UserDataForm from './UserDataForm';
import FileInput from './FileInput';

import {useState} from 'react';

function App() {

  const [highlight, setLHighlight] = useState("Home");

  return (
    <div>
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">WEB422 Example - React.js</a>
            </div>

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className={(highlight === "Home" ? 'active' : '')}><Link to="/">Home</Link></li>
                <li><Link to='/clickcounter'>ClickCounter</Link></li>
                <li><Link to='/renderingdata'>RenderingData</Link></li>
                <li><Link to='/projects?page=2&amp;perPage=8'>Projects</Link></li>
                <li><Link to='/project/22'>Project (id=22)</Link></li>
                <li><Link to='/xyz123'>/xy123 (JSX Redirect)</Link></li>
                <li><Link to='/homebutton'>HomeButton</Link></li>
                <li><Link to='/userdataform'>UserDataForm</Link></li>
                <li><Link to='/fileinput'>FileInput</Link></li>
              </ul>
            
            </div>    {/* <!-- /.navbar-collapse --> */}
          </div>    {/* <!-- /.container-fluid --> */}
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Projects' element={<Projects />} />
              <Route path='/Project/:id' element={<Project />} />
              <Route path='/homebutton' element={<HomeButton />} />
              <Route path='/clickcounter' element={<ClickCounter />} />
              <Route path='/renderingdata' element={<RenderingData />} />
              <Route path='/UserDataForm' element={<UserDataForm />} />
              <Route path='/fileinput' element={<FileInput />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/* <p>The root component is running</p>
            <hr />

            <ClickCounter />
            <hr />

            <RenderingData />
            <hr /> */}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p className="text-muted">Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.</p>
        </div>
      </footer>
    </div>

  );
}

export default App;

// function App() {
//   return (
//     <div >
//       <p>The root component is running</p>
//     </div>
//   );
// }

// export default App;
