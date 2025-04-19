import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/20/solid'

const testimonials = [
  {
    content: "The workshop exceeded my expectations! I learned so much about bento cake design and the instructors were incredibly supportive.",
    author: "Sarah M.",
    role: "Home Baker",
    rating: 5
  },
  {
    content: "A perfect blend of creativity and technical skills. I left feeling confident in my ability to create beautiful bento cakes.",
    author: "James L.",
    role: "Culinary Student",
    rating: 5
  },
  {
    content: "The small class size meant I got plenty of personal attention. The techniques I learned were invaluable.",
    author: "Emma W.",
    role: "Cafe Owner",
    rating: 5
  },
  {
    content: "Such a fun and informative workshop! The instructors are passionate and the atmosphere is welcoming.",
    author: "David R.",
    role: "Hobby Baker",
    rating: 5
  }
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
            Happy bakers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't just take our word for it - hear what our students have to say about their experience.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={index}
              variants={itemVariants}
              className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="flex gap-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-brand-400" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-6 text-gray-900">
                <p>{`"${testimonial.content}"`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <span className="text-brand-500 font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 