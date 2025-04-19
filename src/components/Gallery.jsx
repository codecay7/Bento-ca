import { motion } from 'framer-motion'
import cake1 from '../assets/images/cake-1.jpg'
import cake2 from '../assets/images/cake-2.jpg'
import cake3 from '../assets/images/cake-3.jpg'
import cake4 from '../assets/images/cake-4.jpg'
import cake5 from '../assets/images/cake-5.jpg'
import cake6 from '../assets/images/cake-6.jpg'

const images = [
  {
    src: cake1,
    alt: 'Strawberry Shortcake Bento',
    description: 'A delicate strawberry shortcake with fresh cream and berries'
  },
  {
    src: cake2,
    alt: 'Chocolate Ganache Bento',
    description: 'Rich chocolate cake with smooth ganache and gold leaf decoration'
  },
  {
    src: cake3,
    alt: 'Matcha Green Tea Bento',
    description: 'Traditional Japanese matcha cake with red bean filling'
  },
  {
    src: cake4,
    alt: 'Berry Medley Bento',
    description: 'Mixed berry cake with vanilla cream and edible flowers'
  },
  {
    src: cake5,
    alt: 'Caramel Delight Bento',
    description: 'Caramel-infused cake with salted caramel drizzle'
  },
  {
    src: cake6,
    alt: 'Vanilla Dream Bento',
    description: 'Classic vanilla cake with buttercream and fresh fruit'
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
    <section id="gallery" className="py-24 bg-brand-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
            What we have done together
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Take a look at some of our beautiful creations from previous workshops. Each cake is a unique masterpiece made with love and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-100">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{image.alt}</h3>
                  <p className="mt-2 text-white/80">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 