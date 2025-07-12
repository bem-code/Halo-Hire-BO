import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import JobSection from './components/JobSection';
import AdSection from './components/AdSection';
import EmployerSection from './components/EmployerSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';
import './index.css';

function App() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentType, setPaymentType] = useState<{
    type: 'job-apply' | 'job-post' | 'ad-post';
    amount: number;
    title: string;
  } | null>(null);

  const openPaymentModal = (type: 'job-apply' | 'job-post' | 'ad-post', amount: number, title: string) => {
    setPaymentType({ type, amount, title });
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setPaymentType(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onPaymentClick={openPaymentModal} />
      <JobSection onPaymentClick={openPaymentModal} />
      <AdSection onPaymentClick={openPaymentModal} />
      <EmployerSection onPaymentClick={openPaymentModal} />
      <Testimonials />
      <FAQ />
      <Footer />
      
      {isPaymentModalOpen && paymentType && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={closePaymentModal}
          paymentType={paymentType}
        />
      )}
    </div>
  );
}

export default App;