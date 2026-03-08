import { LanguageProvider } from './context/LanguageContext';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import SampleReport from './sections/SampleReport';
import Services from './sections/Services';
import Blog from './sections/Blog';
import Pricing from './sections/Pricing';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#f5f5f5]">
        <Navigation />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <SampleReport />
          <Services />
          <Blog />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
