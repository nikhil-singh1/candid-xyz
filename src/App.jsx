
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
import Blog from "./pages/Blog";
import PostView from "./pages/PostView";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NewPost from "./pages/NewPost";
import ManagePosts from './pages/ManagePosts'; // Import the new page
import EditPost from './pages/EditPost';     
import ContactPage from "./pages/ContactPage"; 
import UsersPage from './pages/UsersPage';


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
                  <Route path="/blogs" element={<Blog />} />
                  <Route path="/post/:slug" element={<PostView />} />
                  <Route path="/admin/login" element={<Login />} />
                   <Route path="/admin/dashboard" element={<Dashboard />} />
                  <Route path="/admin/new" element={<NewPost />} />
           <Route path="/admin/posts" element={<ManagePosts />} />
        <Route path="/admin/edit/:slug" element={<EditPost />} />
        <Route path="/admin/contact" element={<ContactPage />} />
        <Route path="/admin/users" element={<UsersPage/>} />

          
    </Routes>
   </div>
        
  <Footer />
   </div>
   </Router>
  );
}

