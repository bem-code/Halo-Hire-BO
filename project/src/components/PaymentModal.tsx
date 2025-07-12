import React, { useState } from 'react';
import { X, CreditCard, Smartphone, Building, Shield, Check } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentType: {
    type: 'job-apply' | 'job-post' | 'ad-post';
    amount: number;
    title: string;
  };
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, paymentType }) => {
  const [selectedMethod, setSelectedMethod] = useState<'momo' | 'card' | 'bank'>('momo');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Payment successful! You will receive a confirmation email at ${email}`);
      onClose();
    }, 3000);
  };

  const getServiceDescription = () => {
    switch (paymentType.type) {
      case 'job-apply':
        return 'Access to all job listings and application submission';
      case 'job-post':
        return 'Post your job listing for 30 days with full visibility';
      case 'ad-post':
        return '24-hour premium ad placement on homepage and job sections';
      default:
        return '';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">
            {paymentType.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Service Summary */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 mb-6 border border-purple-100">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900">Service:</span>
              <span className="text-2xl font-bold gradient-text-primary">₵{paymentType.amount}</span>
            </div>
            <p className="text-gray-600 text-sm">
              {getServiceDescription()}
            </p>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Choose Payment Method</h3>
            
            <div className="space-y-3">
              {/* Mobile Money */}
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-purple-300 transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="momo"
                  checked={selectedMethod === 'momo'}
                  onChange={(e) => setSelectedMethod(e.target.value as 'momo')}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  selectedMethod === 'momo' ? 'bg-purple-600 border-purple-600' : 'border-gray-300'
                }`}>
                  {selectedMethod === 'momo' && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                </div>
                <Smartphone className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Mobile Money</div>
                  <div className="text-sm text-gray-500">MTN, Vodafone, AirtelTigo</div>
                </div>
              </label>

              {/* Card Payment */}
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-purple-300 transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={selectedMethod === 'card'}
                  onChange={(e) => setSelectedMethod(e.target.value as 'card')}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  selectedMethod === 'card' ? 'bg-purple-600 border-purple-600' : 'border-gray-300'
                }`}>
                  {selectedMethod === 'card' && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                </div>
                <CreditCard className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Debit/Credit Card</div>
                  <div className="text-sm text-gray-500">Visa, Mastercard</div>
                </div>
              </label>

              {/* Bank Transfer */}
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-purple-300 transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={selectedMethod === 'bank'}
                  onChange={(e) => setSelectedMethod(e.target.value as 'bank')}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  selectedMethod === 'bank' ? 'bg-purple-600 border-purple-600' : 'border-gray-300'
                }`}>
                  {selectedMethod === 'bank' && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                </div>
                <Building className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Bank Transfer</div>
                  <div className="text-sm text-gray-500">Direct bank transfer</div>
                </div>
              </label>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="+233 XX XXX XXXX"
                />
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-900 mb-1">Secure Payment</h4>
                <p className="text-sm text-green-700">
                  Your payment is processed securely through Paystack with 256-bit SSL encryption.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">What you get:</h4>
            <div className="space-y-2">
              {paymentType.type === 'job-apply' && (
                <>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Access to all job listings</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Direct application to employers</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Email confirmation of applications</span>
                  </div>
                </>
              )}
              
              {paymentType.type === 'job-post' && (
                <>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>30-day job listing visibility</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Access to quality candidates</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Application management tools</span>
                  </div>
                </>
              )}
              
              {paymentType.type === 'ad-post' && (
                <>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>24-hour premium placement</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Homepage and section visibility</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Real-time analytics tracking</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            disabled={!email || !phone || isProcessing}
            className="w-full gradient-primary text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing Payment...</span>
              </div>
            ) : (
              `Pay ₵${paymentType.amount} with Paystack`
            )}
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            By proceeding, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;