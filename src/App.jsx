import React, { Fragment } from 'react'
import  Header  from './components/header/Header';
import About from './components/about/About';
import './App.css';
import Info from './components/info/Info';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {

  return <Fragment>
      <Header />
      <About />
      <Info />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
}

export default App
