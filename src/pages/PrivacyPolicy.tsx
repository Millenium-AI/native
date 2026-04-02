import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top bar */}
      <div className="bg-native-green-secondary text-white py-2 px-4 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 gap-y-1">
          <a href="tel:+19045349878" className="flex items-center gap-1 hover:underline whitespace-nowrap">
            <Phone className="w-3 h-3" /> Call Us
          </a>
          <span className="hidden sm:inline opacity-50">|</span>
          <a href="mailto:info@nativeinsgroup.com" className="flex items-center gap-1 hover:underline whitespace-nowrap">
            <Mail className="w-3 h-3" /> Email Us
          </a>
        </div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-native-mint-light border-b border-native-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/">
              <img
                src="/001_NATIVE_INSURANCE_GROUP_Blossom.png"
                alt="Native Insurance Group"
                className="h-12 sm:h-16 w-auto"
              />
            </Link>
            <Link
              to="/"
              className="text-native-green hover:text-native-green-secondary hover:bg-white/60 px-4 py-2 rounded transition-all text-sm font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Title bubble */}
          <div className="bg-native-mint-light border-b border-native-mint px-6 sm:px-10 py-8">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Privacy Policy</h1>
                <p className="text-native-gray text-sm">Native Insurance Group, LLC &mdash; Licensed Independent Insurance Agency</p>
                <p className="text-native-gray/70 text-xs mt-1">Last Updated: April 1, 2026</p>
              </div>
              <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-native-green/10 text-native-green text-xs font-medium whitespace-nowrap border border-native-green/20">
                Legal Document
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-10 py-10 space-y-10">

            {/* Intro */}
            <div className="space-y-4 text-native-gray text-base leading-relaxed">
              <p>Please read this Privacy Policy carefully before using our website.</p>
              <p>
                This Privacy Policy describes how Native Insurance Group, LLC ("we," "us," or "our") collects,
                uses, and shares information about you when you visit our website at{' '}
                <a href="https://nativeinsgroup.com" target="_blank" rel="noopener noreferrer" className="text-native-green hover:underline">
                  nativeinsgroup.com
                </a>{' '}
                (the "Site") and interact with our independent insurance agency services.
              </p>
              <p>By using the Site, you agree to the collection and use of information in accordance with this policy.</p>
            </div>

            <div className="border-b border-gray-100" />

            {/* Section 1 */}
            <Section number={1} title="Information We Collect">
              <SubHeading>Device & Usage Information</SubHeading>
              <p className="text-native-gray text-base leading-relaxed">
                When you visit the Site, we automatically collect certain information about your device and browsing activity, including:
              </p>
              <BulletList items={[
                'Browser type and version',
                'IP address and approximate location',
                'Time zone and language settings',
                'Pages you view, links you click, and how long you spend on the Site',
                'Referring URLs (the site you came from) and exit pages',
                'Date and time stamps of your visit',
              ]} />
              <p className="text-native-gray text-base leading-relaxed">We collect this information using:</p>
              <DefinitionList items={[
                { term: 'Cookies', def: 'Small data files placed on your device. You can instruct your browser to refuse cookies, though some features of the Site may not function properly as a result.' },
                { term: 'Log Files', def: 'Server logs that record actions occurring on the Site.' },
                { term: 'Web Beacons, Tags & Pixels', def: 'Electronic files used to record how you browse the Site.' },
              ]} />
              <SubHeading>Personal Information You Provide</SubHeading>
              <p className="text-native-gray text-base leading-relaxed">
                When you submit a quote request, contact form, or any inquiry through the Site, we collect information you provide directly, which may include:
              </p>
              <BulletList items={[
                'Full name',
                'Email address',
                'Phone number',
                'Type of insurance coverage requested',
                'Details about your insurance needs (property, vehicle, business, etc.)',
                'Preferred contact method',
              ]} />
              <p className="text-native-gray text-base leading-relaxed">
                We refer to all of the above collectively as <strong className="text-gray-800">"Personal Information."</strong>
              </p>
            </Section>

            {/* Section 2 */}
            <Section number={2} title="How We Use Your Information">
              <p className="text-native-gray text-base leading-relaxed">We use the Personal Information we collect to:</p>
              <BulletList items={[
                'Respond to your quote requests, questions, and inquiries',
                'Connect you with insurance carriers on your behalf as your independent agent',
                'Communicate with you about insurance products, policy updates, and services relevant to your needs',
                'Process and fulfill any transactions or service requests',
                'Improve and optimize our Site through usage analytics',
                'Assess the effectiveness of our marketing and outreach efforts',
                'Comply with applicable laws, regulations, and insurance industry requirements',
              ]} />
              <p className="text-native-gray text-base leading-relaxed">
                We do <strong className="text-gray-800">not</strong> sell your Personal Information to third parties.
              </p>
            </Section>

            {/* Section 3 */}
            <Section number={3} title="How We Share Your Information">
              <p className="text-native-gray text-base leading-relaxed">
                As an independent insurance agency, we represent multiple carriers and may share your Personal Information in the following circumstances:
              </p>
              <DefinitionList items={[
                { term: 'Insurance Carriers & Underwriting Partners', def: 'We share information necessary to obtain insurance quotes, bind coverage, or service your policy on your behalf. Only relevant information is shared.' },
                { term: 'Service Providers', def: 'We work with trusted third-party vendors who help us operate our website and business.' },
              ]} />
              <div className="pl-4 space-y-3">
                <p className="text-native-gray text-base leading-relaxed">
                  <strong className="text-gray-800">Google Analytics</strong> — We use Google Analytics to understand how visitors interact with our Site. Google may use this data in accordance with its own privacy policy.{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-native-green hover:underline">Learn more</a>
                  {' '}or{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-native-green hover:underline">opt out</a>.
                </p>
                <p className="text-native-gray text-base leading-relaxed">
                  <strong className="text-gray-800">Email Service Providers</strong> — We use a third-party service to send and receive email communications.
                </p>
              </div>
              <DefinitionList items={[
                { term: 'Legal Requirements', def: 'We may disclose your Personal Information if required by law, regulation, or legal process (such as a court order or subpoena), or to protect our rights and the safety of our clients.' },
              ]} />
              <div className="bg-native-mint-light border-l-4 border-native-green rounded-r-lg p-4">
                <p className="text-native-gray text-sm leading-relaxed">
                  <strong className="text-gray-800">Important:</strong> No mobile information (including SMS opt-in data and consent) will be shared with third parties or affiliates for marketing or promotional purposes.
                </p>
              </div>
            </Section>

            {/* Section 4 */}
            <Section number={4} title="SMS / Text Message Communications">
              <p className="text-native-gray text-base leading-relaxed">
                If you opt in to receive text messages from us (by selecting "Text" as your preferred contact method or providing explicit consent), the following terms apply:
              </p>
              <BulletList items={[
                'You may receive informational and service-related text messages from Native Insurance Group.',
                'Message and data rates may apply depending on your carrier plan.',
                'You may opt out at any time by replying STOP to any message.',
                'For help, reply HELP or contact us directly.',
                'We will never share your SMS opt-in status or mobile number with third parties for their marketing purposes.',
              ]} />
            </Section>

            {/* Section 5 */}
            <Section number={5} title="Cookies & Tracking Technologies">
              <p className="text-native-gray text-base leading-relaxed">
                You have the right to accept or decline cookies. You can manage cookie settings in your browser. Note that disabling cookies may affect certain features of our Site. Most browsers allow you to:
              </p>
              <BulletList items={[
                'View what cookies are stored and delete them',
                'Block third-party cookies',
                'Block cookies from particular sites',
                'Block all cookies',
                'Delete all cookies when you close your browser',
              ]} />
              <p className="text-native-gray text-base leading-relaxed">
                For more information on managing cookies, visit{' '}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-native-green hover:underline">
                  allaboutcookies.org
                </a>.
              </p>
            </Section>

            {/* Section 6 */}
            <Section number={6} title="Behavioral Advertising">
              <p className="text-native-gray text-base leading-relaxed">
                We may use your information to deliver targeted advertisements or marketing that we believe may interest you. You may opt out of targeted advertising through:
              </p>
              <DefinitionList items={[
                { term: 'Facebook/Meta', def: '', link: { href: 'https://www.facebook.com/ads/preferences/', label: 'facebook.com/ads/preferences' } },
                { term: 'Google', def: '', link: { href: 'https://adssettings.google.com/', label: 'adssettings.google.com' } },
                { term: 'LinkedIn', def: '', link: { href: 'https://www.linkedin.com/psettings/advertising', label: 'linkedin.com/psettings/advertising' } },
                { term: 'Digital Advertising Alliance', def: '', link: { href: 'http://optout.aboutads.info/', label: 'optout.aboutads.info' } },
              ]} />
            </Section>

            {/* Section 7 */}
            <Section number={7} title="Do Not Track">
              <p className="text-native-gray text-base leading-relaxed">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want your browsing activity tracked. Our Site does not currently alter its data collection or use practices in response to DNT signals.
              </p>
            </Section>

            {/* Section 8 */}
            <Section number={8} title="Data Retention">
              <p className="text-native-gray text-base leading-relaxed">We retain your Personal Information for as long as necessary to:</p>
              <BulletList items={[
                'Fulfill the purposes described in this Privacy Policy',
                'Maintain our relationship with you as a client or prospect',
                'Comply with applicable laws, including insurance recordkeeping regulations',
              ]} />
              <p className="text-native-gray text-base leading-relaxed">
                When your information is no longer needed, we take reasonable steps to securely delete or anonymize it.
              </p>
            </Section>

            {/* Section 9 */}
            <Section number={9} title="Data Security">
              <p className="text-native-gray text-base leading-relaxed">
                We implement commercially reasonable security measures — including encryption, secure servers, and access controls — to protect your Personal Information from unauthorized access, disclosure, alteration, or destruction.
              </p>
              <p className="text-native-gray text-base leading-relaxed">
                However, no method of data transmission or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. If you have reason to believe your interaction with us is no longer secure, please contact us immediately.
              </p>
            </Section>

            {/* Section 10 */}
            <Section number={10} title="Children's Privacy">
              <p className="text-native-gray text-base leading-relaxed">
                Our Site is not directed to individuals under the age of 13. We do not knowingly collect Personal Information from children. If you believe we have inadvertently collected information from a child under 13, please contact us and we will promptly delete it.
              </p>
            </Section>

            {/* Section 11 */}
            <Section number={11} title="Third-Party Links">
              <p className="text-native-gray text-base leading-relaxed">
                Our Site may contain links to third-party websites (such as insurance carrier sites or LinkedIn). We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </Section>

            {/* Section 12 */}
            <Section number={12} title="Your Rights">
              <SubHeading>California Residents (CCPA)</SubHeading>
              <p className="text-native-gray text-base leading-relaxed">
                If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):
              </p>
              <BulletList items={[
                'The right to know what Personal Information we collect, use, share, or sell',
                'The right to delete your Personal Information (subject to certain exceptions)',
                'The right to opt out of the sale of your Personal Information (we do not sell your data)',
                'The right to non-discrimination for exercising your privacy rights',
              ]} />
              <p className="text-native-gray text-base leading-relaxed">To submit a CCPA request, contact us using the information below.</p>
              <SubHeading>European Residents (GDPR)</SubHeading>
              <p className="text-native-gray text-base leading-relaxed">
                If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including the right to access, correct, update, or request deletion of your Personal Information. To exercise these rights, contact us directly.
              </p>
            </Section>

            {/* Section 13 */}
            <Section number={13} title="Changes to This Policy">
              <p className="text-native-gray text-base leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy regularly.
              </p>
              <p className="text-native-gray text-base leading-relaxed">
                Your continued use of the Site after any changes constitutes your acceptance of the updated policy.
              </p>
            </Section>

            {/* Contact callout */}
            <div className="bg-native-mint-light border border-native-mint rounded-xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Contact Us</h2>
              <p className="text-native-gray text-sm leading-relaxed mb-4">
                For questions about this Privacy Policy, to exercise your rights, or to make a privacy-related request:
              </p>
              <ul className="space-y-2 text-sm text-native-gray">
                <li><span className="font-medium text-gray-800">Company:</span> Native Insurance Group, LLC</li>
                <li><span className="font-medium text-gray-800">License:</span> Licensed Independent Insurance Agency — State of Florida</li>
                <li>
                  <span className="font-medium text-gray-800">Phone:</span>{' '}
                  <a href="tel:+19045349878" className="text-native-green hover:underline">(904) 534-9878</a>
                </li>
                <li>
                  <span className="font-medium text-gray-800">Email:</span>{' '}
                  <a href="mailto:info@nativeinsgroup.com" className="text-native-green hover:underline">info@nativeinsgroup.com</a>
                </li>
                <li><span className="font-medium text-gray-800">Hours:</span> Monday–Friday, 9:00 AM–5:00 PM EST | Saturday by Appointment</li>
              </ul>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-native-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <img src="/001_NATIVE_INSURANCE_GROUP_Blossom.png" alt="Native Insurance Group" className="h-12 w-auto mb-4" />
              <p className="text-gray-300 text-sm">Protecting Florida families and businesses since 2004.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-3">Quick Links</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Our Process</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Why Us</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-3">Contact</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="tel:+19045349878" className="hover:text-white transition-colors">(904) 534-9878</a></li>
                <li><a href="mailto:info@nativeinsgroup.com" className="hover:text-white transition-colors">info@nativeinsgroup.com</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-3">Legal</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link to="/privacy-policy" className="text-native-mint transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Native Insurance Group. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm">Licensed Independent Insurance Agency</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ─── Reusable sub-components ─────────────────────────── */

const Section = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="text-xl font-semibold text-gray-900 mb-5 flex items-center gap-3">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-native-mint-light text-native-green font-bold text-sm flex-shrink-0">
        {number}
      </span>
      {title}
    </h2>
    <div className="pl-11 space-y-4">{children}</div>
    <div className="mt-10 border-b border-gray-100" />
  </div>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-semibold text-gray-800 mt-2">{children}</h3>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="list-none space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-native-gray text-base">
        <span className="mt-1.5 w-2 h-2 rounded-full bg-native-green flex-shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

const DefinitionList = ({ items }: { items: { term: string; def: string; link?: { href: string; label: string } }[] }) => (
  <dl className="space-y-3">
    {items.map((item, i) => (
      <div key={i} className="flex flex-col sm:flex-row gap-1">
        <dt className="font-semibold text-gray-800 text-base whitespace-nowrap">{item.term} —</dt>
        <dd className="text-native-gray text-base leading-relaxed">
          {item.def}
          {item.link && (
            <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="text-native-green hover:underline ml-1">
              {item.link.label}
            </a>
          )}
        </dd>
      </div>
    ))}
  </dl>
);