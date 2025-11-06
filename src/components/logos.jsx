// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // --- LOGO DATA ---
// const logos = [
//   "/ACCENTURE.png",
//   "/DELL.png", "/Stanford.png", "/CHI.png", "malai.jpeg", "manchester.jpeg", "hsc.jpeg", "fortis.jpeg", 
//   "/Cleaveland.png", "/NHS.png", "/FairyHealth.png",
//   "/Deloitee.png",
//   "/Royal Devon.png", "/Dubai Health.png"
// ];

// // --- A simple hook to check if the screen is mobile ---
// const useIsMobile = (breakpoint = 768) => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // This function checks the window width and sets the state
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < breakpoint);
//     };

//     // Check on initial load
//     checkScreenSize();

//     // Add event listener for screen resize
//     window.addEventListener("resize", checkScreenSize);

//     // Cleanup listener on component unmount
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, [breakpoint]);

//   return isMobile;
// };

// // --- VERTICAL SCROLLING COMPONENT (for Mobile) ---
// function LogoColumn({ logos, direction = "down", speed = 40 }) {
//   const duplicatedLogos = [...logos, ...logos];
//   const yAnimation = direction === "down" ? ["-50%", "0%"] : ["0%", "-50%"];

//   return (
//     <div className="overflow-hidden h-[400px] w-40 mx-2 md:mx-4 relative">
//       <motion.div
//         className="flex flex-col gap-8"
//         animate={{ y: yAnimation }}
//         transition={{
//           repeat: Infinity,
//           duration: speed,
//           ease: "linear",
//         }}
//       >
//         {duplicatedLogos.map((logo, i) => (
//           <img
//             key={i}
//             src={logo}
//             alt="client logo"
//             className="h-32 w-auto object-contain"
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// // --- HORIZONTAL SCROLLING COMPONENT (for Laptop) ---
// function LogoRow({ logos, direction = "left", speed = 50 }) {
//   const duplicatedLogos = [...logos, ...logos];
//   const xAnimation = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

//   return (
//     <div className="overflow-hidden w-full h-auto relative py-4">
//       <motion.div
//         className="flex flex-row gap-12"
//         animate={{ x: xAnimation }}
//         transition={{
//           repeat: Infinity,
//           duration: speed,
//           ease: "linear",
//         }}
//       >
//         {duplicatedLogos.map((logo, i) => (
//           <img
//             key={i}
//             src={logo}
//             alt="client logo"
//             className="h-24 object-contain flex-shrink-0"
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }


// // --- MAIN CLIENTS COMPONENT ---
// export default function Clients() {
//   const isMobile = useIsMobile();

//   const column1 = logos.slice(0, 5);
//   const column2 = logos.slice(5, 10);
//   const column3 = logos.slice(10, 14);

//   return (
//     <section className="py-10 bg-white">
//       <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 px-4">
//         Our Team's Experience Comes From
//       </h2>
      
//       {isMobile ? (
//         // --- Mobile View: 3 Vertical Scrolling Columns ---
//         <div className="flex justify-center">
//           <LogoColumn logos={column1} direction="down" speed={25} />
//           <LogoColumn logos={column2} direction="up" speed={25} />
//           <LogoColumn logos={column3} direction="down" speed={25} />
//         </div>
//       ) : (
//         // --- NEW Desktop View: 3 Horizontal Scrolling Rows ---
//         <div className="container mx-auto px-4 flex flex-col gap-4">
//            <LogoRow logos={column1} direction="left" speed={25}/>
//            <LogoRow logos={column2} direction="right" speed={25}/>
//            <LogoRow logos={column3} direction="left" speed={25}/>
//         </div>
//       )}
//     </section>
//   );

// }


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- LOGO DATA ---
const logos = [
  "/ACCENTURE.png",
  "/DELL.png",
  "/Stanford.png",
  "/CHI.png",
  "malai.jpeg",
  "manchester.jpeg",
  "hsc.jpeg",
  "fortis.jpeg",
  "/Cleaveland.png",
  "/NHS.png",
  "/FairyHealth.png",
  "/Deloitee.png",
  "/Royal Devon.png",
  "/Dubai Health.png",
];

// --- Hook: Detect mobile screen ---
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};

// --- Smooth Vertical Scroll (Mobile) ---
function LogoColumn({ logos, direction = "down", speed = 40 }) {
  const duplicatedLogos = [...logos, ...logos];
  const moveDistance = "-50%";

  return (
    <div className="overflow-hidden h-[400px] w-40 mx-2 md:mx-4 relative">
      <motion.div
        className="flex flex-col gap-8"
        animate={{
          y: direction === "down" ? [0, moveDistance] : [moveDistance, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{ willChange: "transform" }}
      >
        {duplicatedLogos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="client logo"
            className="h-32 w-auto object-contain"
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  );
}

// --- Smooth Horizontal Scroll (Desktop) ---
function LogoRow({ logos, direction = "left", speed = 50 }) {
  const duplicatedLogos = [...logos, ...logos];
  const moveDistance = "-50%";

  return (
    <div className="overflow-hidden w-full h-auto relative py-4">
      <motion.div
        className="flex flex-row gap-12"
        animate={{
          x: direction === "left" ? [0, moveDistance] : [moveDistance, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{ willChange: "transform" }}
      >
        {duplicatedLogos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="client logo"
            className="h-24 object-contain flex-shrink-0"
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  );
}

// --- MAIN CLIENTS COMPONENT ---
export default function Clients() {
  const isMobile = useIsMobile();

  const column1 = logos.slice(0, 5);
  const column2 = logos.slice(5, 10);
  const column3 = logos.slice(10, 14);

  return (
    <section className="py-10 bg-white">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 px-4">
        Our Team's Experience Comes From
      </h2>

      {isMobile ? (
        // --- Mobile View: 3 Vertical Scrolling Columns ---
        <div className="flex justify-center">
          <LogoColumn logos={column1} direction="down" speed={25} />
          <LogoColumn logos={column2} direction="up" speed={25} />
          <LogoColumn logos={column3} direction="down" speed={25} />
        </div>
      ) : (
        // --- Desktop View: 3 Smooth Horizontal Rows ---
        <div className="container mx-auto px-4 flex flex-col gap-4">
          <LogoRow logos={column1} direction="left" speed={25} />
          <LogoRow logos={column2} direction="right" speed={25} />
          <LogoRow logos={column3} direction="left" speed={25} />
        </div>
      )}
    </section>
  );
}




