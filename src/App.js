import React from 'react';
import NavScrollExample from './header';
import './App.css';
import Footer from './footer';
import Body from './body'
import Services from './services';
import Resume from './Resume';
import ContactForm from './form';
function App() {
  return (
    <>
    <NavScrollExample/>
    <Body/>
    <Services/>
   <Resume/>
   <ContactForm/>
    <Footer/> 
    
    </>
  );
}

export default App;
