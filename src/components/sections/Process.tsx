import { Phone, Search, GitCompare, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Tell Us Your Needs",
    description: "Call, email, or fill out our quick quote form — takes less than 2 minutes!",
  },
  {
    number: "02",
    icon: Search,
    title: "We Do the Homework",
    description: "Our licensed agents review your situation and identify the right coverage.",
  },
  {
    number: "03",
    icon: GitCompare,
    title: "See Your Best Options",
    description: "We shop top-rated Florida carriers to find you the best value.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "You're Protected",
    description: "Sign your policy and relax — we're here when you need us.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-native-green mb-4">
            Our Simple Process
          </h2>
          <p className="text-base sm:text-lg text-native-gray max-w-2xl mx-auto">
            Most clients are covered in under 24 hours. We handle every detail
            so you don't have to lift a finger.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-native-green/30 to-transparent z-0" />

          {steps.map(({ number, icon: Icon, title, description }) => (
            <div
              key={number}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Icon circle */}
              <div className="relative mb-4 md:mb-5">
                {/* Outer ring */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-native-green/20 flex items-center justify-center transition-all duration-300 group-hover:border-native-green/60 group-hover:scale-105">
                  {/* Inner filled circle */}
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-native-green rounded-full flex items-center justify-center shadow-md shadow-native-green/30">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.75} />
                  </div>
                </div>
                {/* Step number badge */}
                <span className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-white border border-native-green/30 text-native-green text-[9px] md:text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {number}
                </span>
              </div>

              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-native-gray mb-1.5">
                {title}
              </h3>
              <p className="text-native-gray-secondary text-[11px] sm:text-xs md:text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
