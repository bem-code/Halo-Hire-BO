import React from 'react';
import { Briefcase, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="gradient-primary p-2 rounded-lg shadow-primary">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Halo Hire</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering Ghanaians with access to real job opportunities. 
              Connecting talent with employers across Ghana.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#jobs" className="text-gray-300 hover:text-white transition-colors">
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="#post-job" className="text-gray-300 hover:text-white transition-colors">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#advertise" className="text-gray-300 hover:text-white transition-colors">
                  Advertise
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Job Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Sales & Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Finance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Hospitality
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a 
                    href="mailto:benedicthalo200@gmail.com" 
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    benedicthalo200@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a 
                    href="tel:+233504226623" 
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    +233 50 422 6623
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="text-white">Accra, Ghana</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Halo Hire. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;