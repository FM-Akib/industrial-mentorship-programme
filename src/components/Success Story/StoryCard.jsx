import React from 'react';
import Lottie from 'react-lottie';
import { HiBadgeCheck } from "react-icons/hi";
const StoryCard = ({story}) => {


    // console.log(story);
    const {authorName, companyName, joiningDate, role, linkedinUrl, img, degree, university, phase1Title, phase1Description, phase2Title, phase2Description, phase3Title, phase3Description, phase4Title, phase4Description, imp, adviceforjuniors} = story;
    return (
        <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

        <a className="relative" href="/tool/writey-ai">
            <img className="rounded relative w-full object-cover aspect-video"
                src={img} loading="lazy"/>
        </a>


        <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
            <a href="/tool/writey-ai"
                className="flex justify-center items-center text-xl font-semibold text-green-700  hover:text-green-800 two-lines text-ellipsis">
                <span>{authorName}</span>
                <small className="font-medium text-sm">- {companyName}</small>
            </a>

            <p className="text-gray-600 two-lines">
                Writey A.I is an AI tool that generates original, researched blog posts in minutes, provides content
                optimization advice, and works with a plagiarism-free rule.
            </p>

            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li title="Pricing type"
                    className="flex items-center cursor-pointer gap-0.5 bg-green-100 text-black px-2 py-0.5 rounded-full">
<HiBadgeCheck /><span>{role}</span>
                </li>

            </ul>

            <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                    <span>Content Generation,</span>
                </li>
                <li className="flex items-center gap-2">
                    <span>Marketing,</span>
                </li>
                <li className="flex items-center gap-2">
                    <span>SEO,</span>
                </li>
                <li className="flex items-center gap-2">
                    <span>Writing</span>
                </li>
            </ul>
        </div>
        <button type="button" className="px-8 py-3 font-semibold border-t-4 rounded border-yellow-400 tracking-widest hover:bg-yellow-400 hover:text-gray-700 text-gray-800">READ</button>

    </li>
    );
};

export default StoryCard;