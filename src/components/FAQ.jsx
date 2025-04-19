import { motion } from 'framer-motion'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const faqs = [
  {
    question: "Do I need any prior baking experience?",
    answer: "No prior experience is needed! Our workshops are designed for all skill levels, from complete beginners to experienced bakers. We'll guide you through every step of the process."
  },
  {
    question: "What's included in the workshop fee?",
    answer: "The workshop fee includes all materials, tools, ingredients, an apron to use during the class, lunch and refreshments, a recipe booklet, and a certificate of completion. You'll also get to take home your creations!"
  },
  {
    question: "How long is the workshop?",
    answer: "The workshop runs for 6 hours, from 10:00 AM to 4:00 PM. This includes a lunch break and plenty of hands-on practice time."
  },
  {
    question: "What's your cancellation policy?",
    answer: "We offer a full refund for cancellations made at least 7 days before the workshop date. Cancellations made within 48 hours of the workshop are eligible for a 50% refund."
  },
  {
    question: "How many students are in each class?",
    answer: "To ensure personalized attention, we limit our class size to a maximum of 6 students per workshop."
  }
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a different question? Feel free to reach out using the contact form below.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Disclosure>
                  {({ open }) => (
                    <div className="bg-brand-50 rounded-2xl">
                      <Disclosure.Button className="flex w-full justify-between rounded-lg px-6 py-4 text-left">
                        <span className="text-base font-semibold leading-7 text-gray-900">
                          {faq.question}
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-6 w-6 text-brand-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pb-4">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 