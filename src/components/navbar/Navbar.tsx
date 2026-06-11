import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Notice', href: '#notice' },
  { name: 'Career', href: '#career' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => (document.body.style.overflow = 'unset');
  }, [mobileMenuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-nav-bg text-text-main ${isScrolled
          ? 'shadow-sm py-3'
          : 'py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center relative">

          {/* LEFT */}
          <div className="flex items-center gap-3 z-20">
            <button
              className="lg:hidden p-2 hover:bg-black/5 rounded-full text-text-main"
              onClick={() => setMobileMenuOpen(true)}
            >
              <FiMenu size={24} />
            </button>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-md">
                <span className="text-[rgb(20,35,152)] font-bold">S</span>
              </div>

              <span className="font-bold text-lg sm:text-xl text-text-main">
                Shomobai
              </span>
            </div>
          </div>

          {/* CENTER NAV (desktop only centered) */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group text-sm font-medium text-text-main hover:text-text-main/80 transition relative whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-text-main transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

        </div>
      </header>

      {/* MOBILE DRAWER (UNCHANGED LEFT ALIGN STYLE) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-50"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0 }}
              className="fixed top-0 left-0 bottom-0 w-72 sm:w-80 bg-nav-bg z-50 shadow-2xl flex flex-col"
            >
              {/* HEADER */}
              <div className="p-6 flex justify-between items-center border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-md">
                    <span className="text-text-main font-bold">S</span>
                  </div>
                  <span className="font-bold text-xl text-text-main">Shomobai</span>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-black/5 rounded-full text-text-main"
                >
                  <FiX size={22} />
                </button>
              </div>

              {/* MOBILE NAV - LEFT ALIGNED (UNCHANGED) */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col items-start gap-2">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ x: 8 }}
                      className="w-full text-xl font-medium text-text-main hover:text-[rgb(20,35,152)] transition p-3 rounded-xl hover:bg-[rgb(20,35,152)]/10"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}