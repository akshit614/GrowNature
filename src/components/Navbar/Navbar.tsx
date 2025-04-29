import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'mt-4' : 'mt-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className={`mx-auto max-w-5xl backdrop-blur-sm bg-white/80 rounded-full ${
          scrolled ? 'py-2 shadow-lg' : 'py-4'
        }`}>
          <div className="flex justify-between items-center px-6">
            <Link
              to="/"
              className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Leaf className="h-8 w-8" />
              </motion.div>
              <span className="text-xl font-serif font-bold">GrowNature</span>
            </Link>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="lg:hidden text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="relative group"
                >
                  <span className={`${
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? 'text-primary font-medium'
                      : 'text-text hover:text-primary'
                    } transition-colors duration-300`}
                  >
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            className="lg:hidden mt-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
              <div className="flex flex-col space-y-4">
                {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className={`${
                      location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                        ? 'text-primary font-medium'
                        : 'text-text hover:text-primary'
                    } transition-colors duration-300 block py-2 px-4 rounded-lg hover:bg-primary/10`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;