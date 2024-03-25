import React from 'react';
import hero from '../../assets/Hero.png';
const Hero = () => {
  
    return (
        <div className="bg-slate-50 md:py-12 pt-[100px] md:pt-[130px]">
        
        <section className="mt-24 mx-auto max-w-screen-2xl pb-12 px-4 items-center lg:flex md:px-8">
            <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                <h1 className="text-gray-600 font-bold text-3xl xl:text-5xl">
                    Industrial Mentorship
                     <span className="text-indigo-400"> Programme</span>
                </h1>
                 <div className="w-max">
    <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-[#00BF63] pr-5 text-lg md:text-2xl text-gray-500 font-semibold">
      A Journey of undergraduate to industry...
    </p>
  </div>
                <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                    <a href="javascript:void(0)" className="px-7 py-3 w-full bg-white text-gray-800 text-center font-semibold rounded-md shadow-md block sm:w-auto">
                        Get started
                    </a>
                    <a href="javascript:void(0)" className="px-7 py-3 w-full bg-[#00BF63] text-white text-center font-semibold rounded-md block sm:w-auto">
                        Try it out
                    </a>
                </div>
            </div>
            <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                <img src={hero} className="w-full mx-auto sm:w-10/12  lg:w-full" />
            </div>
        </section>
    </div>
    );
};

export default Hero;