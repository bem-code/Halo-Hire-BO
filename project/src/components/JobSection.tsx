import React, { useState } from 'react';
import { Search, MapPin, Clock, ChevronRight, Filter } from 'lucide-react';

interface JobSectionProps {
  onPaymentClick: (type: 'job-apply' | 'job-post' | 'ad-post', amount: number, title: string) => void;
}

const JobSection: React.FC<JobSectionProps> = ({ onPaymentClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Jobs' },
    { id: 'tech', name: 'Technology' },
    { id: 'sales', name: 'Sales & Marketing' },
    { id: 'education', name: 'Education' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'hospitality', name: 'Hospitality' }
  ];

  const sampleJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions Ghana',
      location: 'Accra, Ghana',
      type: 'Full-time',
      salary: '₵2,500 - ₵4,000',
      posted: '2 hours ago',
      category: 'tech'
    },
    {
      id: 2,
      title: 'Marketing Assistant',
      company: 'Digital Media Co.',
      location: 'Kumasi, Ghana',
      type: 'Remote',
      salary: '₵1,800 - ₵2,500',
      posted: '5 hours ago',
      category: 'sales'
    },
    {
      id: 3,
      title: 'Sales Representative',
      company: 'Global Traders Ltd',
      location: 'Tema, Ghana',
      type: 'Full-time',
      salary: '₵2,000 + Commission',
      posted: '1 day ago',
      category: 'sales'
    },
    {
      id: 4,
      title: 'Primary School Teacher',
      company: 'International School',
      location: 'Accra, Ghana',
      type: 'Full-time',
      salary: '₵1,500 - ₵2,200',
      posted: '2 days ago',
      category: 'education'
    },
    {
      id: 5,
      title: 'Graphic Designer',
      company: 'Creative Agency',
      location: 'Remote',
      type: 'Contract',
      salary: '₵1,200 - ₵2,000',
      posted: '3 days ago',
      category: 'tech'
    }
  ];

  const filteredJobs = sampleJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="jobs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Available Jobs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover thousands of job opportunities across Ghana. Pay only ₵10 to unlock full access and apply.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-2xl shadow-medium border border-purple-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              >
                {jobCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <button className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
              Search Jobs
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-2xl shadow-soft border border-purple-100 hover:shadow-medium transition-all duration-300 card-hover">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-gray-600 font-medium">{job.company}</p>
                    </div>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>
                  
                  <div className="text-lg font-semibold gradient-text-accent">
                    {job.salary}
                  </div>
                </div>

                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <button
                    onClick={() => onPaymentClick('job-apply', 10, `Apply for ${job.title}`)}
                    className="w-full lg:w-auto gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Apply Now - ₵10</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-purple-600 border-2 border-purple-300 px-8 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 shadow-soft hover:shadow-medium">
            Load More Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobSection;