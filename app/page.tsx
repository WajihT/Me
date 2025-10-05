"use client";
import { motion } from "framer-motion";
import { skills } from "./utils/constants";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col w-full sm:w-[100%] md:w-[70%] lg:w-[50%] p-5 sm:p-2 md:p-4 lg:p-5 mt-3">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">Cybersecurity Enthusiast & Software Developer</h1>
          <div className="flex w-full text-[14px] sm:text-[16px] text-justify">
              Hey! I'm a Computer Science student and cybersecurity enthusiast, currently studying at the University of Augsburg. I previously studied at the Technical University of Munich (TUM) and now work as a Working Student at Brainlab.
              I'm passionate about building products that make a difference, whether by improving someone’s daily life or simply letting me have fun while exploring new technologies. <br/>
              I'm also building my own home lab, where I host and experiment with self-deployed services to deepen my hands-on experience. <br/>
              Outside of work and study, I'm a big fan of Goldfinches and Canaries. I'm currently on my journey toward earning the CPTS (Certified Penetration Testing Specialist) certification and continuously learning more about ethical hacking and network security.
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
