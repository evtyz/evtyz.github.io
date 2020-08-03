import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Jumbotron } from 'react-bootstrap';
import './Home.css'
import Typewriter from 'typewriter-effect';

function Home()
{
    return (
        <div>
            <Jumbotron style={{backgroundColor: '#343a40', marginTop: '2vh'}}>
                <div style={{paddingBottom: '2vh'}}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("<h1>Hi, I'm Evan!<h1>").start();
                        }}
                        options={{cursor: "<h1>|<h1>"}}
                    />
                </div>
                
                <hr/>
                <p>
                    I'm an aspiring software developer and high-school student, based in Toronto, ON.
                    If you're here, you might want to check out my projects below, or view my resume and GitHub in the navigation bar.
                </p>
            </Jumbotron>
        </div>
    );
}

export default Home;