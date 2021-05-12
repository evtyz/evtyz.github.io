import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import './Footer.css'

function Footer()
{
    return (
        <p className="footer">
            © {new Date().getFullYear()} Evan Zheng <br/>
            This website was made using React.js, Node.js, and Bootstrap, and hosted using Github Pages.
            The repo can be seen <a href={"https://github.com/evtyz/evtyz.github.io"}>here</a>.
        </p>
    );
}

export default Footer;