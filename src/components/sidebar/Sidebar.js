import './Sidebar.css';
import React from 'react'



const Sidebar =  ({sidebarOpen, closeSidebar}) => {
    return(
        <div className = {sidebarOpen ? "sidebar-responsive" : "" } id ="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src="/Project.jpeg" alt="Logo" style ={{  height : '18vh', width: 'auto'}}/>
                    <h1>United Heart Consultant</h1>
                </div>
                <i className = "fa fa-times" id = "sidebarIcon" onClick = {() =>closeSidebar() } ></i>
            </div>

            <div className = "sidebar__menu">
                <div className = "sidebar__link active_menu_link">
                    <i className = "fa fa-home"></i>
                    <a href="#">Dashbord</a>
                </div>

                <h2>Lorem</h2>
                <div className = "sidebar__link">
                    <i className = "fa fa-user-secret"></i>
                    <a href="#">Admin Management</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-building-o"></i>
                    <a href="#">Company Management</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-archive"></i>
                    <a href="#">Warehouse</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-handshake-o"></i>
                    <a href="#">Contracts</a>
                </div>

                <h2>Lorem Ipsum</h2>
                <div className = "sidebar__link">
                    <i className = "fa fa-question"></i>
                    <a href="#">Requests</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-sign-out"></i>
                    <a href="#">Leave Policy</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-calendar-check-o"></i>
                    <a href="#">Special Days</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-files-o"></i>
                    <a href="#">Apply For Leave</a>
                </div>
                <h2>Lorem Ipusm</h2>
                <div className = "sidebar__link">
                    <i className = "fa fa-money"></i>
                    <a href="#">Payroll</a>
                </div>
                <div className = "sidebar__link">
                    <i className = "fa fa-briefcase"></i>
                    <a href="#">Paygrade</a>
                </div>
                <div className = "sidebar__logout">
                    <i className = "fa fa-power-off"></i>
                    <a href="#">Log Out</a>
                </div>

            </div>

        </div>
    )
}
 
export default Sidebar;

