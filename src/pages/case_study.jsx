// import React from 'react';
// import { FileText, User, Calendar } from 'lucide-react'; // added LuCalendar for date

// // A reusable card component for both Articles and Case Studies
// const ContentCard = ({ title, description, imageSrc, author, date, type }) => {
//   return (
//     <div className="bg-white rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] flex flex-col md:flex-row">
//       <div className="w-full md:w-1/3 flex-shrink-0">
//         <img
//           src={imageSrc}
//           alt={title}
//           className="w-full h-48 md:h-full object-cover  rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
//         />
//       </div>
//       <div className="p-6 flex flex-col justify-between flex-1">
//         <div>
//           <div className="flex items-center text-sm text-gray-500 mb-2">
//             <span className="flex items-center mr-4">
//               {type === 'article' ? (
//                 <FileText className="mr-1" />
//               ) : (
//                 <User className="mr-1" />
//               )}
//               {author}
//             </span>
//             <span className="flex items-center">
//               <Calendar className="mr-1" /> {/* fixed icon */}
//               {date}
//             </span>
//           </div>
//           <h3 className="text-black text-xl md:text-2xl font-bold mb-2">
//             {title}
//           </h3>
//           <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//             {description}
//           </p>
//         </div>
//         <button className="mt-4 self-start px-6 py-2 bg-black text-white rounded-full hover:bg-[#8f7495] transition-colors duration-300">
//           Read More
//         </button>
//       </div>
//     </div>
//   );
// };

// const CaseStudiesPage = () => {
//   // Mock data
//   const articles = [
//     {
//       id: 1,
//       title: 'PLANNING AND IMPLEMENTING AN ELECTRONIC PATIENT RECORD (EPR) SYSTEM',
//       description: 'Assessing Current Healthcare. A detailed look at the strategic and operational considerations for a successful EPR rollout.',
//       imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Article+Image',
//       author: 'Candid Team',
//       date: 'April 28, 2025',
//       type: 'article',
//     },
//     {
//       id: 2,
//       title: 'Next Generation Healthcare Technology',
//       description: 'Exploring how new technologies are reshaping patient care and clinical workflows for a more efficient future.',
//       imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Healthcare+Tech',
//       author: 'Candid Team',
//       date: 'June 10, 2025',
//       type: 'article',
//     },
//   ];

//   const caseStudies = [
//     {
//       id: 1,
//       title: 'Sepsis Management',
//       description: 'A deep dive into how improved protocols and technology led to better patient outcomes and reduced response times for sepsis.',
//       imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Sepsis',
//       author: 'Candid Team',
//       date: 'March 15, 2025',
//       type: 'case-study',
//     },
//     {
//       id: 2,
//       title: 'Order Set Updates',
//       description: 'A case study on the successful implementation of new electronic order sets, streamlining processes and reducing errors.',
//       imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Order+Sets',
//       author: 'Candid Team',
//       date: 'February 20, 2025',
//       type: 'case-study',
//     },
//     {
//       id: 3,
//       title: 'BPA',
//       description: 'Business Process Automation (BPA) implementation for a large hospital system, improving administrative efficiency.',
//       imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=BPA',
//       author: 'Candid Team',
//       date: 'January 5, 2025',
//       type: 'case-study',
//     },
//     {
//       id: 4,
//       title: 'Management',
//       description: 'A look into how new management strategies led to a more engaged and productive healthcare staff.',
//       imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Management',
//       author: 'Candid Team',
//       date: 'December 1, 2024',
//       type: 'case-study',
//     },
//   ];

//   return (
//     <div className="bg-[var(--color-primary-dark)] min-h-screen font-sans">
//       {/* Hero Section */}
//       <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-b-[40px] shadow-lg">
//         <img
//           src="https://virima.com/wp-content/uploads/2022/03/no.-4.jpeg.webp"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//        <div className="absolute inset-0 bg-[var(--color-primary-dark)] opacity-80"></div>
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//           <p className="text-white text-sm md:text-base mb-2 tracking-widest uppercase opacity-70">
//             Case Studies & Articles
//           </p>
//           <h1 className="text-white text-3xl md:text-6xl font-bold tracking-wide">
//           Insights. Research. Care.
//           </h1>
//           <p className="mt-4 max-w-2xl text-center text-sm md:text-lg text-white font-light leading-relaxed">
//             We take great pride in our work and are delighted to share our case studies with you. Collaborating closely with our clients, we drive meaningful, positive change—no matter the size of the organisation or the cultural challenges encountered. At the core of our approach lies a set of values that deeply connect with our clients, guiding and inspiring our team in every project we deliver.
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
//         {/* ARTICLES */}
//         <section className="mb-16">
//           <div className="text-center mb-8">
//             <h2 className="text-[#351e39] text-xl md:text-3xl font-semibold">
//               ARTICLES
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 gap-8">
//             {articles.map((article) => (
//               <ContentCard key={article.id} {...article} />
//             ))}
//           </div>
//         </section>

//         {/* CASE STUDIES */}
//         <section className="mb-16">
//           <div className="text-center mb-8">
//             <h2 className="text-[#351e39] text-xl md:text-3xl font-semibold">
//               CASE STUDIES
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 gap-8">
//             {caseStudies.map((caseStudy) => (
//               <ContentCard key={caseStudy.id} {...caseStudy} />
//             ))}
//           </div>
//         </section>

//         {/* Share Your Voice */}
//         <section className="bg-[var(--color-primary-dark)] rounded-3xl p-8 md:p-16 shadow-lg">
//           <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
//             {/* Left Box */}
//             <div className="bg-gray-700 rounded-3xl p-8 text-white flex-1 min-h-[300px]">
//               <h3 className="text-xl md:text-2xl font-semibold mb-4">
//                 Your words can help others feel seen
//               </h3>
//               <p className="text-sm md:text-base mb-6">
//                 Your moment matters. It doesn’t have to be big. It just has to be true. Share a story or a sentence that reflects a time you felt heard, helped someone else, or found strength in community.
//               </p>
//               <button className="px-6 py-2 bg-white text-[#6b4c6e] rounded-full hover:bg-gray-200 transition-colors duration-300">
//                 Submit Your Story
//               </button>
//             </div>
            
//             {/* Center Image */}
//             <div className="flex-1 w-full md:w-auto flex justify-center items-center min-h-[300px]">
//               <img
//                 src="https://prognocis.com/wp-content/uploads/2022/01/group-of-doctors-with-hands-together-at-hospital-scaled.jpg"
//                 alt="A team of healthcare professionals collaborating"
//                 className="w-full h-auto object-cover rounded-3xl shadow-lg"
//               />
//             </div>

//             {/* Right Box */}
//             <div className="bg-gray-700 rounded-3xl p-8 text-white flex-1 min-h-[300px] ">
//               <h3 className="text-xl md:text-2xl font-semibold mb-4">
//                 Built for Connection
//               </h3>
//               <p className="text-sm md:text-base">
//                 Thrive Voices is more than a project. It’s a reminder that we are stronger when we listen to each other. These stories build bridges, spark healing, and remind us we’re not alone.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default CaseStudiesPage;


// import React from "react";
// import { Link } from "react-router-dom";
// import { Calendar, Briefcase } from "lucide-react";

// // --- Static Data for Case Studies ---
// // The array is now empty to trigger the "No case studies found" message.
// const caseStudiesData = [];


// export default function CaseStudiesPag() {
//   return (
//     <div className="bg-slate-50 min-h-screen">
//       {/* --- Hero Section --- */}
//       <div
//         className="relative h-[250px] md:h-96 w-full bg-cover bg-center"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')`,
//         }}
//       >
//        <div className="absolute inset-0 bg-[var(--color-primary-dark)] opacity-60"></div>
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
//           <div className="text-sm md:text-xl font-light mb-2">
//             Real Stories, Real Outcomes 
//           </div>
//           <h1 className="text-4xl md:text-6xl font-serif font-bold px-4">
//            CASE STUDIES
//           </h1>
//         </div>
//       </div>

//       {/* --- Case Studies Section --- */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
//           Featured Case Studies
//         </h2>

//         {/* This condition will now be true, displaying the message below */}
//         {caseStudiesData.length === 0 && (
//           <p className="text-center text-gray-600 mt-8">No case studies found.</p>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Since the array is empty, nothing will be rendered here */}
//           {caseStudiesData.map((study) => (
//             <Link
//               to={`/case-study/${study.slug}`}
//               key={study.id}
//               className="bg-white rounded-xl shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
//             >
//               {/* Study Image */}
//               <div className="h-40 md:h-56 w-full overflow-hidden">
//                 <img
//                   src={study.imageUrl}
//                   alt={study.title}
//                   className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               {/* Study Content */}
//               <div className="p-6 flex flex-col flex-grow">
//                 <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
//                   {study.client}
//                 </p>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-700">
//                   {study.title}
//                 </h3>
                
//                 <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                   {study.summary}
//                 </p>
                
//                 <div className="flex-grow" />
                
//                 <div className="mt-auto pt-4 border-t border-gray-100">
//                   <div className="flex justify-between items-center text-gray-500 text-sm">
//                     <div className="flex items-center gap-2">
//                         <Briefcase size={14} />
//                         <span>{study.industry}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Calendar size={14} />
//                       <span>{new Date(study.date).toLocaleDateString()}</span>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import { FileText, User, Calendar } from 'lucide-react'; // added LuCalendar for date

// // A reusable card component for both Articles and Case Studies
// const ContentCard = ({ title, description, imageSrc, author, date, type }) => {
//   return (
//     <div className="bg-white rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] flex flex-col md:flex-row">
//       <div className="w-full md:w-1/3 flex-shrink-0">
//         <img
//           src={imageSrc}
//           alt={title}
//           className="w-full h-48 md:h-full object-cover  rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
//         />
//       </div>
//       <div className="p-6 flex flex-col justify-between flex-1">
//         <div>
//           <div className="flex items-center text-sm text-gray-500 mb-2">
//             <span className="flex items-center mr-4">
//               {type === 'article' ? (
//                 <FileText className="mr-1" />
//               ) : (
//                 <User className="mr-1" />
//               )}
//               {author}
//             </span>
//             <span className="flex items-center">
//               <Calendar className="mr-1" /> {/* fixed icon */}
//               {date}
//             </span>
//           </div>
//           <h3 className="text-black text-xl md:text-2xl font-bold mb-2">
//             {title}
//           </h3>
//           <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//             {description}
//           </p>
//         </div>
//         <button className="mt-4 self-start px-6 py-2 bg-black text-white rounded-full hover:bg-[#8f7495] transition-colors duration-300">
//           Read More
//         </button>
//       </div>
//     </div>
//   );
// };

// const CaseStudiesPage = () => {
//   // Mock data
//   const articles = [
//     {
//       id: 1,
//       title: 'PLANNING AND IMPLEMENTING AN ELECTRONIC PATIENT RECORD (EPR) SYSTEM',
//       description: 'Assessing Current Healthcare. A detailed look at the strategic and operational considerations for a successful EPR rollout.',
//       imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Article+Image',
//       author: 'Candid Team',
//       date: 'April 28, 2025',
//       type: 'article',
//     },
//     {
//       id: 2,
//       title: 'Next Generation Healthcare Technology',
//       description: 'Exploring how new technologies are reshaping patient care and clinical workflows for a more efficient future.',
//       imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Healthcare+Tech',
//       author: 'Candid Team',
//       date: 'June 10, 2025',
//       type: 'article',
//     },
//   ];

//   const caseStudies = [
//     {
//       id: 1,
//       title: 'Sepsis Management',
//       description: 'A deep dive into how improved protocols and technology led to better patient outcomes and reduced response times for sepsis.',
//       imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Sepsis',
//       author: 'Candid Team',
//       date: 'March 15, 2025',
//       type: 'case-study',
//     },
//     {
//       id: 2,
//       title: 'Order Set Updates',
//       description: 'A case study on the successful implementation of new electronic order sets, streamlining processes and reducing errors.',
//       imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Order+Sets',
//       author: 'Candid Team',
//       date: 'February 20, 2025',
//       type: 'case-study',
//     },
//     {
//       id: 3,
//       title: 'BPA',
//       description: 'Business Process Automation (BPA) implementation for a large hospital system, improving administrative efficiency.',
//       imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=BPA',
//       author: 'Candid Team',
//       date: 'January 5, 2025',
//       type: 'case-study',
//     },
//     {
//       id: 4,
//       title: 'Management',
//       description: 'A look into how new management strategies led to a more engaged and productive healthcare staff.',
//       imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Management',
//       author: 'Candid Team',
//       date: 'December 1, 2024',
//       type: 'case-study',
//     },
//   ];

//   return (
//     <div className="bg-[var(--color-primary-dark)] min-h-screen font-sans">
//       {/* Hero Section */}
//       <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-b-[40px] shadow-lg">
//         <img
//           src="https://virima.com/wp-content/uploads/2022/03/no.-4.jpeg.webp"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//        <div className="absolute inset-0 bg-[var(--color-primary-dark)] opacity-80"></div>
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//           <p className="text-white text-sm md:text-base mb-2 tracking-widest uppercase opacity-70">
//             Case Studies & Articles
//           </p>
//           <h1 className="text-white text-3xl md:text-6xl font-bold tracking-wide">
//           Insights. Research. Care.
//           </h1>
//           <p className="mt-4 max-w-2xl text-center text-sm md:text-lg text-white font-light leading-relaxed">
//             We take great pride in our work and are delighted to share our case studies with you. Collaborating closely with our clients, we drive meaningful, positive change—no matter the size of the organisation or the cultural challenges encountered. At the core of our approach lies a set of values that deeply connect with our clients, guiding and inspiring our team in every project we deliver.
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
//         {/* ARTICLES */}
//         <section className="mb-16">
//           <div className="text-center mb-8">
//             <h2 className="text-[#351e39] text-xl md:text-3xl font-semibold">
//               ARTICLES
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 gap-8">
//             {articles.map((article) => (
//               <ContentCard key={article.id} {...article} />
//             ))}
//           </div>
//         </section>

//         {/* CASE STUDIES */}
//         <section className="mb-16">
//           <div className="text-center mb-8">
//             <h2 className="text-[#351e39] text-xl md:text-3xl font-semibold">
//               CASE STUDIES
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 gap-8">
//             {caseStudies.map((caseStudy) => (
//               <ContentCard key={caseStudy.id} {...caseStudy} />
//             ))}
//           </div>
//         </section>

//         {/* Share Your Voice */}
//         <section className="bg-[var(--color-primary-dark)] rounded-3xl p-8 md:p-16 shadow-lg">
//           <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
//             {/* Left Box */}
//             <div className="bg-gray-700 rounded-3xl p-8 text-white flex-1 min-h-[300px]">
//               <h3 className="text-xl md:text-2xl font-semibold mb-4">
//                 Your words can help others feel seen
//               </h3>
//               <p className="text-sm md:text-base mb-6">
//                 Your moment matters. It doesn’t have to be big. It just has to be true. Share a story or a sentence that reflects a time you felt heard, helped someone else, or found strength in community.
//               </p>
//               <button className="px-6 py-2 bg-white text-[#6b4c6e] rounded-full hover:bg-gray-200 transition-colors duration-300">
//                 Submit Your Story
//               </button>
//             </div>
            
//             {/* Center Image */}
//             <div className="flex-1 w-full md:w-auto flex justify-center items-center min-h-[300px]">
//               <img
//                 src="https://prognocis.com/wp-content/uploads/2022/01/group-of-doctors-with-hands-together-at-hospital-scaled.jpg"
//                 alt="A team of healthcare professionals collaborating"
//                 className="w-full h-auto object-cover rounded-3xl shadow-lg"
//               />
//             </div>

//             {/* Right Box */}
//             <div className="bg-gray-700 rounded-3xl p-8 text-white flex-1 min-h-[300px] ">
//               <h3 className="text-xl md:text-2xl font-semibold mb-4">
//                 Built for Connection
//               </h3>
//               <p className="text-sm md:text-base">
//                 Thrive Voices is more than a project. It’s a reminder that we are stronger when we listen to each other. These stories build bridges, spark healing, and remind us we’re not alone.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default CaseStudiesPage;


// import React from "react";
// import { Link } from "react-router-dom";
// import { Calendar, Briefcase } from "lucide-react";

// // --- Static Data for Case Studies ---
// // The array is now empty to trigger the "No case studies found" message.
// const caseStudiesData = [];


// export default function CaseStudiesPag() {
//   return (
//     <div className="bg-slate-50 min-h-screen">
//       {/* --- Hero Section --- */}
//       <div
//         className="relative h-[250px] md:h-96 w-full bg-cover bg-center"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
//           <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
//             Our Success Stories
//           </h1>
//           <p className="text-slate-300 text-lg md:text-xl mt-4 max-w-2xl">
//             Explore how we've partnered with clients to overcome challenges and achieve remarkable results.
//           </p>
//         </div>
//       </div>

//       {/* --- Case Studies Section --- */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
//           Featured Case Studies
//         </h2>

//         {/* This condition will now be true, displaying the message below */}
//         {caseStudiesData.length === 0 && (
//           <p className="text-center text-gray-600 mt-8">No case studies found.</p>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Since the array is empty, nothing will be rendered here */}
//           {caseStudiesData.map((study) => (
//             <Link
//               to={`/case-study/${study.slug}`}
//               key={study.id}
//               className="bg-white rounded-xl shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
//             >
//               {/* Study Image */}
//               <div className="h-40 md:h-56 w-full overflow-hidden">
//                 <img
//                   src={study.imageUrl}
//                   alt={study.title}
//                   className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               {/* Study Content */}
//               <div className="p-6 flex flex-col flex-grow">
//                 <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
//                   {study.client}
//                 </p>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-700">
//                   {study.title}
//                 </h3>
                
//                 <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                   {study.summary}
//                 </p>
                
//                 <div className="flex-grow" />
                
//                 <div className="mt-auto pt-4 border-t border-gray-100">
//                   <div className="flex justify-between items-center text-gray-500 text-sm">
//                     <div className="flex items-center gap-2">
//                         <Briefcase size={14} />
//                         <span>{study.industry}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Calendar size={14} />
//                       <span>{new Date(study.date).toLocaleDateString()}</span>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCases } from "../utils/api";
import { Calendar } from "lucide-react"; // Optional: for icons

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCases()
      .then(setPosts)
      .catch(err => console.error("Failed to fetch posts:", err))
      .finally(() => setLoading(false));
  }, []);

  // This function is updated to strip HTML tags before creating the excerpt.
  const createExcerpt = (sections) => {
    if (!sections || sections.length === 0 || !sections[0].text) {
      return "No content available.";
    }

    const htmlContent = sections[0].text;

    // Use the browser's built-in tools to safely convert HTML to plain text
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const plainText = tempDiv.textContent || tempDiv.innerText || "";

    // Now, create the excerpt from the clean plain text
    if (plainText.length > 100) {
      return plainText.substring(0, 100) + "...";
    }
    return plainText;
  };
 

  return (
    <div className="bg-slate-50 min-h-screen">
       <div
        className="relative h-[250px] md:h-96 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')`,
        }}
      >
       <div className="absolute inset-0 bg-[var(--color-primary-dark)] opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <div className="text-sm md:text-xl font-light mb-2">
            Real Stories, Real Outcomes 
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold px-4">
           CASE STUDIES
          </h1>
        </div>
      </div>
      {/* --- Latest Posts Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Latest Posts
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                to={`/case-study/${post.slug}`}
                key={post._id}
                className="bg-white rounded-xl shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Post Image */}
                <div className="h-40 md:h-56 w-full overflow-hidden">
                  <img
                    src={post.heroImage || 'https://via.placeholder.com/400x300'}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 truncate group-hover:text-teal-600">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {createExcerpt(post.sections)}
                  </p>
                  
                  <span className="font-semibold text-teal-600 group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No posts found.</p>
        )}
      </div>
    </div>
  );

}




