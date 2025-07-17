import { useEffect } from "react"

export const Header = () => {

  const loggedIn = localStorage.getItem('access_token'); 

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src="icon.png" alt="Testers Community" style={{ height: '50px' }} />
            </a>
            <div className="navbar-nav ms-auto">
                <a className="nav-link" href="/#how-it-works">How It Works</a>
                <a className="nav-link" href="/#community">Community</a>
                <a className="nav-link" href="/admin/dashboard">Dashboard</a>
                { loggedIn ? '' : <>
                <a className="nav-link" href="/login">Log In</a>
                <a href="/register" className="btn btn-custom btn-lg">Get Started</a> </> } 
            </div>
        </div>
    </nav>
    </>
  )
}
