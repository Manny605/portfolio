import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/*------------- Container-----------*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Abderahmane Kamara</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-end Developer</h2>
          
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I'm a passionate computer science student in constant evolution, deeply drawn to the world of web development. 
            My journey in this field began with a love for technology and an unquenchable thirst for knowledge. 
            Over the years, I've gained fundamental skills in programming, web design, and application development. 
            Yet, I firmly believe there's always more to discover and learn. 
            My goal is to further specialize in web development and continue exploring this ever-evolving domain.
          </p>

          <div>

            <Link to='work' smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3'/>
                </span>
              </button>
            </Link>

          </div>

      </div>
        
    </div>
  )
}

export default Home