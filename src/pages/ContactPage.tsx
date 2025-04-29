import React, { useEffect } from 'react';
import ContactForm from '../components/Contact/ContactForm';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | GrowNature';
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Contact Hero */}
      <div className="relative py-24 bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg)',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Have questions or need plant advice? We're here to help you bring nature into your home.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-16"
          >
            <div className="h-96 w-full">
              {/* In a real project, you would embed a real map here */}
              <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <p className="text-text">Interactive Map Would Be Embedded Here</p>
              </div>
            </div>
          </motion.div>

          <ContactForm />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: 'How do I know which plants are suitable for my space?',
                    answer:
                      'Consider your light conditions, available space, and time for plant care. Our shop categorizes plants by light needs and difficulty level to help you choose. You can also contact us for personalized recommendations.',
                  },
                  {
                    question: 'Do you offer plant delivery?',
                    answer:
                      'Yes! We offer delivery within a 30-mile radius of our store. Delivery fees vary based on distance. For orders over $100, delivery is free within 15 miles.',
                  },
                  {
                    question: 'How often should I water my plants?',
                    answer:
                      'Each plant has different watering needs. Generally, most houseplants prefer to dry out slightly between waterings. Check the soil moisture with your finger - if the top inch feels dry, it\'s usually time to water.',
                  },
                  {
                    question: 'Do you offer plant care consultations?',
                    answer:
                      'Yes, we offer both in-store and virtual plant care consultations. Our experts can help with plant identification, troubleshooting problems, and creating a care routine. Contact us to schedule an appointment.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-background rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-text">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;