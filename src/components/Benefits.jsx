import { motion } from 'framer-motion'
import {
  CakeIcon,
  AcademicCapIcon,
  UserGroupIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const benefits = [
  {
    name: 'Expert Guidance',
    description: 'Learn from professional pastry chefs with years of experience in Japanese-inspired cake design.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Hands-on Experience',
    description: 'Create your own stunning bento cakes with personalized guidance and support.',
    icon: CakeIcon,
  },
  {
    name: 'Small Class Size',
    description: 'Enjoy focused attention with our intimate class sizes of maximum 6 students.',
    icon: UserGroupIcon,
  },
  {
    name: 'Creative Freedom',
    description: 'Develop your unique style while mastering essential techniques and design principles.',
    icon: SparklesIcon,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
            Perfect for you if...
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're a beginner or an experienced baker, our workshops are designed to help you create Instagram-worthy bento cakes.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-6xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.name}
              variants={itemVariants}
              className="relative p-6 bg-brand-50 rounded-2xl"
            >
              <div className="absolute top-6 left-6 bg">
                <span className="inline-flex items-center justify-center rounded-lg bg-[#cb2e48] p-2">
                  <benefit.icon className="h-6 w-6 text-brand-100" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold pt-5 leading-8 text-gray-900">
                  {benefit.name}
                </h3>
                <p className="mt-2 text-base  pt-2  text-gray-500">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl bg-brand-500 px-6 py-10 sm:px-12 sm:py-16"
          >
            <div className="relative mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold tracking-tight text-white font-playfair">
                Ready to start your bento cake journey?
              </h3>
              <p className="mt-4 text-lg text-brand-50">
                Join our next workshop and learn to create beautiful bento cakes that will wow your friends and family.
              </p>
              <div className="mt-8">
                <a
                  href="#join"
                  className="rounded-md bg-white px-6 py-3 text-base font-semibold text-brand-500 shadow-sm hover:bg-brand-50 transition-colors duration-200"
                >
                  Join Workshop
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 