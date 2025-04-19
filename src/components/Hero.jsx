import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative pt-24 overflow-hidden">
      <div className="container py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-playfair">
              Master the art of{' '}
              <span className="text-brand-500">Bento Cakes</span>{' '}
              in London
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join our exclusive workshops and learn to create stunning Japanese-inspired bento cakes. Perfect for beginners and intermediate bakers looking to expand their skills.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#join" className="btn-primary">
                Register Now
              </a>
              <a href="#workshops" className="btn-secondary">
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="aspect-[4/3] w-full max-w-xl lg:max-w-none">
              <div className="absolute inset-0 rounded-2xl bg-brand-100/40 transform -rotate-6" />
              <div className="absolute inset-0 rounded-2xl bg-brand-100/60 transform rotate-2" />
              <div className="relative rounded-2xl bg-gradient-to-br from-brand-200 to-brand-400 shadow-xl overflow-hidden">
                <div className="aspect-[4/3] flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-medium text-xl mb-2">Beautiful Bento Cakes</h3>
                    <p className="text-white/80">Create your own masterpiece</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-brand-200 to-brand-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  )
} 