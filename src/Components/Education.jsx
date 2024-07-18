import React from 'react'

function Education() {

    const card = [
        {
            date: "2021-2023",
            college: "AL-RAZI COLLEGE MANAWA",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." 
        },
        {
            date: "2019-2021",
            college: "AL-RAZI COLLEGE MANAWA",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." 
        },
        {
            date: "2019-2021",
            college: "AL-RAZI COLLEGE MANAWA",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." 
        }
    ]

    const card_2 = [
        {
            date: "2023-2024",
            college: "I'm Started Web developement at beginner level",
            desc: "Lorem ipsum dolor sit amet." 
        }
    ]

  return (
    <>
      <div name="Education" className='text-white w-full pb-12'>
        <h1 className='text-5xl font-semibold text-center py-6'>my <span className='text-[#0ef]'>Journey</span></h1>
        <div className='md:px-52 px-16 md:flex space-y-12 md:space-x-16'>
           
            <div className='py-3 space-y-3'>
            <h3 className='font-bold text-xl '>Education</h3>
            { card.map(({date,college,desc})=>(
                <div className='w-[400px] border-2 px-1 py-2 border-[#0ef] rounded-md'>
                    <h2 className='text-[#38a9fa] text-lg font-semibold'>{date}</h2>
                    <h1 className='text-xl font-semibold'>{college}</h1>
                    <p>{desc}</p>
                </div>
            ))}
            </div>
           
            <div className='py-3 space-y-3'>
            <h3 className='font-bold text-xl'>Experience</h3>
            { card_2.map(({date,college,desc})=>(
                <div className='w-[400px] border-2 px-1 py-2 border-[#0ef] rounded-md'>
                    <h2 className='text-[#38a9fa] text-lg font-semibold'>{date}</h2>
                    <h1 className='text-xl font-semibold'>{college}</h1>
                    <p>{desc}</p>
                </div>
            ))}
            </div>
        </div>
      </div> 
    </>
  )
}

export default Education
