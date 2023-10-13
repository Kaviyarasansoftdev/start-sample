import React from "react";


const Footer =()=>{
    return(
        <footer>
  <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
 
    <div className="grid grid-cols-1  items-center gap-5 text-center">
      <div className="flex justify-between items-center flex-wrap">
      <div>
        <a className="flex-none text-xl font-light text-black dark:text-white" href="#" aria-label="Brand">Copyright © Your Website 2023</a>
      </div>
  
     
      <ul className="text-center ">
        <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
          <a className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="#">
          Privacy
          </a>
        </li>
        <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
          <a className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="#">
          Terms 
          </a>
        </li>
        <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
          <a className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200" href="#">
          Contact
          </a>
        </li>
      </ul>
      </div>

  
      
     
    </div>

  </div>
</footer>
    )
}
export default Footer;