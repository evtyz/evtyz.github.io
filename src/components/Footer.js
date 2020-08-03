import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function Footer()
{
    return (
        <div>
            <p style={{color: `rgba(255, 255, 255, .75)`}}>© {new Date().getFullYear()} Evan Zheng</p>
        </div>
    );
}

export default Footer;