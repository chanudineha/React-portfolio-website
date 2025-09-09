import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa6"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiHtml5, SiCss3 } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 1}}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 1}}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* HTML5 */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(0.8)}
          className="p-4"
        >
          <SiHtml5 className="text-7xl text-orange-600"/>
        </motion.div>

        {/* CSS3 */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(0.9)}
          className="p-4"
        >
          <SiCss3 className="text-7xl text-blue-600"/>
        </motion.div>

        {/* React */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(1)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>

        {/* Next.js */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(1.1)}
          className="p-4"
        >
          <TbBrandNextjs className="text-7xl"/>
        </motion.div>

        {/* MongoDB */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(1.2)}
          className="p-4"
        >
          <SiMongodb className="text-7xl text-cyan-500"/>
        </motion.div>

        {/* Redis */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(0.9)}
          className="p-4"
        >
          <DiRedis className="text-7xl text-red-700"/>
        </motion.div>

        {/* Node.js */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(1.3)}
          className="p-4"
        >
          <FaNodeJs className="text-7xl text-green-500"/>
        </motion.div>

        {/* PostgreSQL */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(1.1)}
          className="p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies;
