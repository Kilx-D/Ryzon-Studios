import React from 'react'
import {PhoneIcon, EnvelopeIcon} from "@heroicons/react/24/outline"

import {useForm, Resolver, SubmitHandler} from "react-hook-form";
import Title from './Title';

const Contact = ({email, phone, title}) => {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => {
    window.location.href = `mailto:${email}?subject=${data.subject}&body=Hi, my name is ${data.name}. \n${data.message} \n from (${data.email})`

  }



  return (
    <div className="  h-screen flex relative  flex-col text-center md:text-left md:flex-row max-w-5xl  px-10 justify-evenly mx-auto items-center ">
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"></h3>

    <div className="flex flex-col space-y-10 ">
    
        <Title
        title={title}
        invert={false}
        />
        
        <div className="space-y-10">
          <div className="flex  items-center space-x-5 justify-center">

            <PhoneIcon className="text-[#ff0000] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">{phone}</p>
          </div>

         
          

          <div className="flex  items-center space-x-5 justify-center">

            <EnvelopeIcon className="text-[#ff0000] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">{email}</p>
          </div>
          
          
        </div>



        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2  w-fit  mx-auto">
          <div className="flex space-x-2">
            <input {...register("name")} placeholder="name" className="outline-none bg-slate-400/10 rounded-sm border-b   md:px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#FF0000]/40 focus:text-[#FF0000]/40 hover:border-[#FF0000]/40 w-[50%]"  type="text" />
            <input {...register("email")} placeholder="email" className="outline-none bg-slate-400/10 rounded-sm border-b  md:px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#FF0000]/40 focus:text-[#FF0000]/40 hover:border-[#FF0000]/40 w-[50%]" type="email" />
          </div>

          <input {...register("subject")} placeholder="subject"  className="outline-none bg-slate-400/10 rounded-sm border-b md:px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#FF0000]/40 focus:text-[#FF0000]/40 hover:border-[#FF0000]/40 w-[100%]" type="text" />

          <textarea {...register("message")} style={{resize: "none"}} placeholder="message" className="outline-none bg-slate-400/10 rounded-sm border-b md:px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#FF0000]/40 focus:text-[#FF0000]/40 w-[100%] hover:border-[#FF0000]/40" />
          <button type="submit" className="bg-[#FF0000] animate-pulse py-5 px-10 text-black font-bold text-lg">Submit</button>
        </form>
        
      </div>
</div>
  )
}

export default Contact