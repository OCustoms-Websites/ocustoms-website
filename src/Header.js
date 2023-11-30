import logo from './images/gdln_desktop.png'
import { Link } from 'react-router-dom';

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
          <div className='flex flex-row items-center gap-10 ml-10'>
            <div className='font-semibold text-lg cursor-pointer' onClick={scrollToFeatures}>
              Features
            </div>
            <div className='font-semibold text-lg cursor-pointer' onClick={scrollToHowItWorks}>
              How It Works
            </div>
            <div className='font-semibold text-lg cursor-pointer' onClick={scrollToPricing}>
              Pricing
            </div>
            <Link className="py-3 px-6 mr-4 font-semibold rounded-lg bg-blue-700 text-white" to="/download">
              Download
            </Link>
          </div>
        </div>
    );
}

export default Header