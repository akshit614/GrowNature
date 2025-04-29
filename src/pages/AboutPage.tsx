import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | GrowNature';
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* About Hero */}
      <div className="relative py-24 bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/3097770/pexels-photo-3097770.jpeg)',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About GrowNature</h1>
            <p className="max-w-2xl mx-auto text-lg">
              We're passionate about plants and dedicated to helping you bring nature into your home.
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Story</h2>
            <div className="prose prose-lg text-text">
              <p>
                GrowNature was founded in 2010 by Jane and Michael Smith, two passionate
                horticulturists with a dream of creating a plant nursery that prioritized quality,
                sustainability, and customer education.
              </p>
              <p>
                What started as a small backyard greenhouse operation has grown into a thriving
                business with multiple locations across the region. Despite our growth, we've
                remained true to our founding principles: nurturing healthy plants, practicing
                sustainable growing methods, and sharing our knowledge with the community.
              </p>
              <p>
                Today, GrowNature is known for its carefully curated selection of plants, from
                rare specimens to dependable favorites. Our team of plant experts is dedicated to
                helping customers find the perfect plants for their space and providing ongoing
                support for plant care.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div>
              <img
                src="https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg"
                alt="Our Nursery"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-text mb-4">
                Our mission is to connect people with nature by providing healthy, sustainably
                grown plants and the knowledge needed to care for them. We believe that everyone
                deserves to experience the joy and wellbeing that comes from nurturing plant life.
              </p>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4 mt-8">Our Values</h2>
              <ul className="list-disc pl-6 text-text space-y-2">
                <li>
                  <span className="font-semibold">Sustainability:</span> We use organic growing
                  practices and eco-friendly materials.
                </li>
                <li>
                  <span className="font-semibold">Quality:</span> We never compromise on the health
                  and vigor of our plants.
                </li>
                <li>
                  <span className="font-semibold">Education:</span> We empower our customers with
                  knowledge about plant care.
                </li>
                <li>
                  <span className="font-semibold">Community:</span> We support local environmental
                  initiatives and garden education programs.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Jane Smith',
                  role: 'Co-Founder & Plant Specialist',
                  image: 'https://images.pexels.com/photos/5273717/pexels-photo-5273717.jpeg',
                },
                {
                  name: 'Michael Smith',
                  role: 'Co-Founder & Operations',
                  image: 'https://images.pexels.com/photos/8092509/pexels-photo-8092509.jpeg',
                },
                {
                  name: 'Sarah Johnson',
                  role: 'Head Horticulturist',
                  image: 'https://images.pexels.com/photos/7585607/pexels-photo-7585607.jpeg',
                },
              ].map((person, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary">{person.name}</h3>
                    <p className="text-text">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Commitment to Sustainability</h2>
            <div className="prose prose-lg text-text">
              <p>
                At GrowNature, sustainability isn't just a buzzword—it's at the core of everything we do.
                We believe that a plant nursery should work in harmony with the natural world, not against it.
              </p>
              <p>Here's how we put our commitment into practice:</p>
              <ul>
                <li>
                  We use organic, peat-free potting mixes and natural fertilizers to grow healthy plants
                  without harmful chemicals.
                </li>
                <li>
                  Our nursery implements water conservation systems, including rainwater collection and
                  drip irrigation.
                </li>
                <li>
                  We've eliminated single-use plastics from our packaging and are transitioning to
                  biodegradable plant pots.
                </li>
                <li>
                  Our facilities are powered by renewable energy, with solar panels providing most of
                  our electricity needs.
                </li>
                <li>
                  We partner with local schools and community organizations to promote environmental
                  education and plant literacy.
                </li>
              </ul>
              <p>
                By choosing GrowNature, you're not just getting beautiful plants—you're supporting a
                business that's committed to making a positive impact on the planet.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;