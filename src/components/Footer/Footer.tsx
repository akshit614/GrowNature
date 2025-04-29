import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      // In a real application, you would send this to your backend
      console.log('Subscribed:', email);
      setSubscribed(true);
      setEmail('');
      
      // Reset the subscribed message after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & About Section */}
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Leaf className="h-7 w-7" />
                <span className="text-xl font-serif font-bold">GrowNature</span>
              </Link>
              <p className="text-white/80 mb-6">
                We're passionate about plants and dedicated to helping you bring nature into your home.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-accent transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-accent transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-accent transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plant Categories */}
            <div>
              <h3 className="text-lg font-bold mb-4">Plant Categories</h3>
              <ul className="space-y-3">
                {['Indoor Plants', 'Outdoor Plants', 'Succulents', 'Decorative Pots'].map((item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-4">Join Our Newsletter</h3>
              <p className="text-white/80 mb-4">
                Subscribe to get special offers, plant care tips, and more!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="px-4 py-2 rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-accent hover:bg-accent-dark text-primary font-medium py-2 rounded-lg transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              {subscribed && (
                <p className="text-accent mt-2 text-sm">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20 text-center md:flex md:justify-between md:items-center">
          <p className="text-white/80 text-sm">
            &copy; {new Date().getFullYear()} GrowNature. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6 text-sm">
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;