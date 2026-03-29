import { Users, Award, Shield, Phone } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';

export const WhyNative = () => {
  const { scrollToSection } = useScrollTo();

  return (
    <section id="why-native" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-native-green mb-4 text-center">Why Choose Native Insurance Group</h2>
        <p className="text-lg text-native-gray mb-12 text-center max-w-2xl mx-auto">
          We're different. We're focused on building long-term relationships, not just making sales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-6">
              <Users className="w-8 h-8 text-native-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-native-gray mb-2">Personalized Service</h3>
                <p className="text-native-gray-secondary">We listen, understand your situation, and provide recommendations tailored just for you—not generic quotes.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <Award className="w-8 h-8 text-native-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-native-gray mb-2">Florida Expertise</h3>
                <p className="text-native-gray-secondary">We specialize in Florida risks: hurricanes, flooding, wind damage, and coastal challenges. We know what you really need.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <Shield className="w-8 h-8 text-native-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-native-gray mb-2">Independent Agency</h3>
                <p className="text-native-gray-secondary">We work for you, not for one insurance company. We shop multiple carriers to find you the best value.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <Phone className="w-8 h-8 text-native-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-native-gray mb-2">Claims Advocacy</h3>
                <p className="text-native-gray-secondary">When claims happen, we step in to advocate for you and ensure the process is smooth and fair.</p>
              </div>
            </div>
          </div>

          <div className="bg-native-mint-light rounded-2xl p-8 flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-5xl font-bold text-native-green mb-2">20+</p>
              <p className="text-native-gray font-semibold">Years of Combined Experience</p>
              <p className="text-native-gray-secondary mt-2">Our team brings decades of insurance expertise to the table</p>
            </div>

            <div className="mb-8 pt-8 border-t border-native-mint">
              <p className="text-4xl font-bold text-native-green mb-2">500+</p>
              <p className="text-native-gray font-semibold">Satisfied Florida Clients</p>
              <p className="text-native-gray-secondary mt-2">Families and businesses trust us to protect what matters</p>
            </div>

            <div className="pt-8 border-t border-native-mint">
              <p className="text-lg font-semibold text-native-gray mb-3">Ready to join them?</p>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3 bg-native-green text-white rounded-lg font-semibold hover:bg-native-green-secondary transition-colors"
              >
                Get Your Quote Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
