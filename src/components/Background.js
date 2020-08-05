import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import "./Background.css"

function Background()
{
    let bubbles = [];

    for (let i = 0; i < 48; i++) {
        bubbles.push(<div 
            className="bubble" 
            style = {{
                "--size": (6 + Math.random() * 6) + 'rem',
                "--distance":  (4 + Math.random() * 4) + 'rem',
                "--position": (-20 + Math.random() * 160) + 'rem',
                "--time": (2 + Math.random() * 2) + 's',
                "--delay": (-3 + Math.random() * 2) + 's'
            }}></div>)
    }

    return (
        <div className="bg">
            <div className="bubbles">
                {bubbles}
            </div>
            <svg style={{position:'fixed', top:'100vh'}}>
                <defs>
                    <filter id="blob">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -10" result="blob"></feColorMatrix>
                        <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

export default Background;