import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/members", label: "Members" },
  { to: "/tournaments", label: "Tournaments" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const ChessPiece = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold">
    <path d="M12 2L9 7H6L8 12H5L7 17H4L6 22H18L20 17H17L19 12H16L18 7H15L12 2Z" fill="currentColor"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <ChessPiece />
            <span className="font-display text-lg font-bold text-primary-foreground">
              MFA <span className="text-gold">Chess Club</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-gold/20 text-gold"
                    : "text-primary-foreground/70 hover:text-gold hover:bg-gold/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary border-t border-gold/20 overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "bg-gold/20 text-gold"
                      : "text-primary-foreground/70 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
