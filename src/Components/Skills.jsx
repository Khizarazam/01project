import React from 'react'

function Skills() {
   

    const codingSkill = [
        {
           language: "HTML",
           Percentage: "90",   
        },
        {
            language: "CSS",
            Percentage: "90", 
         },
         {
            language: "JAVASCRIPT",
            Percentage: "85"
         },
         {
            language: "REACT JS",
            Percentage: "70", 
         },

    ]

    const professionalSkills = [
        {
            language: "WEB DESIGNING",
            Percentage: "60",   
         },
         {
             language: "FRONTEND-WEB-DEVELOPMENT",
             Percentage: "80", 
          },
          {
             language: "TECHNICAL COMMUNICATION",
             Percentage: "60"
          },
    ]
  return (
    <>
     <div name="Skills" className='py-20'>
     <h1 className='text-white text-5xl font-semibold text-center py-8'>My 
      <span className='text-[#0ef]'>Skills</span></h1>
      <div className='md:px-32 px-8 md:flex md:space-x-8'>
       <div className='border-2 py-2 px-3 border-[#0ef] rounded-lg md:w-[45%] space-y-6'>
       <h1 className='text-2xl font-semibold pb-4'>Coding Skills</h1>
           {codingSkill.map(({language, Percentage},index)=>(
            <div>
               <div className='flex justify-between '>
                <h1 className='font-semibold'>{language}</h1>
                <h1 className='font-semibold'>{Percentage}%</h1>
               </div>
               <div className='border-2 items-center flex pl-0.5 border-[#0eef] h-6 rounded-md mt-2'>
                <div style={{width: `${Percentage}%`}} className={`bg-[#0ef]  h-3.5 rounded-sm`}></div>
               </div>
            </div>
           ))}
       </div>  
       <div className='border-2  py-2 px-3 border-[#0ef] rounded-lg md:mt-0 mt-20 md:w-[45%] space-y-6'>
       <h1 className='text-2xl font-semibold pb-4'>professional Skills</h1>
           {professionalSkills.map(({language, Percentage})=>(
            <div>
               <div className='flex justify-between '>
                <h1 className='font-semibold'>{language}</h1>
                <h1 className='font-semibold'>{Percentage}%</h1>
               </div>
               <div className='border-2 items-center flex pl-0.5 border-[#0eef] h-6 rounded-md mt-2'>
                <div style={{width: `${Percentage}%`}} className={`bg-[#0ef] h-3.5 rounded-sm`}></div>
               </div>
            </div>
           ))}
       </div>  
      </div> 
     </div>
    </>
  )
}

export default Skills
