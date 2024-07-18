import React, { useState } from "react";

function About() {

  const [display, setDisplay] = useState('hidden');
  const [text, setText] = useState('Read MOre');

  const handleDisplay = () => {
    setDisplay(display === 'hidden' ? 'block' : 'hidden');
    setText(text === 'Less Read' ? 'Read More' : 'Less Read')

  };

  
  return (
    <>
      <div name="About Me" className=" text-white w-full pb-12">
        <h1 className=" py-10 text-5xl text-center">
          About <span className="text-[#0ef]">Me</span>
        </h1>
        <div className=" flex justify-center items-center">
          <div className=" border-l-4 border-[#0ef] border-r-4 pr-2 rounded-full pl-2">
          <img
            src="img2.png"
            alt="image"
            className="w-[200px] h-[200px] border-4 bg-black/30 rounded-full border-[#0ef]"
          />
          </div>
        </div>
        <h1 className="text-center text-4xl pt-3 font-semibold">Frontend Developer</h1>
        <p className="text-center px-20 pt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus assumenda autem 
            deserunt deleniti, expedita commodi vero eveniet Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Perferendis, minus!
        </p>
        <p className={`text-center px-20 pt-5 ${display}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus assumenda autem 
            deserunt deleniti, expedita.
        </p>
        <div className="flex items-center justify-center">
        <button onClick={handleDisplay} className=" py-2 px-4 bg-white mt-6 text-blue-500 text-xl font-semibold rounded-md">
            {text}
        </button>    
        </div>    
      </div>
    </>
  );
}

export default About;
