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
                      <div className="cake-container">
                        <div className="cake">
                          <div className="cake-top"></div>
                          <div className="cake-bottom"></div>
                          <div className="cake-decoration">
                            <div className="decoration-1"></div>
                            <div className="decoration-2"></div>
                            <div className="decoration-3"></div>
                          </div>
                        </div>
                      </div>
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

      <style jsx>{`
        .cake-container {
          perspective: 1000px;
          width: 60px;
          height: 60px;
        }

        .cake {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: rotate 8s infinite linear;
        }

        .cake-top {
          position: absolute;
          width: 100%;
          height: 20px;
          background: #FFB6C1;
          border-radius: 50% 50% 0 0;
          transform: translateZ(20px);
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }

        .cake-bottom {
          position: absolute;
          width: 100%;
          height: 40px;
          background: #FF69B4;
          border-radius: 0 0 50% 50%;
          transform: translateZ(0);
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }

        .cake-decoration {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .decoration-1, .decoration-2, .decoration-3 {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #FF1493;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }

        .decoration-1 {
          top: 10px;
          left: 15px;
          transform: translateZ(25px);
        }

        .decoration-2 {
          top: 10px;
          right: 15px;
          transform: translateZ(25px);
        }

        .decoration-3 {
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%) translateZ(25px);
        }

        @keyframes rotate {
          0% {
            transform: rotateY(0deg) rotateX(0deg);
          }
          25% {
            transform: rotateY(90deg) rotateX(10deg);
          }
          50% {
            transform: rotateY(180deg) rotateX(0deg);
          }
          75% {
            transform: rotateY(270deg) rotateX(-10deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(0deg);
          }
        }
      `}</style>
    </div>
  )
} 