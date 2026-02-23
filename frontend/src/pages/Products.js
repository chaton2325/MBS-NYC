import { motion } from 'framer-motion';
import { ExternalLink, Radio } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Products = () => {
  const products = [
    {
      icon: <img src="/scan2find2.jpeg" alt="Scan2Find App" className="h-90 w-auto object-contain rounded-lg shadow-sm" />,
      name: 'Scan2Find App',
      description: 'A revolutionary QR-based discovery platform that connects users with businesses, events, and information seamlessly. Scan 2 Find transforms physical spaces into interactive digital experiences.',
      features: [
        'QR code scanning and generation',
        'Location-based discovery',
        'Business directory integration',
        'Real-time notifications'
      ],
      link: 'https://scan2find.info'
    },
    {
      icon: <img src="/no2fine.jpg" alt="No2Fine App" className="h-64 w-auto object-contain rounded-2xl shadow-sm" />,
      name: 'No2Fine App',
      description: 'An innovative community engagement solution designed to improve civic participation and streamline communication between organizations and their communities.',
      features: [
        'Community notifications',
        'Engagement analytics',
        'Multi-channel communication',
        'Customizable campaigns'
      ],
      link: 'https://no2fine.app'
    },
    {
      icon: <img src="/ADL-removebg.png" alt="ADL Printing" className="h-90 w-auto object-contain" />,
      name: 'ADL Printing',
      description: 'Professional custom printing services offering high-quality production for all your business needs, from marketing materials to branded merchandise.',
      features: [
        'Business cards & stationery',
        'Marketing collateral',
        'Branded merchandise',
        'Large format printing'
      ],
      link: 'https://adlprinting.com'
    },
    {
      icon: <img src="/unews.jpeg" alt="UNews23 Media" className="h-90 w-auto object-contain" />,
      name: 'UNews23 Media',
      description: 'A next-generation media and news platform delivering timely, relevant content to diverse audiences. UNews23 combines traditional journalism with digital innovation.',
      features: [
        'Real-time news updates',
        'Multimedia content',
        'Community reporting',
        'Interactive storytelling'
      ],
      link: 'https://www.facebook.com/share/1AsrnQFEkh/'
    }
  ];

  return (
    <div data-testid="products-page" className="pt-20">
      <Helmet>
        <title>Products | MBS NYC</title>
        <meta property="og:title" content="Products | MBS NYC - Our Digital Ecosystem" />
        <meta property="og:description" content="Discover our suite of innovative digital products like Scan2Find, No2Fine, and ADL Printing." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" />
      </Helmet>

      {/* Hero Section */}
      <section
        data-testid="products-hero-section"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom right, #0F172A, #0A192F, #0F172A)'
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm uppercase tracking-widest text-slate-300 font-semibold">Innovative Products</span>
            <h1
              data-testid="products-title"
              className="text-5xl md:text-7xl font-bold tracking-tight leading-none mt-4 mb-6 text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Digital Ecosystem
            </h1>
            <p data-testid="products-description" className="text-lg md:text-xl leading-relaxed text-slate-300">
              Discover our suite of innovative digital products designed to solve real-world challenges and create meaningful connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Showcase */}
      <section data-testid="products-showcase-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-testid={`product-detail-${index}`}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="p-16 bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <div className="text-slate-900">
                      {product.icon}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                    {product.name}
                  </h2>
                  <p className="text-base leading-relaxed text-slate-600 mb-8">
                    {product.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#0F172A' }}>Key Features:</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <span className="mr-3 mt-1 text-slate-900">•</span>
                          <span className="text-base text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    href={product.link}
                    data-testid={`product-visit-button-${index}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 rounded-sm px-8 py-4 text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl"
                  >
                    Visit Landing Page
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        data-testid="products-cta-section"
        className="py-24 md:py-32 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
              Interested in Our Products?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-12 max-w-2xl mx-auto">
              Contact us to learn more about how our innovative solutions can benefit your organization.
            </p>
            <motion.a
              href="/contact"
              data-testid="products-cta-button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-slate-900 text-white hover:bg-slate-800 rounded-sm px-8 py-4 text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
