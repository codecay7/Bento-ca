import { motion } from 'framer-motion'

const images = [
  {
    title: 'Pink floral bento cake',
    color: 'from-pink-200 to-pink-400',
    className: 'col-span-1 row-span-2',
  },
  {
    title: 'Character bento cake',
    color: 'from-purple-200 to-purple-400',
    className: 'col-span-1 row-span-1',
  },
  {
    title: 'Minimalist bento cake',
    color: 'from-blue-200 to-blue-400',
    className: 'col-span-1 row-span-1',
  },
  {
    title: 'Pastel themed bento cake',
    color: 'from-green-200 to-green-400',
    className: 'col-span-1 row-span-2',
  },
  {
    title: 'Seasonal bento cake',
    color: 'from-yellow-200 to-yellow-400',
    className: 'col-span-1 row-span-1',
  },
  {
    title: 'Modern bento cake',
    color: 'from-red-200 to-red-400',
    className: 'col-span-1 row-span-1',
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function Gallery() {
  return (
    <section className="py-12 sm:py-24 bg-brand-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
            What we have done together
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Take a look at some of the beautiful creations made by our students during our workshops.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-2xl overflow-hidden ${image.className} group`}
            >
              <div className="aspect-[4/5] w-full h-full">
                <div className={`w-full h-full bg-gradient-to-br ${image.color} flex items-center justify-center p-6`}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-medium text-lg">{image.title}</h3>
                    <p className="text-white/80 text-sm mt-2">Coming soon</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 sm:mt-16 text-center">
          <a
            href="#join"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-brand-500 hover:bg-brand-600 transition-colors duration-200"
          >
            Create Your Own
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 