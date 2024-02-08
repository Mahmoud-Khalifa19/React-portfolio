import React from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'


const Home = () => {
  return (

    <div name='home' className='w-full h-screen bg-gray-700'>
    {/*Main container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <div>
      <h1 className='text-4xl sm:text-6xl font-bold text-white'>
        Hi, I'm Mahmoud a 
      <span style={{color: 'grey'}}>
       <Typewriter
            className='text-[#8892b0]'
            words={[' Front End React Developer']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </span>
      </h1>
      <p className='text-[#8892b0] text-2xl py-4 max-w-[700px]'>
       I'm currently focused on perfecting my craft in React / Nextjs to build web applications which serve a real purpose in the digital world so come along on this journey with me.
      </p>
        <div className='text-4xl flex justify-left gap-6 py-3 text-gray-600'>
        <a href='https://www.linkedin.com/in/mahmoudkhalifa22/'>
        <AiFillLinkedin />
        </a>
        <a href='https://github.com/Mahmoud-Khalifa19'>
        <AiFillGithub />
        </a>
        </div>
        <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-400 hover:border-gray-600'>
        View My Work 
        <span className='animate-bounce'>
        <HiArrowNarrowDown className='ml-3' />
        </span>
        </button>
        </div>
        </div>
     </div>
  );
};

export default Home