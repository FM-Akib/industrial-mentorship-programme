import React from 'react';
import hero from '../assets/Hero.png';
const Hero = () => {
  
    return (
        <div className="bg-slate-50 md:py-12 mt-[132px]">
        
        <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
            <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                <h1 className="text-gray-600 font-bold text-4xl xl:text-5xl">
                    Industrial Mentorship
                     <span className="text-indigo-400"> Programme</span>
                </h1>
                <p className="text-gray-600 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                </p>
                <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                    <a href="javascript:void(0)" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                        Get started
                    </a>
                    <a href="javascript:void(0)" className="px-7 py-3 w-full bg-gray-700 text-white text-center rounded-md block sm:w-auto">
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