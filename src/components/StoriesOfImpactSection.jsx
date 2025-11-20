// import React from 'react';

// // Stories of Impact Section
// const StoriesOfImpactSection = () => {
//   return (
//     <section 
//       id="stories-of-impact" 
//       className="py-16 md:py-24 rounded-lg shadow-lg mx-4 md:mx-auto my-8 bg-white"
//     >
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <img
//             // src="https://www.philomathresearch.com/blog/wp-content/uploads/2023/06/case_study-healthcare.png"
//             src="casestudy_home.jpeg"
//             alt="Epic OpTime module implementation" // Updated alt text
//             className="rounded-lg shadow-xl w-full h-auto object-cover"
//             onError={(e) => { 
//               e.target.onerror = null; 
//               e.target.src = "https://placehold.co/600x400/D1E9FF/000000?text=Image+Error"; 
//             }}
//           />
//         </div>
//         <div className="md:w-1/2 text-left">
//           <h2 className="text-xl md:text-3xl font-bold text-[var(--color-primary-dark)] mb-6 rounded-md">
//             Case Study on Epic OpTime Implementation at Health & Social Care Encompass Project Transforming Surgical Services in Northern Ireland
//           </h2>
//           <p className="text-sm md:text-lg leading-relaxed text-[var(--color-text-secondary)] mb-4 rounded-md">
//             This case study examines how the implementation of Epic Systems' OpTime module transformed surgical 
//             services across Northern Ireland's Health & Social Care Encompass Project. The initiative represents a 
//             significant advancement in healthcare digitalisation, unifying fragmented workflows, enhancing patient 
//             safety, and optimising operating room utilisation.
//           </p>
//           <p className="text-sm md:text-lg leading-relaxed text-[var(--color-text-secondary)] mb-8 rounded-md">
//             Through strategic planning, comprehensive implementation, and effective change management, this project has established a new benchmark for integrated surgical care delivery in the UK healthcare system.
//           </p>
//           <button className="bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
//             Explore our Case Study
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StoriesOfImpactSection;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { getCases } from '../utils/api'; // Ensure path is correct

const StoriesOfImpactSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCases();
        // Optional: Filter only posts that have images or specific tags if needed
        setPosts(data || []);
      } catch (err) {
        console.error("Failed to fetch case studies:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 2. Auto-Play Slider Logic
  useEffect(() => {
    if (posts.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, [currentIndex, posts.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  // 3. HTML Stripper Helper
  const getExcerpt = (sections) => {
    if (!sections || !sections[0] || !sections[0].text) return "Explore our latest case study showing real outcomes and impacts.";
    
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = sections[0].text;
    const plainText = tempDiv.textContent || tempDiv.innerText || "";
    
    return plainText.length > 180 ? plainText.substring(0, 180) + "..." : plainText;
  };

  if (loading) return <div className="h-96 flex items-center justify-center">Loading Impact Stories...</div>;
  if (posts.length === 0) return null; // Don't show section if no data

  const currentPost = posts[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)]">
            Stories of Impact
          </h2>
          <p className="text-gray-500 mt-2">Real results transforming healthcare and society</p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 min-h-[500px] md:min-h-[450px] flex items-center">
          
          {/* Navigation Buttons (Absolute) */}
          {posts.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-2 md:left-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md backdrop-blur-sm transition-all text-[var(--color-primary-dark)]"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 md:right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md backdrop-blur-sm transition-all text-[var(--color-primary-dark)]"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="w-full h-full">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentPost._id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col md:flex-row h-full"
              >
                
                {/* Left: Image Section */}
                <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-gray-100">
                   <img
                    src={currentPost.heroImage || "https://via.placeholder.com/800x600?text=Case+Study"}
                    alt={currentPost.title}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/600x400/f1f5f9/94a3b8?text=No+Image"; 
                    }}
                  />
                  {/* Overlay Gradient for text readability on mobile if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Right: Content Section */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left bg-white relative">
                  {/* Decorative Tag */}
                  <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-700 text-xs font-bold tracking-wide uppercase mb-4 w-fit">
                    Case Study
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] mb-4 leading-tight">
                    {currentPost.title}
                  </h3>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                    {getExcerpt(currentPost.sections)}
                  </p>

                  {/* Dynamic Link Button */}
                  <Link 
                    to={`/case-study/${currentPost.slug}`}
                    className="inline-flex items-center gap-2 bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-fit group"
                  >
                    Read Full Story
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot Indicators */}
        {posts.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-[var(--color-primary-dark)]" 
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
        
      </div>
    </section>
  );
};

export default StoriesOfImpactSection;