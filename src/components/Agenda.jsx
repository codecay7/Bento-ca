import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const agenda = [
  {
    time: '10:00 AM',
    title: 'Introduction to Bento Cakes',
    description: 'Learn about the history and art of Japanese-inspired bento cakes.',
  },
  {
    time: '10:30 AM',
    title: 'Essential Tools & Ingredients',
    description: 'Get familiar with the tools and premium ingredients we\'ll be using.',
  },
  {
    time: '11:00 AM',
    title: 'Basic Techniques',
    description: 'Master the fundamental techniques of cake sculpting and decoration.',
  },
  {
    time: '12:00 PM',
    title: 'Lunch Break',
    description: 'Enjoy a delicious lunch while discussing design ideas with fellow bakers.',
  },
  {
    time: '1:00 PM',
    title: 'Advanced Decoration',
    description: 'Learn advanced piping techniques and create intricate designs.',
  },
  {
    time: '2:30 PM',
    title: 'Photography Session',
    description: 'Capture your creation with professional food photography tips.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Agenda() {
  return (
    <section id="workshops" className="py-12 sm:py-24 bg-brand-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
            Culinary workshop agenda
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            A full day of hands-on learning, creativity, and fun. All materials and tools are provided.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-8 sm:mt-16 max-w-4xl"
        >
          <div className="grid gap-6 sm:gap-8">
            {agenda.map((item, index) => (
              <motion.div
                key={item.time}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row bg-white/50 rounded-xl p-4 sm:p-6"
              >
                {/* Time - Always visible on top for mobile, left side for desktop */}
                <div className="mb-4 md:mb-0 md:w-48 md:flex-shrink-0 md:pr-8">
                  <time className="text-sm font-semibold text-brand-500">
                    {item.time}
                  </time>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 sm:mt-16 flex justify-center px-4 sm:px-0">
          <div className="relative isolate overflow-hidden bg-white px-4 sm:px-6 py-6 sm:py-8 md:px-10 md:py-12 rounded-2xl shadow-lg w-full max-w-2xl">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold leading-8 text-gray-900">
                What to bring?
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-7 text-gray-600">
                Just bring your enthusiasm and creativity! We provide all necessary tools, ingredients, and an apron for you to use during the workshop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 