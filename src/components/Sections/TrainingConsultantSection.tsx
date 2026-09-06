
'use client';

import { ArrowUpRight } from 'lucide-react';

export default function TrainingConsultantSection() {
  const features = [
    {
      title: 'Expert-Led Learning',
      description:
        'Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.',
    },
    {
      title: 'Interactive Workshops',
      description:
        'Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.',
    },
    {
      title: 'Comprehensive Curriculum',
      description:
        'Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.',
    },
    {
      title: 'Global Recognition',
      description:
        'You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.',
    },
  ];

  return (
    <section className="sm:py-10 bg-[#571244]/15 pt-7">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 lg:space-y-12">
          
          {/* Header Content */}
          <div className="space-y-4">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#571244]">
              Training The Consultant
            </h2>

            {/* Subheading */}
            <p className="text-lg sm:text-xl font-semibold text-[#571244]">
              Maximise Your Potential as a Certified Trainer:
            </p>

            {/* Description */}
            <p className="text-gray-700 text-base sm:text-base leading-relaxed">
              With the help of our Training Consultants program, take a revolutionary step toward becoming a 
              distinguished certified training consultant. Learn from professionals in the field, immerse yourself 
              in a thorough curriculum, and hone your training methods through interactive workshops. Participating 
              in our program will enable you to gain expertise in diverse courses while also developing the abilities 
              to mentor and encourage others in their career advancement.
            </p>
          </div>

          {/* Features Grid - 2x2 in dark purple box */}
          <div className="bg-[#571244] rounded-2xl p-8 sm:p-10 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  {/* Feature Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-gray-100 text-base sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Learn More Button */}
          <div>
            <button className="inline-flex items-center space-x-2 px-6 py-3 
              bg-[#571244] hover:bg-[#883370] text-white font-semibold rounded-lg
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
              transform hover:translate-x-1">
              <span>Learn More</span>
            <ArrowUpRight size={20} strokeWidth={2}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}