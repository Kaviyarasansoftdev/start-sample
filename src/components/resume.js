import React from "react";
function Resume() {
    return (
      <>
      <section className="py-9 bg-slate-100">
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1">
            <div className="flex items-center justify-center">
                <div className=" text-5xl font-bold text-center bg-gradient-to-r from-indigo-900 to-pink-500 inline-block text-transparent bg-clip-text">Resume</div>
            </div>
        </div>
    </div>
</section>
<section className="py-9 bg-slate-100">
    <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1">

            <div className="flex items-center justify-between  flex-wrap">
                <div className="font-bold text-3xl text-blue-700">
                  Experience
                  </div>
            
                  <div className=" ">
                <button type="button" class=" py-3  px-4  justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-700 text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                    <i className="fa-solid fa-download"></i>
                    Download Resume
                </button>
                
                </div>
            </div>
        </div>
     
        
        <div className="h-[30%] mt-10 border-2 bg-white shadow-sm rounded-[10px] grid grid-cols-1 lg:grid-cols-2">
            <div className=" px-10 py-10  border">
            <h1 className="text-indigo-600">2019 - Present</h1>
                <h1 className="font-bold">Web Developer</h1>
                <p className="font-light">Stark Industries</p>
                <p className="font-light">Los Angeles, CA</p>
            </div>
                <div className="mt-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.
                </div>
        </div>
        <div className="h-[30%] mt-10 border-2 bg-white shadow-sm rounded-[10px] grid grid-cols-1 lg:grid-cols-2">
            <div className=" px-10 py-10 border">
                <h1 className="text-indigo-600">2017 - 2019</h1>
                <h1 className="font-bold">SEM Specialist</h1>
                <p className="font-light">Wayne Enterprises</p>
                <p className="font-light">Gotham City, NY</p>
            </div>
                <div className="mt-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.
                </div>
        </div>
    </div>
    
    
</section>
<section className="py-9 ">
<div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
 <div>
  <h1 className="font-bold text-3xl text-pink-500">
  Education
  </h1>
  </div>
  <div className="h-[30%] mt-10 border-2 bg-white shadow-sm rounded-[10px] grid grid-cols-1 lg:grid-cols-2">
            <div className=" px-10 py-10  border">
            <h1 className="text-rose-600">2015 - 2017</h1>
                <h1 className="font-bold">Barnett College</h1>
                <p className="font-light">Fairfield, NY</p>
                <p className="font-light">Los Angeles, CA</p>
            </div>
                <div className="mt-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.
                </div>
        </div>
        <div className="h-[30%] mt-10 border-2 bg-white shadow-sm rounded-[10px] grid grid-cols-1 lg:grid-cols-2">
            <div className=" px-10 py-10  border">
            <h1 className="text-rose-600">2015 - 2017</h1>
                <h1 className="font-bold">Barnett College</h1>
                <p className="font-light">Fairfield, NY</p>
                <p className="font-light">Los Angeles, CA</p>
            </div>
                <div className="mt-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.
                </div>
        </div>
        
        


 </div>
</section>





























</> 
      
    );
  }
  
  export default Resume;