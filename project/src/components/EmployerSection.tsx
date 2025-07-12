import React, { useState } from 'react';
import { Building2, Users, Target, CheckCircle } from 'lucide-react';

interface EmployerSectionProps {
  onPaymentClick: (type: 'job-apply' | 'job-post' | 'ad-post', amount: number, title: string) => void;
}

const EmployerSection: React.FC<EmployerSectionProps> = ({ onPaymentClick }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    location: '',
    jobType: 'full-time',
    salary: '',
    description: '',
    requirements: '',
    contactEmail: '',
    contactPhone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPaymentClick('job-post', 20, 'Post Job Listing');
  };

  return (
    <section id="post-job" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Post Your Job Opening
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with qualified candidates across Ghana. Post your job for just ₵20 and reach thousands of job seekers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Job Posting Form */}
          <div className="bg-white rounded-2xl shadow-medium border border-purple-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Job Details</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Job Title */}
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="e.g. Frontend Developer"
                />
              </div>

              {/* Company & Location */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Accra, Ghana"
                  />
                </div>
              </div>

              {/* Job Type & Salary */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="jobType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Type *
                  </label>
                  <select
                    id="jobType"
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="remote">Remote</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="salary" className="block text-sm font-semibold text-gray-700 mb-2">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="₵2,000 - ₵3,000"
                  />
                </div>
              </div>

              {/* Job Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Describe the role, responsibilities, and what you're looking for..."
                />
              </div>

              {/* Requirements */}
              <div>
                <label htmlFor="requirements" className="block text-sm font-semibold text-gray-700 mb-2">
                  Requirements *
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Skills, experience, education requirements..."
                />
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="hiring@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full gradient-primary text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                Post Job - Pay ₵20
              </button>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-medium border border-purple-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Halo Hire?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quality Candidates</h4>
                    <p className="text-gray-600">Access to pre-screened, motivated job seekers across Ghana</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Targeted Reach</h4>
                    <p className="text-gray-600">Your job posting reaches candidates in your specific industry</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Easy Process</h4>
                    <p className="text-gray-600">Simple posting process with instant visibility</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="gradient-primary text-white rounded-2xl p-8 shadow-primary">
              <h3 className="text-xl font-bold mb-6">Join 2,500+ Companies</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold">48 hrs</div>
                  <div className="text-purple-100">Average time to hire</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-purple-100">Applications per job</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">92%</div>
                  <div className="text-purple-100">Employer satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">₵20</div>
                  <div className="text-purple-100">One-time fee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerSection;