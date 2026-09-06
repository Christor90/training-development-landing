
'use client';

import {  useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  image: string;
  name: string;
  role: string;
  text: string;
  bgColor: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      image: '/testimonial-1.jpg',
      name: 'Aisha Yusuf',
      role: 'Founder, CraftHub NG',
      text: 'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!',
      bgColor: 'bg-yellow-400',
    },
    {
      id: 2,
      image: '/testimonial-2.jpg',
      name: 'John Davies',
      role: 'Marketing Manager, E-Commerce Emporium',
      text: 'Tobams Group\'s Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!',
      bgColor: 'bg-gray-400',
    },
    {
      id: 3,
      image: '/testimonial-3.jpg',
      name: 'Chinonso Nwankwo',
      role: 'HR Director, FutureTech Solutions',
      text: 'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.',
      bgColor: 'bg-yellow-400',
    },
    {
      id: 4,
      image: '/testimonial-4.jpg',
      name: 'Thandi Mthembu',
      role: 'CEO, Innovation Leaders',
      text: 'The business consulting services provided by Tobams Group have transformed our operations. Strategic, insightful, and results-driven. Highly recommend to any growing organization.',
      bgColor: 'bg-pink-300',
    },
    {
      id: 5,
      image: '/testimonial-5.jpg',
      name: 'Priya Sharma',
      role: 'Operations Manager, TechStart Inc',
      text: 'Exceptional service and attention to detail. Tobams Group understood our needs and delivered beyond expectations. A true partner in our growth journey.',
      bgColor: 'bg-orange-400',
    },
    {
      id: 6,
      image: '/testimonial-6.jpg',
      name: 'Amara Okonkwo',
      role: 'Startup Founder, Digital Hub Africa',
      text: 'Outstanding training and development programs. The facilitators are knowledgeable, engaging, and truly invested in your success. Highly transformative experience.',
      bgColor: 'bg-yellow-400',
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="sm:py-10 pt-7 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-4xl md:text-4xl font-bold text-gray-900">
            Testimonials
          </h2>
        </div>

        {/* Horizontal Carousel Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full sm:w-96 bg-white rounded-lg border-l-4 border-rose-400 p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Client Info */}
                <div className="flex items-center space-x-4 mb-6">
                  {/* Avatar with Colored Background */}
                  <div className={`relative w-10 h-10 flex-shrink-0 rounded-full ${testimonial.bgColor} flex items-center justify-center overflow-hidden`}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      quality={100}
                    />
                  </div>

                  {/* Name and Role */}
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-[13px] text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Bottom Right */}
          <div className="flex justify-end items-center space-x-3 mt-8">
            <button
              onClick={() => scroll('left')}
              className="p-1 rounded-md bg-pink-100 text-rose-400 hover:bg-rose-200 
                transition-all duration-200 transform hover:scale-110
                "
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>

            <button
              onClick={() => scroll('right')}
              className="p-1 rounded-md bg-pink-100 text-rose-400 hover:bg-rose-200 
                transition-all duration-200 transform hover:scale-110
                "
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}