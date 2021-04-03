import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import AddStudent from './components/pages/AddStudent/AddStudent';
import Login from './components/pages/Login/Login';
import NotFound from './components/pages/NotFound/NotFound';
import ChartDataGrab from './components/pages/Charts/ChartDataGrab';
import LineDataGrab from './components/pages/Charts/LineDataGrab';
import AllCharts from './components/pages/Charts/AllCharts';
import Checkout from './components/pages/Checkout/Checkout';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }


  const LoginContainer = () => (
    <div>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
    </div>
  )


  const DefaultContainer = () => (
    <div>

    </div>
  )

  return (
    <div className="container">

      <Router>

        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

        <Switch>
          <Route path='/' exact component={Main} />
          <Route path="/addStudent" component={AddStudent} />
          <Route path="/login" component={Login} />
          {/* <Route path="/charts" component={ChartDataGrab} /> 
          <Route path="/LineCharts" component={LineDataGrab} />  */}
          <Route path="/allCharts" component={AllCharts} />
          <Route path="/checkout" component={Checkout} />

          <Route component={NotFound} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
