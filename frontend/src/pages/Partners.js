import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Calendar } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'All Cameroon Cultural Festival',
      role: 'Marketing Strategy Development',
      description: 'MBS NYC has partnered with the All Cameroon Cultural Festival to develop comprehensive marketing strategies that amplify cultural awareness and drive event attendance. Our collaboration focuses on digital marketing, community engagement, and brand positioning.',
      services: [
        'Marketing strategy development',
        'Digital campaign management',
        'Community outreach programs',
        'Brand identity enhancement'
      ],
      icon: <Users size={48} strokeWidth={1.5} />
    },
    {
      name: 'Ekang Convention of America',
      role: 'Marketing & Operational Strategy',
      description: 'Working closely with the Ekang Convention of America, we provide integrated marketing and operational strategies to enhance organizational effectiveness and community impact. Our partnership delivers measurable results through strategic planning and execution.',
      services: [
        'Operational strategy consulting',
        'Marketing planning & execution',
        'Event management support',
        'Stakeholder engagement'
      ],
      icon: <Target size={48} strokeWidth={1.5} />
    }
  ];

  return (
    <div data-testid="partners-page" className="pt-20">
      {/* Hero Section */}
      <section data-testid="partners-hero-section" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Marketing Partners</span>
            <h1
              data-testid="partners-title"
              className="text-5xl md:text-7xl font-bold tracking-tight leading-none mt-4 mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}
            >
              Strategic Partnerships That Drive Success
            </h1>
            <p data-testid="partners-description" className="text-lg md:text-xl leading-relaxed text-slate-600">
              We collaborate with leading organizations to deliver exceptional marketing strategies and operational excellence that create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Showcase */}
      <section data-testid="partners-showcase-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid={`partner-detail-${index}`}
                className="border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  {/* Icon Section */}
                  <div className="md:col-span-3 p-12 bg-slate-50 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200">
                    <div className="text-slate-900">
                      {partner.icon}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-9 p-12">
                    <div className="mb-2">
                      <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                        {partner.role}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                      {partner.name}
                    </h2>
                    <p className="text-base leading-relaxed text-slate-600 mb-8">
                      {partner.description}
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4" style={{ color: '#0F172A' }}>Our Services:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {partner.services.map((service, sIndex) => (
                          <div key={sIndex} className="flex items-start">
                            <TrendingUp size={18} className="mr-3 mt-1 text-slate-900 flex-shrink-0" />
                            <span className="text-base text-slate-600">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section data-testid="partnership-benefits-section" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
              Why Partner With Us?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto">
              We bring strategic expertise, innovative solutions, and a commitment to excellence that helps our partners achieve their organizational goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-testid="benefit-card-0"
              className="p-8 bg-white border border-slate-200 hover:shadow-lg transition-all"
            >
              <Target size={32} strokeWidth={1.5} className="mb-6 text-slate-900" />
              <h3 className="text-2xl font-medium mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                Strategic Focus
              </h3>
              <p className="text-base text-slate-600">
                Data-driven strategies aligned with your organizational objectives
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-testid="benefit-card-1"
              className="p-8 bg-white border border-slate-200 hover:shadow-lg transition-all"
            >
              <TrendingUp size={32} strokeWidth={1.5} className="mb-6 text-slate-900" />
              <h3 className="text-2xl font-medium mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                Proven Results
              </h3>
              <p className="text-base text-slate-600">
                Track record of delivering measurable impact and ROI
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-testid="benefit-card-2"
              className="p-8 bg-white border border-slate-200 hover:shadow-lg transition-all"
            >
              <Calendar size={32} strokeWidth={1.5} className="mb-6 text-slate-900" />
              <h3 className="text-2xl font-medium mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                Long-term Partnership
              </h3>
              <p className="text-base text-slate-600">
                Committed relationships built on trust and shared success
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        data-testid="partners-cta-section"
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
              Become a Partner
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-12 max-w-2xl mx-auto">
              Interested in partnering with MBS NYC? Let's explore how we can work together to achieve your goals.
            </p>
            <motion.a
              href="/contact"
              data-testid="partners-cta-button"
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

export default Partners;
