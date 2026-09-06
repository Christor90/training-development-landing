
import Image from 'next/image';
import { Zap } from 'lucide-react';

interface BenefitItem {
  label: string;
}

interface ManagementDevelopmentData {
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  benefits: BenefitItem[];
}

const managementDevelopmentData: ManagementDevelopmentData = {
  title: 'Management Development Program',
  description: [
    'Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high-performing leaders they need to thrive.',
    'Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.',
  ],
  imageSrc: '/mngdev.jpg',
  imageAlt: 'Management Development Program',
  benefits: [
    { label: 'Enhanced Leadership Skills' },
    { label: 'Improved Employee Engagement' },
    { label: 'Stronger Organisational Culture' },
    { label: 'Sustainable Growth' },
  ],
};

export default function ManagementDevelopmentSection() {
  return (
    <section className="py-10 bg-[#571244] rounded-3xl mx-4 sm:mx-6 lg:mx-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Image - Left */}
          <div className="flex justify-center md:justify-start order-1 md:order-1">
            <div className="relative w-[900px] h-[900px] sm:w-96 sm:h-96 md:w-[600px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={managementDevelopmentData.imageSrc}
                alt={managementDevelopmentData.imageAlt}
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Content - Right */}
          <div className="order-2 md:order-2">
            <div className="space-y-6">
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white">
                {managementDevelopmentData.title}
              </h2>

              {/* Description Paragraphs */}
              <div className="space-y-4">
                {managementDevelopmentData.description.map((para, index) => (
                  <p
                    key={index}
                    className="text-gray-100 text-base sm:text-lg leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Benefits - Colored Boxes with Lightning Icons */}
              <div className="space-y-3 sm:space-y-4 pt-4">
                {managementDevelopmentData.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-[#8F6182] hover:bg-[#884274] 
                      px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-colors duration-200"
                  >
                    <Zap
                      size={22}
                      className="text-white flex-shrink-0"
                      fill="white"
                      strokeWidth={2.5}
                    />
                    <span className="text-white font-semibold text-base sm:text-base">
                      {benefit.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}