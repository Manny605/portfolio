import React from 'react'

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';

import java from '../assets/java.png'
import php from '../assets/php.png'

import mysql from '../assets/mysql.png'
import expressjs from '../assets/expressjs.png'
import react from '../assets/react.png';
import node from '../assets/node.png';


const Skills = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300' name='skills'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div>
                <p className='text-4xl border-pink-600 border-b-4 font-bold inline'>Skills</p>
                <p className='py-4'>\\ These are the technologies I've worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                  <p>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={css} alt="css icon" />
                  <p>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={javascript} alt="javascript icon" />
                  <p>Javascript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={php} alt="php icon" />
                  <p>PHP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={java} alt="java icon" />
                  <p>Java</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mysql} alt="mysql icon" />
                  <p>MySQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={expressjs} alt="expressjs icon" />
                  <p>ExpressJS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={react} alt="React icon" />
                  <p>ReactJS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={node} alt="nodeJs icon" />
                  <p>NodeJS</p>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Skills