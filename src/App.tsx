import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Process } from './components/sections/Process';
import { Services } from './components/sections/Services';
import { WhyNative } from './components/sections/WhyNative';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Process />
      <Services />
      <WhyNative />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
