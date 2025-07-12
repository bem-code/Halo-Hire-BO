import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Kwame Asante',
      role: 'Software Developer',
      company: 'Tech Ghana Ltd',
      content: 'I found my dream job within 2 days of joining Halo Hire. The ₵10 investment was worth every pesewa. The platform is user-friendly and connects you with real employers.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ama Osei',
      role: 'HR Manager',
      company: 'Global Solutions',
      content: 'As an employer, Halo Hire has been a game-changer. For just ₵20, I get access to quality candidates. I\'ve hired 3 employees through the platform in the past month.',
      rating: 5
    },
    {
      id: 3,
      name: 'Kofi Mensah',
      role: 'Marketing Specialist',
      company: 'Creative Agency',
      content: 'The advertising feature helped promote our digital marketing bootcamp. We got over 200 registrations from a single ₵5 ad. Incredible ROI!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Ghanaians
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our users say about their experience finding jobs and hiring talent through Halo Hire.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 relative shadow-soft border border-purple-100 card-hover">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-purple-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4 shadow-primary">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text-primary mb-2">10,000+</div>
              <div className="text-gray-600">Happy Job Seekers</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text-accent mb-2">2,500+</div>
              <div className="text-gray-600">Trusted Employers</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text-primary mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text-accent mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;