
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css';
import { useState } from 'react';

const Navbar = () => {
const [open,setOpen]= useState(false);

    
return (
    <nav className='bg-slate-50 shadow-md w-full fixed top-0 left-0'>
       <div className="md:flex items-center justify-between bg-slate-50 py-4 md:px-60 px-7">

       <div className="font-bold text-2xl cursor-pointer flex  items-center gap-1">
            <img className=" w-24" src={logo}/>
            {/* <span>IMP</span> */}
        </div>


        <div onClick={() =>setOpen(!open)} className="md:hidden absolute right-8 top-6 cursor-pointer group flex h-16 w-16  items-center justify-center rounded-3xl bg-white  hover:bg-slate-200">
    <div className="space-y-2">
        <span className={open?`block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out translate-y-1.5 rotate-45`:'block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out '}></span>
        <span className={open? `block h-1 origin-center rounded-full bg-orange-500 transition-transform ease-in-out w-10 -translate-y-1.5 -rotate-45`:"block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out  "}></span>
    </div>
</div>

        


            <ul className={`${open? 'top-24':'top-[-490px]'} md:z-auto z-[-1] left-0 absolute md:static md:flex md:items-center pb-12 md:pb-0 bg-slate-50 pl-9 md:pl-0 transition-all duration-500 ease-in w-full md:w-auto`}>
            <li className="md:ml-8 md:my-0 my-7 font-semibold"><Link className="text-gray-700 hover:text-yellow-500 duration-500" to="/">Home</Link></li>
            <li className="md:ml-8 md:my-0 my-7 font-semibold"><Link className="text-gray-700 hover:text-yellow-500 duration-500" to="/">Blog</Link></li>
            <li className="md:ml-8 md:my-0 my-7 font-semibold"><Link className="text-gray-700 hover:text-yellow-500 duration-500" to="/">Success story</Link></li>
            <li className="md:ml-8 md:my-0 my-7 font-semibold"><Link className="text-gray-700 hover:text-yellow-500 duration-500" to="/">Registration</Link></li>
           
            <button type="button" className=" md:ml-8 px-8 py-3 font-semibold rounded bg-green-700 text-gray-100">Login</button>
            </ul>


       </div>
        
    </nav>
    );
};

export default Navbar;