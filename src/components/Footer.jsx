// import React from 'react';

// // Footer Component
// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-12 mt-12">
//       <div className="container mx-auto px-4">
//         {/* Main footer content grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
//           {/* Column 1: Company Branding */}
//           <div className="md:col-span-1">
//             <h3 className="text-xl font-bold text-white mb-4">Candid HSC</h3>
//             <p className="text-gray-400 text-sm">
//               Empowering healthcare employees with meaningful implementation of digital technology to benefit patient care.
//             </p>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="/" className="hover:text-white transition-colors duration-200 text-gray-400">Home</a></li>
//               <li><a href="/aboutus" className="hover:text-white transition-colors duration-200 text-gray-400">About Us</a></li>
//               <li><a href="/services" className="hover:text-white transition-colors duration-200 text-gray-400">Our Services</a></li>
//               <li><a href="/contact" className="hover:text-white transition-colors duration-200 text-gray-400">Contact</a></li>
//             </ul>
//           </div>

//           {/* Column 3: Resources */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-300 mb-4">Resources</h3>
//             <ul className="space-y-2">
//               <li><a href="/case_study" className="hover:text-white transition-colors duration-200 text-gray-400">Case Study and Articles</a></li>
//               {/* You can add more links here later, like Blog, Press, etc. */}
//             </ul>
//           </div>

//           {/* Column 4: Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-300 mb-4">Get in Touch</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>contact@candidhsc.co.uk</li>
//               <li>+44 7448652321</li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom bar with copyright and social icons */}
//         <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
//           <div className="text-sm text-gray-500 mb-4 sm:mb-0">
//             &copy; {new Date().getFullYear()} Candid HealthSystems Consultants Ltd. All rights reserved.
//           </div>
//           <div className="flex space-x-4">
//             <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-white transition-colors duration-200">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.262c-1.225 0-1.628.76-1.628 1.563V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
//             </a>
//             <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors duration-200">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
//             </a>
//             <a href="#" aria-label="X (formerly Twitter)" className="text-gray-500 hover:text-white transition-colors duration-200">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.042 9.167L24 22.846h-7.406l-5.8-6.517L5.065 22.846H1.36l8.192-9.31L0 1.154h7.594l4.982 5.835L18.901 1.153zm-1.051 19.492h2.2L5.416 3.737H3.09L17.85 20.645z" /></svg>
//             </a>
//             <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-white transition-colors duration-200">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.612 6.045a2.768 2.768 0 00-1.936-1.936C16.867 3.5 12 3.5 12 3.5s-4.867 0-5.676.609A2.768 2.768 0 004.39 6.045C3.5 7.078 3.5 12 3.5 12s0 4.922.89 5.955a2.768 2.768 0 001.936 1.936C7.133 20.5 12 20.5 12 20.5s4.867 0 5.676-.609a2.768 2.768 0 001.936-1.936C20.5 16.922 20.5 12 20.5 12s0-4.922-.888-5.955zM10 15.5V8.5L16 12l-6 3.5z" clipRule="evenodd" /></svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };


// export default Footer;


import React from 'react';

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: Company Branding */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Candid HSC</h3>
            <p className="text-gray-400 text-sm">
              Empowering healthcare employees with meaningful implementation of digital technology to benefit patient care.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition-colors duration-200 text-gray-400">Home</a></li>
              <li><a href="/aboutus" className="hover:text-white transition-colors duration-200 text-gray-400">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors duration-200 text-gray-400">Our Services</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors duration-200 text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/case_study" className="hover:text-white transition-colors duration-200 text-gray-400">Case Study and Articles</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@candidhsc.co.uk</li>
              <li>+44 7448652321</li>
            </ul>
          </div>
        </div>
                
{/* Bottom bar with copyright and social icons */}
<div className="border-t border-gray-700 pt-8 flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-col text-center">
  <div className="text-sm md:text-md text-gray-400">
    &copy; {new Date().getFullYear()} Candid HealthSystems Consultants Ltd. All rights reserved.
  </div>

  {/* LinkedIn Icon */}
  <div className="flex justify-center mt-2">
    <a 
      href="https://www.linkedin.com/company/candid-hsc/" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 
        5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 
        5-5v-14c0-2.761-2.238-5-5-5zm-11 
        19h-3v-11h3v11zm-1.5-12.268c-.966 
        0-1.75-.79-1.75-1.764s.784-1.764 
        1.75-1.764 1.75.79 1.75 
        1.764-.783 1.764-1.75 
        1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
        0v5.604h-3v-11h3v1.765c1.396-2.586 
        7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    </a>
  </div>

  {/* Powered by */}
  <div className="text-sm md:text-lg font-semibold text-white mt-2">
    Powered by{' '}
    <a
      href="https://yuktic.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 hover:underline transition duration-200"
    >
      yuktic.com
    </a>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;



