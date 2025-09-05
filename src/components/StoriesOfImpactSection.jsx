import React from 'react';

// Stories of Impact Section
const StoriesOfImpactSection = () => {
  return (
    <section 
      id="stories-of-impact" 
      className="py-16 md:py-24 rounded-lg shadow-lg mx-4 md:mx-auto my-8 bg-white"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            // src="https://www.philomathresearch.com/blog/wp-content/uploads/2023/06/case_study-healthcare.png"
            src="casestudy_home.jpeg"
            alt="Epic OpTime module implementation" // Updated alt text
            className="rounded-lg shadow-xl w-full h-auto object-cover"
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.src = "https://placehold.co/600x400/D1E9FF/000000?text=Image+Error"; 
            }}
          />
        </div>
        <div className="md:w-1/2 text-left">
          <h2 className="text-xl md:text-3xl font-bold text-[var(--color-primary-dark)] mb-6 rounded-md">
            Case Study on Epic OpTime Implementation at Health & Social Care Encompass Project Transforming Surgical Services in Northern Ireland
          </h2>
          <p className="text-sm md:text-lg leading-relaxed text-[var(--color-text-secondary)] mb-4 rounded-md">
            This case study examines how the implementation of Epic Systems' OpTime module transformed surgical 
            services across Northern Ireland's Health & Social Care Encompass Project. The initiative represents a 
            significant advancement in healthcare digitalisation, unifying fragmented workflows, enhancing patient 
            safety, and optimising operating room utilisation.
          </p>
          <p className="text-sm md:text-lg leading-relaxed text-[var(--color-text-secondary)] mb-8 rounded-md">
            Through strategic planning, comprehensive implementation, and effective change management, this project has established a new benchmark for integrated surgical care delivery in the UK healthcare system.
          </p>
          <button className="bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
            Explore our Case Study
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoriesOfImpactSection;