import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import './Home.css'
import Typewriter from 'typewriter-effect';

function Home()
{
    return (
        <div className="landing">
            <div>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("<h1>Hi, I'm Evan!<h1>").start();
                    }}
                    options={{cursor: "<h1>|<h1>"}}
                />
            </div>
            <br/>
            <p className="about">
                I'm an aspiring software developer and high-school student, based in Toronto, ON.
                My online handle is <code>richmondvan</code>. <br/><br/>
                If you're here, you might want to check out my projects below, 
                view my <a href={'./Resume.pdf'}>resume</a>, or visit my <a href={'https://github.com/richmondvan'}>GitHub</a>.
            </p>
        </div>
    );
}

export default Home;