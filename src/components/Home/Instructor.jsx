import React from 'react';

const Instructor = () => {
    return (
        <><h2 className="text-center pt-16 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl  pl-8">Meet Our Mentors</h2>
     <div className="flex gap-8 py-24 ">


           <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-[250px]">
        <div className="relative">
            <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image"/>
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
            </div>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Product Title</h3>
            <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor .</p>
            <div className="flex items-center justify-between">
                <span className="font-bold text-lg">$19.99</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Buy Now
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
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                </button>
            </div>
        </div>
    </div>
     </div>
     </>
    );
};

export default Instructor;