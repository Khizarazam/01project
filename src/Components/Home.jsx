import { ReactTyped } from "react-typed";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import React from "react";

import { Link } from "react-scroll";
function Home() {
 



  return (
    <>
      <main className=" pb-9 text-white">
        
        {/* Home */}
        <div name="Home" className=" md:flex py-[70px]">
          <div className="left px-14 py-12 md:w-[60%]">
            <h1 className="text-[45px] font-bold">Hi,I'm khizar Choudhary</h1>
            <h1 className="text-4xl py-4 font-bold text-[#0ef]">
              <ReactTyped
                strings={["frontend Developer", "UI-Designer"]}
                typeSpeed={90}
                backDelay={90}
                backSpeed={90}
                loop
              />
            </h1>
            <p className="text-justify py-1 leading-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              suscipit cupiditate fugit eveniet, accusamus sed eius quis error
              doloribus, facere minima maiores enim perferendis molestias
              assumenda minus maxime optio est. Error nulla libero officiis
              quis, incidunt exercitationem optio deserunt quos, necessitatibus
              et qui quod suscipit, eius est voluptatum impedit dignissimos.
            </p>
            <div className="  py-8 space-y-4 space-x-4">
              <button className="py-1.5 px-5  text-black hover:scale-105 transition-all duration-300  bg-gradient-to-l to-[#0ef] from-white/80 text-lg font-bold rounded-md">
                Hire me
              </button>
              <Link  
                 to="Contact" 
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500} 
                 activeClass="active"
              className=" cursor-pointer border-2 py-1 px-5 hover:scale-105 transition-all duration-300 text-[#0ef] text-lg font-bold rounded-md border-[#0ef]">
                Let's Talk
              </Link>
            </div>
            <div className="text-4xl flex space-x-2">
              <a href="https://www.facebook.com">
                <CiFacebook className="text-[#0ef] cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/khizar-azam-47b28530a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLinkedin className="text-[#0ef] cursor-pointer" />
              </a>
              <a href="https://instagram.com">
                <CiInstagram className="text-[#0ef] cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="right px-28 md:w-[40%]">
            <img
              src="img2.png"
              alt="image"
              className="w-[450px] border rounded-[40px] border-none h-[500px]"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
