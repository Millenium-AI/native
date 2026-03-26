import { useState } from 'react';
import { Car, Home, Building2, Umbrella, Droplets, Heart, Briefcase, Shield, Users, Award, Phone, Mail, Clock, Menu, X, CheckCircle, ArrowRight } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    insuranceType: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within one business day.');
    setFormData({ name: '', email: '', phone: '', contactMethod: 'email', insuranceType: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="bg-native-green-secondary text-white py-2 px-4 text-center text-sm">
          <span>Call us: (123) 456-7890 | Hours: Mon-Fri 9AM-5PM</span>
        </div>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Shield className="w-8 h-8 text-native-green" />
              <span className="text-lg font-semibold text-native-gray hidden sm:inline">Native Insurance Group</span>
            </div>

            <div className="hidden md:flex space-x-1">
              <button onClick={() => scrollToSection('process')} className="text-native-gray hover:text-native-green hover:bg-native-mint-light px-4 py-2 rounded transition-all">Process</button>
              <button onClick={() => scrollToSection('services')} className="text-native-gray hover:text-native-green hover:bg-native-mint-light px-4 py-2 rounded transition-all">Services</button>
              <button onClick={() => scrollToSection('why-native')} className="text-native-gray hover:text-native-green hover:bg-native-mint-light px-4 py-2 rounded transition-all">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-white bg-native-green hover:bg-native-green-secondary px-4 py-2 rounded transition-colors font-medium ml-2">Get Quote</button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-native-gray"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-gray-100">
              <button onClick={() => scrollToSection('process')} className="block w-full text-left text-native-gray hover:text-native-green py-2 px-4 hover:bg-native-mint-light rounded transition-all">Process</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-native-gray hover:text-native-green py-2 px-4 hover:bg-native-mint-light rounded transition-all">Services</button>
              <button onClick={() => scrollToSection('why-native')} className="block w-full text-left text-native-gray hover:text-native-green py-2 px-4 hover:bg-native-mint-light rounded transition-all">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-center text-white bg-native-green hover:bg-native-green-secondary py-2 px-4 rounded font-medium transition-colors">Get Quote</button>
            </div>
          )}
        </nav>
      </header>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-native-mint-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light text-native-green mb-6 leading-tight">
                Protect What Matters Most
              </h1>
              <p className="text-xl text-native-gray mb-8 leading-relaxed">
                Native Insurance Group helps Florida families and businesses find the right coverage. We're independent, local, and committed to your peace of mind.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-native-green text-white rounded-lg font-semibold hover:bg-native-green-secondary transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Start a Quote <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="tel:+1234567890"
                  className="px-8 py-4 text-native-green border-2 border-native-green rounded-lg font-semibold hover:bg-native-mint-light transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-3xl font-bold text-native-green">20+</p>
                  <p className="text-native-gray-secondary">Years Combined Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-native-green">500+</p>
                  <p className="text-native-gray-secondary">Happy Florida Families</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-native-green h-32 flex items-center justify-center">
                <Shield className="w-24 h-24 text-white" />
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

      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-native-green mb-4 text-center">Our Simple Process</h2>
          <p className="text-lg text-native-gray mb-16 text-center max-w-2xl mx-auto">
            Getting insured doesn't have to be complicated. We handle the details so you don't have to.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-native-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-native-gray mb-3">Contact Us</h3>
              <p className="text-native-gray-secondary">Call, email, or fill out our quick quote form</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-native-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-native-gray mb-3">We Analyze</h3>
              <p className="text-native-gray-secondary">Our experts review your situation and needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-native-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-native-gray mb-3">Compare Options</h3>
              <p className="text-native-gray-secondary">We shop multiple carriers for best value</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-native-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-native-gray mb-3">Get Covered</h3>
              <p className="text-native-gray-secondary">Finalize policy and enjoy peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-native-mint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-native-green mb-4 text-center">Insurance Coverage We Offer</h2>
          <p className="text-lg text-native-gray mb-12 text-center max-w-2xl mx-auto">
            Comprehensive protection for every stage of life
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Car, title: 'Auto', desc: 'Protect your vehicles with comprehensive coverage options' },
              { icon: Home, title: 'Home', desc: 'Safeguard your biggest investment with proper coverage' },
              { icon: Droplets, title: 'Flood', desc: 'Essential in Florida—protect from flood damage' },
              { icon: Building2, title: 'Condo', desc: 'Specialized coverage filling HOA policy gaps' },
              { icon: Building2, title: 'Renters', desc: 'Affordable personal property and liability protection' },
              { icon: Briefcase, title: 'Business', desc: 'Commercial coverage for business owners' },
              { icon: Heart, title: 'Life', desc: 'Secure your family\'s financial future' },
              { icon: Umbrella, title: 'Other Coverage', desc: 'Additional specialized insurance options' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]">
                <service.icon className="w-12 h-12 text-native-green mb-4" />
                <h3 className="text-lg font-semibold text-native-gray mb-2">{service.title}</h3>
                <p className="text-native-gray-secondary text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section id="contact" className="py-20 bg-native-mint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-native-green mb-4 text-center">Get a Quote Today</h2>
          <p className="text-lg text-native-gray mb-12 text-center max-w-2xl mx-auto">
            Ready to get protected? We're standing by to help you find the right coverage.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-native-gray mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-native-green focus:ring-2 focus:ring-native-green-secondary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-native-gray mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-native-green focus:ring-2 focus:ring-native-green-secondary outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-native-gray mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-native-green focus:ring-2 focus:ring-native-green-secondary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMethod" className="block text-sm font-semibold text-native-gray mb-2">
                      Preferred Contact
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-native-green focus:ring-2 focus:ring-native-green-secondary outline-none transition-colors"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="text">Text</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="insuranceType" className="block text-sm font-semibold text-native-gray mb-2">
                    Type of Insurance *
                  </label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-native-green focus:ring-2 focus:ring-native-green-secondary outline-none transition-colors"
                  >
                    <option value="">Select coverage type</option>
                    <option value="auto">Auto Insurance</option>
                    <option value="home">Home Insurance</option>
                    <option value="flood">Flood Insurance</option>
                    <option value="condo">Condo Insurance</option>
                    <option value="renters">Renters Insurance</option>
                    <option value="life">Life Insurance</option>
                    <option value="business">Business Insurance</option>
                    <option value="other">Other Coverage</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-native-gray mb-2">
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-native-green focus:ring-2 focus:ring-native-green-secondary outline-none transition-colors resize-none"
                    placeholder="Example: Looking to renew home insurance, recently had roof damage..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-native-green text-white rounded-lg font-semibold hover:bg-native-green-secondary transition-colors shadow-lg hover:shadow-xl"
                >
                  Send Quote Request
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold text-native-green mb-6">Contact Us Directly</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-native-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-native-gray mb-1">Phone</p>
                      <a href="tel:+1234567890" className="text-native-green hover:text-native-green-secondary font-semibold transition-colors">
                        (123) 456-7890
                      </a>
                      <p className="text-native-gray-secondary text-sm mt-1">Mon-Fri 9AM-5PM</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-native-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-native-gray mb-1">Email</p>
                      <a href="mailto:info@nativeinsurancegroup.com" className="text-native-green hover:text-native-green-secondary font-semibold transition-colors">
                        info@nativeinsurancegroup.com
                      </a>
                      <p className="text-native-gray-secondary text-sm mt-1">We reply same day</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-native-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-native-gray mb-2">Hours</p>
                      <div className="text-native-gray-secondary text-sm space-y-1">
                        <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                        <p>Sat: By Appointment</p>
                        <p>Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-native-green text-white rounded-xl p-8">
                <h4 className="font-semibold mb-3">Why We're Different</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>20+ years experience</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Florida specialists</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Multiple carriers</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Personal service</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Claims advocacy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-native-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6 text-native-green" />
                <span className="font-semibold text-white">Native Insurance</span>
              </div>
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
                <li><a href="tel:+1234567890" className="hover:text-white transition-colors">(123) 456-7890</a></li>
                <li><a href="mailto:info@nativeinsurancegroup.com" className="hover:text-white transition-colors">info@nativeinsurancegroup.com</a></li>
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
    </div>
  );
}

export default App;
