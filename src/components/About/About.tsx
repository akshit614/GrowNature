import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-accent rounded-full opacity-50"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg"
                alt="Nursery Workers"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-secondary rounded-full opacity-40"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Our Story
            </h2>
            <p className="text-text mb-6">
              GrowNature was founded in 2010 with a simple mission: to connect people with
              the natural world through beautiful, sustainable plants. What started as a small
              family operation has blossomed into a thriving nursery loved by plant enthusiasts
              across the country.
            </p>
            <p className="text-text mb-6">
              Our team of experienced horticulturists carefully nurtures each plant from seedling to
              maturity. We use organic practices and sustainable growing methods to ensure that every
              plant that leaves our nursery is healthy, vibrant, and ready to thrive in its new home.
            </p>
            <p className="text-text mb-8">
              We believe that plants have the power to transform spaces and improve well-being.
              That's why we're committed to helping you find the perfect plants for your lifestyle
              and providing the knowledge you need to care for them.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-full font-medium transition-colors"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;