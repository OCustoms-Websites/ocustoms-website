import React from 'react';

const Header = ( {HomeRef, FeaturesRef, PricingRef, TemplatesRef, FAQRef, ContactRef} ) => {
    const scrollTo = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-row justify-between items-center bg-slate-200 py-2">
          <div className='flex flex-row items-center ml-6'>
            <img alt="ocustoms" src="/logo-ocustoms.svg" className='ml-4 w-20 h-auto'/>
          </div>
          <div className='flex flex-row items-center gap-6 ml-10'>
            <div className='font-semibold text-lg cursor-pointer' onClick={() => scrollTo(HomeRef)}>
              Home
            </div>
            <div className='font-semibold text-lg cursor-pointer' onClick={() => scrollTo(FeaturesRef)}>
              Features
            </div>
            <div className='font-semibold text-lg cursor-pointer' onClick={() => scrollTo(PricingRef)}>
              Pricing
            </div>
            <div className='font-semibold text-lg cursor-pointer' onClick={() => scrollTo(TemplatesRef)}>
              Templates
            </div>
            <div className='font-semibold text-lg cursor-pointer' onClick={() => scrollTo(FAQRef)}>
              FAQ
            </div>
            <div className='font-semibold text-lg cursor-pointer' onClick={() => scrollTo(ContactRef)}>
              Contact
            </div>
            <div className='flex flex-row items-center gap-2 ml-4'>
              <div className="py-3 px-6 font-semibold rounded-lg bg-blue-700 text-white cursor-pointer" onClick={() => scrollTo(ContactRef)}>
                Get a Demo
              </div>
              <div className="py-3 px-6 font-semibold rounded-lg border border-blue-700 text-blue-700 cursor-pointer" onClick={() => scrollTo(TemplatesRef)}>
                See Templates
              </div>
            </div>
          </div>
        </div>
    );
}

export default Header