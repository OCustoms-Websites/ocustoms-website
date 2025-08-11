import Header from './Header';
import Home from './Home';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import { useRef } from 'react';

const HomePage = () => {
  const HomeRef = useRef(null);
  const HowItWorksRef = useRef(null);
  const PricingRef = useRef(null);
  const TestimonialsRef = useRef(null);
  const ContactRef = useRef(null);

  return (
    <div className='bg-white font-[avenir] overflow-y-scroll min-h-screen overflow-x-hidden'>
      <div>
        <Header HomeRef={HomeRef} HowItWorksRef={HowItWorksRef} PricingRef={PricingRef} TestimonialsRef={TestimonialsRef} ContactRef={ContactRef}/>
        <div ref={HomeRef}><Home /></div>
        <HowItWorks ref={HowItWorksRef} />
        <Pricing ref={PricingRef}/>
        <Testimonials ref={TestimonialsRef} />
        {/* <Contact ref={ContactRef}/> */}
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
