import React, { useState } from "react";
import { Link } from "react-scroll";

import { LuMenuSquare } from "react-icons/lu";
import { FaRegWindowClose } from "react-icons/fa";

function Nav() {
  let data = ["Home", "About Me", "Education", "Skills", "Contact Me"];
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
     setToggle(!toggle)
  }

  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className="fixed z-10 bg-black/50 w-full py-6 px-10 flex justify-between">
        <h1 className="text-3xl font-bold cursor-pointer">Khizar.</h1>
        <div className="hidden md:block">
          <ul className="flex space-x-12 text-lg font-semibold">
            {data.map((link, index) => (
              <Link
                key={index}
                to={link}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                activeClass="active"
                className={`cursor-pointer ${activeLink === link ? 'text-[#0ef]' : 'text-[#fff]'}`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center md:hidden">
          {
            toggle ? <LuMenuSquare onClick={handleToggle} className="text-2xl cursor-pointer"/> :
            <FaRegWindowClose onClick={handleToggle} className="text-2xl cursor-pointer"/>
          }
        </div>
        
        {/* Responsive nav */}
      {
        !toggle && 
         <div className=
            {`
             fixed md:hidden top-[84px] left-0 w-[100%] h-[300px] bg-black/50 
           `}>
          <div>
            <ul className=" text-xl mt- grid pl-52 space-y-4 font-semibold">
            {data.map((link, index) => (
              <Link
                key={index}
                to={link}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                activeClass="active"
                className={`cursor-pointer ${activeLink === link ? 'text-[#0ef]' : 'text-[#fff]'}`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </Link>
            ))}
            </ul>
          </div>
         </div>
   
      }    


      </nav>

          
    </>
  );
}

export default Nav;
