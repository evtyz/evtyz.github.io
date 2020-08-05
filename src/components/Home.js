import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import './Home.css'
import Typewriter from 'typewriter-effect';
import {Button} from 'react-bootstrap';

function Home()
{
    return (
        <div className="landing">
            <div>
                
            </div>
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
                I'm a programmer based in Toronto, ON, studying at St. Theresa of Lisieux CHS.
                My online handle is <code>richmondvan</code>. <br/> <br/> 
            </p>
            <div className='buttongroup'>
                <Button href="mailto:evan.ty.zheng@gmail.com" variant="primary marginup">
                    email
                </Button>
                <Button href="./Resume.pdf" variant="primary marginup">
                    résumé
                </Button>
                <Button href="https://github.com/richmondvan" variant="primary marginup">
                    github
                </Button>
                <Button href="#projects" variant="primary marginup">
                    projects
                </Button>
            </div>

        </div>
    );
}

export default Home;