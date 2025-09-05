import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const foundationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (foundationRef.current) {
      observer.observe(foundationRef.current);
    }

    return () => {
      if (foundationRef.current) {
        observer.unobserve(foundationRef.current);
      }
    };
  }, []);

  const leaders = [
    {
      name: "AVINASH CHANDER",
      role: "Director",
      img: "/Avinash.jpeg",
      description:
        "Mr. Avinash Chander, is an astute Electronic Patient Record (EPR) Systems Implementation Specialist who has led the digital transformation journeys of numerous healthcare organisations globally. A physiotherapist who brings over 16 years of healthcare experience and expertise in EPR implementations, hospital operations, quality and accreditation processes and digital healthcare consulting gained from a multitude of healthcare projects based in the US, India, the Middle East and the UK. He has successfully delivered EPR projects for leading healthcare institutions using Epic and other platforms, such as Siemens Soarian MedSuite and MDSynergy. ",
    },
    {
      name: "SANDRA SHANTANU",
      role: "BUSINESS SUPPORT OFFICER",
      img: "Sandra.jpeg",
      description:
        "Sandra is a dedicated Business Support Officer with a strong background in sales, bringing a wealth of experience to her role. With a proven track record of providing exceptional administrative and operational support, Sandra has worked across various industries, helping streamline processes and improve efficiency. In her previous roles, she effectively managed client communications, processed orders, coordinated schedules, and ensured smooth interactions between sales teams and other departments. Sandra’s experience in sales has given her valuable insight into customer needs, allowing her to tailor support strategies that drive business growth. ",
    },
   
    {
      name: "AMIT KUMAR BAJPAI",
      role: "HONORARY ADVISOR",
      img: "Amit.jpeg",
      description:
        "Amit is a pioneering figure in digital health with more than eighteen years of international experience. Amit spearheads innovation in AI, machine learning, and digital transformation in his role as Practice Head for Healthcare at ACCRO.  Throughout his career, Amit has held important positions at IBM, Accenture, and Deloitte, where he oversaw significant health IT projects in the USA, UK, and MEA. He made significant contributions to important initiatives including Abu Dhabi's Malaffi (Health Information Exchange) and Dubai's NABIDH, two cornerstones of the United Arab Emirates' integrated healthcare system. These technologies improve clinical decision-making and patient outcomes by facilitating safe, real-time data sharing between clinicians.  Amit, a specialist in IT business analysis, process automation, and project management, is an Epic-certified professional who ensures the smooth implementation of innovative solutions.   Fostering cross-border cooperation is another aspect of Amit's leadership.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
        <section 
        className="relative h-[40vh] md:h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: 'url(/candid_about.jpeg)' }}
      >
        <div className="absolute inset-0 bg-[var(--color-primary-dark)] opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <div className="text-sm md:text-xl font-light mb-2">
            Health-Care Leadership 
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold px-4">
            WHO WE ARE 
          </h1>
        </div>
      </section>
      <section className="bg-gray-100 py-16 lg:py-24 px-6 md:px-12 rounded-xl mt-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left-side Text Content */}
          <div className="lg:w-1/2">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Together at the Core
            </h3>
            {/* <p className="text-gray-700 leading-relaxed mb-4">
             A passionate group of professionals to help you achieve the transformation you have envisioned. We strive to walk with you on your EPR digitisation journey on your terms. our team at Candid HealthSystems Consultants Ltd is made up of highly skilled consultants  with diverse backgrounds. We work together to provide our clients with tailored solutions that meet their unique needs. Meet our team and learn more about our individual areas of expertise.
            </p> */}
            <p className="text-gray-700 leading-relaxed mb-4">
            At Candid Healthsystems Consultants Ltd., we take a holistic approach to consulting. We work closely with our clients to understand their goals and challenges and develop solutions that are goal-oriented or problem-focused. Our approach is collaborative, transparent, and results-driven. 
            </p>
          </div>

          {/* Right-side Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_2334d759-811d-42f2-bda3-90321949cd19.webp"
              alt="A nurse holding a white orchid"
              className="rounded-xl shadow-lg w-full max-w-lg lg:max-w-none"
            />
          </div>
        </div>
      </section>

      {/* Three Circles Section */}
      <section
        ref={foundationRef}
        className="flex flex-col items-center justify-center mt-5 bg-white text-gray-900 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-10 text-center">
          Our Approach
        </h2>

        <div className="relative w-96 h-96 flex items-center justify-center mb-10 md:mb-25">
          {/* Left Circle */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="absolute w-48 h-48 md:w-64 md:h-64 bg-red-100 rounded-full flex items-center justify-center top-[13%] left-[8%] md:top-[13%] md:left-[-10%]"

          >
            <span className="text-lg font-bold">Collaborative</span>
          </motion.div>

          {/* Right Circle */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="absolute w-48 h-48 md:w-64 md:h-64 bg-blue-100 rounded-full flex items-center justify-center top-[13%] right-[1%] md:top-[13%] md:right-[-10%]"
   
          >
            <span className="text-lg font-bold">Transparent</span>
          </motion.div>

          {/* Bottom Circle */}
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="absolute w-48 h-48 md:w-64 md:h-64 bg-green-100 rounded-full flex items-center justify-center bottom-[5%] left-[27%] md:bottom-[-18%] md:left-[55%] md:transform md:-translate-x-[60%]"
           
          >
            <span className="text-lg font-bold">Results-driven</span>
          </motion.div>
        </div>
      </section>

        {/* Leadership Section */}
<section className="py-16 ">

     <div className="md:hidden bg-gray-100 ">
    <div className="container mx-auto px-4 space-y-24">
      {leaders.map((leader) => (
        <div key={leader.name} className="flex flex-col items-left ">
          {/* Mobile: Centered, circular image */}
          <div className="w-48 h-48 rounded-full shadow-lg overflow-hidden z-10 mx-5">
            <img
              src={leader.img}
              alt={leader.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile: Card content below the image */}
          <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-sm -mt-24 pt-28 p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              {leader.name}
            </h3>
            <p className="text-indigo-600 font-medium mb-4 text-xl">{leader.role}</p>
            <p className="text-gray-600 leading-relaxed text-md text-justify">
              {leader.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

<div
  className=" hidden md:block bg-gray-50"
  style={{
    transform: "scale(0.9)",      
    transformOrigin: "top center" 
  }}
>
  <div className="space-y-16">
  {leaders.map((leader, index) => (
    <div
      key={index}
      className={`relative flex flex-col md:flex-row items-center md:items-stretch ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Card */}
      <div className="md:relative bg-white rounded-2xl shadow-lg p-10 md:w-2/3 z-10 overflow-visible">
        <h3 className="text-2xl font-semibold text-gray-800">
          {leader.name}
        </h3>
        <p className="text-indigo-600 font-medium mb-4">{leader.role}</p>
        <p className="text-gray-600 leading-relaxed">
          {leader.description}
        </p>

        {/* Image anchored to card */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-64 h-64 rounded-xl shadow-lg overflow-hidden
            ${index % 2 === 0 ? "right-[-15rem]" : "left-[-15rem]"}`}
        >
          <img
            src={leader.img}
            alt={leader.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  ))}
</div>
</div>

</section>

    </div>
  );
}
