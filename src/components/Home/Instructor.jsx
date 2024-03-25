import React from 'react';
import Marquee from 'react-fast-marquee';
import Lottie from 'react-lottie';
import linkedin from '../../assets/linkedin.json';


const Instructor = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: linkedin,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <><h2 className="text-center pt-16 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl  pl-8">Meet Our Mentors</h2>
         <Marquee pauseOnHover	speed={100}>
     <div className="flex gap-8 py-24 ">

     {/* <Marquee> */}
           <div className="bg-white  rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 min-w-[250px]">
        <div className="relative">
            <img className="w-full" src="https://i.ibb.co/t8hgBDm/Business-1.png" alt="Product Image"/>
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">Mentor
            </div>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Product Title</h3>
            <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor .</p>
            <div className="flex items-center justify-between">
                <span className="font-bold text-lg">$19.99</span>
                <button className=" text-white font-bold rounded">
                <Lottie  options={defaultOptions} height={40} width={40} />
                </button>
            </div>
        </div>
    </div>

    <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 min-w-[250px]">
        <div className="relative">
            <img className="w-full" src="https://i.ibb.co/cch9m3T/Business.png" alt="Product Image"/>
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
            </div>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Product Title</h3>
            <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor .</p>
            <div className="flex items-center justify-between">
                <span className="font-bold text-lg">$19.99</span>
                <button className=" text-white font-bold py-2 px-4 rounded">
                <Lottie  options={defaultOptions} height={40} width={40} />
                </button>
            </div>
        </div>
    </div>
    {/* </Marquee> */}



     </div>
     </Marquee>
     </>
    );
};

export default Instructor;