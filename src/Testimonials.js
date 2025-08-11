import React from 'react';

const Testimonials = React.forwardRef((props, ref) => {
    const testimonials = [
        {
            quote: 'My site finally turns inquiries into bookings.',
            author: 'Jane M., Independent Travel Advisor',
        },
        {
            quote: 'Set-up was fast and the team handles updates.',
            author: 'Marco R., Luxury Specialist',
        },
        {
            quote: 'Clients love my gallery pages.',
            author: 'Priya S., Group Travel',
        },
    ];

    const [activeIndex, setActiveIndex] = React.useState(0);
    const intervalRef = React.useRef(null);

    const startAutoAdvance = React.useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);
    }, [testimonials.length]);

    React.useEffect(() => {
        startAutoAdvance();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startAutoAdvance]);

    const goPrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        startAutoAdvance();
    };

    const goNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        startAutoAdvance();
    };

    return (
        <div ref={ref} className="flex flex-col items-center p-10 bg-white">
            <div className="text-3xl font-bold text-center">
                What agents say
            </div>

            <div className="relative w-full max-w-xl mt-8 overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="w-full flex-shrink-0 px-4">
                            <div className="bg-slate-100 rounded-lg shadow p-6 text-center">
                                <div className="italic">“{t.quote}”</div>
                                <div className="mt-3 font-semibold text-blue-700">{t.author}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={goPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow focus:outline-none"
                >
                    <span className="text-blue-700 text-xl leading-none">‹</span>
                </button>
                <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={goNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow focus:outline-none"
                >
                    <span className="text-blue-700 text-xl leading-none">›</span>
                </button>
            </div>

            <div className="flex gap-2 mt-4">
                {testimonials.map((_, idx) => (
                    <span
                        key={idx}
                        className={`h-2 w-2 rounded-full ${idx === activeIndex ? 'bg-blue-700' : 'bg-slate-300'}`}
                    />
                ))}
            </div>
        </div>
    );
});

export default Testimonials;
