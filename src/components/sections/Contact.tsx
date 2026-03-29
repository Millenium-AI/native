import { useState } from 'react';
import { Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import type { FormData } from '../../types';

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    insuranceType: '',
    message: ''
  });

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
  );
};
