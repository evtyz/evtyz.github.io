import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import './Home.css'
import TypewriterModified from './TypewriterModified'
import {Button} from 'react-bootstrap';

function Home() {
    return (
        <div className="landing">
            <TypewriterModified
                ref={(component) => {window.typewriter = component}}
                onInit={(typewriter) => {
                    typewriter.typeString("<h1>Hi, I'm Evan!<h1>").start();
                }}
                options={{cursor: "<h1>|<h1>"}}
            />
            <br/>
            <p className="about" style={{fontWeight: 400}}>
                I'm a CS student at the University of Waterloo.
                My online handle is <code>evtyz</code>. <br/> <br/> 
            </p>
            <div className='buttongroup'>
                <Button href="./Resume.pdf" variant="primary marginup">
                    résumé
                </Button>
                <Button href="https://github.com/evtyz" variant="primary marginup">
                    github
                </Button>
                <Button href="https://www.linkedin.com/in/evtyz/" variant="primary marginup">
                    linkedin
                </Button>
                <Button href="#projects" variant="primary marginup">
                    projects
                </Button>
                <Button href="#contacts" variant="primary marginup">
                    contact me
                </Button>
            </div>
        </div>
    );
}

export default Home;