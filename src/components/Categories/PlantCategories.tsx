import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../../data/plants';

const PlantCategories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Explore Our Plant Categories
          </h2>
          <p className="text-text max-w-2xl mx-auto">
            Find the perfect plants for every space and lifestyle. We have options
            for beginners, busy plant parents, and green thumbs alike.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">{category.name}</h3>
                <p className="mb-4 text-sm opacity-90">{category.description}</p>
                <Link
                  to={`/shop/${category.id}`}
                  className="inline-block bg-white text-primary hover:bg-primary hover:text-white py-2 px-5 rounded-full text-sm font-medium transition-colors"
                >
                  Browse {category.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCategories;