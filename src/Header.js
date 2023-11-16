import logo from './images/gdln_desktop.png'

const Header = ( {FeaturesRef, HowItWorksCardRef, PricingRef} ) => {
    const scrollToFeatures = () => {
      FeaturesRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToHowItWorks = () => {
      HowItWorksCardRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToPricing = () => {
      PricingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-row justify-between items-center bg-slate-200 py-2">
          <div className='flex flex-row items-center ml-6'>
            <img alt="" src={logo} className='ml-4 w-20 h-auto'/>
          </div>
          <div className='flex flex-row items-center gap-12'>
            <div className='font-semibold text-lg cursor-pointer' onClick={scrollToFeatures}>
              Features
            </div>
            <div className='font-semibold text-lg cursor-pointer' onClick={scrollToHowItWorks}>
              How It Works
            </div>
            <div className='font-semibold text-lg cursor-pointer' onClick={scrollToPricing}>
              Pricing
            </div>
            <a href="https://gondolin-app.s3.us-east-2.amazonaws.com/Gondolin-1.0.4-arm64.dmg" download="Gondolin.dmg" className="py-3 px-6 mr-4 font-semibold rounded-lg bg-blue-700 text-white">
              Download
            </a>
          </div>
        </div>
    );
}

export default Header