// import React from 'react';
// import { Briefcase, MapPin, Clock, ChevronRight } from 'lucide-react';

// const Contact = () => {
//   return (
//     <div style={{ backgroundColor: '#FFFFFF', color: '#000000', fontFamily: 'Inter, sans-serif' }}>
//       <style>{`
//         @import url('https://rsms.me/inter/inter.css');
//       `}</style>

//       <main style={{ paddingTop: '5rem' }}>
//         {/* Contact Header */}
//         <section style={{ backgroundColor: '#F9FAFB', padding: '4rem 1rem' }}>
//           <div className="container mx-auto px-4">
//             <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#000000' }}>Contact us</h1>
//           </div>
//         </section>

//         {/* Contact Form & Info Section */}
//         <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-16">
//           {/* Left Column: Form */}
//           <div>
//             <div className="max-w-xl">
//               <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#000000', marginBottom: '0.5rem' }}>
//                 Additional questions? Submit our form
//               </h2>
//               <p style={{ fontSize: '1.125rem', color: '#4B4B4B', marginBottom: '1.5rem' }}>How can we help?</p>
//               <p style={{ fontSize: '0.875rem', color: '#4B4B4B', marginBottom: '2rem' }}>
//                 Please submit your question here and we will respond as quickly as possible.
//               </p>
//             </div>

//             <form className="space-y-4">
//               {[
//                 { type: 'select', id: 'topic', placeholder: 'Topic*', options: ['General Inquiry', 'Services', 'Partnership'] },
//                 { type: 'text', id: 'firstName', placeholder: 'First name*', half: true },
//                 { type: 'text', id: 'lastName', placeholder: 'Last name*', half: true },
//                 { type: 'email', id: 'email', placeholder: 'Email*' },
//                 { type: 'text', id: 'company', placeholder: 'Company*' },
//                 { type: 'text', id: 'jobTitle', placeholder: 'Job title*' },
//                 { type: 'tel', id: 'phone', placeholder: 'Phone' },
//                 { type: 'text', id: 'zip', placeholder: 'Zip/Postal code*' },
//                 { type: 'select', id: 'location', placeholder: 'Location*', options: ['United States', 'United Kingdom', 'India'] },
//               ].map((field, i) => (
//                 field.type === 'select' ? (
//                   <div key={i}>
//                     <select
//                       id={field.id}
//                       style={{
//                         width: '100%',
//                         padding: '0.75rem',
//                         border: '1px solid #ccc',
//                         borderRadius: '0.375rem',
//                         outline: 'none'
//                       }}
//                     >
//                       <option value="">{field.placeholder}</option>
//                       {field.options.map((opt, idx) => (
//                         <option key={idx} value={opt.toLowerCase()}>{opt}</option>
//                       ))}
//                     </select>
//                   </div>
//                 ) : (
//                   <div key={i} style={field.half ? { display: 'inline-block', width: '48%' } : {}}>
//                     <input
//                       type={field.type}
//                       id={field.id}
//                       placeholder={field.placeholder}
//                       required
//                       style={{
//                         width: '100%',
//                         padding: '0.75rem',
//                         border: '1px solid #ccc',
//                         borderRadius: '0.375rem',
//                         outline: 'none'
//                       }}
//                     />
//                   </div>
//                 )
//               ))}

//               <div>
//                 <textarea
//                   id="message"
//                   placeholder="Your message*"
//                   required
//                   rows="5"
//                   style={{
//                     width: '100%',
//                     padding: '0.75rem',
//                     border: '1px solid #ccc',
//                     borderRadius: '0.375rem',
//                     outline: 'none'
//                   }}
//                 ></textarea>
//               </div>

//               <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
//                 <input type="checkbox" id="privacy" required style={{ marginTop: '0.25rem' }} />
//                 <label htmlFor="privacy" style={{ fontSize: '0.875rem', color: '#4B4B4B' }}>
//                   I have read and accept the <a href="#" style={{ color: '#0B9F94' }}>Terms of Use</a>. Please read our <a href="#" style={{ color: '#0B9F94' }}>Privacy Notice</a>.
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 style={{
//                   backgroundColor: '#0B9F94',
//                   color: '#FFFFFF',
//                   padding: '0.75rem 2rem',
//                   fontWeight: '600',
//                   borderRadius: '0.375rem',
//                   border: 'none',
//                   cursor: 'pointer'
//                 }}
//               >
//                 Submit form
//               </button>
//             </form>
//           </div>

//           {/* Right Column: Info */}
//           <div>
//             <div style={{ backgroundColor: '#F9FAFB', padding: '2rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
//               <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#000000' }}>CONNECT WITH US</h3>
              
//               <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
//                 <MapPin style={{ color: '#0B9F94' }} />
//                 <div>
//                   <h4 style={{ fontWeight: '600', color: '#000000' }}>Office</h4>
//                   <p style={{ color: '#4B4B4B' }}>Office 120.3 Regus, Cardinal Point, Park Road, Rickmansworth, WD3 1RE</p>
//                 </div>
//               </div>

//               <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
//                 <Clock style={{ color: '#0B9F94' }} />
//                 <div>
//                   <h4 style={{ fontWeight: '600', color: '#000000' }}>Hours & appointments</h4>
//                   <p style={{ color: '#4B4B4B' }}>Mon to Fri 9 a.m – 5 p.m</p>
//                 </div>
//               </div>

//               <div style={{ marginTop: '2rem' }}>
//                 <h4 style={{ fontWeight: '600', color: '#000000', marginBottom: '0.5rem' }}>Our Location</h4>
//                 <div style={{
//                   backgroundColor: '#E5E7EB',
//                   height: '16rem',
//                   borderRadius: '0.5rem',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}>
//                   <span style={{ color: '#4B4B4B' }}>Map Placeholder</span>
//                 </div>
//               </div>
//             </div>

//             {/* Submit RFP Card */}
//             <a
//               href="#"
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 padding: '1.5rem',
//                 backgroundColor: '#F9FAFB',
//                 borderRadius: '0.5rem',
//                 textDecoration: 'none',
//                 color: '#000000'
//               }}
//             >
//               <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//                 <Briefcase style={{ color: '#0B9F94' }} />
//                 <div>
//                   <h4 style={{ fontWeight: '600', fontSize: '1.125rem' }}>Submit RFP</h4>
//                   <p style={{ fontSize: '0.875rem', color: '#4B4B4B' }}>Request for proposal</p>
//                 </div>
//               </div>
//               <ChevronRight style={{ color: '#4B4B4B' }} />
//             </a>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-[40vh] md:h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: 'url(/aboutus_candid.jpg)' }}
      >
        <div className="absolute inset-0 bg-[var(--color-primary-dark)] opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <div className="text-sm md:text-base font-light mb-2">
            CONNECT WITH US
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold px-4">
            Candid HealthCare
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Panel */}
            <div className="bg-[var(--color-primary-dark)] text-white p-8 rounded-lg lg:w-1/3 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold mb-4">
                We're looking forward to your visit!
              </h2>
              <div className="space-y-4">
                <p>Office 120.3 Regus, Cardinal Point, Park Road, Rickmansworth, WD3 1RE</p>
              </div>
            </div>
            
            {/* Right Panel - Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md lg:w-2/3">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">
                Contact Our Team Today!
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62377a]" />
                  <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62377a]" />
                </div>
                <input type="tel" placeholder="Telephone" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62377a]" />
                <textarea placeholder="Message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62377a]"></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-[var(--color-primary-dark)] text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[50vh]">
        <iframe
          title="Our Office Location"
          src="http://maps.google.com/maps?q=Office%20120.3%20Regus,%20Cardinal%20Point,%20Park%20Road,%20Rickmansworth,%20WD3%201RE&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default ContactPage;