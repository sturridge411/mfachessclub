import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-bold text-primary-foreground mb-3">
              MFA <span className="text-gold">Chess Club</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Developing strategic thinkers and leaders at M-PESA Foundation Academy, Thika, Kenya.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-gold mb-3">Quick Links</h4>
            <div className="space-y-2">
              {[
                { to: "/members", label: "Members" },
                { to: "/tournaments", label: "Tournaments" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-gold mb-3">Contact</h4>
            <a
              href="mailto:Sturridge.omaido@mpesafoundationacademy.ac.ke"
              className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors"
            >
              <Mail size={14} />
              Sturridge.omaido@mpesafoundationacademy.ac.ke
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 M-PESA Foundation Academy Chess Club. All rights reserved.
          </p>
          <Link to="/privacy" className="text-xs text-primary-foreground/40 hover:text-gold transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
