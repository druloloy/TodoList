import React from 'react'
import { Link } from 'react-router-dom'
function Header() {

    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
        </header>
    )

}
const headerStyle =  {
    background: '#C16868',
    color: "#fcfcfc",
    textAlign: 'center',
    padding: '5px 0px'
}
const linkStyle ={
    color: "#fcfcfc",
    textDecoration: "none"
}
export default Header;
