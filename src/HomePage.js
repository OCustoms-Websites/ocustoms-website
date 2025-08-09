import Header from './Header';
import Home from './Home';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Templates from './Templates';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import { useRef } from 'react';

const HomePage = () => {
  const HomeRef = useRef(null);
  const FeaturesRef = useRef(null);
  const TemplatesRef = useRef(null);
  const PricingRef = useRef(null);
  const FAQRef = useRef(null);
  const ContactRef = useRef(null);

  return (
    <div className='bg-slate-200 font-[avenir] overflow-y-scroll min-h-screen overflow-x-hidden'>
      <div className='fade-in'>
        <Header HomeRef={HomeRef} FeaturesRef={FeaturesRef} PricingRef={PricingRef} TemplatesRef={TemplatesRef} FAQRef={FAQRef} ContactRef={ContactRef}/>
        <div ref={HomeRef}><Home /></div>
        <HowItWorks />
        <Features ref={FeaturesRef}/>
        <Templates ref={TemplatesRef}/>
        <Pricing ref={PricingRef}/>
        <Testimonials />
        <FAQ ref={FAQRef}/>
        <Contact ref={ContactRef}/>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
