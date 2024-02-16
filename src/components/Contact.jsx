import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-900 flex justify-center items-center p-4'>
      <form action="#" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 w-full flex justify-center items-center flex-col'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-900 text-gray-950'>Contact</p>
                <p className='text-gray-300 py-4'>Please do reach out on the form below</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Get in Touch</button>
            </form>
        </div>
  )
}
export default Contact