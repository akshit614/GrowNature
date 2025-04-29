import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import FeaturedPlants from '../components/Featured/FeaturedPlants';
import PlantCategories from '../components/Categories/PlantCategories';
import About from '../components/About/About';
import ContactForm from '../components/Contact/ContactForm';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'GrowNature | Bring Nature Home';
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedPlants />
      <PlantCategories />
      <About />
      <ContactForm />
    </div>
  );
};

export default Home;