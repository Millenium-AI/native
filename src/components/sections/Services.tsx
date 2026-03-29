import { Car, Home, Waves, Building2, Package, Bike, Anchor } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Auto Insurance',
      desc: 'Liability, collision & comprehensive coverage for every driver in Florida'
    },
    {
      icon: Home,
      title: 'Home, Condo & Renters',
      desc: 'Protect your property and belongings whether you own or rent'
    },
    {
      icon: Waves,
      title: 'Flood Insurance',
      desc: 'Essential Florida coverage — standard policies don\'t cover flood damage'
    },
    {
      icon: Building2,
      title: 'Business & Commercial',
      desc: 'General liability, property & BOP coverage tailored for Florida businesses'
    },
    {
      icon: Bike,
      title: 'Recreational Vehicles',
      desc: 'Coverage for ATVs, golf carts, motorcycles & all recreational vehicles'
    },
    {
      icon: Anchor,
      title: 'Boats & Yachts',
      desc: 'Hull, liability & on-water protection from The Keys to The Panhandle'
    },
    {
      icon: Package,
      title: 'Personal Articles',
      desc: 'Scheduled coverage for jewelry, art, electronics & high-value belongings'
    },
  ];

  return (
    <section id="services" className="py-16 bg-native-mint-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-light text-native-green mb-4 text-center">
          Coverage Built for Florida. Chosen Just for You.
        </h2>
        <p className="text-base text-native-gray mb-10 text-center max-w-lg mx-auto">
          As independent agents, we shop multiple carriers to protect every part of your Florida life.
        </p>

        {/* Row 1 — 4 cards: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {services.slice(0, 4).map((service, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]">
              <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-native-green mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-native-gray mb-2">{service.title}</h3>
              <p className="text-native-gray-secondary text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2 — 3 cards: 1 col mobile, 3 col tablet+, centered on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:w-3/4 lg:mx-auto">
          {services.slice(4).map((service, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]">
              <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-native-green mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-native-gray mb-2">{service.title}</h3>
              <p className="text-native-gray-secondary text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
