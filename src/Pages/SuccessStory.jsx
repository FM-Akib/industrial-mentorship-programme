import React, { useEffect, useState } from 'react';
import StoryCard from '../components/Success Story/StoryCard';

const SuccessStory = () => {
    const [story,setStory] = useState();
    useEffect(() => {
        fetch('successStory.json')
        .then(response=>response.json())
        .then(data => setStory(data))
    },[])

    return (
                <div className="max-w-7xl mx-auto my-8 px-2">

<div className="py-10 flex tracking-tight text-gray-600 justify-center text-3xl md:text-4xl font-bold">
    Success Stories
</div>

<ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">

   {
      story?.map(Astory=> <StoryCard
      key={Astory.id}
      story={Astory}
      ></StoryCard> )
   }

    
</ul>


 </div>
    );
};

export default SuccessStory;