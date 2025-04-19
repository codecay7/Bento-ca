import { motion } from 'framer-motion'

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

const mentors = [
  {
    name: 'Sarah Johnson',
    role: 'Head Pastry Chef',
    bio: 'With over 15 years of experience in French and Japanese patisserie, Sarah brings a unique fusion of techniques to our workshops.',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Michael Chen',
    role: 'Cake Design Expert',
    bio: 'Specializing in modern cake design and decoration, Michael has won multiple awards for his innovative techniques.',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Baking Instructor',
    bio: 'Emma combines traditional baking methods with contemporary flavors, creating unique and memorable experiences.',
    image: 'https://images.unsplash.com/photo-1719786624967-d096d58d99b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

export default function Mentors() {
  return (
    <section id="mentors" className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 w-[500px] h-[500px] rounded-full bg-brand-100/40 transform rotate-12" />
        <div className="absolute -right-24 -bottom-24 w-[600px] h-[600px] rounded-full bg-brand-100/30 transform -rotate-12" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-100/20 transform rotate-45" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.name}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative"
            >
              {/* Card background layers */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 rounded-2xl bg-brand-100/40 transform -rotate-6 translate-y-4" />
                <div className="absolute inset-0 rounded-2xl bg-brand-100/60 transform rotate-6 -translate-y-2" />
                <div className="absolute inset-0 rounded-2xl bg-brand-100/80 transform -rotate-3 translate-y-2" />
              </div>

              <div className="aspect-[4/3] bg-brand-100">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 font-heading">{mentor.name}</h3>
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