import { useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import AddStudent from "./components/pages/AddStudent/AddStudent";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";
import AllCharts from "./components/pages/Charts/AllCharts";
import Checkout from "./components/pages/Checkout/Checkout";
import AddNewStud from "./components/pages/AddNewStud/AddNewStud";
import AddNewCourse from "./components/pages/AddNewCourse/AddNewCourse";
import Table from "./components/pages/Table/Table";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const LoginContainer = () => (
    <div >
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
    </div>
  );

  const DefaultContainer = () => (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/addStudent" component={AddStudent} />
        <Route path="/allCharts" component={AllCharts} />
        <Route path="/addNewStud" component={AddNewStud} />
        <Route path="/addNewCourse" component={AddNewCourse} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/table" component={Table} />      

        <Route component={NotFound} />
      </Switch>
    </div>
  );
  
  const UiItems = () => (
    <div>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/addStudent" component={AddStudent} />
        <Route path="/allCharts" component={AllCharts} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/(login)" component={LoginContainer} />
          <Route component={DefaultContainer} />
          {/* <Route component={NotFound} />        */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;

// {/* <div className="container">

//       <Router>
//           <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
//           <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

//           <Switch>
//               <Route path='/' exact component={Main} />
//               <Route path="/addStudent" component={AddStudent} />
//               {/* <Route path="/login" component={Login} /> */ }
//     //           <Route path="/allCharts" component={AllCharts} />
//     //           <Route path="/login" />
//     //           {/* <Route path="/checkout" component={Checkout} /> */}

//     //           <Route component={NotFound} />
//     //       </Switch>
//     //   </Router>

//     // </div> */}
