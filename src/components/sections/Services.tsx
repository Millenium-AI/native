import { Car, Home, Waves, Building2, Package, Bike, Anchor, ShieldCheck } from 'lucide-react';

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
    <section id="services" className="py-20 bg-native-mint-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-native-green mb-4 text-center">
          Coverage Built for Florida. Chosen Just for You.
        </h2>
        <p className="text-lg text-native-gray mb-12 text-center max-w-2xl mx-auto">
          As independent agents, we shop multiple carriers to protect every part of your Florida life
        </p>

        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {services.slice(0, 4).map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]">
              <service.icon className="w-12 h-12 text-native-green mb-4" />
              <h3 className="text-lg font-semibold text-native-gray mb-2">{service.title}</h3>
              <p className="text-native-gray-secondary text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2 — 3 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 lg:w-3/4 lg:mx-auto">
          {services.slice(4).map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]">
              <service.icon className="w-12 h-12 text-native-green mb-4" />
              <h3 className="text-lg font-semibold text-native-gray mb-2">{service.title}</h3>
              <p className="text-native-gray-secondary text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};