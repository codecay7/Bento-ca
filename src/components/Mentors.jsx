import { motion } from 'framer-motion'

const mentors = [
  {
    name: 'Krishna',
    role: 'Head Chef & Founder',
    bio: 'With over 10 years of experience in pastry arts, Krishna brings her expertise in Japanese-inspired cake design to every class.',
    image: '/placeholder-mentor.jpg'
  },
  {
    name: 'Sarah',
    role: 'Pastry Expert',
    bio: 'Specializing in intricate designs and flavor combinations, Sarah ensures every student masters the fundamentals.',
    image: '/placeholder-mentor.jpg'
  },
  {
    name: 'Michael',
    role: 'Creative Director',
    bio: 'A master of modern cake aesthetics, Michael helps students develop their unique artistic style.',
    image: '/placeholder-mentor.jpg'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Mentors() {
  return (
    <section id="about" className="py-24 bg-brand-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
            Meet your sweet mentors
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Learn from our experienced team of pastry chefs who are passionate about sharing their knowledge and creativity.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.name}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="aspect-[4/3] bg-brand-100">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-brand-500">Mentor photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                <p className="mt-1 text-sm text-brand-500">{mentor.role}</p>
                <p className="mt-4 text-gray-600">{mentor.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 