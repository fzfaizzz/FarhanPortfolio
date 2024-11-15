import React from 'react';
import { FaSun, FaGlobe, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for routing
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Worq2() {

    useGSAP(() => {
        gsap.utils.toArray(".block").forEach((element) => {
          gsap.from(element, {
            rotateX: -80,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
              trigger: element,
              start: "top 80%", 
              end: "-top 20%",
              scrub: 2,
            },
          });
        });
      }, []);
  const projects = [
    {
      id: 1,
      title: "IT TEAMWORK",
      subtitle: "IT institute ",
      link: "https://www.itteamwork.com/" // Define link paths
    },
    {
      id: 2,
      title: "BAR KARAKTER",
      subtitle: "personal project",
      link: "https://chatgpt.com/c/673716e3-2e2c-8013-96b2-94789a39fd11"
    }
  ];

  return (
    <div className='p-5 bg-gray-50 mt-10'>
      <div className="min-h-screen relative rounded-3xl bg-black text-white p-8">
        {/* Project List */}
        <div className="mt-8 space-y-8">
          {projects.map((project) => (
            <Link to={project.link} key={project.id} className="block">
              <div className="flex flex-col md:flex-row items-center justify-between border-b border-white py-4 hover:bg-gray-900 rounded-lg transition-all duration-300 p-4 md:p-0">
                {/* Project Title and Subtitle */}
                <div>
                  <h2 className="text-2xl md:text-4xl pl-2 font-extrabold">{project.title}</h2>
                  <p className="text-gray-400 text-xs pl-2 md:text-sm">{project.subtitle}</p>
                </div>

                {/* Icons and Project Number */}
                <div className="flex items-center space-x-2 md:space-x-4 mt-4 md:mt-0">
                  <FaSun className="text-white text-xl md:text-2xl" />
                  <FaGlobe className="text-white text-xl md:text-2xl" />
                  {/* <FaRocket className="text-white text-xl md:text-2xl" /> */}
                  <span className="text-white text-lg">{String(project.id).padStart(2, '0')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Worq2;
