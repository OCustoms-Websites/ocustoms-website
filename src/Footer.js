import logo from './images/gdln_desktop.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="pt-24 bg-blue-700">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between pb-24">
                    <div className="flex ml-16 text-3xl text-white font-bold items-center">
                        Empower Your Browsing Today with Gondolin.
                    </div>
                    <Link to="/download" className="flex text-blue-700 bg-white py-4 px-6 rounded-lg text-l mr-24 font-semibold items-center">
                        Try it Now
                    </Link>
                </div>
                <div className="bg-white p-6">
                    <div className='flex justify-between'>
                        <div className='flex flex-row items-center'>
                            <img alt="" src={logo} className='w-20 h-auto'/>
                            <div className='flex font-semibold items-center ml-1 text-blue-700'>Gondolin</div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='font-black text-blue-700'>
                                Support
                            </div>
                            <div className='font-medium text-blue-700 mt-2'>
                                Sahith Thumma
                            </div>
                            <div className='text-blue-700'>
                                sahith.thumma@gmail.com
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )

}

export default Footer