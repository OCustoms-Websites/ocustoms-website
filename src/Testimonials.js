import React from 'react';

const Testimonials = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex flex-col items-center p-10 bg-white">
            <div className="text-3xl font-bold text-center">
                What agents say
            </div>
            <div className="flex flex-col mt-8 gap-8">
                <div className="text-center max-w-md">"My site finally turns inquiries into bookings." — Jane M., Independent Travel Advisor</div>
                <div className="text-center max-w-md">"Set-up was fast and the team handles updates." — Marco R., Luxury Specialist</div>
                <div className="text-center max-w-md">"Clients love my gallery pages." — Priya S., Group Travel</div>
            </div>
        </div>
    )
})

export default Testimonials
