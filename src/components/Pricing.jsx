import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'

const features = [
  'Full day workshop (6 hours)',
  'All materials and tools provided',
  'Take home your creations',
  'Professional photography of your work',
  'Recipe booklet',
  'Certificate of completion',
  'Lunch and refreshments included',
  'Post-workshop support',
]

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
            Delicious deal
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join our exclusive workshop and master the art of bento cake making
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-3xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Workshop Membership
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Perfect for beginners and intermediate bakers who want to master the art of bento cakes. Limited to 6 students per class for personalized attention.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-brand-500">
                What's included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-brand-500" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Pay once, create forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">£199</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">GBP</span>
                </p>
                <a
                  href="#join"
                  className="mt-10 block w-full btn-primary"
                >
                  Book Your Spot
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Limited spots available. Secure yours today!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            * Cancellation policy: Full refund available up to 7 days before the workshop. 50% refund up to 48 hours before.
          </p>
        </div>
      </div>
    </section>
  )
}