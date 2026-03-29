import { Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';

export const Hero = () => {
  const { scrollToSection } = useScrollTo();

  return (
    <section className="py-12 lg:py-28 bg-gradient-to-b from-native-mint-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left column */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-native-green mb-3 leading-tight">
              Protecting What Matters Most
            </h1>
            <p className="text-base sm:text-xl text-native-green/70 font-medium mb-4">
              Serving Florida from The Keys to The Panhandle
            </p>
            <p className="text-base sm:text-lg text-native-gray mb-6 leading-relaxed">
              Native Insurance Group helps Florida families and businesses find the right coverage. We're independent, local, and committed to your peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-native-green text-white rounded-lg font-semibold hover:bg-native-green-secondary transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Start a Quote <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+19045349878"
                className="px-6 py-3 text-native-green border-2 border-native-green rounded-lg font-semibold hover:bg-native-mint-light transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-native-green">20+</p>
                <p className="text-native-gray-secondary text-xs sm:text-sm">Years Combined Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-native-green">500+</p>
                <p className="text-native-gray-secondary text-xs sm:text-sm">Happy Florida Families</p>
              </div>
            </div>
          </div>

          {/* Right column — hidden on mobile */}
          <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-white h-32 flex items-center justify-center p-4">
              <img src="/001_NATIVE_INSURANCE_GROUP_Blossom.png" alt="Native Insurance Group" className="h-40 w-auto" />
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-native-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-native-gray">Personalized Coverage</p>
                  <p className="text-native-gray-secondary text-sm">Tailored to your unique needs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-native-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-native-gray">Multiple Carriers</p>
                  <p className="text-native-gray-secondary text-sm">Best rates from top insurers</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-native-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-native-gray">Local Expertise</p>
                  <p className="text-native-gray-secondary text-sm">Florida-focused knowledge</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-native-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-native-gray">Easy Claims Support</p>
                  <p className="text-native-gray-secondary text-sm">We advocate for you</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
