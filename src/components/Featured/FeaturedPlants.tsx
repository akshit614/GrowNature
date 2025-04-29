import React from 'react';
import { motion } from 'framer-motion';
import { plants } from '../../data/plants';

const FeaturedPlants: React.FC = () => {
  const featuredPlants = plants.filter((plant) => plant.isFeatured);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
          >
            Our Bestselling Plants
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-text max-w-2xl mx-auto"
          >
            These fan favorites are flying off the shelves. Grown with care and
            ready to thrive in your home.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredPlants.map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={plant.imageUrl}
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {plant.name}
                </h3>
                <p className="text-text mb-3 text-sm">{plant.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-dark font-bold">${plant.price.toFixed(2)}</span>
                  <button className="bg-secondary hover:bg-secondary-dark text-white py-2 px-4 rounded-full text-sm transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-full font-medium transition-colors"
          >
            View All Plants
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;