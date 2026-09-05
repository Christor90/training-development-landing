

import Image from 'next/image';
import {  ArrowUpRight } from 'lucide-react';

export default function LearningManagementSection() {
  const courses = [
    { name: 'Business Analysis' },
    { name: 'Design Thinking' },
    { name: 'Effective Communication' },
    { name: 'Entrepreneurship' },
    { name: 'Career Development' },
    { name: 'Business Model' },
  ];

  return (
    <>

      {/* Learning Management Section */}
      <section className=" bg-pink-50 mt-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">

           {/* Left: Circular Image */}
            <div className="flex justify-center md:justify-start">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-lg">
            <Image
                src="/learningMng.jpg"
                alt="TG Academy Learning Management System"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </div>

            {/* Right: Content */}
            <div className="flex flex-col space-y-4">
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#571244]">
                Learning Management System
              </h2>

              {/* Description with Light Pink Background */}
              <div className="bg-[#571244]/10 rounded-lg p-6 sm:p-8">
                <p className="text-gray-700 text-base sm:text-base leading-relaxed pb-4">
                  TG Academy is a hub of knowledge and skill-building resources designed to 
                  empower tech talents on their learning journey. From technical courses 
                  covering the latest programming languages and development frameworks to 
                  soft skills training in leadership, effective communication and project 
                  management, TG Academy offers a wide range of courses to cater to diverse 
                  learning needs. With accessible and interactive learning materials, individuals 
                  can enhance their skills and stay ahead in today's competitive tech landscape.
                </p>

              {/* Courses Subheading */}
              <p className="text-[#571244] font-semibold text-lg pb-4">
                Some of our courses include:
              </p>
              {/* Courses Grid - Two rows, three columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-3 text-base">
                    <span className="w-2 h-2 bg-[#571244] rounded-full flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{course.name}</span>
                  </div>
                ))}
              </div>
              </div>


              {/* Learn More Button */}
              <div className="">
                <button className="inline-flex items-center space-x-2 px-6 py-3 
                 bg-[#571244] hover:bg-purple-800 text-white font-semibold rounded-lg
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
                  transform hover:translate-x-1">
                  <span>Learn More</span>
                    <ArrowUpRight size={20} strokeWidth={2}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}