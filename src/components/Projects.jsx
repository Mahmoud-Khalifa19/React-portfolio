import React from 'react';
import hawaii from '../assets/hawaii.png';
import instanews from '../assets/instanews.png';
import crwn from '../assets/crwn.png';
import facialapi from '../assets/facialapi.png'




const Projects = () => {
  return (
    <div name='work' className='w-full md:h-screen  bg-gray-900 text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 border-white text-white'>
          Portfolio
          </p>
          <p className='py-6 text-2xl'>Check out some of my projects below that I built.</p>
        </div>

           {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid */}
            <div
            style={{ backgroundImage: `url(${hawaii})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effect / Project 1 */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Aloha Apparel
              </span>
              <p className='text-center'>A Hawaii based clothing app</p>
              <div className='pt-8 text-center'>
                <a href='https://mahmoud-khalifa19.github.io/Aloha-App/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                   Live
                  </button>
                </a>
                <a href='https://github.com/Mahmoud-Khalifa19/Aloha-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          

          {/* Project 2 */}
          <div
           style={{ backgroundImage: `url(${instanews})` }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >

            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                NYT Instanews API
              </span>
              <p className='text-center'>A NYT Instanews app</p>
              <div className='pt-8 text-center'>
                <a href='https://mahmoud-khalifa19.github.io/NYT-API/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a href='https://github.com/Mahmoud-Khalifa19/NYT-API'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${crwn})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >

            {/* Hover Effect Project 3 */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Crwn Clothing
              </span>
              <p className='text-center'>An e-commerce clothing app</p>
              <div className='pt-8 text-center'>
                <a href='https://mahmoud-khalifa19.github.io/crwn-clothing/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a href='https://github.com/Mahmoud-Khalifa19/crwn-clothing'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${facialapi})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effect Project 4 */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Facial Recognition API
              </span>
              <p className='text-center'>Facial Recognition API</p>
              <div className='pt-8 text-center'>
                <a href='https://mahmoud-khalifa19.github.io/facerecognitionapi/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a href='https://github.com/Mahmoud-Khalifa19/facerecognitionapi'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${facialapi})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effect Project 5 */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Vendorspace
              </span>
              <p className='text-center'>Vendorspace</p>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            // style={{ backgroundImage: `url(${})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effect Project 6 */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                E-commerce
              </span>
              <p className='text-center'>A CBT web application built with React and Mongodb</p>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
   
    
  );
};
export default Projects;

