import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function Footer()
{
    return (
        <div>
            <p style={{color: `rgba(255, 255, 255, .75)`, fontSize: "0.75em"}}>© {new Date().getFullYear()} Evan Zheng
            <br/>This website was made using ReactJS and Bootstrap, and hosted using Github Pages.
            The repo can be seen <a href={"https://github.com/richmondvan/richmondvan.github.io"}>here</a>.</p>
        </div>
    );
}

export default Footer;