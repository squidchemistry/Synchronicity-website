import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import './Footer.css';

const socialLinks = [
  {
    icon: <Facebook size={22} />,
    url: 'https://www.facebook.com/yourpage', // Replace with your actual Facebook URL
    label: 'Facebook',
  },
  {
    icon: <Twitter size={22} />,
    url: 'https://x.com/arshverma_off', // Replace with your actual Twitter URL
    label: 'Twitter',
  },
  {
    icon: <Instagram size={22} />,
    url: 'https://www.instagram.com/_arxh_v/?__pwa=1', // Replace with your actual Instagram URL
    label: 'Instagram',
  },
  {
    icon: <Linkedin size={22} />,
    url: 'https://www.linkedin.com/in/arsh-verma-squidchemistry/', // Replace with your actual LinkedIn URL
    label: 'LinkedIn',
  },
];

export default function Footer() {
  return (
    <footer className="footer-container">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Branding */}
        <div className="footer-brand">
          <h3 className="footer-title">SYNCHRONICITY</h3>
          <p className="footer-description">
            Powering the future of digital finance with secure, scalable, and enterprise-ready stablecoin infrastructure.
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-links">
          <h4 className="footer-links-title">Follow Us</h4>
          <div className="footer-icons">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit us on ${social.label}`}
                className="footer-icon"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        &copy; {new Date().getFullYear()} SYNCHRONICITY. All rights reserved. Made by <strong>Arsh Verma</strong>.
      </motion.div>
    </footer>
  );
}
