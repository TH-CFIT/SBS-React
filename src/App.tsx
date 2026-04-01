import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { TermsModal } from './components/TermsModal';
import { LanguageProvider } from './context/LanguageContext';
import { ShipPage } from './pages/ShipPage';
import { ConfirmationPage } from './pages/ConfirmationPage';

type Page = 'home' | 'ship' | 'confirmation';

const AppContent: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [shipmentResponse, setShipmentResponse] = useState<any>(null);

  useEffect(() => {
    if (!sessionStorage.getItem('isRefreshed')) {
      sessionStorage.setItem('isRefreshed', 'true');
      window.location.reload();
    }
  }, []);

  const handleStartShipment = () => {
    setActivePage('ship');
  };

  const handleFinishShipment = (response: any) => {
    setShipmentResponse(response);
    setActivePage('confirmation');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'ship':
        return <ShipPage onFinish={handleFinishShipment} onBack={() => setActivePage('home')} />;
      case 'confirmation':
        return <ConfirmationPage response={shipmentResponse} onNewShipment={() => setActivePage('ship')} onBackHome={() => setActivePage('home')} />;
      default:
        return (
          <Hero 
            onOpenTerms={() => setIsTermsModalOpen(true)} 
            consentAccepted={consentAccepted}
            onToggleConsent={setConsentAccepted}
            onStartShipment={handleStartShipment}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-dhl-yellow selection:text-dhl-red">
      <Header onNavigateHome={() => setActivePage('home')} />
      
      <main className="flex-grow container mx-auto px-6 py-6 md:py-12 lg:px-20 max-w-7xl">
        {renderPage()}
      </main>

      <Footer />

      <TermsModal 
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        onAccept={() => {
          setConsentAccepted(true);
          setIsTermsModalOpen(false);
          sessionStorage.setItem('termsAccepted', 'true');
        }}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
