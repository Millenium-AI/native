import { useScrollTo } from '../../hooks/useScrollTo';

export const Footer = () => {
  const { scrollToSection } = useScrollTo();

  return (
    <footer className="bg-native-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <img src="/001_NATIVE_INSURANCE_GROUP_Blossom.png" alt="Native Insurance Group" className="h-12 w-auto mb-4" />
            <p className="text-gray-300 text-sm">Protecting Florida families and businesses since 2004.</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Quick Links</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors">Our Process</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('why-native')} className="hover:text-white transition-colors">Why Us</button></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Contact</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="tel:+9045349878" className="hover:text-white transition-colors">(904) 534-9878</a></li>
              <li><a href="mailto:info@nativeinsgroup.com" className="hover:text-white transition-colors">info@nativeinsgroup.com</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Hours</p>
            <p className="text-gray-300 text-sm">Monday - Friday<br />9:00 AM - 5:00 PM EST</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Native Insurance Group. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm mt-4 md:mt-0">
            Licensed Independent Insurance Agency
          </p>
        </div>
      </div>
    </footer>
  );
};
