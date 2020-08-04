import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import './Footer.css'

function Footer()
{
    return (
        <p className="footer">© {new Date().getFullYear()} Evan Zheng
        <br/>This website was made using ReactJS and Bootstrap, and hosted using Github Pages.
        The repo can be seen <a href={"https://github.com/richmondvan/richmondvan.github.io"}>here</a>.<br/>
        </p>
    );
}

export default Footer;