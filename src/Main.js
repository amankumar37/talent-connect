import React from "react";


function Content(){
     
             return(
                <main className= "  bg-purple-200 flex  ">
                  <div className= "  px-80 my-36 pl-12 w-1/2">
                    
                       <h1 className= "  text-6xl font-bold font-sans text-purple-800">Unlocking Opportunities </h1>
                       <p className= "  text-slate-500 text-xl my-4 ">At TalentConnect, we bridge the gap between employers and exceptional talent, creating meaningful connections that drive success. Our platform offers a seamless experience, unlocking a world of opportunities for job seekers while empowering businesses to find the perfect fit for their teams.</p>
                       
                  </div>

                  <div  >
                        <h1 className=" text-slate-800 text-3xl my-4 " >Enter your details</h1>
                        <form className= " my-0.5 flex flex-col"> 
                               <label forHtml="name" className= " my-0.5 text-slate-700 text-xl" >Full Name</label>
                               <input name="name"  type="text" placeholder="Enter Full Name" className= " my-0.5 rounded-xl h-9 font-bold w-96" />

                               <label forHtml="email" className= " my-0.5 text-slate-700 text-xl" >Email</label>
                               <input name="email"  type="email" placeholder="Enter email" className= " my-0.5 rounded-xl h-9 font-bold w-96" />

                               <label forHtml="password" className= " my-0.5 text-slate-700 text-xl" >Password</label>
                               <input name="password"  type="password" placeholder="Enter password" className= " my-0.5 rounded-xl h-9 font-bold w-96" />

                               <label forHtml="number" className= " my-0.5 text-slate-700 text-xl" >Contact Number</label>
                               <input name="number"  type="text" placeholder="Enter number" className= " my-0.5 rounded-xl h-9 font-bold w-96" />

                               <label forHtml="one" className= " my-0.5 text-slate-700 text-xl" >Enter Desired Postion</label>
                               <input name="one"  type="text" placeholder="Enter position" className= " my-0.5 rounded-xl h-9 font-bold w-96" />

                               <label forHtml="two" className= " my-0.5 text-slate-700 text-xl" >Availaibility</label>
                               <input name="two"  type="text" placeholder="Enter YES if available onsite otherwise NO" className= " my-0.5 rounded-xl h-9 font-bold w-96" />

                               <label forHtml="three" className= " my-0.5 text-slate-700 text-xl" >Work Authorization</label>
                               <input name="three"  type="text" placeholder="Work Authorization" className= " my-0.5 rounded-xl h-9 font-bold w-96" />

                               <label forHtml="four" className= " my-0.5 text-slate-700 text-xl" >Expected CTC</label>
                               <input name="four"  type="text" placeholder="Enter Amount in rupees" className= " my-0.5 rounded-xl h-9 font-bold w-96" />

                               <button className= "  w-32 my-7 shadow bg-purple-500 hover:bg-purple-400 active:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Register
      </button>
                        </form>

                        <h1 className= "  my-5">Already a user? <span className= " my-0.5 text-purple-700 cursor-pointer font-bold">Sign In</span> </h1>


                  </div>

            </main>
             )
    
}


export default Content;