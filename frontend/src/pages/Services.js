import { motion } from 'framer-motion';
import { TrendingUp, Target, Smartphone, Printer, Video } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TrendingUp size={48} strokeWidth={1.5} />,
      title: 'Business Development Strategies',
      description: 'Comprehensive business planning, market analysis, and growth strategies designed to position your organization for sustainable success. We analyze market trends, identify opportunities, and create actionable roadmaps for expansion.'
    },
    {
      icon: <Target size={48} strokeWidth={1.5} />,
      title: 'Marketing Development Strategies',
      description: 'Data-driven marketing strategies that amplify your brand presence and drive customer engagement. From digital campaigns to traditional marketing, we craft integrated solutions that deliver measurable results.'
    },
    {
      icon: <Smartphone size={48} strokeWidth={1.5} />,
      title: 'Mobile App & Website Development',
      description: 'Custom-built mobile applications and responsive websites tailored to your business objectives. We create intuitive, scalable digital experiences that engage users and drive conversions across all platforms.'
    },
    {
      icon: <Printer size={48} strokeWidth={1.5} />,
      title: 'Custom Printing',
      description: 'Professional printing solutions for all your business needs, from marketing collateral to branded merchandise. High-quality production with attention to detail and quick turnaround times.'
    },
    {
      icon: <Video size={48} strokeWidth={1.5} />,
      title: 'Multimedia Services (Video Production)',
      description: 'Full-service video production including corporate videos, promotional content, event coverage, and multimedia storytelling. We bring your brand narrative to life with compelling visual content.'
    }
  ];

  return (
    <div data-testid="services-page" className="pt-20">
      {/* Hero Section */}
      <section data-testid="services-hero-section" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Our Services</span>
            <h1
              data-testid="services-title"
              className="text-5xl md:text-7xl font-bold tracking-tight leading-none mt-4 mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}
            >
              Comprehensive Business Solutions
            </h1>
            <p data-testid="services-description" className="text-lg md:text-xl leading-relaxed text-slate-600">
              From strategy to execution, we provide end-to-end services that transform your business vision into measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section data-testid="services-list-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                data-testid={`service-item-${index}`}
                className="group relative p-12 bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-2 text-slate-900">
                    {service.icon}
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="text-3xl md:text-4xl font-medium mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                      {service.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        data-testid="services-cta-section"
        className="py-24 md:py-32"
        style={{
          background: 'linear-gradient(to bottom right, #0F172A, #0A192F, #0F172A)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Let's Build Something Great Together
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-12 max-w-2xl mx-auto">
              Ready to elevate your business? Contact us to discuss how our services can help you achieve your goals.
            </p>
            <motion.a
              href="/contact"
              data-testid="services-cta-button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-slate-900 hover:bg-slate-50 rounded-sm px-8 py-4 text-sm font-semibold tracking-wide transition-all shadow-xl"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
