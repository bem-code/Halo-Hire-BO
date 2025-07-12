import React from 'react';
import { ArrowRight, Star, Users, Briefcase } from 'lucide-react';

interface HeroProps {
  onPaymentClick: (type: 'job-apply' | 'job-post' | 'ad-post', amount: number, title: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onPaymentClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-white py-20 lg:py-32 overflow-hidden bg-pattern">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect text-purple-800 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-soft">
            <Star className="h-4 w-4 fill-current" />
            <span>Trusted by 10,000+ Ghanaians</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Jobs. Post Jobs.
            <br />
            <span className="gradient-text-primary">Quick and Easy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Starting from just <span className="font-bold gradient-text-accent">10 cedis</span>
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Empowering Ghanaians with Access to Real Job Opportunities – Instantly.
            Connect with employers, find your dream job, or hire the perfect candidate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => onPaymentClick('job-apply', 10, 'Find Jobs')}
              className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-primary hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-2 animate-pulse-glow"
            >
              <span>Find Jobs - ₵10</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => onPaymentClick('job-post', 20, 'Post a Job')}
              className="bg-white text-purple-600 border-2 border-purple-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-2 shadow-soft hover:shadow-medium"
            >
              <span>Post Jobs - ₵20</span>
              <Briefcase className="h-5 w-5" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-purple-100 animate-float card-hover">
              <div className="text-3xl font-bold gradient-text-primary mb-2">5,000+</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-purple-100 animate-float card-hover" style={{ animationDelay: '2s' }}>
              <div className="text-3xl font-bold gradient-text-accent mb-2">2,500+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-purple-100 animate-float card-hover" style={{ animationDelay: '4s' }}>
              <div className="text-3xl font-bold gradient-text-primary mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;