import React from 'react';

const Footer = () => {
    return (
        <div className="pt-24 bg-blue-700">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between pb-24">
                    <div className="flex ml-16 text-3xl text-white font-bold items-center">
                        Build your travel portfolio website with ocustoms.
                    </div>
                    <div onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})} className="flex text-blue-700 bg-white py-4 px-6 rounded-lg text-l mr-24 font-semibold items-center cursor-pointer">
                        Get a Demo
                    </div>
                </div>
                <div className="bg-white p-6">
                    <div className='flex justify-between'>
                        <div className='flex flex-row items-center'>
                            <img alt="ocustoms" src="/logo-ocustoms.svg" className='w-20 h-auto'/>
                            <div className='flex font-semibold items-center ml-1 text-blue-700'>ocustoms digital solutions</div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='font-black text-blue-700'>
                                Contact
                            </div>
                            <div className='text-blue-700 mt-2'>
                                hello@ocustoms.co {/* TODO: replace with business email */}
                            </div>
                        </div>

                    </div>
                    <div className='text-center text-xs mt-4'>
                        © {new Date().getFullYear()} ocustoms digital solutions. All rights reserved.
                    </div>
                </div>

            </div>

        </div>
    )

}

export default Footer
