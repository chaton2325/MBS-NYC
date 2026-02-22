import { motion } from 'framer-motion';
import { Target, Lightbulb, Award, TrendingUp, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb size={32} strokeWidth={1.5} />,
      title: 'Innovation',
      description: 'Pioneering solutions that drive industry transformation'
    },
    {
      icon: <Award size={32} strokeWidth={1.5} />,
      title: 'Integrity',
      description: 'Unwavering commitment to ethical business practices'
    },
    {
      icon: <Target size={32} strokeWidth={1.5} />,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every engagement'
    },
    {
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      title: 'Growth',
      description: 'Empowering sustainable expansion and success'
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: 'Impact',
      description: 'Creating measurable value for our clients'
    }
  ];

  return (
    <div data-testid="about-page" className="pt-20">
      {/* Hero Section */}
      <section data-testid="about-hero-section" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">About MBS NYC</span>
            <h1
              data-testid="about-title"
              className="text-5xl md:text-7xl font-bold tracking-tight leading-none mt-4 mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}
            >
              Transforming Vision Into Reality
            </h1>
            <p data-testid="about-description" className="text-lg md:text-xl leading-relaxed text-slate-600">
              Based in the heart of New York City, Mekinda Business Solutions LLC is a premier consulting and digital solutions firm dedicated to empowering organizations with strategic insights and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section data-testid="mission-vision-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-testid="mission-card"
              className="p-12 bg-slate-50 border border-slate-200"
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                Our Mission
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                To empower businesses with strategic consulting, innovative marketing solutions, and advanced digital tools that drive measurable growth and operational excellence. We are committed to delivering exceptional value through integrity, expertise, and a client-centric approach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-testid="vision-card"
              className="p-12 bg-slate-50 border border-slate-200"
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                Our Vision
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                To be recognized as the leading consulting partner for organizations seeking to navigate digital transformation, optimize their operations, and achieve sustainable competitive advantage in an ever-evolving business landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section data-testid="values-section" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Core Values</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                data-testid={`value-card-${index}`}
                className="p-8 bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 text-slate-900">
                  {value.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                  {value.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NYC Story */}
      <section
        data-testid="nyc-story-section"
        className="py-24 md:py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">New York City</span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                Rooted in Excellence
              </h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                Headquartered in New York City, we leverage the dynamism and innovation of one of the world's most influential business hubs to deliver world-class consulting and digital solutions.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Our NYC location positions us at the intersection of finance, technology, and culture, enabling us to provide insights and strategies that reflect the pulse of modern business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjBleGVjdXRpdmVzJTIwbWVldGluZyUyMG1vZGVybiUyMG9mZmljZXxlbnwwfHx8fDE3NzE3OTQ5NTF8MA&ixlib=rb-4.1.0&q=85"
                alt="Modern business executives in NYC"
                data-testid="nyc-image"
                className="w-full h-auto shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
