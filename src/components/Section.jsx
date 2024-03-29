import React from "react";




const Section = () => { 
  return (
    /*section */
     <div name="section" id="section" className='w-full h-screen bg-gray-900 text-white'>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-lg bg-gray-900 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-white">
                About Me
              </p>
            </div>
          </div>

          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
             <div className="sm:text text-2xl">
             <br />
             <p>
                Hi, my name is Mahmoud, and I'm a Front-end Developer. My passion is to create and develop a clean UI/UX for my clients.
                My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
              </p>
              <br />
              <hr /> 
            </div>
          </div>
        </div>
      </div>
      </div>
     
  );
};

export default Section;