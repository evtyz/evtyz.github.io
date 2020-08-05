import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Background from "./components/Background";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";

function App() {
  return (
    <div id="site">
      <div id="deco">
        <div id="background">
          <Background />
        </div>
        <div id="backgroundfiller"></div>
      </div>
      <div id="foreground">
        <Navigation />
        <Container>
          <div>
            <Home />
            <div>
              <Button
                href="#projects"
                variant="outline-primary"
                style={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  borderWidth: 0,
                }}
                className="scrollButton"
              >
                <MdKeyboardArrowDown size="40px" style={{margin: 'auto'}}/>
              </Button>
            </div>
            <hr id="projects" />
            <Projects />
            <hr id="contacts" />
            <Contacts />
            <hr style={{ marginBottom: "1em", width: "auto" }} />
            <Footer />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
