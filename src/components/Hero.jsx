import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";  // Import useLocation
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation(); // Get current route

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  // Check if the current page is the Home page
  const isHomePage = location.pathname === "/";

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-[40px] sm:text-[50px]`}>
            Hi, I'm <span className="text-[#915EFF]">Fardeen Khan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-[16px] sm:text-[18px]`}>
            I build ML projects, analyze data, and craft smart solutions that create<br className="sm:block hidden" />
            real impact.
          </p>
        </div>
      </div>

      {/* ✅ PC: Show full animation */}
      {!isMobile && <ComputersCanvas />}

      {/* ✅ Mobile: Show fallback image centered only on the Home page */}
      {isMobile && isHomePage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <img
            src="/fallback-computer.png"
            alt="Computer"
            className="w-[250px] h-auto object-contain"
          />
        </div>
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
