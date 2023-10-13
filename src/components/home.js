
import React from "react";
 

const Home = () => {
    return(
        <section>
        <div className=" max-w-7xl w-full mx-auto px-4  sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center  ">
                 
                <div>
                    <div className="inline-flex px-2 py-1 gap-x-3 rounded-lg border text-[80%] font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mb-5 " >
                        <p >DESIGN ·</p>
                        <p >DEVELOPMENT ·</p>
                        <p >MARKETING</p>
                        


                    </div>
                    <div className="text-slate-500 text-3xl font-light">I can help your business to</div>
                   <div className="my-3 "> <h1 className="text-5xl h-[8rem] lg:h-[10rem] inline-block font-bold mb-4 lg:text-7xl mt-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Get online and grow fast</h1>
                   </div>
                    
               
                   <div className="flex gap-5 flex-wrap mt-7">
                   <button type="button" className="py-4 px-8 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                        Resume
                    </button>

                    <button type="button" className="py-4 px-10 inline-flex justify-center items-center gap-2 rounded-md border  font-semibold bg-white text-black hover:bg-black hover:text-white focus:outline-none   border-black  focus:ring-offset-2 transition-all text-sm">
                    Projects
                  </button> 
                   </div>
                </div>
             </div>
                <div ><img className="h-[80%] mt-20 bg-gradient-to-r from-indigo-700 to-pink-600 rounded-[80px]" src="https://startbootstrap.github.io/startbootstrap-personal/assets/profile.png" alt=""/></div>
            </div>
        </div>
        <section className="py-9">
        
        <div className="max-w-5xl w-full mx-auto px-4  sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 ">
                <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">About Me</h2> 
              
                <h1 className="mt-2 text-gray-500 text-xl lg:text-2xl font-light text-center">
                My name is Start Bootstrap and I help brands grow.
                </h1> 
                <p className="text-slate-500  text-xs lg:text-xl text-center font-extralight mt-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?

                 </p>
                 
                
                 </div>


            </div>
            <div className="text-center pt-4 text-4xl  ">
            <i className="fa-brands fa-twitter bg-gradient-to-r from-indigo-900 to-red-500 text-transparent bg-clip-text px-3"></i>
            <i className="fa-brands fa-linkedin bg-gradient-to-r from-indigo-900 to-pink-500 text-transparent bg-clip-text px-3"></i>
            <i className="fa-brands fa-github bg-gradient-to-r from-indigo-900 to-pink-500 text-transparent bg-clip-text px-3"></i>
            </div>
        
            </section>
    </section>
  
    ) 
  }
  
  export default Home;