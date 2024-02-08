import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png' ;
import ReactJS from '../assets/reactjs.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';

const Technologies = () => {
  return (
    <div name='technologies' className='w-full h-screen bg-gray-700 text-gray-950'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-gray-900 text-center '>Tech Stack</p>
              <p className='py-4 text-2xl'>I enjoy learning new things. Here's a list of technologies I've used and worked with.</p>
          </div> 

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt='html logo' />
                  <p className='my-4'>HTML</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt='css logo' />
                  <p className='my-4'>CSS</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt='javascript logo' />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactJS} alt='react logo' />
                  <p className='my-4'>REACTJS</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt='github logo' />
                  <p className='my-4'>GITHUB</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt='node logo' />
                  <p className='my-4'>NODE</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt='firebase logo' />
                  <p className='my-4'>TAILWIND</p>
              </div>

          </div>
      </div>
    </div>
  );
};

export default Technologies