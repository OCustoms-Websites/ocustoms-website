import Header from './Header';
import Home from './Home';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import Footer from './Footer';
import { useRef } from 'react';

const App = () => {
  const FeaturesRef = useRef(null);
  const HowItWorksCardRef = useRef(null);
  const PricingRef = useRef(null);

  return (
    <div className='bg-slate-200 font-[avenir] overflow-y-scroll min-h-screen'>
      <div className='fade-in'>
        <Header FeaturesRef={FeaturesRef} HowItWorksCardRef={HowItWorksCardRef} PricingRef={PricingRef}/>
        <Home />
        <Features ref={FeaturesRef}/>
        <HowItWorks ref={HowItWorksCardRef}/>
        <Pricing ref={PricingRef}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
