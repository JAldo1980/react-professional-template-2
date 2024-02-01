import React from "react";
import Container from "./component/Container";
import Container1 from "./component/Container1";
import Container2 from "./component/Container2";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Social from "./component/Social";
import About from "./component/About";
import Endoresments from "./component/Endoresments";
import Benefits from "./component/Benefits";
import Results from "./component/Results";
import WorkedFor from "./component/WorkedFor";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Nav />
        <Hero />
      </Container>
      <Container2>
        <Social />
      </Container2>
      <Container1>
        <About />
      </Container1>
      <Container2>
        <Endoresments />
      </Container2>
      <Container1>
        <Benefits />
      </Container1>
      <Container2>
        <Results />
      </Container2>
      <Container1>
        <WorkedFor />
      </Container1>
      <Container2>
        <Contact />
      </Container2>
      <Container2>
        <Footer />
      </Container2>
    </>
  );
}

export default App;
