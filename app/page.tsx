"use client";
import { motion } from "framer-motion";
import { skills } from "./utils/constants";
import { Analytics } from "@vercel/analytics/react"


export default function Home() {
  return (
    <div className="flex flex-col w-full sm:w-[100%] md:w-[70%] lg:w-[50%] p-5 sm:p-2 md:p-4 lg:p-5 mt-3">
      <div>
        <Analytics/>
        <div className="flex w-full text-[14px] sm:text-[16px] text-justify">
          Hey, I'm a 24-year-old Computer Science Student, Goldfinch and Canary lover,
          currently studying at TUM (Technical University of Munich) and currently working as a Working Student at Brainlab.
          I’m dedicated to build products that make a difference even a small one in someones daily life or let me have fun
          while learning about new technologies. I'm also in my journey to get the CPTS (Certified Penetration Testing Specialist) certification.
        </div>

        {/* Skills section */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-md font-semibold mb-6">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="text-xs border border-gray-500 px-2 py-1  transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
