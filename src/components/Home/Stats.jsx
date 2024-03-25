import React from 'react';
import impact from '../../assets/impact.json';
import Lottie from 'react-lottie';
const Stats = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: impact,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div className="bg-slate-50  pt-12 sm:pt-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="mx-auto max-w-xl  text-center flex items-center">
      <h2 className=" text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl  pl-8">The impact of this Platform   </h2><Lottie  options={defaultOptions} height={80} width={80} />
    </div>

    
  </div>
  <div className="mt-10 bg-white  pb-12 sm:pb-16">
    <div className="relative">
      <div className="absolute inset-0 h-1/2 bg-slate-50"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <dl className="rounded-lg bg-white shadow-xl sm:grid sm:grid-cols-3">

            <div className="flex flex-col border-b border-gray-300 p-6 text-center sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 ">Students enrolled so far</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-[#00BF63]"><span>50</span>+</dd>
            </div>

            <div className="flex flex-col border-t border-b border-gray-300  p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 ">secured their jobs or internships in various software companies.</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-[#00BF63]"><span>20</span>+</dd>
            </div>

            <div className="flex flex-col border-t border-gray-300  p-6 text-center sm:border-0 sm:border-l">
              <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 ">Industry experts or mentors are involved</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-[#00BF63]"><span>10</span>+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Stats;