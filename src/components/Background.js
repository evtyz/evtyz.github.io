import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import "./Background.css"

function Background()
{
    let bubbles = [];

    for (let i = 0; i < 64; i++) {
        bubbles.push(<div 
            className="bubble" 
            style = {{
                "--size": (2 + Math.random() * 3) + 'rem',
                "--distance":  (6 + Math.random() * 4) + 'rem',
                "--position": (-20 + Math.random() * 160) + 'rem',
                "--time": (5 + Math.random() * 5) + 's',
                "--delay": (-2 + Math.random() * -2) + 's'
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
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
                        <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

export default Background;