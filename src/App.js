import { useState } from 'react';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddStudent from './components/pages/AddStudent/AddStudent';

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

      </Router>
    </div>
  );
}

export default App;
