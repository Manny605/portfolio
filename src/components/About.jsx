import React from 'react'

const About = () => {
  return (

    <div className='w-full h-screen bg-[#0a192f] text-gray-300' name='about'>

        <div className='flex flex-col justify-center items-center w-full h-full'>
            
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>

                <div></div>

            </div>
                
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>

                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm abderahmane kamara, nice to meet you. Please take a look around.</p>
                </div>

                <div>
                    <p>
                        I'm a passionate computer science student in constant evolution, deeply drawn to the world of web development. 
                        My journey in this field began with a love for technology and an unquenchable thirst for knowledge. 
                        Over the years, I've gained fundamental skills in programming, web design, and application development. 
                        Yet, I firmly believe there's always more to discover and learn. 
                        My goal is to further specialize in web development and continue exploring this ever-evolving domain.
                    </p>
                </div>

            </div>

        </div>

    </div>
   
  )
}

export default About




