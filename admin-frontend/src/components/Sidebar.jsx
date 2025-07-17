import { Link } from "react-router"

export const Sidebar = () => {
    return (
        <>

            <header className="header">
                <div className="page-brand">
                    <a className="link" href="index.html">
                        <span className="brand">Testers
                            <span className="brand-tip"> Community</span>
                        </span>
                        <span className="brand-mini">AC</span>
                    </a>
                </div>
                <div className="flexbox flex-1">
                    <ul className="nav navbar-toolbar">
                        <li>
                            <a className="nav-link sidebar-toggler js-sidebar-toggler"><i className="ti-menu"></i></a>
                        </li>
                        {/* <li>
                            <form className="navbar-search" action="javascript:;">
                                <div className="rel">
                                    <span className="search-icon"><i className="ti-search"></i></span>
                                    <input className="form-control" placeholder="Search here..." />
                                </div>
                            </form>
                        </li> */}
                    </ul>
                    <ul className="nav navbar-toolbar">
                        {/* <li className="dropdown dropdown-inbox">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope-o"></i>
                                <span className="badge badge-primary envelope-badge">9</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right dropdown-menu-media">
                                <li className="dropdown-menu-header">
                                    <div>
                                        <span><strong>9 New</strong> Messages</span>
                                        <a className="pull-right" href="mailbox.html">view all</a>
                                    </div>
                                </li>
                                <li className="list-group list-group-divider scroller" data-height="240px" data-color="#71808f">
                                    <div>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <img src="./assets/img/users/u1.jpg" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-strong"> </div>Jeanne Gonzalez<small className="text-muted float-right">Just now</small>
                                                    <div className="font-13">Your proposal interested me.</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <img src="./assets/img/users/u2.jpg" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-strong"></div>Becky Brooks<small className="text-muted float-right">18 mins</small>
                                                    <div className="font-13">Lorem Ipsum is simply.</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <img src="./assets/img/users/u3.jpg" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-strong"></div>Frank Cruz<small className="text-muted float-right">18 mins</small>
                                                    <div className="font-13">Lorem Ipsum is simply.</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <img src="./assets/img/users/u4.jpg" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-strong"></div>Rose Pearson<small className="text-muted float-right">3 hrs</small>
                                                    <div className="font-13">Lorem Ipsum is simply.</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown dropdown-notification">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell-o rel"><span className="notify-signal"></span></i></a>
                            <ul className="dropdown-menu dropdown-menu-right dropdown-menu-media">
                                <li className="dropdown-menu-header">
                                    <div>
                                        <span><strong>5 New</strong> Notifications</span>
                                        <a className="pull-right" href="javascript:;">view all</a>
                                    </div>
                                </li>
                                <li className="list-group list-group-divider scroller" data-height="240px" data-color="#71808f">
                                    <div>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <span className="badge badge-success badge-big"><i className="fa fa-check"></i></span>
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-13">4 task compiled</div><small className="text-muted">22 mins</small></div>
                                            </div>
                                        </a>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <span className="badge badge-default badge-big"><i className="fa fa-shopping-basket"></i></span>
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-13">You have 12 new orders</div><small className="text-muted">40 mins</small></div>
                                            </div>
                                        </a>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <span className="badge badge-danger badge-big"><i className="fa fa-bolt"></i></span>
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-13">Server #7 rebooted</div><small className="text-muted">2 hrs</small></div>
                                            </div>
                                        </a>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <span className="badge badge-success badge-big"><i className="fa fa-user"></i></span>
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-13">New user registered</div><small className="text-muted">2 hrs</small></div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li> */}
                        <li className="dropdown dropdown-user">
                            <a className="nav-link dropdown-toggle link" data-toggle="dropdown">
                                <img src="src/assets/img/admin-avatar.png" />
                                <span></span>Admin<i className="fa fa-angle-down m-l-5"></i></a>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="profile.html"><i className="fa fa-user"></i>Profile</a>
                                <a className="dropdown-item" href="profile.html"><i className="fa fa-cog"></i>Settings</a>
                                <a className="dropdown-item" href="javascript:;"><i className="fa fa-support"></i>Support</a>
                                <li className="dropdown-divider"></li>
                                <a className="dropdown-item" href="login.html"><i className="fa fa-power-off"></i>Logout</a>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>


            <nav className="page-sidebar" id="sidebar">
                <div id="sidebar-collapse">
                    <div className="admin-block d-flex">
                        <div>
                            <img src="/src/assets/img/admin-avatar.png" width="45px" />
                        </div>
                        <div className="admin-info">
                            <div className="font-strong">Shimanta Das</div><small>User</small></div>
                    </div>
                    <ul className="side-menu metismenu">
                        <li>
                            <Link to="/" className="active">
                                <i className="sidebar-item-icon fa fa-th-large"></i>
                                <span className="nav-label">Dashboard</span>
                            </Link>
                        </li>
                        {/* <li className="heading">FEATURES</li> */}
                        <li>
                            <a href="/apps"><i className="sidebar-item-icon fa fa-mobile"></i>
                                <span className="nav-label">Apps</span>
                            </a>
                        </li>

<li>
                            <a href="javascript:void(0)"><i className="sidebar-item-icon fa fa-user"></i>
                                <span className="nav-label">Users</span>
                                <i className="fa fa-angle-left arrow"></i>
                            </a>
                            <ul className="nav-2-level collapse">
                                <li>
                                    <a href="/user/add-new">Add New</a>
                                </li>
                                <li>
                                    <a href="typography.html">All Users</a>
                                </li>
                                
                            </ul>
                        </li>

                        
                    </ul>
                </div>
            </nav>
        </>
    )
}
