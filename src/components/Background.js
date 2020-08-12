import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import "./Background.css"

function Background()
{
    let bubbles = [];

    let colorDict = [
        "var(--accent)",
        "var(--accentsemilight",
        "var(--accentlight)",
        "var(--accentverylight)",
        "var(--accentextralight)"
    ]

    let maxbubbles = 6;

    let cornerBubble = <div
    className="bubble"
    key={'0'}
    style= {{
        "--size": `min(160vh, 160vw)`,
        "--xposition": "95vw",
        "--yposition": "5vh",
        "--time": "15s",
        "--delay": "0.1s",
        backgroundColor: colorDict[0]
    }}></div>

    bubbles.push(cornerBubble);



    for (let i = 1; i <= maxbubbles; i++) {
        let size = 30 + Math.random() * 40
        let bubble = <div 
        className="bubble" 
        key={i.toString()}
        style = {{
            "--size": "max(" + size + "vh, " + size + "vw)",
            "--xposition": (50 + Math.random() * 60) + 'vw',
            "--yposition": (10 + Math.random() * 80) + 'vh',
            "--time": (10 + Math.random() * 5) + 's',
            "--delay": (0.1 + Math.random() * 0.4) + 's',
            backgroundColor: colorDict[Math.floor((Math.random() * 5))]
        }}></div>

        bubbles.push(bubble);
    }


    return (
        <div className="bg">
            <div className="bubbles">
                {bubbles}
            </div>
        </div>
    );
}

export default Background;