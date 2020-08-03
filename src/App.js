import React from 'react';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
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
  );
}

export default App;
