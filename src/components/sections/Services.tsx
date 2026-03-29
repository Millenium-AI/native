import { Car, Home, Building2, Umbrella, Droplets, Heart, Briefcase } from 'lucide-react';

export const Services = () => {
  const services = [
    { icon: Car, title: 'Auto', desc: 'Protect your vehicles with comprehensive coverage options' },
    { icon: Home, title: 'Home', desc: 'Safeguard your biggest investment with proper coverage' },
    { icon: Droplets, title: 'Flood', desc: 'Essential in Florida—protect from flood damage' },
    { icon: Building2, title: 'Condo', desc: 'Specialized coverage filling HOA policy gaps' },
    { icon: Building2, title: 'Renters', desc: 'Affordable personal property and liability protection' },
    { icon: Briefcase, title: 'Business', desc: 'Commercial coverage for business owners' },
    { icon: Heart, title: 'Life', desc: 'Secure your family\'s financial future' },
    { icon: Umbrella, title: 'Other Coverage', desc: 'Additional specialized insurance options' }
  ];

  return (
    <section id="services" className="py-20 bg-native-mint-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-native-green mb-4 text-center">Insurance Coverage We Offer</h2>
        <p className="text-lg text-native-gray mb-12 text-center max-w-2xl mx-auto">
          Comprehensive protection for every stage of life
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
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
