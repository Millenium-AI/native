import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Process } from './components/sections/Process';
import { Services } from './components/sections/Services';
import { WhyNative } from './components/sections/WhyNative';
import { Contact } from './components/sections/Contact';
import { QuoteProvider } from './context/QuoteContext';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

function App() {
  return (
    <QuoteProvider>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Process />
            <Services />
            <WhyNative />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </QuoteProvider>
  );
}

export default App;