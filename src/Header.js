import React from 'react';

const Header = ( {HomeRef, HowItWorksRef, PricingRef, TestimonialsRef, ContactRef} ) => {
    const scrollTo = (ref) => {
      if (!ref?.current) return;
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-row justify-between items-center bg-white py-2">
          <div className='flex flex-row items-center ml-6'>
            <img alt="ocustoms" src="/logo-ocustoms.svg" className='ml-4 w-20 h-auto'/>
          </div>
          <div className='flex flex-row items-center gap-6 ml-16'>
            <div className='font-semibold text-lg cursor-pointer' onClick={() => scrollTo(HomeRef)}>
              Home
            </div>
            <div className='font-semibold text-lg cursor-pointer' onClick={() => scrollTo(HowItWorksRef)}>
              Why Us
            </div>
            <div className='font-semibold text-lg cursor-pointer' onClick={() => scrollTo(PricingRef)}>
              Pricing
            </div>
            <div className='font-semibold text-lg cursor-pointer' onClick={() => scrollTo(TestimonialsRef)}>
              Testimonials
            </div>
            
            <a href="https://calendly.com/ocustomsllc-info/30min" className='font-semibold text-lg cursor-pointer mr-6 bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-800'>
              Contact
            </a>
            
          </div>
        </div>
    );
}

export default Header