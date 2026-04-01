import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import type { FormData } from '../../types';
import { useQuote } from '../../context/QuoteContext';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'YOUR_PUBLIC_KEY';

export const Contact = () => {
  const { selectedInsurance } = useQuote();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    insuranceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // ← THIS is the missing piece — syncs tile click into the dropdown
  useEffect(() => {
    if (selectedInsurance) {
      setFormData(prev => ({ ...prev, insuranceType: selectedInsurance }));
    }
  }, [selectedInsurance]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          contact_method: formData.contactMethod,
          insurance_type: formData.insuranceType,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', contactMethod: 'email', insuranceType: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                  <label htmlFor="name" className="block text-sm font-semibold text-native-gray mb-2">Full Name *</label>
                  <input
                    type="text" id="name" name="name" required
                    value={formData.name} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-native-green focus:ring-2 focus:ring-native-green-secondary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-native-gray mb-2">Email *</label>
                  <input
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-native-green focus:ring-2 focus:ring-native-green-secondary outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-native-gray mb-2">Phone *</label>
                  <input
                    type="tel" id="phone" name="phone" required
                    value={formData.phone} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-native-green focus:ring-2 focus:ring-native-green-secondary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contactMethod" className="block text-sm font-semibold text-native-gray mb-2">Preferred Contact</label>
                  <select
                    id="contactMethod" name="contactMethod"
                    value={formData.contactMethod} onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-native-green focus:ring-2 focus:ring-native-green-secondary outline-none transition-colors"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="insuranceType" className="block text-sm font-semibold text-native-gray mb-2">Type of Insurance *</label>
                <select
                  id="insuranceType" name="insuranceType"
                  value={formData.insuranceType} onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-native-green focus:ring-2 focus:ring-native-green-secondary outline-none transition-colors"
                >
                  <option value="">Select coverage type</option>
                  <option value="Auto Insurance">Auto Insurance</option>
                  <option value="Home, Condo & Renters">Home, Condo &amp; Renters</option>
                  <option value="Flood Insurance">Flood Insurance</option>
                  <option value="Business & Commercial">Business &amp; Commercial</option>
                  <option value="Recreational Vehicles">Recreational Vehicles</option>
                  <option value="Boats & Yachts">Boats &amp; Yachts</option>
                  <option value="Personal Articles">Personal Articles</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-native-gray mb-2">Tell us about your needs</label>
                <textarea
                  id="message" name="message" rows={4}
                  value={formData.message} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-native-green focus:ring-2 focus:ring-native-green-secondary outline-none transition-colors resize-none"
                  placeholder="Example: Looking to renew home insurance, recently had roof damage..."
                />
              </div>
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">Thank you! We'll be in touch within one business day.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  <p className="text-sm font-medium">Something went wrong. Please call us directly at (904) 534-9878.</p>
                </div>
              )}
              <button
                type="submit" disabled={isSubmitting}
                className="w-full px-8 py-4 bg-native-green text-white rounded-lg font-semibold hover:bg-native-green-secondary transition-colors shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Quote Request'}
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
                    <a href="tel:+19045349878" className="text-native-green hover:text-native-green-secondary font-semibold transition-colors">(904) 534-9878</a>
                    <p className="text-native-gray-secondary text-sm mt-1">Call or Text</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-native-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-native-gray mb-1">Email</p>
                    <a href="mailto:info@nativeinsgroup.com" className="text-native-green hover:text-native-green-secondary font-semibold transition-colors">info@nativeinsgroup.com</a>
                    <p className="text-native-gray-secondary text-sm mt-1">We Reply Same Day</p>
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
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0" /><span>20+ Years Experience</span></li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0" /><span>Florida Specialists</span></li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0" /><span>Multiple Carriers</span></li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0" /><span>Personal Service</span></li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0" /><span>Claims Advocacy</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};