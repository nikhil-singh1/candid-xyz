
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home'
import Aboutus from './components/about_us';
import Header from './components/Header';
import Contact from './pages/contact';
import ServicesPage from './pages/services';
import CaseStudiesPage from './pages/case_study';
import OurPeople from './components/our_people';
import AboutUs from './pages/about';


export default function App() {
  return (
    <Router>
      <div className=" min-h-screen flex flex-col">
       
      <Header/>
        {/* Main content area that will change based on route */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/services" element={<ServicesPage/>}/>
              <Route path="/case_study" element={<CaseStudiesPage/>}/>
              <Route path="/our_people" element={<OurPeople/>}/>
          
          
          </Routes>
        </div>
        
      <Footer />
      </div>
    </Router>
  );
}




