'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const CircularProgress = dynamic(() => import('./circular-progress'), { ssr: false })

const skills = [
  { label: 'HTML5', percentage: 95 },
  { label: 'CSS3', percentage: 97 },
  { label: 'Javascript', percentage: 90 },
  { label: 'REACT.JS', percentage: 90 },
  { label: 'REACTNETVE', percentage: 80 },
  { label: 'Next', percentage: 90 },
  { label: 'SQL', percentage: 90 },
  { label: 'WORDPRESS', percentage: 70 },
  { label: 'DATABASE', percentage: 90 },
  { label: 'BOOTSTRAP', percentage: 95 },
  { label: 'FIREBASE', percentage: 90 },
  { label: 'Tailwind CSS', percentage: 90 },
 
]

export default function About() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 mx-auto mb-8" style={{color:"#018171"}}></div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg mb-16 leading-relaxed"
          >
           Front-End Developer specializing in web and mobile application development using React and React Native, with extensive experience building responsive and seamless interfaces that enhance user experience.
I hold certifications from the Information Technology Institute (ITI) and am proficient in the latest web technologies such as HTML5, CSS3, JavaScript (ES6+), React, React Native, Firebase, Node.js, MySQL, and Flutter.
I have completed several practical projects that demonstrate my ability to transform ideas into attractive and functional user interfaces.
I am proficient in working within teams using project management tools such as Git and GitHub, and I always strive for continuous improvement and keep up with the latest trends in interface design and development.
I am passionate about creating digital solutions that make a real difference to the user experience, and I seek new opportunities to contribute my skills to ambitious projects and creative work environments.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {skills.map((skill) => (
              <CircularProgress
                key={skill.label}
                percentage={skill.percentage}
                label={skill.label}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
