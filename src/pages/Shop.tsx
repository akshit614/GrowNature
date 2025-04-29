import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { plants } from '../data/plants';
import { Plant } from '../types';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>(plants);

  useEffect(() => {
    document.title = 'Shop | GrowNature';
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredPlants(plants);
    } else {
      setFilteredPlants(plants.filter((plant) => plant.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="bg-background min-h-screen">
      {/* Shop Hero */}
      <div className="relative py-24 bg-primary">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg)' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Plant Shop</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Browse our collection of beautiful, sustainably grown plants for your home and garden.
            </p>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {['all', 'indoor', 'outdoor', 'succulent'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-6 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-text hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPlants.map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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
                <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full mb-3">
                  {plant.category.charAt(0).toUpperCase() + plant.category.slice(1)}
                </span>
                <h3 className="text-xl font-semibold mb-2 text-primary">{plant.name}</h3>
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
      </div>
    </div>
  );
};

export default Shop;