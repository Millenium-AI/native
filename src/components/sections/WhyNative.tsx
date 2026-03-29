import { Users, Award, Shield, Phone, Quote } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';
import ownerPhoto from '../img/headshot.png';

export const WhyNative = () => {
  const { scrollToSection } = useScrollTo();

  return (
    <section id="why-native" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <h2 className="text-3xl sm:text-4xl font-light text-native-green mb-4 text-center">
          Why Choose Native Insurance Group
        </h2>
        <p className="text-base sm:text-lg text-native-gray mb-12 text-center max-w-2xl mx-auto">
          We're independent, local, and on your side — focused on long-term relationships, not one-time sales.
        </p>

        {/* ── Top row: Founder (left 3/5) + Tiles (right 2/5) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6 lg:h-96">

          {/* Founder card */}
          <div className="lg:col-span-3 grid grid-cols-2 bg-native-mint-light rounded-2xl overflow-hidden">

            {/* Photo — object-[center_5%] pulls head down into frame */}
            <div className="relative h-full bg-[#e8ddd4]">
              <img
                src={ownerPhoto}
                alt="Claudia Torres, Founder of Native Insurance Group"
                className="absolute inset-0 w-full h-full object-cover object-[center_5%]"
              />
            </div>

            {/* Quote */}
            <div className="flex flex-col justify-center p-7">
              <Quote className="w-8 h-8 text-native-green/15 mb-4 flex-shrink-0" />
              <p className="text-sm sm:text-base text-native-gray italic leading-relaxed mb-4">
                "At Native, we treat every client like family. I'll shop the market to see if we can do better for you — and if your current coverage is already the best deal, I'll tell you to stay put. I'm here to make sure you're protected."
              </p>
              <div>
                <p className="text-sm font-bold text-native-green">Claudia Torres</p>
                <p className="text-xs text-native-gray-secondary mt-0.5">Founder & Independent Agent</p>
              </div>
            </div>
          </div>

          {/* Feature tiles — 2×2 grid */}
          <div className="lg:col-span-2 grid grid-cols-2 grid-rows-2 gap-3">
            <div className="bg-native-mint-light/50 border border-native-mint rounded-xl p-5 flex flex-col gap-2">
              <Users className="w-6 h-6 text-native-green" />
              <h3 className="text-md font-semibold text-native-gray">Personalized Service</h3>
              <p className="text-native-gray-secondary text-sm leading-snug">
                Coverage tailored to you — not generic quotes.
              </p>
            </div>
            <div className="bg-native-mint-light/50 border border-native-mint rounded-xl p-5 flex flex-col gap-2">
              <Award className="w-6 h-6 text-native-green" />
              <h3 className="text-md font-semibold text-native-gray">Florida Expertise</h3>
              <p className="text-native-gray-secondary text-sm leading-snug">
                Hurricanes, flooding, wind damage — we know Florida risks.
              </p>
            </div>
            <div className="bg-native-mint-light/50 border border-native-mint rounded-xl p-5 flex flex-col gap-2">
              <Shield className="w-6 h-6 text-native-green" />
              <h3 className="text-md font-semibold text-native-gray">Independent Agency</h3>
              <p className="text-native-gray-secondary text-sm leading-snug">
                We shop multiple carriers to find you the best rate.
              </p>
            </div>
            <div className="bg-native-mint-light/50 border border-native-mint rounded-xl p-5 flex flex-col gap-2">
              <Phone className="w-6 h-6 text-native-green" />
              <h3 className="text-md font-semibold text-native-gray">Claims Advocacy</h3>
              <p className="text-native-gray-secondary text-sm leading-snug">
                We fight for you when claims happen.
              </p>
            </div>
          </div>

        </div>

        {/* ── Bottom row: Stats + CTA ── */}
        <div className="bg-native-mint-light rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div className="text-center sm:text-left">
              <p className="text-4xl font-bold text-native-green mb-1">20+</p>
              <p className="text-base font-semibold text-native-gray">Years of Experience</p>
              <p className="text-sm text-native-gray-secondary mt-1">
                Decades of Florida insurance expertise at your service.
              </p>
            </div>
            <div className="text-center sm:text-left sm:border-x border-native-mint sm:px-8">
              <p className="text-4xl font-bold text-native-green mb-1">500+</p>
              <p className="text-base font-semibold text-native-gray">Trusted Florida Clients</p>
              <p className="text-sm text-native-gray-secondary mt-1">
                Families and businesses who trust us to protect what matters.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base font-semibold text-native-gray mb-3">Ready to join them?</p>
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