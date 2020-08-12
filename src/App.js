import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Contacts from "./components/Contacts"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
    return (
        <div id="site">
            <div id="background">
                <Background />
            </div>
            <div id="foreground">
                <Navigation />
                <Container>
                    <div>
                        <Home />
                        <hr id="projects"/>
                        <Projects />
                        <hr id="contacts"/>
                        <Contacts />
                        <hr 
                            style={{ 
                                marginBottom: "1em", 
                                width: "auto", 
                                borderWidth: "0.5px" 
                            }} />
                        <Footer />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default App;
