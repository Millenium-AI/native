import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';


export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToSection, scrollToTop } = useScrollTo();


  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };


  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="bg-native-green-secondary text-white py-2 px-4 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 gap-y-1">
          <a
            href="tel:+19045349878"
            className="flex items-center gap-1 hover:underline whitespace-nowrap"
          >
            <Phone className="w-3 h-3" />
            Call Us
          </a>
          <span className="hidden sm:inline opacity-50">|</span>
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-1 hover:underline whitespace-nowrap font-medium"
          >
            Get a Quote
          </button>
          <span className="hidden sm:inline opacity-50">|</span>
          <a
            href="mailto:info@nativeinsgroup.com"
            className="flex items-center gap-1 hover:underline whitespace-nowrap"
          >
            <Mail className="w-3 h-3" />
            Email Us
          </a>
        </div>
      </div>


      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
            <img src="/001_NATIVE_INSURANCE_GROUP_Blossom.png" alt="Native Insurance Group" className="h-12 sm:h-16 w-auto" />
          </div>


          <div className="hidden md:flex space-x-1">
            <button onClick={() => handleNavClick('process')} className="text-native-gray hover:text-native-green hover:bg-native-mint-light px-4 py-2 rounded transition-all">Process</button>
            <button onClick={() => handleNavClick('services')} className="text-native-gray hover:text-native-green hover:bg-native-mint-light px-4 py-2 rounded transition-all">Services</button>
            <button onClick={() => handleNavClick('why-native')} className="text-native-gray hover:text-native-green hover:bg-native-mint-light px-4 py-2 rounded transition-all">Why Us</button>
            <button onClick={() => handleNavClick('contact')} className="text-white bg-native-green hover:bg-native-green-secondary px-4 py-2 rounded transition-colors font-medium ml-2">Get Quote</button>
          </div>


          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-native-gray"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>


        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-100">
            <button onClick={() => handleNavClick('process')} className="block w-full text-left text-native-gray hover:text-native-green py-3 px-4 hover:bg-native-mint-light rounded transition-all">Process</button>
            <button onClick={() => handleNavClick('services')} className="block w-full text-left text-native-gray hover:text-native-green py-3 px-4 hover:bg-native-mint-light rounded transition-all">Services</button>
            <button onClick={() => handleNavClick('why-native')} className="block w-full text-left text-native-gray hover:text-native-green py-3 px-4 hover:bg-native-mint-light rounded transition-all">Why Us</button>
            <button onClick={() => handleNavClick('contact')} className="block w-full text-center text-white bg-native-green hover:bg-native-green-secondary py-3 px-4 rounded font-medium transition-colors">Get Quote</button>
          </div>
        )}
      </nav>
    </header>
  );
};