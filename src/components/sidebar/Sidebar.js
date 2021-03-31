import './Sidebar.css';
import React from 'react'



const Sidebar = ({ sidebarOpen, closeSidebar }) => {

    function handleClick(e) {
        e.preventDefault();
            // clicked item highlighting- add 
        ;
      }


    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <a href={"/"}>
                        <img src="/Project.jpeg" alt="Logo" style={{ height: '18vh', width: 'auto' }} />
                    </a>
                    <h1>United Heart Consultant</h1>
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()} ></i>
            </div>

            <div className="sidebar__menu">
                {/* <div className="sidebar__link active_menu_link"> */}
                <div className="sidebar__link">
                    <i className="fa fa-home"></i>
                    <a href="#" onClick={handleClick} >Dashbord</a>
                </div>

                <h2>Lorem</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="/">Admin Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="/addStudent">Student Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Payments</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Contracts</a>
                </div>

                <h2>Configurations</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Add Courses</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Add new Student</a>
                </div>
                <h2>Reporting</h2>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="/AllCharts">View Reports</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log Out</a>
                </div>

            </div>
            
        </div>

        
    )
}

export default Sidebar;

