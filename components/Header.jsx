import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion";

const Header = ({name, socials}) => {
  return (
    <header style={{ zIndex: 5 }} className="z-99 sticky top-0 items-center flex-row justify-between flex md:px-5 bg-black">
        {/* logo/name */}
        
        
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}

        transition={{
            duration: 1.5
        }}
        className="flex items-center">
        <h1 className="text-white/80 text-3xl md:text-3xl hidden md:inline-block font-extrabold uppercase tracking-[8px]"><a href="/">{name}</a></h1>
        </motion.div>
        
        


        {/* social Icons */}
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}

        transition={{
            duration: 1.5
        }}
        className="flex flex-row items-center ">

            {socials?.map(account => (
                 <SocialIcon
                 fgColor="red"
                 bgColor="transparent"
                 url={account}
                />

            ))}



           

            {/* <SocialIcon
             fgColor="red"
             bgColor="transparent"
            url="https://twitter.com"/>

            <SocialIcon
             fgColor="red"
             bgColor="transparent"
              url="https://youtube.com"/>

            <SocialIcon
             fgColor="red"
             bgColor="transparent"
              url="https://github.com"/> */}


        </motion.div>
    </header>
  )
}

export default Header