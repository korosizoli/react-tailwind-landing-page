import React from 'react'
import { BiCheck } from "react-icons/bi";
import { featureList } from '../../data';
import { aboutList } from '../../data';
import banner from '../../assets/about.png'

const About = () => {
  return (
    <>
    <section id='about' className="section">
      <div className="container">

        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]"
        >

        {/* 
          <<<<<<<<<<<<<<<<<<<< About / Banner >>>>>>>>>>>>>>>>>>>>
        */}

          <div 
            className='my-auto relative before:absolute before:content-[""] before:inset-0 before:m-auto before:bg-gradientBg2 before:bg-fixed before:bg-cover before:rounded-full  before:aspect-square before:max-h-[70%] before:opacity-50 before:-z-10'
          >
            <img 
              className='max-h-[400px] lg:max-h-full mx-auto'
              src={banner} 
              alt="image" 
            />
          </div>

          {/* 
            <<<<<<<<<<<<<<<<<<<< About / Content >>>>>>>>>>>>>>>>>>>>
          */}

          <div className='my-auto'>
            <h6>
              who are we?
            </h6>

            <h2>
              Company that believes in the power of <span className="highlight">creative</span> strategy.
            </h2>

            <p className='mb-[30px]'>
              Vestibulum auctor tristique orci et tincidunt. Nunc ut auctor neque. Donec et commodo quam, sit amet vestibulum sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus quis risus auctor, blandit erat vel, bibendum mauris. Mauris at elit velit. Nulla eu velit a ante bibendum blandit. Integer vitae dictum ligula. Pellentesque mollis velit a ex aliquet dictum.
            </p>

            <div 
              className='grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[40px]'
            >

              {featureList.map(({id, text}) => {
                return (
                  <div 
                    key={id}
                    className='flex gap-[10px] items-start'
                  >
                    <div
                      className='grid place-content-center w-[22px] h-[22px] rounded-[.5rem] bg-tertiaryLight p-1 mt-1'
                    >
                      <BiCheck size={16} />
                    </div>

                    <p className='leading-tight'>
                      {text}
                    </p>
                  </div>
                )
              })}
              
            </div>
          </div>
        </div>
      
    
        <div className='pt-[50px]'>
          <div 
            className='grid grid-cols-1 md:grid-cols-3 gap-[40px]'
          >

            {aboutList.map(({id, title, text}) => {
              return (
                <div
                  key={id}
                  className='flex gap-[15px]'
                >

                  <div 
                    className='grid place-content-center aspect-square h-[44px] w-[44px] rounded-[1rem] bg-tertiaryLight'
                  >
                    <p 
                      className='text-[18px] font-medium text-tertiary '
                    >
                      {id}
                    </p>
                  </div>

                  <div>
                    <h4 className='mb-[10px]'>
                      {title}
                    </h4>

                    <p>
                      {text}
                    </p>
                  </div>

                </div>
              )
            })}

          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default About