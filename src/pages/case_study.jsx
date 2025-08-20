import React from 'react';
import { FileText, User, Calendar } from 'lucide-react'; // added LuCalendar for date

// A reusable card component for both Articles and Case Studies
const ContentCard = ({ title, description, imageSrc, author, date, type }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 md:h-full object-cover  rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="flex items-center mr-4">
              {type === 'article' ? (
                <FileText className="mr-1" />
              ) : (
                <User className="mr-1" />
              )}
              {author}
            </span>
            <span className="flex items-center">
              <Calendar className="mr-1" /> {/* fixed icon */}
              {date}
            </span>
          </div>
          <h3 className="text-black text-xl md:text-2xl font-bold mb-2">
            {title}
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
        <button className="mt-4 self-start px-6 py-2 bg-black text-white rounded-full hover:bg-[#8f7495] transition-colors duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

const CaseStudiesPage = () => {
  // Mock data
  const articles = [
    {
      id: 1,
      title: 'PLANNING AND IMPLEMENTING AN ELECTRONIC PATIENT RECORD (EPR) SYSTEM',
      description: 'Assessing Current Healthcare. A detailed look at the strategic and operational considerations for a successful EPR rollout.',
      imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Article+Image',
      author: 'Candid Team',
      date: 'April 28, 2025',
      type: 'article',
    },
    {
      id: 2,
      title: 'Next Generation Healthcare Technology',
      description: 'Exploring how new technologies are reshaping patient care and clinical workflows for a more efficient future.',
      imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Healthcare+Tech',
      author: 'Candid Team',
      date: 'June 10, 2025',
      type: 'article',
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Sepsis Management',
      description: 'A deep dive into how improved protocols and technology led to better patient outcomes and reduced response times for sepsis.',
      imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Sepsis',
      author: 'Candid Team',
      date: 'March 15, 2025',
      type: 'case-study',
    },
    {
      id: 2,
      title: 'Order Set Updates',
      description: 'A case study on the successful implementation of new electronic order sets, streamlining processes and reducing errors.',
      imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Order+Sets',
      author: 'Candid Team',
      date: 'February 20, 2025',
      type: 'case-study',
    },
    {
      id: 3,
      title: 'BPA',
      description: 'Business Process Automation (BPA) implementation for a large hospital system, improving administrative efficiency.',
      imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=BPA',
      author: 'Candid Team',
      date: 'January 5, 2025',
      type: 'case-study',
    },
    {
      id: 4,
      title: 'Management',
      description: 'A look into how new management strategies led to a more engaged and productive healthcare staff.',
      imageSrc: 'https://placehold.co/600x400/0B9F94/ffffff?text=Management',
      author: 'Candid Team',
      date: 'December 1, 2024',
      type: 'case-study',
    },
  ];

  return (
    <div className="bg-[var(--color-primary-dark)] min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-b-[40px] shadow-lg">
        <img
          src="https://virima.com/wp-content/uploads/2022/03/no.-4.jpeg.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />
       <div className="absolute inset-0 bg-[var(--color-primary-dark)] opacity-80"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-white text-sm md:text-base mb-2 tracking-widest uppercase opacity-70">
            Case Studies & Articles
          </p>
          <h1 className="text-white text-3xl md:text-6xl font-bold tracking-wide">
          Insights. Research. Care.
          </h1>
          <p className="mt-4 max-w-2xl text-center text-sm md:text-lg text-white font-light leading-relaxed">
            We take great pride in our work and are delighted to share our case studies with you. Collaborating closely with our clients, we drive meaningful, positive change—no matter the size of the organisation or the cultural challenges encountered. At the core of our approach lies a set of values that deeply connect with our clients, guiding and inspiring our team in every project we deliver.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        {/* ARTICLES */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-[#351e39] text-xl md:text-3xl font-semibold">
              ARTICLES
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {articles.map((article) => (
              <ContentCard key={article.id} {...article} />
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-[#351e39] text-xl md:text-3xl font-semibold">
              CASE STUDIES
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {caseStudies.map((caseStudy) => (
              <ContentCard key={caseStudy.id} {...caseStudy} />
            ))}
          </div>
        </section>

        {/* Share Your Voice */}
        <section className="bg-[var(--color-primary-dark)] rounded-3xl p-8 md:p-16 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Left Box */}
            <div className="bg-gray-700 rounded-3xl p-8 text-white flex-1 min-h-[300px]">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Your words can help others feel seen
              </h3>
              <p className="text-sm md:text-base mb-6">
                Your moment matters. It doesn’t have to be big. It just has to be true. Share a story or a sentence that reflects a time you felt heard, helped someone else, or found strength in community.
              </p>
              <button className="px-6 py-2 bg-white text-[#6b4c6e] rounded-full hover:bg-gray-200 transition-colors duration-300">
                Submit Your Story
              </button>
            </div>
            
            {/* Center Image */}
            <div className="flex-1 w-full md:w-auto flex justify-center items-center min-h-[300px]">
              <img
                src="https://prognocis.com/wp-content/uploads/2022/01/group-of-doctors-with-hands-together-at-hospital-scaled.jpg"
                alt="A team of healthcare professionals collaborating"
                className="w-full h-auto object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Right Box */}
            <div className="bg-gray-700 rounded-3xl p-8 text-white flex-1 min-h-[300px] ">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Built for Connection
              </h3>
              <p className="text-sm md:text-base">
                Thrive Voices is more than a project. It’s a reminder that we are stronger when we listen to each other. These stories build bridges, spark healing, and remind us we’re not alone.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
