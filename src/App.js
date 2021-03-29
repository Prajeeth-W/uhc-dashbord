import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import AddStudent from './components/pages/AddStudent/AddStudent';
import Login from './components/pages/Login/Login';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className="container">
      <Router>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        {/* <h1> UHC Admin Dashbord</h1>   */}
        <Route path='/' exact component={Main} />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

        <Route path="/addStudent" component={AddStudent} />
        {/* <Route path="/notFound" component={PageNotF} />*/ }
        <Route path="/login" component={Login} /> 
        <Route path="/notf" component={NotFound} /> 

      </Router>
    </div>
  );
}

export default App;
