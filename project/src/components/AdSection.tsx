import React, { useState, useEffect } from 'react';
import { Play, Clock, Eye, TrendingUp } from 'lucide-react';

interface AdSectionProps {
  onPaymentClick: (type: 'job-apply' | 'job-post' | 'ad-post', amount: number, title: string) => void;
}

const AdSection: React.FC<AdSectionProps> = ({ onPaymentClick }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Sample ads with countdown
  const sampleAds = [
    {
      id: 1,
      type: 'video',
      title: 'Digital Marketing Bootcamp - Join Now!',
      description: 'Learn digital marketing skills in 6 weeks. Get certified and land your dream job.',
      views: 2340,
      expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours from now
      thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      type: 'image',
      title: 'Remote Work Opportunities Available',
      description: 'Work from home with international companies. Flexible hours, competitive pay.',
      views: 1850,
      expiresAt: new Date(Date.now() + 15 * 60 * 60 * 1000), // 15 hours from now
      thumbnail: 'https://images.pexels.com/photos/4050298/pexels-photo-4050298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      type: 'video',
      title: 'Tech Career Fair - This Weekend!',
      description: 'Meet top tech companies in Ghana. Network with industry leaders and find your next role.',
      views: 3120,
      expiresAt: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours from now
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const targetTime = new Date(Date.now() + 24 * 60 * 60 * 1000).getTime(); // 24 hours from now
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeLeft = (expiresAt: Date) => {
    const now = new Date().getTime();
    const difference = expiresAt.getTime() - now;

    if (difference <= 0) return 'Expired';

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m left`;
  };

  return (
    <section id="advertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Job Ads
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Promote your job opportunities or services with our premium ad placement. 
            Your ad will be featured for 24 hours for just ₵5.
          </p>
          
          <button
            onClick={() => onPaymentClick('ad-post', 5, 'Post an Ad')}
            className="gradient-accent text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-accent hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <TrendingUp className="h-5 w-5" />
            <span>Post Your Ad - ₵5</span>
          </button>
        </div>

        {/* Featured Ads Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleAds.map(ad => (
            <div key={ad.id} className="bg-white rounded-2xl shadow-soft border border-purple-100 overflow-hidden hover:shadow-medium transition-all duration-300 card-hover">
              {/* Ad Thumbnail */}
              <div className="relative">
                <img 
                  src={ad.thumbnail} 
                  alt={ad.title}
                  className="w-full h-48 object-cover"
                />
                {ad.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <Play className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                )}
                
                {/* Countdown Timer */}
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{formatTimeLeft(ad.expiresAt)}</span>
                </div>
              </div>

              {/* Ad Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {ad.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {ad.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Eye className="h-4 w-4" />
                    <span>{ad.views.toLocaleString()} views</span>
                  </div>
                  
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ad Features */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Advertise with Halo Hire?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="gradient-primary text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-primary">
                <Eye className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">High Visibility</h4>
              <p className="text-gray-600 text-sm">Your ad appears prominently on our homepage and job sections</p>
            </div>
            
            <div className="text-center">
              <div className="gradient-accent text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-accent">
                <Clock className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24-Hour Feature</h4>
              <p className="text-gray-600 text-sm">Maximum exposure for a full day to reach more candidates</p>
            </div>
            
            <div className="text-center">
              <div className="gradient-secondary text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Targeted Audience</h4>
              <p className="text-gray-600 text-sm">Reach job seekers and professionals actively looking for opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdSection;