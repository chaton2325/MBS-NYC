import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, Smartphone, Printer, Video, ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      title: 'Business Development',
      description: 'Strategic planning and growth strategies to scale your organization.'
    },
    {
      icon: <Target size={32} strokeWidth={1.5} />,
      title: 'Marketing Strategy',
      description: 'Data-driven marketing solutions to amplify your brand reach.'
    },
    {
      icon: <Smartphone size={32} strokeWidth={1.5} />,
      title: 'Digital Solutions',
      description: 'Custom mobile apps and websites tailored to your business needs.'
    }
  ];

  const products = [
    {
      name: 'Scan2Find App',
      description: 'Revolutionary QR-based discovery platform',
      link: 'https://scan2find.info'
    },
    {
      name: 'No2Fine App',
      description: 'Innovative community engagement solution',
      link: 'https://no2fine.app'
    },
    {
      name: 'ADL Printing',
      description: 'Professional custom printing services',
      link: 'https://adlprinting.com'
    },
    {
      name: 'UNews23 Media',
      description: 'Next-generation media and news platform',
      link: '#'
    }
  ];

  const partners = [
    'All Cameroon Cultural Festival',
    'Ekang Convention of America'
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom right, #0F172A, #0A192F, #0F172A)'
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1769034386975-433254829565?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxueWMlMjBza3lsaW5lJTIwY29ycG9yYXRlJTIwc3Vuc2V0JTIwZ2xhc3N8ZW58MHx8fHwxNzcxNzk0OTQ4fDA&ixlib=rb-4.1.0&q=85)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              data-testid="hero-title"
              className="text-5xl md:text-7xl font-bold tracking-tight leading-none text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Empowering Businesses<br />Through Digital Innovation
            </h1>
            <p data-testid="hero-subtitle" className="text-lg md:text-xl leading-relaxed text-slate-300 mb-12 max-w-3xl mx-auto">
              Mekinda Business Solutions LLC provides strategic consulting and cutting-edge digital tools to help organizations thrive in the modern business landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" data-testid="hero-cta-primary">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-slate-900 hover:bg-slate-50 rounded-sm px-8 py-4 text-sm font-semibold tracking-wide transition-all shadow-xl"
                >
                  Request a Consultation
                </motion.button>
              </Link>
              <Link to="/services" data-testid="hero-cta-secondary">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 text-white hover:bg-white/10 rounded-sm px-8 py-4 transition-all"
                >
                  Explore Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section data-testid="services-preview-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
              Strategic Solutions for Modern Business
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                data-testid={`service-card-${index}`}
                className="group relative p-8 bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col items-start justify-between h-full"
              >
                <div className="mb-6 text-slate-900">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" data-testid="services-view-all-link">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 text-white hover:bg-slate-800 rounded-sm px-8 py-4 text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                View All Services
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section data-testid="products-preview-section" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Innovative Products</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
              Our Digital Ecosystem
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`product-card-${index}`}
                className="bg-white border border-slate-200 p-8 hover:bg-white hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                  {product.name}
                </h3>
                <p className="text-base text-slate-600 mb-4">{product.description}</p>
                <a
                  href={product.link}
                  data-testid={`product-link-${index}`}
                  className="text-sm font-semibold text-slate-900 hover:text-slate-600 inline-flex items-center gap-2 transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" data-testid="products-view-all-link">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 text-white hover:bg-slate-800 rounded-sm px-8 py-4 text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                View All Products
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Preview */}
      <section data-testid="partners-preview-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Marketing Partners</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
              Trusted by Leading Organizations
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`partner-card-${index}`}
                className="flex items-center justify-center p-12 bg-slate-50 border border-slate-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-slate-900 flex-shrink-0" />
                  <span className="text-xl font-medium" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                    {partner}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/partners" data-testid="partners-view-all-link">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 text-white hover:bg-slate-800 rounded-sm px-8 py-4 text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                View Our Partners
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        data-testid="cta-section"
        className="py-24 md:py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom right, #0F172A, #0A192F, #0F172A)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-12 max-w-2xl mx-auto">
              Let's discuss how MBS NYC can help you achieve your goals with strategic insights and innovative solutions.
            </p>
            <Link to="/contact" data-testid="cta-contact-button">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-slate-900 hover:bg-slate-50 rounded-sm px-8 py-4 text-sm font-semibold tracking-wide transition-all shadow-xl"
              >
                Request a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
