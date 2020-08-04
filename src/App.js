import React from 'react';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Background from "./components/Background";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div id="site">
      <div id="background">
        <Background />
      </div>
      <div id="backgroundfiller">
      </div>
      <div id="foreground">
        <Navigation />
        <Container>
          <Home />
          <hr/>
          <Projects />
          <hr/>
          <Contacts />
          <hr/>
          <Footer />
        </Container>
      </div>
    </div>
  );
}

export default App;
