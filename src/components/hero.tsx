'use client'

import { motion } from 'framer-motion'


export default function Hero() {
  return (
<div className="relative h-[70vh] w-full overflow-hidden  bg-gray-100">
      

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 flex flex-col justify-center px-8 md:px-20"
      >
        <span className="font-bold md:text-3xl  mb-4" style={{color:"#018171"}}>Mahmoud Mohamed Morsi</span>
        <h1 className="text-5xl md:text-4xl font-bold tracking-wider mb-12">
        Front-end 
        <br /> and Mobile developer
        </h1>

        <div className=" gap-8 max-w-3xl bg-white items-center content-center flex justify-between p-4 rounded-3xl">
          <div>
            <h2 className="font-medium mb-2">Egypt</h2>
            <p className="text-sm text-gray-600">Aswan, Cairo</p>
          </div>
          <div >
            <h2 className="font-medium mb-2">Remote</h2>
            <p className="text-sm text-gray-600">Worldwide</p>
          </div>
          <div>
            <h2 className="font-medium mb-2">Available</h2>
            <p className="text-sm text-gray-600">For Freelance and Hire</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

